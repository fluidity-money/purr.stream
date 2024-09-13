import { useActiveAccount } from "thirdweb/react";
import { useEffect } from "react";

export default function WalletAddressInserter() {
  const account = useActiveAccount();

  useEffect(() => {
    if (account?.address) {
      window.localStorage.setItem("walletAddress", account.address);
    } else {
      window.localStorage.removeItem("walletAddress");
    }
  }, [account?.address]);

  return null;
}
