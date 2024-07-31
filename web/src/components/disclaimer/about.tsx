export default function DisclaimerAbout() {
  return (
    <div className="inline-flex h-[592px] flex-col items-start justify-start gap-7">
      <div className="self-stretch text-[25px] font-bold text-[#aeaeae]">
        About purr.stream
      </div>
      <div className="flex h-[530px] flex-col items-start justify-start gap-[31px] self-stretch">
        <div className="flex h-[282px] flex-col items-start justify-start gap-2 self-stretch">
          <div className="self-stretch text-base font-bold text-[#a2a2f2]">
            What is purr.stream?
          </div>
          <div className="self-stretch">
            <span className="text-xs font-medium leading-[18px] text-[#aeaeae]">
              Taking inspiration from Meow Camera, Purr.Stream is an alternative
              viewer for feeders from the Hello Street Cat / JieMao (街猫) app.
              We are NOT affiliated with the original app developer (Guangxi Ha
              Chong Network Technology Co., Ltd.) in any way and are developing
              this viewer just for fun, to raise awareness, and to donate
              towards animal welfare across the world through the use of Web3,
              with donations made directly from the Superposition team. <br />
              <br />
              Using the{" "}
            </span>
            <span className="text-xs font-bold leading-[18px] text-[#aeaeae]">
              Superposition chain
            </span>
            <span className="text-xs font-medium leading-[18px] text-[#aeaeae]">
              , users can connect their crypto wallets, donate SPN testnet
              tokens to specific cat streams and their corresponding
              country&apos;s organisation, participate in a weekly leaderboard,
              and engage in Discord chats based on donations.
            </span>
          </div>
        </div>
        <div className="flex h-[102px] flex-col items-start justify-start gap-2 self-stretch">
          <div className="self-stretch text-base font-bold text-[#a2a2f2]">
            What’s HelloStreetCat?
          </div>
          <div className="self-stretch text-xs font-medium leading-[18px] text-[#aeaeae]">
            The Hello Street Cat app provides a platform for many cat feeders
            around China which can have food dispensed to them through the app.
            The cameras you see are only active if a viewer is watching on the
            app.
          </div>
        </div>
        <div className="flex h-[84px] flex-col items-start justify-start gap-2 self-stretch">
          <div className="self-stretch text-base font-bold text-[#a2a2f2]">
            Contact & Feedback
          </div>
          <div className="self-stretch text-xs font-medium leading-[18px] text-[#aeaeae]">
            For issue reporting, feature suggestions and everything else, you
            can use the #meow-camera channel in the Superposition discord
            server.
          </div>
        </div>
      </div>
    </div>
  );
}
