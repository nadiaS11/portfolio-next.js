// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
"use client";
import * as React from "react";
import { cn } from "@/app/utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="dark:bg-[#1C1C1C] min-w-min rounded-2xl p-4 border border-neutral-800 mt-3 dark:text-neutral-400">
      <h2 className="  dark:text-white   rounded-full text-lg w-fit px-4 py-1 mb-4">
        Write Me A Message
      </h2>{" "}
      <div className="border border-neutral-700 " />
      <form className="mt-8 " onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <LabelInputContainer>
            <label
              className="text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="name"
            >
              Your name
            </label>
            <Input id="name" placeholder="Your Name" type="text" />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <label
              className="text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="email"
            >
              Email Address
            </label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <label
              className="text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="message"
            >
              Message
            </label>
            <Input
              id="message"
              placeholder="Hi there!"
              type="text"
              className="h-[100px]"
            />
          </LabelInputContainer>
        </div>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] hover:-translate-y-1 transform transition duration-200"
          type="submit"
        >
          Send
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 100; // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/input"
      >
        <input
          type={type}
          className={cn(
            `flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400
           `,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);

Input.displayName = "Input";
