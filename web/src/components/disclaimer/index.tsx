"use client";
import DisclaimerMenu from "./menu";
import DisclaimerAbout from "./about";
import DisclaimerHow from "./how";
import DisclaimerSuperposition from "./superposition";
const disclaimerIndexes = [0, 1, 2];
export type DisclaimerIndexes = (typeof disclaimerIndexes)[number];
export default function Disclaimer({
  index,
  setIndex,
}: {
  index: DisclaimerIndexes;
  setIndex: React.Dispatch<DisclaimerIndexes>;
}) {
  const sections = {
    0: <DisclaimerAbout />,
    1: <DisclaimerHow />,
    2: <DisclaimerSuperposition />,
  } as { [key: DisclaimerIndexes]: React.ReactNode };

  return (
    <div className="inline-flex w-auto items-start justify-start gap-4 rounded-2xl md:h-[570px] md:w-[628px] md:gap-[38px]">
      <DisclaimerMenu index={index} setIndex={setIndex} />
      <div className="h-full overflow-y-scroll" key={index}>
        {sections[index]}
      </div>
    </div>
  );
}
