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
    <div className="inline-flex h-[570px] w-[628px] items-start justify-start gap-[38px] rounded-2xl">
      <DisclaimerMenu index={index} setIndex={setIndex} />
      <div className="h-full overflow-y-scroll" key={index}>
        {sections[index]}
      </div>
    </div>
  );
}
