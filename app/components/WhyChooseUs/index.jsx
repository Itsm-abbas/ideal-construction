"use client";

import Title from "@components/Title";
import { poppins, montserrat, roboto } from "@lib/font";
import { motion } from "framer-motion";
import {
  FaDraftingCompass,
  FaClipboardCheck,
  FaBalanceScale,
  FaClock,
  FaHandshake,
  FaShieldAlt,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaDraftingCompass className="text-accent" />,
    title: "Clarity in Planning",
    detail:
      "We begin every project with proper architectural design and strategic planning — no guesswork, just thoughtful steps to protect your investment.",
  },
  {
    icon: <FaClipboardCheck className="text-accent" />,
    title: "Certified Materials",
    detail:
      "We provide material lab reports so you know the quality of steel, bricks, and cement — transparency backed by proof, not just promises.",
  },
  {
    icon: <FaBalanceScale className="text-accent" />,
    title: "Fair & Honest Pricing",
    detail:
      "We don't believe in shortcuts or inflated costs. You pay for what you get — and what you get is quality, care, and craftsmanship.",
  },
  {
    icon: <FaClock className="text-accent" />,
    title: "On-Time Execution",
    detail:
      "Time is a trust. We use real tools and real scheduling to ensure your project moves forward — without chaos or unplanned delays.",
  },
  {
    icon: <FaHandshake className="text-accent" />,
    title: "Open Communication",
    detail:
      "We update you at every milestone. No surprises, no silence — just real updates and faith-driven service from start to finish.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-b from-white to-mint/20 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal/5 rounded-full blur-3xl" />

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal/10 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className={`text-sm font-medium ${poppins.className}`}>
              Our Commitment
            </span>
          </div>

          <Title title={"Why Choose Us?"} shadow={true} gradient={true} />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed ${roboto.className}`}
          >
            We build with{" "}
            <span className="text-accent font-semibold">Ihsan</span>{" "}
            (excellence) and{" "}
            <span className="text-teal font-semibold">Amanah</span> (trust) —
            ensuring every project reflects our commitment to quality,
            transparency, and Islamic values.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/80 hover:border-accent/20 overflow-hidden h-full">
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-mint/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Accent Border Top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-teal transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                {/* Card Content */}
                <div className="relative z-10 p-8 flex flex-col items-center text-center h-full">
                  {/* Icon Container */}
                  <motion.div
                    className="mb-6 bg-gradient-to-br from-accent/10 to-teal/10 p-5 rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300"
                    whileHover={{
                      scale: 1.05,
                      rotate: 5,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-3xl">{item.icon}</div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className={`text-xl font-bold text-primary mb-4 ${montserrat.className} group-hover:text-primary/90 transition-colors duration-300`}
                  >
                    {item.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className={`text-gray-600 leading-relaxed flex-1 ${roboto.className} group-hover:text-gray-700 transition-colors duration-300`}
                  >
                    {item.detail}
                  </motion.p>

                  {/* Decorative Bottom Element */}
                  <motion.div
                    className="mt-6 w-12 h-1 bg-gradient-to-r from-accent to-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-accent/20 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-teal/20 rounded-full"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.7,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl px-6 py-4 shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <FaShieldAlt className="text-accent text-xl" />
            <span
              className={`text-gray-700 font-semibold ${poppins.className}`}
            >
              <span className="text-primary">500+</span> Projects Completed with
              Trust & Excellence
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
