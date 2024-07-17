import { streams, streamCameras } from "@/streams";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CameraType = (typeof streamCameras)[number];
interface StreamStore {
  selectedStream: {
    hash: string;
    cameraStreamUrl: string;
    cameraType: CameraType;
    name: string;
  };
  selectStream: (streamHash: string) => void;
  selectCamera: (streamCamera: CameraType) => void;
}

export const useStreamStore = create<StreamStore>()(
  persist(
    (set) => ({
      selectedStream: {
        cameraStreamUrl: streams[0].front,
        cameraType: "front",
        hash: streams[0].hash,
        name: streams[0].name,
      },
      selectStream: (streamHash: string) =>
        set({
          selectedStream: {
            hash: streamHash,
            // we assert not null because not possible to get undefined value
            cameraStreamUrl: streams.find((item) => item.hash === streamHash)!
              .front,
            cameraType: "front",
            name: streams.find((item) => item.hash === streamHash)!.name,
          },
        }),
      selectCamera: (streamCamera: CameraType) =>
        set((state) => ({
          selectedStream: {
            ...state.selectedStream,
            cameraType: streamCamera,
            cameraStreamUrl: streams.find(
              (item) => item.hash === state.selectedStream.hash,
            )![streamCamera],
          },
        })),
    }),
    {
      name: "stream-storage",
    },
  ),
);
