export default function ShimmeryBtn({
  children,
  href,
}: Readonly<{
  children: React.ReactNode;
  href: string;
}>) {
  return (
    <>
      <a
        target="_blank"
        href={href}
        className="inline-flex gap-1 my-2 p-1 items-center animate-shimmer justify-center rounded border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]   font-medium      text-neutral-300 transition-colors   focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        download
      >
        {children}
      </a>
    </>
  );
}
