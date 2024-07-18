"use client";

import { useStreamStore } from "@/stores/streamStore";
import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function StreamPlayer() {
  const selectedStream = useStreamStore((state) => state.selectedStream);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const src = selectedStream.cameraStreamUrl;
    const { current: video } = videoRef;
    if (!video) return;

    let hls: Hls | null;
    // Cat streams this mimeType
    const mimeType = 'application/vnd.apple.mpegurl;codecs="hev1"';
    if (video.canPlayType(mimeType)) {
      video.src = src;
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
    }

    return () => hls?.destroy();
  }, [selectedStream.cameraStreamUrl]);

  return (
    <video
      ref={videoRef}
      data-test="video-player"
      width="640"
      height="360"
      controls
      autoPlay
      playsInline
      loop
      muted
    />
  );
}
