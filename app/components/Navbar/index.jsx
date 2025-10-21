"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { poppins } from "@lib/font";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar({ home }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const whatsappLink = `https://wa.me/923209840974?text=Hello%2C%20I%20want%20a%20quote%20for%20construction%20work`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Determine text and background colors based on scroll and home page
  const getNavStyles = () => {
    if (isOpen) {
      return {
        bg: "bg-white",
        text: "text-gray-800",
        logoText: "text-primary",
      };
    }

    if (scrolled) {
      return {
        bg: "bg-white/95 backdrop-blur-md shadow-lg",
        text: "text-gray-800",
        logoText: "text-primary",
      };
    }

    if (home) {
      return {
        bg: "bg-transparent",
        text: "text-white",
        logoText: "text-white",
      };
    }

    return {
      bg: "bg-white shadow-sm",
      text: "text-gray-800",
      logoText: "text-primary",
    };
  };

  const styles = getNavStyles();

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-500 ${styles.bg} ${styles.text}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.img
              src="/logo2.png"
              alt="IDEAL Constructions"
              className="w-12 h-12 md:w-14 md:h-14 drop-shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
            <div className="hidden sm:block">
              <h1
                className={`${poppins.className} font-bold text-xl ${styles.logoText}`}
              >
                IDEAL Constructions
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <Link href={link.href} key={idx} className="relative group">
                <span
                  className={`${poppins.className} font-medium transition-colors duration-200 hover:text-accent`}
                >
                  {link.name}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <div
              className={`flex items-center gap-2 text-sm ${
                scrolled || !home ? "text-gray-600" : "text-white/90"
              }`}
            >
              <Phone size={16} className="text-accent" />
              <span>+92 320 9840974</span>
            </div>
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent hover:bg-accent/90 px-6 py-3 rounded-lg font-semibold text-primary transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Get Quote
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="lg:hidden p-2 rounded-lg focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <X size={28} className="text-gray-800" />
            ) : (
              <Menu
                size={28}
                className={scrolled || !home ? "text-gray-800" : "text-white"}
              />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-screen w-80 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-between items-center mb-8">
                  <Link
                    href="/"
                    className="flex items-center gap-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <img
                      src="/logo2.png"
                      alt="IDEAL Constructions"
                      className="w-12 h-12"
                    />
                    <h1
                      className={`${poppins.className} font-bold text-lg text-primary`}
                    >
                      IDEAL
                    </h1>
                  </Link>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-full bg-gray-100"
                  >
                    <X size={20} className="text-gray-800" />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <ul className="space-y-4">
                  {navLinks.map((link, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * idx }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 px-4 text-gray-800 font-medium hover:bg-mint rounded-lg transition-colors duration-200 border-l-4 border-transparent hover:border-accent"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Contact Info */}
                <div className="mt-8 p-4 bg-mint rounded-lg">
                  <p className="font-semibold text-primary mb-2">Contact Us</p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p className="flex items-center gap-2">
                      <Phone size={16} className="text-accent" />
                      +92 320 9840974
                    </p>
                    <p>🕒 Mon-Fri: 9AM-6PM</p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    onClick={() => setIsOpen(false)}
                    className="block text-center py-4 px-6 rounded-lg font-bold text-primary bg-accent hover:bg-accent/90 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} />
                    Get Free Quote
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
