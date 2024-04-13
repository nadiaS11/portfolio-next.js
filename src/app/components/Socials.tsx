"use client";

import React, { useState } from "react";

import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMedium,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Socials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const springConfig = { stiffness: 100, damping: 5 };

  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const mySocials = [
    {
      id: 1,
      name: "Github",
      position: "https://github.com/nadiaS11",
      image: <IconBrandGithub />,
    },
    {
      id: 2,
      name: "Linkedin",
      position: "https://linkedin.com/in/nadia-ns11",
      image: <IconBrandLinkedin />,
    },
    {
      id: 3,
      name: "Medium",
      position: "https://nadia-sultana.medium.com/",
      image: <IconBrandMedium />,
    },
    {
      id: 4,
      name: "Facebook",
      position: "https://www.facebook.com/nadia.ns11/",
      image: <IconBrandFacebook />,
    },
    {
      id: 5,
      name: "Email",
      position: "mailto:nadiasultana.ns11@gmail.com",
      image: <IconMail />,
    },
  ];

  return (
    <div
      className="flex flex-row items-center gap-x-9  
    cursor-pointer
    "
    >
      {mySocials?.map((item, idx) => (
        <Link
          href={item.position}
          className="-mr-4  relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-white relative z-30 text-base">
                  {item.name}
                </div>
                <div className="text-white text-xs">{item.position}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <p>{item.image}</p>
        </Link>
      ))}
    </div>
  );
}
