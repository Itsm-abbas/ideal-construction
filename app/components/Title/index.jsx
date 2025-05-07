import React from "react";
import { motion } from "framer-motion";
import { montserrat } from "@lib/font";

const Title = ({
  title,
  classes = "",
  delay = 0.3,
  duration = 0.8,
  underline = false,
  shadow = true,
  gradient = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay,
          duration,
          ease: [0.16, 0.77, 0.47, 0.97], // Custom easing curve
        },
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative inline-block ${classes}`}
    >
      <motion.h2
        className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight ${
          montserrat.className
        } ${
          gradient
            ? "bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary2)] to-[var(--color-primary1)]"
            : "text-[var(--color-primary1)]"
        } ${shadow ? "drop-shadow-lg" : ""}`}
      >
        {title}
        {underline && (
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{
              scaleX: 1,
              transition: {
                delay: delay + 0.2,
                duration: duration * 0.8,
                ease: "backOut",
              },
            }}
            className="absolute left-0 -bottom-2 w-full h-1 bg-[var(--color-accent)] origin-left"
          />
        )}
      </motion.h2>

      {/* Decorative elements */}
      {shadow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 0.2,
            y: 0,
            transition: {
              delay: delay + 0.1,
              duration: duration * 1.2,
            },
          }}
          className="absolute -z-10 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-gray-400/20 -bottom-3 left-0 w-full"
          aria-hidden="true"
        >
          {title}
        </motion.span>
      )}
    </motion.div>
  );
};

export default Title;
