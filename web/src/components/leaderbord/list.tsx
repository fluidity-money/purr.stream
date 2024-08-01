import Loader from "../loader";
import LeaderItem, { LeaderItemType } from "./item";
import { useQuery } from "@tanstack/react-query";

export default function LeaderList() {
  const {
    data: leaders,
    isLoading,
    isError,
  } = useQuery<LeaderItemType[]>({
    queryKey: ["leaderboard"],
  });
  const placeholderStyle =
    "flex h-20 items-center justify-center text-base font-bold text-[#8e8e8e]";
  if (isLoading)
    return (
      <div className={placeholderStyle}>
        <Loader />
      </div>
    );
  if (isError)
    return <div className={placeholderStyle}>{"Something Went Wrong :("}</div>;

  return (
    <ul>
      {leaders?.map((stream, idx) => (
        <LeaderItem rank={idx + 1} data={stream} key={stream.hash} />
      ))}
    </ul>
  );
}
