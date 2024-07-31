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
        <TabList className={"my-[25px] flex w-full gap-2"}>
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

function TabPage({
  head,
  body,
}: {
  head?: React.ReactNode;
  body: React.ReactNode;
}) {
  return (
    <TabPanel className={"flex grow flex-col"}>
      {head}
      <div className="relative flex grow">
        <div className="absolute inset-0 overflow-y-scroll">{body}</div>
      </div>
    </TabPanel>
  );
}
