import { streams } from "@/streams";
export default function StreamPlayer() {
  return (
    <video
      data-test="video-player"
      id="videoPlayer"
      width="640"
      height="360"
      controls
      autoPlay
    >
      <source src={streams[1].behind} type="application/x-mpegURL" />
      Your browser does not support the video tag.
    </video>
  );
}
