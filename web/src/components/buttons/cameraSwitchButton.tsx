import { useStreamStore } from "@/stores/streamStore";
import clsx from "clsx";
import Image from "next/image";
import CameraIcon from "#/images/icons/camera.svg";
import CameraIconWhite from "#/images/icons/camera-white.svg";
import useClickAnimation from "@/hooks/useClickAnimation";
import ThemedButton from "./themedButton";

export default function CameraSwithButton() {
  const toggleNextCamera = useStreamStore((state) => state.toggleNextCamera);
  const selectedStream = useStreamStore((state) => state.selectedStream);
  const { startAnimation, animationStyles } = useClickAnimation();

  const handleToggleNext = () => {
    startAnimation();
    toggleNextCamera();
  };

  return (
    <ThemedButton handler={handleToggleNext}>
      <div className={clsx(animationStyles, "relative flex items-center")}>
        <Image
          className="hidden md:block"
          src={CameraIcon}
          alt="Change camera angle"
        />
        <Image
          className="md:hidden"
          src={CameraIconWhite}
          alt="Change camera angle"
        />
      </div>
      <div className="text-sm font-bold capitalize text-white md:text-black">
        {selectedStream.cameraType}
      </div>
    </ThemedButton>
  );
}
