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

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong</div>;

  return (
    <ul>
      {leaders?.map((stream, idx) => (
        <LeaderItem rank={idx + 1} data={stream} key={stream.hash} />
      ))}
    </ul>
  );
}
