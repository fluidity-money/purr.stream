import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TabStore {
  curTabIdx: number;
  changeTab: (idx: number) => void;
}

export const useTabStore = create<TabStore>()(
  persist(
    (set) => ({
      curTabIdx: 0,
      changeTab: (idx: number) => set({ curTabIdx: idx }),
    }),
    {
      name: "tab-storage",
    },
  ),
);
