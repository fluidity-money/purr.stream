import TabNavigation from "@/components/tabNavigation";
import StreamDetail from "@/components/streams/detail";
import StreamPlayer from "@/components/streams/player";

export default function Home() {
  return (
    <section data-test="home-page" className="flex flex-row gap-[25px]">
      <TabNavigation />
      <div className="flex flex-col">
        <StreamPlayer />
        <StreamDetail />
      </div>
    </section>
  );
}
