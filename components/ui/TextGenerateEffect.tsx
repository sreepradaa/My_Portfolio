"use client";
import { useEffect, useState } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const [wordsArray, setWordsArray] = useState<string[]>([]);

  useEffect(() => {
    setWordsArray(words.split(" "));
  }, [words]);

  useEffect(() => {
    if (wordsArray.length === 0) return;
    animate(
      "span",
      { opacity: 1 },
      { duration: 2, delay: stagger(0.2) }
    );
  }, [animate, wordsArray]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          <motion.div ref={scope}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={idx}
                className={`${
                  idx > 3 ? "text-purple" : "dark:text-white text-black"
                } opacity-0`}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
