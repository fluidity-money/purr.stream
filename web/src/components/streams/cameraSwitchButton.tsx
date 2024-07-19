import { useStreamStore } from "@/stores/streamStore";
import clsx from "clsx";
import Image from "next/image";
import CameraIcon from "#/images/icons/camera.svg";

export default function CameraSwithButton() {
  const toggleNextCamera = useStreamStore((state) => state.toggleNextCamera);
  const selectedStream = useStreamStore((state) => state.selectedStream);
  const handleToggleNext = () => toggleNextCamera();

  return (
    <div
      onClick={handleToggleNext}
      className="inline-flex h-[39px] w-[76px] cursor-pointer items-center justify-center gap-1 rounded-[10px] border-2 border-stone-950 bg-neutral-100 py-2.5 pl-[13px] pr-2.5 shadow"
    >
      <div className="relative h-2.5 w-3.5 origin-top-left">
        <div className="h-2.5 w-3.5">
          <Image src={CameraIcon} alt="Change camera angle" />
        </div>
      </div>
      <div className="text-sm font-bold capitalize text-black">
        {selectedStream.cameraType}
      </div>
    </div>
  );
}
