import { streams } from "@/streams";

export default function StreamDetail() {
  return <div data-test="stream-info">{streams[0].name}</div>;
}
