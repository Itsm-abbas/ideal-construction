"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";

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

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 shadow-lg ${
        isOpen ? "bg-white" : ""
      } ${
        scrolled && home && "md:bg-white/95 md:backdrop-blur-md md:shadow-sm"
      } ${!home && " md:bg-white"} `}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center ${
          home == false && "text-black "
        } ${home && scrolled && "text-black"}  
        ${home && !scrolled && "text-white"}`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo2.png" alt="logo" className="w-14 md:w-16" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <Link href={link.href} key={idx} className="relative group">
              <span
                className={`${poppins.className}  transition-colors duration-200 `}
              >
                {link.name}
              </span>
              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[var(--color-accent)] group-hover:w-full transition-all duration-300 ease-out"></span>
            </Link>
          ))}

          {/* CTA Button */}
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
        <button
          className="md:hidden p-2 rounded-lg focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X
              size={28}
              className={scrolled ? "text-gray-800" : "text-white"}
            />
          ) : (
            <Menu
              size={28}
              className={scrolled ? "text-gray-800" : "text-white"}
            />
          )}
        </button>

        {/* Mobile Dropdown */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg px-6 py-4 space-y-4"
          >
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-gray-800 font-medium hover:bg-gray-50 rounded-lg transition-colors duration-200 border-b border-gray-100"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              className="block text-center py-3 px-4 rounded-lg font-medium text-white bg-[var(--color-primary2)] hover:bg-[#125e53] transition-colors duration-200"
            >
              Get a Quote
            </a>
            <div className="text-center text-sm text-gray-600 pt-2">
              <span>
                📊 <strong>New:</strong>{" "}
                <Link
                  href="/investor-program"
                  className="text-[var(--color-primary2)] hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  Investor Partnership Program
                </Link>
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
