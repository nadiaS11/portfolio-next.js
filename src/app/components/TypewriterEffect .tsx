// TypewriterEffect.tsx
import { useEffect } from "react";
import { cn } from "@/app/utils/cn";
import { motion, stagger, useAnimate, useInView } from "framer-motion";

type TypewriterEffectProps = {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
};

const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: TypewriterEffectProps) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView, words]);

  return (
    <div className={className}>
      <motion.div ref={scope} className="inline">
        {words.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.split("").map((char, index) => (
              <motion.span
                initial={{}}
                key={`char-${index}`}
                className={word.className}
              >
                {char}
              </motion.span>
            ))}
            &nbsp;
          </div>
        ))}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px]  h-6 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

export default TypewriterEffect;
