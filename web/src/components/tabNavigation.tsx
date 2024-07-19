"use client";
import StreamList from "@/components/streams/list";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import FavList from "./favorites/list";
import LeaderList from "./leaderbord/list";
import Countdown from "./leaderbord/countdown";
import Stats from "./leaderbord/stats";
import Search from "./search";
import { useState } from "react";

export default function TabNavigation() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="flex flex-col">
      {tabIndex === 2 ? null : <Search />}
      <TabGroup onChange={setTabIndex}>
        <TabList
          className={"my-[25px] inline-flex items-start justify-start gap-2"}
        >
          <Tab>
            <div className="inline-flex h-7 w-[99px] items-center justify-start gap-1 rounded-[23px] bg-neutral-100 px-2.5 py-1.5">
              <div className="text-xs font-medium text-neutral-100">😺</div>
              <div className="text-xs font-bold text-stone-950">
                All Streams
              </div>
            </div>
          </Tab>
          <Tab>
            <div className="inline-flex h-7 w-[115px] items-center justify-start gap-1 text-nowrap rounded-[23px] border border-neutral-100 px-2.5 py-1.5">
              <div className="text-xs font-medium text-neutral-100">❤️</div>
              <div className="text-xs font-bold text-neutral-100">
                Your Favorites
              </div>
            </div>
          </Tab>
          <Tab>
            <div className="inline-flex h-7 w-[132px] items-center justify-start gap-1 text-nowrap rounded-[23px] border border-neutral-100 px-2.5 py-1.5">
              <div className="text-xs font-medium text-neutral-100">🏆</div>
              <div className="text-xs font-bold text-neutral-100">
                See Leaderboard
              </div>
            </div>
          </Tab>
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
