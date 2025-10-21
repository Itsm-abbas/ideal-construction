"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ArrowDown, Star, Shield, Award } from "lucide-react";
import { montserrat, playfair, poppins } from "@lib/font";

const backgroundImages = [
  "/projects/5marla.jpg",
  "/projects/5marla.png",
  "/projects/7marla.jpg",
  "/projects/10marla.jpg",
  "/projects/10marla.png",
  "/projects/7marlapair.jpg",
];

const features = [
  { icon: Shield, text: "Trusted Construction" },
  { icon: Star, text: "Premium Quality" },
];

export default function Hero() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    if (typeof window === "undefined") return;
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return; // ✅ Prevent SSR errors

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % backgroundImages.length);
        setIsVisible(true);
      }, 500);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary">
      {/* Animated Backgrounds */}
      <div className="absolute inset-0">
        {backgroundImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: i === index ? 1 : 0,
              scale: i === index ? 1 : 1.1,
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(10, 40, 78, 0.4), rgba(10, 40, 78, 0.6)), url(${img})`,
            }}
          />
        ))}
      </div>

      {/* Animated Overlay Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/60 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-primary/20 to-primary/40 z-10" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-accent/10 rounded-full"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
              scale: 0,
            }}
            animate={{
              y: [null, -100, null],
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className={`text-sm text-white ${poppins.className}`}>
              Trusted Construction Since 2023
            </span>
          </motion.div> */}

          {/* Main Heading */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${montserrat.className}`}
            >
              <span className="text-white">We Build </span>
              <br />
              <span className="text-accent">
                With{" "}
                <Typewriter
                  words={[
                    "Ihsan",
                    "Honesty",
                    "Trust",
                    "Fairness",
                    "Excellence",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </motion.h1>
          </AnimatePresence>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`hidden sm:flex max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl leading-relaxed font-quote text-white/90 mb-8`}
          >
            "With the will of Allah, we build with Ihsan — crafting spaces with
            sincerity, trust, and excellence, knowing that every structure we
            create is a responsibility before Him and a service to humanity."
          </motion.p>

          {/* Short version for mobile */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`md:hidden max-w-md mx-auto text-base leading-relaxed font-quote  text-white/90 mb-8`}
          >
            "With Allah's will, we build with Ihsan — sincere, trustworthy, and
            excellent, serving humanity and fulfilling our duty to Him."
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3"
              >
                <feature.icon size={20} className="text-accent" />
                <span
                  className={`text-white text-sm font-medium ${poppins.className}`}
                >
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              href="https://wa.me/923209840974?text=Hello%2C%20I%20want%20a%20quote%20for%20construction%20work"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent hover:bg-accent/90 text-primary font-bold px-8 py-4 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2 text-lg"
            >
              <span>Get Free Consultation</span>
            </motion.a>

            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-lg backdrop-blur-sm transition-all duration-300"
            >
              View Our Projects
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors duration-300"
          aria-label="Scroll to content"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={32} />
          </motion.div>
        </motion.button>

        {/* Background Image Indicator */}
        <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-2">
          {backgroundImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-accent scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
