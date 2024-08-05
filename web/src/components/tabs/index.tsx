"use client";
import StreamList from "@/components/streams/list";
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import FavList from "@/components/favorites/list";
import LeaderList from "@/components/leaderbord/list";
import Countdown from "@/components/leaderbord/countdown";
import Stats from "@/components/leaderbord/stats";
import Search from "@/components/tabs/search";
import TabButton from "../buttons/tabButton";
import { useTabStore } from "@/stores/tabStore";
import useOnMouseEnterAnimation from "@/hooks/useMouseEnterAnimation";
import clsx from "clsx";

export default function TabNavigation() {
  const { changeTab, curTabIdx } = useTabStore();

  return (
    <>
      {curTabIdx === 2 ? null : <Search />}
      <TabGroup
        selectedIndex={curTabIdx}
        onChange={changeTab}
        className={"flex flex-1 flex-col"}
      >
        <TabList className="my-0 mb-4 flex w-full gap-2 overflow-x-scroll md:my-[25px] md:mb-0 md:overflow-auto">
          <TabButton title="All Streams" emoji="😺" />
          <TabButton title="Your Favorites" emoji="❤️" />
          <TabButton title="See Leaderboard" emoji="🏆" />
        </TabList>
        <TabPanels className="flex grow flex-col">
          <TabPage body={<StreamList />} />
          <TabPage body={<FavList />} />
          <TabPage
            head={
              <>
                <Countdown />
                <Stats />
              </>
            }
            body={<LeaderList />}
          />
        </TabPanels>
      </TabGroup>
    </>
  );
}

function ScrollMore({ styles }: { styles: string }) {
  return (
    <div
      className={clsx(
        styles,
        "absolute inset-x-2 bottom-2 z-10 hidden items-center md:flex",
      )}
    >
      <div className="mx-auto flex h-[19px] items-center justify-center gap-[13px] rounded-lg bg-black/50 p-4">
        <div className="flex h-[18px] w-[4px] flex-col items-end rounded-xl border border-[#d9d9d9]">
          <div className="h-2 w-[2px] rounded-xl bg-[#d9d9d9]" />
        </div>
        <div className="text-sm font-medium text-[#797979]">
          Scroll For More
        </div>
      </div>
    </div>
  );
}

function TabPage({
  head,
  body,
}: {
  head?: React.ReactNode;
  body: React.ReactNode;
}) {
  const { startAnimation, animationStyles } = useOnMouseEnterAnimation();
  return (
    <TabPanel className={"flex grow flex-col"}>
      {head}
      <div className="relative flex grow">
        <ScrollMore styles={animationStyles} />
        <div
          className="inset-0 md:absolute md:overflow-y-scroll"
          onMouseEnter={startAnimation}
        >
          {body}
        </div>
      </div>
    </TabPanel>
  );
}
