"use client";
import { useEffect, useState } from "react";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { IconArticle } from "@tabler/icons-react";
import { Article } from "../blog/page";
import Link from "next/link";
import ContactForm from "./ContactForm";

function RightSidebar({ data }: { data: Article[] }) {
  return (
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
      className="block rounded-2xl w-full xl:w-80 h-fit md:sticky top-5"
    >
      <div className="w-full">
        <div>
          <div className="dark:bg-[#1C1C1C] min-w-min rounded-2xl p-4 border border-neutral-800 h-fit">
            <div className="dark:text-neutral-400 mb-10">
              <h2 className="  dark:text-white   rounded-full text-lg w-fit px-4 py-1 mb-4">
                Blogs
              </h2>
              <div className="border border-neutral-700 my-5 " />

              {data?.slice(0, 3)?.map((item, idx) => (
                <Link
                  href={item.link}
                  key={idx}
                  className="flex items-center gap-x-3 mt-6 hover:bg-neutral-200 dark:hover:bg-neutral-800  p-2 rounded-md "
                >
                  <div className="bg-neutral-200 dark:bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                    <IconArticle className="text-lg" />
                  </div>
                  <h3 className="text-xs ">{item.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </motion.div>
  );
}

export default RightSidebar;
