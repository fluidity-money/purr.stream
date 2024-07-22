import { Tab } from "@headlessui/react";

export default function TabButton({
  title,
  emoji,
}: {
  title: string;
  emoji: string;
}) {
  return (
    <Tab className="inline-flex h-7 items-center justify-start gap-1 text-nowrap rounded-[23px] border border-neutral-100 px-2.5 py-1.5 text-neutral-100 data-[selected]:bg-neutral-100 data-[selected]:text-stone-950">
      <div className="text-xs font-medium">{emoji}</div>
      <div className="text-xs font-bold">{title}</div>
    </Tab>
  );
}
