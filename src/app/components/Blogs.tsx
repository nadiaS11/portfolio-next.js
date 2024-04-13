"use client";
import Link from "next/link";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { IconCode } from "@tabler/icons-react";
import { Article } from "../blog/page";
import { button } from "@nextui-org/react";

export default function Blogs({ data }: { data: Article[] }) {
  // function extractImageSrc(html: string) {
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(html, "text/html");
  //   const imgElement = doc.querySelector("img");
  //   console.log(imgElement);
  //   return imgElement ? imgElement.src : null;
  // }

  console.log(data);
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.6,
          type: "spring",
          stiffness: 200,
        },
      }}
      className="w-full  "
    >
      <div className="  bg-[#1C1C1C] lg:bg-transparent rounded-2xl ">
        <div className="w-full">
          <div className="flex gap-x-6 p-4">
            <IconCode className="text-6xl dark:text-neutral-50" />

            <div>
              <h1 className="text-2xl font-RubikMedium dark:text-neutral-300">
                <span className="font-semibold">Nad Scripts</span>,{" "}
                <span className="text-sm dark:text-neutral-400">
                  A Dev Blog
                </span>
              </h1>
              <p className="max-w-sm dark:text-neutral-400 text-sm">
                Where Design Meets Code, and Stories Unfold!
              </p>
            </div>
          </div>

          <div className="border border-neutral-700 my-5" />

          <div className="  bg-[#1C1C1C] rounded-lg dark:text-neutral-400">
            {data.map((article) => {
              // const imageSrc = extractImageSrc(article.content);
              // console.log(imageSrc);

              return (
                <Link key={article.published} href={"/dashboard/djdj"}>
                  <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                    <div className="  flex items-center gap-x-3">
                      {/* {imageSrc && (
                        <Image
                          width={1000}
                          height={1000}
                          className="w-40 h-40 object-cover rounded-md"
                          src={imageSrc as string}
                          alt=""
                        />
                      )} */}
                      <Image
                        width={1000}
                        height={1000}
                        className="w-40 h-40 object-cover rounded-md"
                        src="https://miro.medium.com/v2/4*EBuOxSGT7JZTGq0n4W8A5w.png"
                        alt=""
                      />
                      <div>
                        <h2 className="text-lg mb-5 font-RubikMedium">
                          {article.title}
                        </h2>
                        <p className="text-sm">
                          July 22, 2023 - {article.author}
                        </p>
                        <p className="inline-flex items-center gap-2">
                          {article.category.map((item, idx) => (
                            <button className="text-xs  px-1" key={idx}>
                              #{item}
                            </button>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* without image */}

          <div className="mt-6  bg-[#1C1C1C] rounded-lg dark:text-neutral-400">
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <span className="text-sm">July 22, 2023</span>
                  <h2 className="text-sm font-RubikMedium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                </div>
              </div>
            </div>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <span className="text-sm">July 22, 2023</span>
                  <h2 className="text-sm font-RubikMedium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                </div>
              </div>
            </div>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <span className="text-sm">July 22, 2023</span>
                  <h2 className="text-sm font-RubikMedium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* without image */}

          <div className="mt-6  bg-[#1C1C1C] rounded-lg dark:text-neutral-400">
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <h2 className="text-sm font-RubikMedium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                  <div className="flex items-center gap-x-2 font-RubikBold">
                    <p className="bg-[#282828] w-fit dark:text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                      TypeScript
                    </p>
                    <div className="w-1 h-1 rounded-full bg-neutral-400" />
                    <span className="text-xs">Sunday, July 22, 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
