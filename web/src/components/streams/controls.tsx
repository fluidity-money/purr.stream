import CameraSwithButton from "@/components/buttons/cameraSwitchButton";
import FavButton from "@/components/buttons/favButton";
import CopyUrlButton from "@/components/buttons/copyUrlButton";

export default function StreamControls() {
  return (
    <div className="flex gap-1">
      <CameraSwithButton />
      <FavButton />
      <CopyUrlButton />
    </div>
  );
}
