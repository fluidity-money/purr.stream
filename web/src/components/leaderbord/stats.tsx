export default function Stats() {
  return (
    <div className="inline-flex h-[92px] items-center justify-center gap-[70px] rounded-t-lg border-b border-neutral-400 pb-[25px] pl-[30px] pr-[25px] pt-[19px]">
      <div className="flex items-center justify-start gap-2.5">
        <div className="inline-flex flex-col items-start justify-center gap-0.5">
          <div className="text-sm font-medium text-neutral-400">Total $SPN</div>
          <div className="text-xl font-bold text-neutral-100">500</div>
        </div>
      </div>
      <div className="inline-flex flex-col items-start justify-center gap-0.5">
        <div className="text-sm font-medium text-neutral-400">
          Total Transactions
        </div>
        <div className="text-xl font-bold text-neutral-100">989,743+</div>
      </div>
      <div className="inline-flex flex-col items-start justify-center gap-0.5">
        <div className="text-sm font-medium text-neutral-400">
          Total Wallets
        </div>
        <div className="text-xl font-bold text-neutral-100">989,743+</div>
      </div>
    </div>
  );
}
