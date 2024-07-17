"use client";

import { useStreamStore } from "@/stores/streamStore";
export default function StreamPlayer() {
  const selectedStream = useStreamStore((state) => state.selectedStream);

  return (
    <video
      data-test="video-player"
      id="videoPlayer"
      width="640"
      height="360"
      controls
      autoPlay
    >
      <source
        src={selectedStream.cameraStreamUrl}
        type="application/x-mpegURL"
      />
      Your browser does not support the video tag.
    </video>
  );
}
