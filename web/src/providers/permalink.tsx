import { useStreamStore } from "@/stores/streamStore";
import { streamCameras, streams } from "@/streams";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function PermalinkController() {
  const selectStream = useStreamStore((s) => s.selectStream);
  const searchParams = useSearchParams();
  const cat = searchParams.get("cat");
  const camera = searchParams.get("camera") as
    | (typeof streamCameras)[number]
    | null;
  const isCatValid = cat && streams.find((s) => s.hash === cat);
  const isCameraValid = camera && streamCameras.includes(camera);

  useEffect(() => {
    if (isCatValid && isCameraValid) {
      selectStream(cat, camera);
    }
  }, [cat, camera, selectStream, isCameraValid, isCatValid]);

  return null;
}
