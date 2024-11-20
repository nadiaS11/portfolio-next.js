"use client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useVelocity,
  useSpring,
} from "framer-motion";
import { cn } from "@/app/utils/cn";
import AboutMe from "./AboutMe";
import StickyProjects from "./StickyProjects";
import Link from "next/link";
import { DirectionAwareHover } from "./DirectionHover";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full max-w-4xl mx-auto h-full", className)}
    >
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};

export default function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      {" "}
      <div className="max-w-3xl mx-auto antialiased pt-4 relative">
        {" "}
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10 p-3">
            <h2 className="bg-black leading-5 tracking-wider text-white rounded-full text-sm w-fit px-4 py-1 mb-4 dark:bg-[#1C1C1C] ">
              {item.badge}
            </h2>

            <Link href={item.live}>
              <p className={"text-xl mb-4 "}>{item.title}</p>
            </Link>
            {item?.image && (
              // <Link href={item.live}>
              //   {" "}
              //   <Image
              //     src={item.image}
              //     alt="blog thumbnail"
              //     height="800"
              //     width="800"
              //     className="rounded-lg my-10 object-cover"
              //   />
              // </Link>
              <DirectionAwareHover imageUrl={item.image}>
                <div className="flex items-center gap-4">
                  <Link
                    href={item.live}
                    className="px-4 py-1  border border-neutral-300 bg-neutral-100   hover:-translate-y-1 transform transition duration-200 hover:shadow-md text-lg font-medium   text-[#1c1c1c]   rounded-lg"
                  >
                    Live
                  </Link>
                  {item.client && item.server && (
                    <>
                      <Link
                        href={item.client}
                        className="px-4 py-1  border border-neutral-300 bg-neutral-100   hover:-translate-y-1 transform transition duration-200 hover:shadow-md text-lg font-medium   text-[#1c1c1c]   rounded-lg"
                      >
                        Client
                      </Link>
                      <Link
                        href={item.server}
                        className="px-4 py-1  border border-neutral-300 bg-neutral-100   hover:-translate-y-1 transform transition duration-200 hover:shadow-md text-lg font-medium   text-[#1c1c1c]   rounded-lg"
                      >
                        Server
                      </Link>
                    </>
                  )}
                </div>
              </DirectionAwareHover>
            )}
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Stymix - A Digital Agency",
    description: (
      <>
        <p>
          An website for a digital agency, Stymix where a group of innovative
          designers, skilled developers, and energetic marketers eager to help
          you take your vision to its full potential.
        </p>
      </>
    ),
    live: "https://www.stymix.com/",
    badge: "Next.js | Typescript | Postgressql | Strapi | Graphql",
    image: "/stymix.png",
  },
  {
    title: "Measurement Of - Internship Project",
    description: (
      <>
        <p>
          An website regarding Measurements and Estimates: A comprehensive
          online resource providing insights into the dimensions of everyday
          objects
        </p>
      </>
    ),
    live: "https://www.measurementof.com",
    badge: "Next.js | Typescript | Postgressql | Strapi | Graphql",
    image:
      "https://res.cloudinary.com/dsfyrjd8b/image/upload/v1712953849/mo-home.png",
  },
  {
    title: "Vibin' - AI Powered Social Media & Communication Platform",
    description: (
      <>
        <ul className="list-disc">
          <li>AI-powered content creation system with caption and image.</li>

          <li>
            Users can post, interact, and make friends and the admin dashboard.
          </li>
          <li>Real-time notification and one-to-one messaging system.</li>
          <li>Admin Dashboard For User and Post management</li>
        </ul>
      </>
    ),

    badge:
      "React | Redux | Tailwind | Chakra UI | Express | Mongoose | JWT | Multer | Socket.io",
    image:
      "https://res.cloudinary.com/dsfyrjd8b/image/upload/v1712953287/vibin%27-feed.png",
    live: "https://vibin1.netlify.app",
    client: "https://github.com/DevDynasty0/Vibin--social-media-platform",
    server:
      "https://github.com/DevDynasty0/Vibin--social-media-platform-backend",
  },
  {
    title: "ContestHub - Contest Hosting Platform",
    description: (
      <>
        <ul className="list-disc">
          <li>Real-time live chat feature across all users.</li>
          <li>Role-based authentication system & dashboard.</li>
          <li>Users can enter a contest via Stripe payment system.</li>
          <li>Creators can create contests and decide winners.</li>
          <li>Admin can assign roles, manange users and contests.</li>
        </ul>
      </>
    ),
    badge:
      "React | Expresss | MongoDB | JWT | Firebase | Material UI | Framer | Socket.io | Stripe",
    image:
      "https://res.cloudinary.com/dsfyrjd8b/image/upload/v1712953720/contesthub-home.png",
    live: "https://contesthub-project.web.app",
    client: "https://github.com/nadiaS11/contestHub-client-side",
    server: "https://github.com/nadiaS11/contestHub-server",
  },
];
