import { IconDownload, IconMail } from "@tabler/icons-react";
import ShimmeryBtn from "./Buttons/ShimmeryBtn";

export default function AboutMe() {
  return (
    <div className="mb-10 ">
      <h2 className="  dark:text-white   rounded-full text-lg w-fit px-4 py-1 mb-4">
        About Me
      </h2>
      <div className="border border-neutral-700 my-5 " />
      <div className="flex flex-col lg:flex-row gap-2 items-center dark:bg-[#1C1C1C] rounded-2xl px-3 py-5">
        <div className="text-sm  prose prose-sm dark:prose-invert lg:border-r-1">
          Embarking on a coding journey during my teenage years, my fascination
          with programming languages and web development ignited. At 15 in 2013,
          I dove into the realm by creating a WordPress blog, incorporating C++.
          Though academic commitments briefly diverted me, my statistics major
          sparked a struggle with R programming, casting doubt on my tech path.
          Overcoming this, I resurfaced with newfound determination, realizing
          that even as a statistics graduate, I could bridge the gap and evolve
          into a passionate web developer. <br /> <br /> Today, with MERN stack
          expertise, I am capable creating responsive websites and user-friendly
          digital experience. From MongoDB, Express.js to React, I navigate tech
          challenges, turning them into opportunities for growth.
        </div>{" "}
        <div className="flex flex-row md:flex-col justify-start mr-auto  lg:w-full  gap-1">
          <ShimmeryBtn
            href={
              "https://drive.google.com/uc?export=download&id=1yTcLXl2pWIYCADbS2sbJDy3dNqnn53IO"
            }
          >
            <IconDownload size={"1rem"} /> Resume
          </ShimmeryBtn>
          <ShimmeryBtn
            href={
              "mailto:nadiasultana.ns11@gmail.com?subject=Contact%20Request"
            }
          >
            <IconMail size={"1rem"} /> Contact Me!
          </ShimmeryBtn>
        </div>
      </div>
    </div>
  );
}
