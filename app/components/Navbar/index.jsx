"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { poppins } from "@lib/font";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isOpen ? "bg-white" : ""
      } ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm text-black"
          : home
          ? "text-white"
          : "text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <motion.img
            src="/logo2.png"
            alt="logo"
            className="w-12 md:w-16"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <Link href={link.href} key={idx} className="relative group">
              <span
                className={`${poppins.className} transition-colors duration-200`}
              >
                {link.name}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[var(--color-accent)] group-hover:w-full transition-all duration-300 ease-out"></span>
            </Link>
          ))}

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            }}
            className="bg-[var(--color-primary2)] hover:bg-[#125e53] px-5 py-2.5 rounded-lg shadow font-medium transition-all duration-300 text-white"
          >
            Get a Quote
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden p-2 rounded-lg focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? (
            <X size={28} className="text-gray-800" />
          ) : (
            <Menu
              size={28}
              className={scrolled ? "text-gray-800" : "text-white"}
            />
          )}
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
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
                  <div className="flex justify-end mb-8">
                    <motion.button
                      onClick={() => setIsOpen(false)}
                      whileHover={{ rotate: 90 }}
                      className="p-2 rounded-full bg-gray-100"
                    >
                      <X size={24} className="text-gray-800" />
                    </motion.button>
                  </div>

                  {/* Navigation Links */}
                  <motion.ul className="space-y-2">
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
                          className="block py-4 px-4 text-gray-800 font-medium hover:bg-gray-50 rounded-lg transition-colors duration-200"
                        >
                          <motion.div whileHover={{ x: 5 }}>
                            {link.name}
                          </motion.div>
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8"
                  >
                    <a
                      href={whatsappLink}
                      target="_blank"
                      className="block text-center py-4 px-6 rounded-lg font-bold text-white bg-gradient-to-r from-[var(--color-primary2)] to-[var(--color-primary1)] hover:shadow-lg transition-all duration-300"
                    >
                      Get a Quote
                    </a>
                  </motion.div>

                  {/* Investor Program */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-6 p-4 bg-blue-50 rounded-lg"
                  >
                    <p className="text-sm text-gray-700">
                      <span className="font-bold">New:</span>{" "}
                      <Link
                        href="/investor-program"
                        onClick={() => setIsOpen(false)}
                        className="text-[var(--color-primary2)] hover:underline font-medium"
                      >
                        Investor Partnership Program
                      </Link>
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
