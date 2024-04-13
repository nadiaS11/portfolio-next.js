import { HoverEffect } from "./HoverEffect";

export default function MiniProjectsWithHoverEffect() {
  return (
    <div className="mb-10 ">
      <h2 className="  dark:text-white   rounded-full text-lg w-fit px-4 py-1 mb-4">
        Mini Projects
      </h2>
      <div className="border border-neutral-700 my-5 " />
      <div className="max-w-4xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
export const projects = [
  {
    title: "Time-On-Task",
    description:
      "A Task Management System With Drag & Drop feature. Made with React, MongoDB, Node.js, Express.js, JWT, Firebase  and Tailwind.",
    link: "https://time-on-task-project.web.app/",
  },
  {
    title: "NaamKeen",
    description:
      "A resturant management system with user profile and cart system. Made with React, MongoDB, Node.js, Express.js, JWT, Firebase  and Tailwind CSS.",
    link: "https://namkeen-project.web.app/",
  },
  {
    title: "NadTech",
    description:
      "A tech brand-based e-commerce website to add , update , delete or order products. Made with React, MongoDB, Node.js, Express.js, JWT, Firebase  and Tailwind CSS.",
    link: "https://github.com/nadiaS11/brand-shop-client",
  },
  {
    title: "The Mingle",
    description:
      "An event management system to organize events using React, MongoDB, Node.js, Express.js, JWT,  Firebase  and Tailwind CSS along with Swiper.js. ",
    link: "https://the-mingle.web.app/",
  },
  {
    title: "Portfolio Next.js",
    description:
      "A portfolio made using Next.js, Typescript, Tailwind CSS and Framer Motion along Aceternity library.",
    link: "https://nadia-sultana-portfolio.netlify.app/",
  },
  {
    title: "Portfolio React",
    description:
      "A portfolio made using Vite, React , Javascript, Tailwind & Vanilla Css",
    link: "https://nadia-sultana-portfolio-react.netlify.app/",
  },
];
