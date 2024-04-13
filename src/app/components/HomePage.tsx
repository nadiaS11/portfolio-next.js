"use client";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import { motion } from "framer-motion";
import RightSidebar from "./RightSidebar";
import { Article } from "../blog/page";
import MiniProjectsWithHoverEffect from "./MiniProjects";

export default function Homepage({ data }: { data: Article[] }) {
  return (
    <>
      <div className="flex flex-col gap-4 xl:flex-row">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.9,
              type: "spring",
              stiffness: 200,
            },
          }}
          className="max-w-4xl mx-auto antialiased pt-4 relative"
        >
          <AboutMe />
          <Projects />
          <MiniProjectsWithHoverEffect />
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.9,
              type: "spring",
              stiffness: 200,
            },
          }}
          className="max-w-full    xl:max-w-xl mx-auto antialiased pt-4 relative"
        >
          <RightSidebar data={data as Article[]} />
        </motion.div>
      </div>
      <footer className="max-w-[60rem]  px-4 py-1">
        <div className="mt-6 border-t  dark:bg-[#1C1C1C] dark:rounded-lg dark:text-neutral-400">
          <div className="dark:hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
            <div className="  flex items-center gap-x-3">
              <div>
                <div className="flex items-center gap-x-2 text-[11px]  font-bold">
                  <h2 className="text-sm font-RubikMedium">
                    Portfolio Made with
                  </h2>
                  <p className="bg-[#282828] w-fit dark:text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center ">
                    Framer Motion
                  </p>
                  <div className="w-1 h-1 rounded-full bg-neutral-400" />
                  <p className="bg-[#282828] w-fit dark:text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center ">
                    Next.js
                  </p>
                  <div className="w-1 h-1 rounded-full bg-neutral-400" />
                  <p className="bg-[#282828] w-fit dark:text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center ">
                    TypeScript
                  </p>
                </div>
                <div className="flex items-center mt-1">
                  <span className="text-xs">
                    © 2023 Nadia Sultana. All Rights Reserved.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
