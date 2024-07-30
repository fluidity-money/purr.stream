import { config } from "@/config";

export default function Search() {
  if (!config.features.search) return null;
  return (
    <input
      type="text"
      placeholder="Search cat/country/organisation"
      className="w-full border-b border-neutral-700 bg-transparent px-[15px] py-[10px] text-sm font-medium tracking-tight text-neutral-400"
    />
  );
}
