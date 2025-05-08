"use client";
import { playfair } from "@lib/font";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

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

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200/50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          {/* Branding Column */}
          <motion.div variants={itemVariants}>
            <h3 className={`text-2xl font-bold mb-4 ${playfair.className}`}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600">
                Sanood Anwar
              </span>
            </h3>
            <p className="text-gray-600 mb-6">
              Business innovator creating impactful solutions through strategic
              leadership.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaLinkedin className="w-5 h-5" />, url: "#" },
                { icon: <FaTwitter className="w-5 h-5" />, url: "#" },
                { icon: <FaGithub className="w-5 h-5" />, url: "#" },
                { icon: <FaEnvelope className="w-5 h-5" />, url: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  variants={itemVariants}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="bg-white p-2 rounded-full shadow-sm border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {["About", "Services", "Projects", "Blog"].map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <motion.li variants={itemVariants} className="flex items-start">
                <span className="text-gray-400 mr-3">✉️</span>
                <span className="text-gray-600">
                  Idealconstructionsic@gmail.com
                </span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <span className="text-gray-400 mr-3">📱</span>
                <span className="text-gray-600">+92320-9840974</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <span className="text-gray-400 mr-3">🏢</span>
                <span className="text-gray-600">
                  77 Square, E-block, Multi-Garden B-17, Islamabad
                </span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Stay Updated
            </h4>
            <p className="text-gray-600 mb-4">
              Subscribe to my newsletter for insights and updates.
            </p>
            <motion.form whileHover={{ scale: 1.01 }} className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-4 py-2 rounded-r-lg hover:shadow-md transition-all"
              >
                Join
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
          viewport={{ once: true }}
          className="border-t border-gray-200/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Sanood Anwar. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-gray-500 hover:text-blue-600 transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-blue-600 transition-colors text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-blue-600 transition-colors text-sm"
            >
              Cookies
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
