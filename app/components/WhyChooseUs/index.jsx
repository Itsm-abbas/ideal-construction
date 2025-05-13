"use client";

import Title from "@components/Title";
import { poppins } from "@lib/font";
import { motion } from "framer-motion";
import {
  FaDraftingCompass,
  FaClipboardCheck,
  FaBalanceScale,
  FaClock,
  FaHandshake,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaDraftingCompass size={36} className="text-accent" />,
    title: "Clarity in Planning",
    detail:
      "We begin every project with proper architectural design and strategic planning — no guesswork, just thoughtful steps to protect your investment.",
  },
  {
    icon: <FaClipboardCheck size={36} className="text-accent" />,
    title: "Certified Materials",
    detail:
      "We provide material lab reports so you know the quality of steel, bricks, and cement — transparency backed by proof, not just promises.",
  },
  {
    icon: <FaBalanceScale size={36} className="text-accent" />,
    title: "Fair & Honest Pricing",
    detail:
      "We don’t believe in shortcuts or inflated costs. You pay for what you get — and what you get is quality, care, and craftsmanship.",
  },
  {
    icon: <FaClock size={36} className="text-accent" />,
    title: "On-Time Execution",
    detail:
      "Time is a trust. We use real tools and real scheduling to ensure your project moves forward — without chaos or unplanned delays.",
  },
  {
    icon: <FaHandshake size={36} className="text-accent" />,
    title: "Open Communication",
    detail:
      "We update you at every milestone. No surprises, no silence — just real updates and faith-driven service from start to finish.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-[#fdfdfd] py-24 px-6 md:px-20  overflow-hidden">
      {/* Soft Background Circle */}
      <div className="absolute top-[-60px] left-[-60px] w-[200px] h-[200px] bg-accent/10 rounded-full z-0"></div>

      {/* Heading */}
      <div className="flex items-center justify-center mb-10">
        <Title title={"Why Choose Us?"} shadow={true} gradient={true} />
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 bg-accent/10 p-4 rounded-full text-[var(--color-primary2)]">
              {item.icon}
            </div>
            <h3 className={`text-xl text-primary mb-3 ${poppins.className}`}>
              {item.title}
            </h3>
            <p className="text-gray-700 font-body leading-relaxed">
              {item.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
