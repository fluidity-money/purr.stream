import Tabs from "@/components/tabs";
import StreamDetail from "@/components/streams/detail";
import dynamic from "next/dynamic";
import DonationLevel from "@/components/donationLevel";
const StreamPlayer = dynamic(() => import("@/components/streams/player"), {
  ssr: false,
});

export default function Home() {
  return (
    <section data-test="home-page" className="flex grow flex-row gap-[25px]">
      <div className="flex flex-1 flex-col overflow-hidden">
        <Tabs />
      </div>
      <div className="flex flex-[2] flex-col">
        <div className="relative flex aspect-video rounded-lg bg-[#1E1E1E] object-cover">
          <StreamPlayer />
        </div>
        <StreamDetail />
        <DonationLevel />
      </div>
    </section>
  );
}
