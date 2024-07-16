"use client";
import { streams } from "@/streams";
export default function StreamItem({
  data,
}: {
  data: (typeof streams)[number];
}) {
  function handleClickItem() {
    // add select action
  }

  return <li onClick={handleClickItem}>{data.name}</li>;
}
