import { streams, streamCameras } from "@/streams";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CameraType = (typeof streamCameras)[number];
export type SelectedStrem = Omit<
  (typeof streams)[number],
  "front" | "above" | "behind"
> & {
  cameraStreamUrl: string;
  cameraType: CameraType;
};

interface StreamStore {
  selectedStream: SelectedStrem;
  selectStream: (streamHash: string, cameraType?: CameraType) => void;
  toggleNextCamera: () => void;
}

export const useStreamStore = create<StreamStore>()(
  persist(
    (set) => ({
      selectedStream: {
        ...streams[0],
        cameraStreamUrl: streams[0].front,
        cameraType: streamCameras[0],
      },
      selectStream: (streamHash, cameraType) => {
        const currItem = streams.find((stream) => stream.hash === streamHash)!;
        set({
          selectedStream: {
            ...currItem,
            cameraStreamUrl: cameraType
              ? currItem[cameraType]
              : currItem[streamCameras[0]],
            cameraType: cameraType ?? streamCameras[0],
          },
        });
      },
      toggleNextCamera: () =>
        set((state) => {
          const currIdx = streamCameras.findIndex(
            (camera) => camera === state.selectedStream.cameraType,
          );
          const nextIdx = (currIdx + 1) % streamCameras.length;

          return {
            selectedStream: {
              ...state.selectedStream,
              cameraType: streamCameras[nextIdx],
              cameraStreamUrl: streams.find(
                (item) => item.hash === state.selectedStream.hash,
              )![streamCameras[nextIdx]],
            },
          };
        }),
    }),
    {
      name: "stream-storage",
    },
  ),
);
