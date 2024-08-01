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
async function getWalletsCount() {
  const results = await Promise.all(
    streams.map(async (stream) => {
      const wallets =
        (await readContract({
          contract: config.contracts.donation.contract,
          method: config.contracts.donation.abi[5].name,
          params: [`0x${stream.hash}`],
        })) ?? "0";

      return { ...stream, wallets: Number(wallets) };
    }),
  );

  return results.sort((a, b) => b.wallets - a.wallets);
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
    client.setQueryDefaults(["walletsCount"], {
      queryFn: () => getWalletsCount(),
    });
    return client;
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
