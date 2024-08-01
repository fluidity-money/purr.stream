import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { streams } from "@/streams";
import { readContract } from "thirdweb";
import { toEther } from "thirdweb/utils";
import { config } from "@/config";

async function getLeaderboard() {
  const results = await Promise.all(
    streams.map(async (stream) => {
      const score =
        (await readContract({
          contract: config.contracts.donation.contract,
          method: config.contracts.donation.abi[0].name,
          params: [`0x${stream.hash}`],
        })) ?? BigInt(0);

      return { ...stream, score: Number(toEther(score)) };
    }),
  );

  return results.sort((a, b) => b.score - a.score);
}

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => {
    // eslint-disable-next-line @tanstack/query/stable-query-client
    const client = new QueryClient();
    // We can set some defaults here
    client.setQueryDefaults(["leaderboard"], {
      queryFn: () => getLeaderboard(),
    });
    return client;
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
