"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function ScrollToBottom() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      onClick={scrollToBottom}
      className={`fixed right-6 bottom-6 z-50 p-3 rounded-full shadow-lg bg-[var(--color-primary1)] text-white transition-opacity duration-300 ${
        isAtTop ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isAtTop ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      aria-label="Scroll to bottom"
    >
      <ArrowDown className="w-5 h-5" />
    </motion.button>
  );
}
