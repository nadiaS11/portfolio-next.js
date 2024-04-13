export default function BrutalBtn({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <button className="px-1 py-0.5 dark:text-black border-2 border-black dark:border-white uppercase bg-black dark:bg-white  text-neutral-300 transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
      {children}
    </button>
  );
}
