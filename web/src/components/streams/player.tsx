"use client";

import { useStreamStore } from "@/stores/streamStore";
import { useEffect, useRef } from "react";
import Hls from "hls.js";

import Bowser from "bowser";
import clsx from "clsx";
import StreamControls from "./controls";

export default function StreamPlayer() {
  const selectedStream = useStreamStore((state) => state.selectedStream);
  const videoRef = useRef<HTMLVideoElement>(null);
  const browser = Bowser.getParser(window.navigator.userAgent);
  const isValidBrowser = browser.satisfies({
    chrome: ">=0",
    safari: ">=0",
    opera: ">=0",
  });
  const placeholderStyle =
    "flex items-center justify-center p-6 text-center text-sm text-neutral-500";
  useEffect(() => {
    if (!isValidBrowser) return;
    const src = selectedStream.cameraStreamUrl;
    const { current: video } = videoRef;
    if (!video) return;

    let hls: Hls | null;
    // Cat streams this mimeType
    const mimeType = 'application/vnd.apple.mpegurl;codecs="hev1"';
    if (video.canPlayType(mimeType)) {
      video.src = src;
    } else if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
    }

    return () => hls?.destroy();
  }, [selectedStream.cameraStreamUrl, isValidBrowser]);

  return isValidBrowser ? (
    <>
      <video
        ref={videoRef}
        data-test="video-player"
        autoPlay
        playsInline
        loop
        muted
        className="relative z-[2] aspect-video rounded-lg object-cover"
      />
      <p className={clsx("absolute inset-0 z-[1]", placeholderStyle)}>
        Turning on the cat camera...
      </p>
      <div className="absolute bottom-2 left-2 z-[3] hidden md:flex">
        <StreamControls />
      </div>
    </>
  ) : (
    <p className={clsx("size-full", placeholderStyle)}>
      This browser is not supported yet. <br /> Please use a different browser
      such as Chrome, Safari, or Opera.
    </p>
  );
}
