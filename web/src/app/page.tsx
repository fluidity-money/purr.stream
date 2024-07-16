import StreamDetail from "@/components/stream/detail";
import StreamList from "@/components/stream/list";
import StreamPlayer from "@/components/stream/player";

export default function Home() {
  return (
    <section data-test="home-page" className="flex flex-row">
      <StreamList />
      <div className="flex flex-col">
        <StreamPlayer />
        <StreamDetail />
      </div>
    </section>
  );
}
