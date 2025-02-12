import { config } from "@/config";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Account } from "thirdweb/wallets";
import toast from "react-hot-toast";
import { prepareContractCall, sendTransaction, toUnits } from "thirdweb";
import { streams } from "@/streams";
import { sendGTMEvent } from "@next/third-parties/google";
interface UserStore {
  favs: string[];
  favStream: (streamHash: string) => void;
  unfavStream: (streamHash: string) => void;
  donationQueue: {
    donation: number;
    id: string;
    hash: string;
    status: "loading" | "error" | "success";
  }[];
  donationClicks: number;
  incrementDonationClicks: (catHash: string) => void;
  donationTimer?: NodeJS.Timeout;
}
export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      favs: [],
      favStream: (streamHash: string) =>
        set(({ favs }) => ({
          favs: [...favs, streamHash],
        })),
      unfavStream: (streamHash: string) =>
        set(({ favs }) => ({
          favs: favs.filter((fav) => fav !== streamHash),
        })),
      donationClicks: 0,
      donationTimer: undefined,
      donationQueue: [],
      incrementDonationClicks: async (catHash: string) => {
        set((state) => ({ donationClicks: state.donationClicks + 1 }));

        set((state) => {
          if (state.donationTimer) {
            clearTimeout(state.donationTimer);
          }

          const donationTimer = setTimeout(() => {
            set({ donationClicks: 0 });
            set({
              donationQueue: state.donationQueue.concat({
                id: crypto.randomUUID(),
                donation: state.donationClicks,
                status: "loading",
                hash: catHash,
              }),
            });
          }, config.features.web3.donation.debounceTime);

          return { donationTimer };
        });
      },
    }),
    {
      name: "user-storage",
    },
  ),
);

function handleErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  if (
    error instanceof Object &&
    typeof error === "object" &&
    Object.hasOwn(error, "message")
  ) {
    const errorMessage = (error as { message: string }).message;

    if (errorMessage.includes("insufficient funds")) {
      return "Insufficient funds, add ETH";
    } else if (errorMessage) {
      return errorMessage;
    } else {
      return "Unknown error";
    }
  }

  return "Unknown error";
}
function updateDonationStatus(
  id: string,
  status: "success" | "error",
  error?: unknown,
) {
  useUserStore.setState((state) => ({
    donationQueue: state.donationQueue.map((item) =>
      item.id === id
        ? {
            ...item,
            status,
          }
        : item,
    ),
  }));
  if (status === "success") {
    toast.success("Donation successful!");
  } else {
    console.error(error);
    toast.error(handleErrorMessage(error));
  }
}
function removeDonation(id: string) {
  useUserStore.setState((state) => ({
    donationQueue: state.donationQueue.filter((item) => item.id !== id),
  }));
}
export async function handleDonation(id: string, account: Account) {
  const { hash, donation } = useUserStore
    .getState()
    .donationQueue.find((item) => item.id === id)!;
  try {
    const transaction = prepareContractCall({
      contract: config.contracts.donation.contract,
      method: config.contracts.donation.abi[2].name,
      params: [`0x${hash}`],
      value: toUnits(
        (config.features.web3.donation.clickUnit * donation).toFixed(3),
        18,
      ),
    });

    await sendTransaction({ transaction, account });
    sendGTMEvent({
      event_category: "donation",
      event_label: "cat_donation_completed",
      value: config.features.web3.donation.clickUnit * donation,
      wallet_address: account.address,
      cat_hash: hash,
      cat_name: streams.find((item) => item.hash === hash)!.name,
      cat_country: streams.find((item) => item.hash === hash)!.countryCode,
    });
    updateDonationStatus(id, "success");
  } catch (e) {
    updateDonationStatus(id, "error", e);
    sendGTMEvent({
      event_category: "donation",
      event_label: "cat_donation_failed",
      value: config.features.web3.donation.clickUnit * donation,
      wallet_address: account.address,
      cat_hash: hash,
      cat_name: streams.find((item) => item.hash === hash)!.name,
      cat_country: streams.find((item) => item.hash === hash)!.countryCode,
    });
  } finally {
    await new Promise((res) => setTimeout(res, 2000));
    removeDonation(id);
  }
}
