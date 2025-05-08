import React from "react";
import { motion } from "motion/react";

import { poppins } from "@lib/font";

const Subtitle = ({
  subtitle,
  classes = "",
  delay = 0.4,
  duration = 0.8,
  align = "center",
  maxWidth = "full",
  withLine = true,
}) => {
  const alignmentClasses = {
    left: "text-left mr-auto",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

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
      className={`relative mt-1 ${maxWidth} ${alignmentClasses[align]} ${classes}`}
    >
      <motion.p
        className={`md:text-lg text-gray-600/90 leading-relaxed ${poppins.className}`}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
};

export default Subtitle;
