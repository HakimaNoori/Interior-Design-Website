import { animate } from "framer-motion";
import { delay } from "framer-motion/dom";

export const SlideUp = (delay) => {
    return {
        initial: {
            y: 50,
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.3,
                delay,
            },
        },
    };
};

export const SlideLeft = (delay) => {
  return {
    initial: {
      x: 50,
      opacity: 0,
    },
      animate: {
        x:0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };
};