export default function ThemedButton({
  handler,
  children,
}: {
  handler: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      onClick={handler}
      className="group flex h-[39px] flex-1 cursor-pointer items-center justify-center gap-1 rounded-[10px] border-2 border-neutral-100 bg-stone-900 px-3 py-2.5 text-neutral-100 shadow md:flex-auto md:border-stone-950 md:bg-neutral-100 md:text-black"
    >
      {children}
    </div>
  );
}
