"use client";
import { playfair, poppins, montserrat, roboto } from "@lib/font";
import { motion } from "motion/react";
import Link from "next/link";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { IoIosConstruct } from "react-icons/io";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Residential Construction",
    "Commercial Buildings",
    "Renovation Services",
    "Project Management",
    "Architectural Design",
  ];

  const socialLinks = [
    {
      icon: <FaWhatsapp className="w-4 h-4" />,
      url: "https://wa.me/923209840974",
      name: "WhatsApp",
    },
    {
      icon: <FaInstagram className="w-4 h-4" />,
      url: "https://instagram.com/idealconstructions",
      name: "Instagram",
    },
    {
      icon: <FaFacebook className="w-4 h-4" />,
      url: "https://facebook.com/idealconstructions",
      name: "Facebook",
    },
    {
      icon: <FaLinkedin className="w-4 h-4" />,
      url: "https://linkedin.com/company/idealconstructions",
      name: "LinkedIn",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-primary to-primary/95 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Branding Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-accent/20 p-2 rounded-lg">
                <IoIosConstruct className="w-6 h-6 text-accent" />
              </div>
              <h3 className={`text-2xl font-bold ${montserrat.className}`}>
                IDEAL Constructions
              </h3>
            </div>
            <p
              className={`text-white/80 mb-6 leading-relaxed ${roboto.className}`}
            >
              Building with Ihsan (excellence), trust, and Islamic values. We
              create spaces that stand the test of time while serving humanity.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20 hover:border-accent hover:bg-accent/20 text-white hover:text-accent transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4
              className={`text-lg font-semibold mb-6 ${poppins.className} text-accent`}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={item.href}
                    className={`text-white/80 hover:text-accent transition-colors duration-300 ${roboto.className}`}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4
              className={`text-lg font-semibold mb-6 ${poppins.className} text-accent`}
            >
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span
                    className={`text-white/80 hover:text-accent transition-colors duration-300 cursor-pointer ${roboto.className}`}
                  >
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4
              className={`text-lg font-semibold mb-6 ${poppins.className} text-accent`}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <motion.li
                variants={itemVariants}
                className="flex items-start gap-3"
              >
                <FaPhoneAlt className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className={`text-white/80 ${roboto.className}`}>
                    +92 320 9840974
                  </p>
                  <p className="text-white/60 text-sm">Mon-Fri: 9AM-6PM</p>
                </div>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="flex items-start gap-3"
              >
                <FaEnvelope className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <p className={`text-white/80 ${roboto.className}`}>
                  Idealconstructionsic@gmail.com
                </p>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="flex items-start gap-3"
              >
                <FaMapMarkerAlt className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <p className={`text-white/80 ${roboto.className}`}>
                  77 Square, E-block, Multi-Garden B-17, Islamabad
                </p>
              </motion.li>
            </ul>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/923209840974"
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary font-semibold px-4 py-3 rounded-lg mt-6 transition-all duration-300 w-full justify-center"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p
            className={`text-white/60 text-center md:text-left ${roboto.className} mb-4 md:mb-0`}
          >
            © {new Date().getFullYear()} IDEAL Constructions. All rights
            reserved.
            <span className="block md:inline md:ml-2">Built with Ihsan.</span>
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className={`text-white/60 hover:text-accent transition-colors text-sm ${roboto.className}`}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className={`text-white/60 hover:text-accent transition-colors text-sm ${roboto.className}`}
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
