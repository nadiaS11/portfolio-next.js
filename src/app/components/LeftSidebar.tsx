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
        className="  block   w-full md:w-96  h-fit md:sticky top-5 "
      >
        <div className=" md:w-96 w-full p-3 border border-neutral-800   rounded-2xl h-full   dark:bg-[#1C1C1C]  ">
          <div className="flex">
            <div className="w-full   relative">
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

            <div className="   ">
              <DarkModeSwitch />
            </div>
          </div>
          {/* 
          <form
            onSubmit={handleSubmit}
            className="bg-[#282828] p-1  rounded-md md:flex items-center  justify-between h-9 w-full hidden "
          >
            <input
              value={email}
              onChange={handleChange}
              className=" w-36 focus:outline-none bg-transparent dark:text-neutral-400 text-xs placeholder:dark:text-neutral-600 h-full pl-2 placeholder:text-xs placeholder:font-RubikMedium"
              placeholder="name@email.com"
              type="text"
            />
            <motion.button
              animate={controls}
              className="bg-[#696969] h-full p-1 rounded-md text-xs w-20 font-RubikMedium dark:text-neutral-50"
            >
              Subscribe
            </motion.button>
          </form> */}

          <div className="w-full mt-5 dark:text-neutral-300">
            <h2 className="font-RubikBold my-4">Bio</h2>
            <p className="text-[14px]  font-RubikRegular my-2">
              I am a frontend developer skilled in MERN Stack, <br /> handling
              both frontend and backend for responsive websites and
              user-friendly interfaces.
            </p>

            <div className="  w-full mt-5  ">
              <h2 className="font-RubikBold  my-4">Tech Stack</h2>

              <div className="flex gap-2 flex-wrap text-xs my-2">
                <BrutalBtn> Next.js</BrutalBtn>
                <BrutalBtn> Node.js</BrutalBtn>
                <BrutalBtn> Express.js</BrutalBtn>
                <BrutalBtn> Typescript</BrutalBtn>
                <BrutalBtn> Javascript</BrutalBtn>
                <BrutalBtn> Postgresql</BrutalBtn>
                <BrutalBtn> Mongo Db</BrutalBtn>
              </div>
            </div>
            <div className="border border-[#282828] dark:text-neutral-300 my-6" />

            <div className="mt-6 flex justify-between text-sm">
              <div className="flex items-center gap-x-1">
                {/* <PiShapesThin /> */}
                <span className="text-xs font-RubikRegular">
                  1 Year as a Developer
                </span>
              </div>
              <div className="flex items-center gap-x-1">
                {/* <PiMagicWandThin /> */}
                <span className="text-xs font-RubikRegular">16 Projects</span>
              </div>
            </div>

            <div className="border border-[#282828] dark:text-neutral-300 my-6" />

            <div className="my-4 ">
              <h2 className="font-RubikRegular">Work History</h2>
              <div className="mt-7 flex  justify-between">
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
                  February 2024 - Current
                </small>
              </div>
              {/* <div className="my-3 flex  justify-between">
                <div className="flex gap-x-3">
                  <SiAdobe className="text-xl" /> 
                  <div className="-mt-1">
                    <h3 className="text-sm font-RubikMedium">
                      Jr. Creative Dev
                    </h3>
                    <p className="text-[9px]">Adobe</p>
                  </div>
                </div>
                <small className="text-[9px] dark:text-neutral-300">
                  Sep 2016 - January 2020
                </small>
              </div> */}
            </div>
          </div>
          <div className="border border-neutral-700 my-5" />

          <div className="flex items-center justify-center gap-x-2">
            <Socials />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
