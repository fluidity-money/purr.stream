"use client";

import { useStreamStore } from "@/stores/streamStore";
import CameraSwitch from "./cameraSwitch";

export default function StreamDetail() {
  const selectedStream = useStreamStore((state) => state.selectedStream);
  return (
    <div data-test="stream-info">
      {selectedStream.name}
      <CameraSwitch />
    </div>
  );
}
