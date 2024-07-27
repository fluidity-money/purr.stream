export default function Disclaimer() {
  return (
    <div className="inline-flex h-[570px] w-[628px] items-end justify-start gap-[38px] rounded-2xl">
      <div className="flex w-[118px] items-start justify-start gap-[27px] self-stretch">
        <div className="inline-flex w-[91px] flex-col items-end justify-start gap-[21px] py-[27px]">
          <div className="self-stretch text-right text-sm font-bold text-white underline">
            About
          </div>
          <div className="self-stretch text-right text-sm font-bold text-neutral-700">
            How it works
          </div>
          <div className="self-stretch text-right text-sm font-bold text-neutral-700">
            Superposition
          </div>
        </div>
        <div className="h-0 w-[450px] origin-top-left rotate-90 border border-neutral-700"></div>
      </div>
      <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-7 self-stretch">
        <div className="self-stretch text-[25px] font-bold text-white">
          About purr.stream
        </div>
        <div className="flex h-[386px] flex-col items-start justify-start gap-[31px] self-stretch">
          <div className="flex h-[120px] flex-col items-start justify-start gap-2 self-stretch">
            <div className="self-stretch text-base font-bold text-neutral-100">
              What is purr.stream?
            </div>
            <div className="self-stretch text-xs font-medium leading-[18px] text-zinc-400">
              Purr.stream is an alternative viewer for feeders from the Hello
              Street Cat / JieMao (1]#) app. we are NOT affiliated with the
              original app developer (Guangxi Ha Chong Network Technology Co.,
              Ltd.) in any way and are developing this viewer just for fun.
            </div>
          </div>
          <div className="flex h-[102px] flex-col items-start justify-start gap-2 self-stretch">
            <div className="self-stretch text-base font-bold text-neutral-100">
            </div>
            <div className="self-stretch text-xs font-medium leading-[18px] text-zinc-400">
            </div>
          </div>
          <div className="flex h-[102px] flex-col items-start justify-start gap-2 self-stretch">
            <div className="self-stretch text-base font-bold text-neutral-100">
              Where can I contact you?
            </div>
            <div className="self-stretch text-xs font-medium leading-[18px] text-zinc-400">
              For issue reporting, feature suggestions, contact Superposition Discord!
            </div>
          </div>
        </div>
      </div>
      <div className="relative size-[17px]" />
    </div>
  );
}
