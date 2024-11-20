"use client";
import React, { useState } from "react";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import DarkModeSwitch from "./DarkSwitch";
import TextFlicker from "./TextFlicker";
import { IconDeviceLaptop, IconDownload, IconMail } from "@tabler/icons-react";
import ShimmeryBtn from "./Buttons/ShimmeryBtn";
import BrutalBtn from "./Buttons/BrutalBtn";
import Socials from "./Socials";

export default function LeftSidebar() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const texts = [
    "Front-End Developer",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "PERN Stack Developer",
    "Node.js Developer",
  ];

  const controls = useAnimation();

  return (
    <div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.3, type: "spring", stiffness: 200 },
        }}
        className="block w-full md:w-96 h-fit md:sticky top-5"
      >
        <div className="md:w-[350px] w-full p-3 border border-neutral-800   rounded-2xl h-full dark:bg-[#1C1C1C]">
          <div className="flex">
            <div className="w-full relative">
              <Image
                width={1000}
                height={1000}
                className="hidden dark:block w-28 h-28 rounded-full object-cover"
                src="/pic2.jpg"
                // src="/pic.png"
                alt=""
              />
              <Image
                width={1000}
                height={1000}
                className="dark:hidden  block w-28 h-28 rounded-full object-cover"
                src="/pic-color.png"
                // src="/pic.png"
                alt=""
              />

              <div
                onClick={() => setOpen(!open)}
                className="bg-green-600 dark:bg-lime-400 w-3 h-3 cursor-pointer rounded-full absolute top-[84px] left-24 animate-pulse"
              />
              {open && (
                <div className="border border-green-800 dark:border-lime-400 h-5 flex items-center justify-center rounded-2xl w-fit px-2 absolute top-[75px] left-28 ">
                  <p className="text-[9px] font-RubikMedium text-green-800 dark:text-lime-300">
                    Open to freelancing
                  </p>
                </div>
              )}
              <h1 className="font-RubikExtraBold text-2xl font-bold   dark:text-neutral-300 mt-3">
                Nadia Sultana
              </h1>
              <h2 className="font-RubikExtraBold text-2xl mb-3 dark:text-neutral-300  ">
                <TextFlicker strings={texts as string[]} />
              </h2>
              <p className="text-xs font-RubikMedium text-black  dark:text-white my-2">
                nadiasultana.ns11@gmail.com 📧
              </p>
            </div>

            <div>
              <DarkModeSwitch />
            </div>
          </div>

          <div className="w-full mt-4 dark:text-neutral-300">
            <h2 className="font-RubikBold my-2">Bio</h2>
            <p className="text-[14px] font-RubikRegular">
              I am a frontend developer skilled in MERN Stack, <br /> handling
              both frontend and backend for responsive websites and
              user-friendly interfaces.
            </p>

            <div className="w-full mt-4">
              <h2 className="font-RubikBold  my-2">Tech Stack</h2>

              <div className="flex gap-2 flex-wrap text-xs my-2">
                <BrutalBtn> Next.js</BrutalBtn>
                <BrutalBtn> Graphql</BrutalBtn>
                <BrutalBtn> Strapi CMS</BrutalBtn>
                <BrutalBtn> Node.js</BrutalBtn>
                <BrutalBtn> Express.js</BrutalBtn>
                <BrutalBtn> Typescript</BrutalBtn>
                <BrutalBtn> Postgresql</BrutalBtn>
                <BrutalBtn> Mongo Db</BrutalBtn>
              </div>
            </div>

            <div className="flex justify-between text-sm border-t border-b border-[#282828] py-3 mt-4">
              <div className="flex items-center gap-x-1">
                <span className="text-xs font-RubikRegular">
                  1 Year as a Developer
                </span>
              </div>
              <div className="flex items-center gap-x-1">
                <span className="text-xs font-RubikRegular">20 Projects</span>
              </div>
            </div>

            <div className="my-4 ">
              <h2 className="font-RubikRegular">Work History</h2>
              <div className="mt-4 flex  justify-between">
                <div className="flex gap-x-3">
                  <IconDeviceLaptop className="text-xl" />
                  <div className="-mt-1">
                    <h3 className="text-sm font-RubikMedium">
                      Frontend Developer
                    </h3>
                    <Link
                      target="_blank"
                      href={"https://www.evatix.com/"}
                      className="text-[12px]"
                    >
                      Evatix
                    </Link>{" "}
                  </div>
                </div>
                <small className="text-[9px] dark:text-neutral-300">
                  May 2024 - Current
                </small>
              </div>
              <div className="mt-4 flex  justify-between">
                <div className="flex gap-x-3">
                  <IconDeviceLaptop className="text-xl" />
                  <div className="-mt-1">
                    <h3 className="text-sm font-RubikMedium">
                      Intern Software Developer
                    </h3>
                    <Link
                      target="_blank"
                      href={"https://www.evatix.com/"}
                      className="text-[12px]"
                    >
                      Evatix
                    </Link>{" "}
                  </div>
                </div>
                <small className="text-[9px] dark:text-neutral-300">
                  February 2024 - May 2024
                </small>
              </div>
            </div>
          </div>
          <div className="border border-neutral-700 my-2" />

          <div className="flex items-center justify-center gap-x-2">
            <Socials />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
