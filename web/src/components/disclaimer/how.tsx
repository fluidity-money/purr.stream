export default function DisclaimerHow() {
  return (
    <>
      <div className="inline-flex flex-col items-start justify-start gap-7">
        <div className="text-[25px] font-bold text-[#aeaeae]">
          How it works (1 - 2 - 3!).
        </div>
        <div className="flex flex-col items-start justify-start gap-[31px]">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="">
              <span className="text-xs font-bold leading-[18px] text-[#aeaeae]">
                Login and connect you crypto wallet to donate your ETH to your
                favourite cat stream! Each stream corresponds to a specific
                country and an animal welfare organisation :3 <br />
                If you&apos;re new to the Web3 space, here is a tutorial!
                <br />
                <br />
              </span>
              <span className="text-xs font-bold leading-[18px] text-neutral-100">
                Note: Connecting your wallet or social login creates a new Smart
                Wallet, allowing for account abstraction and seamless UX
                features! Make sure to fund it accordingly.
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 self-stretch">
            <div className="self-stretch text-base font-bold text-[#a2a2f2]">
              Step 1: Getting Started
            </div>
            <div className="self-stretch">
              <span className="text-xs font-bold leading-[18px] text-[#aeaeae]">
                Connect Your Wallet:
                <br />
              </span>
              <span className="text-xs font-medium leading-[18px] text-[#aeaeae]">
                {" "}
                • Sign in using your preferred method (social login, MetaMask,
                etc.).
                <br /> • Copy your wallet address.
                <br />{" "}
              </span>
              <br />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="text-base font-bold text-[#a2a2f2]">
              Step 2: Engaging with Cat Streams
            </div>
            <div className="">
              <span className="text-xs font-bold leading-[18px] text-[#aeaeae]">
                Donate to Cat Streams:
                <br />
              </span>
              <span className="text-xs font-medium leading-[18px] text-[#aeaeae]">
                {" "}
                • Go to your chosen cat stream.
                <br /> • Spam the donate button to contribute ETH tokens.
                <br />
                <br />
              </span>
              <span className="text-xs font-bold leading-[18px] text-[#aeaeae]">
                Transactions Cookie Clicker Style:
                <br />
              </span>
              <span className="text-xs font-medium leading-[18px] text-[#aeaeae]">
                {" "}
                • The more you click donate & engage, the more ETH will be
                donated to your favourite cat.
                <br />{" "}
              </span>
              <br />
              <span className="text-xs font-bold leading-[18px] text-[#aeaeae]">
                Participate in the Community:
                <br />
              </span>
              <span className="text-xs font-medium leading-[18px] text-[#aeaeae]">
                {" "}
                • Engage in Discord chats where donations are made off-chain
                based on weekly leaderboard positions.
                <br /> • Weekly, we compile a list of top streams and their
                countries&apos; welfare organisation. The top cat stream based
                on this list receives a donation.
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start gap-2">
            <div className="self-stretch text-base font-bold text-[#a2a2f2]">
              Step 3: Exploring Streams
            </div>
            <div className="">
              <span className="text-xs font-bold leading-[18px] text-[#aeaeae]">
                Search for Streams:
                <br />
              </span>
              <span className="text-xs font-medium leading-[18px] text-[#aeaeae]">
                {" "}
                • By cat’s stream name.
                <br /> • By the country the cat is representing.
                <br /> • By the organisation that will be donated towards.
                <br />
                <br />
              </span>
              <span className="text-xs font-bold leading-[18px] text-[#aeaeae]">
                Community and Competition:
                <br />
              </span>
              <span className="text-xs font-medium leading-[18px] text-[#aeaeae]">
                Individual cat streams are branded per country, fostering a
                sense of PvP (Player vs. Player) and PvE (Player vs.
                Environment).
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
