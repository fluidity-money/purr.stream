import Tabs from "@/components/tabs";
import StreamDetail from "@/components/streams/detail";
import dynamic from "next/dynamic";
const StreamPlayer = dynamic(() => import("@/components/streams/player"), {
  ssr: false,
});

export default function Home() {
  return (
    <section data-test="home-page" className="flex flex-row gap-[25px]">
      <Tabs />
      <div className="flex flex-col">
        <StreamPlayer />
        <StreamDetail />
      </div>
    </section>
  );
}
