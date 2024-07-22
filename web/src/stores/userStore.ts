import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserStore {
  favs: string[];
  favStream: (streamHash: string) => void;
  unfavStream: (streamHash: string) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      favs: [],
      favStream: (streamHash: string) =>
        set(({ favs }) => ({
          favs: [...favs, streamHash],
        })),
      unfavStream: (streamHash: string) =>
        set(({ favs }) => ({
          favs: favs.filter((fav) => fav !== streamHash),
        })),
    }),
    {
      name: "user-storage",
    },
  ),
);
