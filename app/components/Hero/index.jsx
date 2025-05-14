"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { montserrat, playfair, poppins } from "@lib/font";

const backgroundImages = [
  "/projects/5marla.jpg",
  "/projects/5marla.png",
  "/projects/7marla.jpg",
  "/projects/10marla.jpg",
  "/projects/10marla.png",
  "/projects/7marlapair.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[70vh] md:h-screen w-full overflow-hidden bg-black">
      {/* Animated Backgrounds */}
      {backgroundImages.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1 }}
          animate={{
            opacity: i === index ? 1 : 0,
            scale: i === index ? 1.15 : 1.05,
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-cover bg-center md:bg-center transition-all"
          style={{
            backgroundImage: `url(${img})`,
            zIndex: i === index ? 1 : 0,
          }}
        />
      ))}

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Top gradient for navbar */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/70 to-transparent z-20" />

      {/* Hero Content */}
      <div className="relative z-30 flex flex-col justify-center items-center h-full text-center px-4 text-white">
        <h1
          className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-4 ${montserrat.className}`}
          style={{ color: "var(--color-accent)" }}
        >
          We Build With{" "}
          <span style={{ color: "white" }}>
            <Typewriter
              words={["Ihsan", "Honesty", "Trust", "Fairness", "Excellence"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </span>
        </h1>
        <p
          className={`hidden md:flex max-w-3xl text-sm sm:text-base md:text-lg  ${poppins.className}`}
          style={{ color: "var(--color-lightgray)" }}
        >
          “With the will of Allah, we build with Ihsan — crafting spaces with
          sincerity, trust, and excellence, knowing that every structure we
          create is a responsibility before Him and a service to humanity.”
        </p>{" "}
        <p
          className={`flex md:hidden max-w-3xl text-sm sm:text-base md:text-lg italic ${poppins.className}`}
          style={{ color: "var(--color-lightgray)" }}
        >
          "With Allah's will, we build with Ihsan — sincere, trustworthy, and
          excellent, serving humanity and fulfilling our duty to Him."
        </p>
      </div>
    </div>
  );
}
