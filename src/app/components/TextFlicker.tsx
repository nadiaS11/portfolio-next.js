// TextFlicker.tsx
import { useEffect, useState } from "react";
import TypewriterEffect from "./TypewriterEffect ";
import { motion, stagger, useAnimate, useInView } from "framer-motion";

type TextFlickerProps = {
  strings: string[];
};

export default function TextFlicker({ strings }: TextFlickerProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % strings.length);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [index, strings.length]);

  return (
    // <TypewriterEffect
    //   words={strings[index].split(" ").map((word) => ({
    //     text: word,
    //     className: "  text-blue-600 opacity-0 hidden",
    //   }))}
    // />
    <motion.div
      className="text-blue-600 font-bold text-lg"
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        damping: 30,
      }}
    >
      <TypewriterEffect
        words={strings[index].split(" ").map((word) => ({
          text: word,
          className: " text-xl text-blue-600 opacity-0 hidden",
        }))}
      />
    </motion.div>
  );
}
