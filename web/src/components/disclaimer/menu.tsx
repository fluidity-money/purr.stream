import clsx from "clsx";

const menu = ["About", "How it works", "Superposition"];
export default function DisclaimerMenu({
  index,
  setIndex,
}: {
  index: number;
  setIndex: React.Dispatch<number>;
}) {
  return (
    <ul className="flex flex-col gap-5">
      {menu.map((item, idx) => (
        <li
          className={clsx(
            idx === index && "underline",
            "cursor-pointer text-right text-sm font-bold text-neutral-100 underline-offset-4",
          )}
          key={"disc" + idx + item}
          onClick={() => setIndex(idx)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
