"use client";
import StreamList from "@/components/streams/list";
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import FavList from "@/components/favorites/list";
import LeaderList from "@/components/leaderbord/list";
import Countdown from "@/components/leaderbord/countdown";
import Stats from "@/components/leaderbord/stats";
import Search from "@/components/tabs/search";
import { useState } from "react";
import TabButton from "./button";

export default function TabNavigation() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="flex flex-col">
      {tabIndex === 2 ? null : <Search />}
      <TabGroup onChange={setTabIndex}>
        <TabList
          className={"my-[25px] inline-flex items-start justify-start gap-2"}
        >
          <TabButton title="All Streams" emoji="😺" />

          <TabButton title="Your Favorites" emoji="❤️" />

          <TabButton title="See Leaderboard" emoji="🏆" />
        </TabList>
        <TabPanels>
          <TabPanel>
            <StreamList />
          </TabPanel>
          <TabPanel>
            <FavList />
          </TabPanel>
          <TabPanel>
            <Countdown />
            <Stats />
            <LeaderList />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
