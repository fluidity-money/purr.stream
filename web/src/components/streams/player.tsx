"use client";

import { useStreamStore } from "@/stores/streamStore";
import { useEffect, useRef } from "react";
import Hls from "hls.js";
import CameraSwithButton from "./cameraSwitchButton";
import FavButton from "../favorites/favButton";
import CopyUrlButton from "./copyUrlButton";
import { getParser } from "bowser";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";

export default function StreamPlayer() {
  const selectedStream = useStreamStore((state) => state.selectedStream);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ffmpegRef = useRef(new FFmpeg());

  useEffect(() => {
    const src = selectedStream.cameraStreamUrl;
    const { current: video } = videoRef;
    if (!video) return;

    const browser = getParser(window.navigator.userAgent);
    const isValidBrowser = browser.satisfies({
      chrome: ">=0",
      safari: ">=0",
      opera: ">=0",
    });

    // ffmpeg polyfill as wasm package
    const load = async () => {
      const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";
      // const baseURL = "http://localhost:3000/ffmpeg";
      const ffmpeg = ffmpegRef.current;
      ffmpeg.on("log", ({ message }) => {
        console.log(message);
      });
      // toBlobURL is used to bypass CORS issue, urls with the same
      // domain can be used directly.
      await ffmpeg.load({
        coreURL: await toBlobURL(
          `${baseURL}/ffmpeg-core.js`,
          "text/javascript",
        ),
        wasmURL: await toBlobURL(
          `${baseURL}/ffmpeg-core.wasm`,
          "application/wasm",
        ),
      });
    };

    // init transcoding from the source
    const transcode = async () => {
      const ffmpeg = ffmpegRef.current;
      // const res = await ffmpeg.writeFile(
      //   "input.ts",
      //   await fetchFile(selectedStream.cameraStreamUrl),
      // );

      // console.log("ASD", res);

      // await ffmpeg.exec([
      //   "-i",
      //   "http://streetcatpull.hellobike.com/live/4258783365322591678_0.m3u8", // Use M3U8 URL as input
      //   "-c:v",
      //   "libx264", // Video codec
      //   "-c:a",
      //   "aac", // Audio codec
      //   "-b:a",
      //   "128k", // Audio bitrate
      //   "-ac",
      //   "2", // Audio channels
      //   "-ar",
      //   "44100", // Audio sample rate
      //   "-movflags",
      //   "+faststart", // Optimize for web streaming
      //   "output.mp4", // Output file
      // ]);
      // const res = await ffmpeg.exec(["-protocols"]);
      // const res = await ffmpeg.exec([
      //   "-i",
      //   "https://streetcatpull.hellobike.com/live/4258783365322591678_0.m3u8",
      //   "-c",
      //   "copy",
      //   "output.mp4",
      // ]);

      // THIS direct  stream to mp4
      const res = await ffmpeg.exec([
        "-protocol_whitelist",
        "file,http,https,tcp,tls",
        "-i",
        "http://streetcatpull.hellobike.com/live/4258783365322591678_0.m3u8",
        // "http://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",

        "-c",
        "copy",
        "-bsf:a",
        "aac_adtstoasc",
        "output.mp4",
      ]);
      console.log("RESUL", res);
      // const data = (await ffmpeg.readFile("input.ts")) as any;
      // console.log(data);
      // video.src = URL.createObjectURL(
      //   new Blob([data.buffer], { type: "video/mp4" }),
      // );
    };

    const initFFMPEG = async () => {
      if (ffmpegRef.current.loaded) {
        await transcode();
      } else {
        await load().then(transcode);
      }
    };

    let hls: Hls | null;
    // Cat streams this mimeType
    const mimeType = 'application/vnd.apple.mpegurl;codecs="hev1"';
    if (video.canPlayType(mimeType)) {
      video.src = src;
    } else if (Hls.isSupported()) {
      if (!isValidBrowser) initFFMPEG();

      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
    }

    return () => hls?.destroy();
  }, [selectedStream.cameraStreamUrl]);

  return (
    <div className="relative h-[360px] w-[640px] rounded-lg bg-[#1E1E1E]">
      <video
        ref={videoRef}
        data-test="video-player"
        width="640"
        height="360"
        autoPlay
        playsInline
        loop
        muted
        className="rounded-lg"
      />
      <div className="absolute bottom-2 left-2 flex gap-1">
        <CameraSwithButton />
        <FavButton hash={selectedStream.hash} />
        <CopyUrlButton />
      </div>
    </div>
  );
}
