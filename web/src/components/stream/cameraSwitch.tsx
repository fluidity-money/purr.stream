import { useStreamStore } from "@/stores/streamStore";
import { streamCameras } from "@/streams";
import clsx from "clsx";

function CameraSwithButton({
  camera,
}: {
  camera: (typeof streamCameras)[number];
}) {
  const selectCamera = useStreamStore((state) => state.selectCamera);
  const selectedCamera = useStreamStore((state) => state.selectedStream);
  const handleSelect = () => selectCamera(camera);

  return (
    <li
      onClick={handleSelect}
      className={clsx(
        selectedCamera.cameraType === camera && "underline",
        "cursor-pointer",
      )}
    >
      {camera}
    </li>
  );
}

export default function CameraSwitch() {
  return (
    <ul>
      {streamCameras.map((camera) => (
        <CameraSwithButton key={`camera_${camera}`} camera={camera} />
      ))}
    </ul>
  );
}
