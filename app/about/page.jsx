"use client";
import { motion } from "motion/react";

import Image from "next/image";

import Navbar from "@components/Navbar";
import { montserrat, playfair, poppins } from "@lib/font";
import Title from "@components/TitleWF";
import { FaCheck, FaDollarSign, FaEye } from "react-icons/fa";
import { LucideCircleDollarSign, ShieldCheck } from "lucide-react";

const AboutPage = () => {
  const whatsappLink = `https://wa.me/923209840974?text=Hello%2C%20I%20want%20a%20quote%20for%20construction%20work`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const skills = [
    { name: "Design Thinking", icon: "🧠" },
    { name: "Business Strategy", icon: "📈" },
    { name: "Market Research", icon: "🔍" },
    { name: "Leadership", icon: "👥" },
    { name: "Risk Analysis", icon: "🎯" },
    { name: "Innovation", icon: "💡" },
    { name: "Networking", icon: "🕸️" },
    { name: "Resilience", icon: "🛡️" },
    { name: "Communication", icon: "🗣️" },
    { name: "Problem Solving", icon: "🧩" },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen ">
        <div className="max-w-6xl mx-auto px-6 py-28 relative z-10">
          {/* Vision, Mission & Values Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-32"
          >
            <motion.div variants={itemVariants} className="mb-20">
              <Title title={"Our Foundation"} />
            </motion.div>

            {/* Vision Card */}
            <motion.div
              variants={itemVariants}
              className="mb-12 bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-start mb-6">
                <div className="bg-[var(--color-primary2)]/10 p-3 rounded-lg text-[var(--color-primary2)] mr-5">
                  <FaEye className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <h3
                    className={`${poppins.className} text-2xl font-bold text-gray-900 mb-4`}
                  >
                    Vision
                  </h3>
                  <p className="text-gray-700 italic">
                    "With the will of Allah, we build with Ihsan (Allah sees all
                    that we do) — crafting spaces with sincerity, trust, and
                    excellence, knowing that every structure we create is a
                    responsibility before Him and a service to humanity."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              variants={itemVariants}
              className="mb-12 bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-start mb-6">
                <div className="bg-[var(--color-primary2)]/10 p-3 rounded-lg text-[var(--color-primary2)] mr-5">
                  <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <h3
                    className={`${poppins.className} text-2xl font-bold text-gray-900 mb-4`}
                  >
                    Mission
                  </h3>
                  <p className="text-gray-700">
                    Our mission is to implement the will of Allah Almighty in
                    all our business dealings by consistently meeting our
                    customers' expectations in the services we offer. Guided by
                    Shariah-based business practices and ethics, we deliver
                    high-quality, transparent, and cost-effective construction
                    solutions. With a team of skilled architects and
                    professionals, we ensure precision in design, verified
                    material quality, and efficient project management, creating
                    durable and trusted spaces that meet our clients' needs.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Values Card */}
            <motion.div
              variants={itemVariants}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-start mb-6">
                <div className="bg-[var(--color-primary2)]/10 p-3 rounded-lg text-[var(--color-primary2)] mr-5">
                  <LucideCircleDollarSign className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <h3
                    className={`${poppins.className} text-2xl font-bold text-gray-900 mb-4`}
                  >
                    Core Values
                  </h3>
                  <div className="space-y-6">
                    {/* Ihsan */}
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-4">
                        <span className="text-green-600 font-bold">
                          <FaCheck />
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Ihsan</h4>
                        <p className="text-gray-600">
                          Doing everything with excellence, sincerity, and the
                          awareness that Allah sees all that we do.
                        </p>
                      </div>
                    </div>

                    {/* Honesty */}
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-4">
                        <span className="text-green-600 font-bold">
                          <FaCheck />
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Honesty</h4>
                        <p className="text-gray-600">
                          Truthfulness in every promise, every price, and every
                          project update.
                        </p>
                      </div>
                    </div>

                    {/* Trustworthiness */}
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-4">
                        <span className="text-green-600 font-bold">
                          <FaCheck />
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">
                          Trustworthiness
                        </h4>
                        <p className="text-gray-600">
                          Fulfilling every commitment as a sacred trust, whether
                          to clients, partners, or our team.
                        </p>
                      </div>
                    </div>

                    {/* Fairness & Justice */}
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-4">
                        <span className="text-green-600 font-bold">
                          <FaCheck />
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">
                          Fairness & Justice
                        </h4>
                        <p className="text-gray-600">
                          Ensuring fairness in pricing, treatment, and decisions
                          — for both clients and laborers.
                        </p>
                      </div>
                    </div>

                    {/* Gentleness & Kindness */}
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-4">
                        <span className="text-green-600 font-bold">
                          <FaCheck />
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">
                          Gentleness & Kindness
                        </h4>
                        <p className="text-gray-600">
                          Dealing with clients, workers, and suppliers with
                          compassion and respect.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          {/* Hero Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-16 items-center mb-32"
          >
            <div>
              <motion.div variants={itemVariants} className="mb-8">
                <span className="text-sm font-medium text-blue-600 bg-blue-100/50 px-3 py-1 rounded-full">
                  ENTREPRENEUR & BUSINESS LEADER
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${playfair.className}`}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary2)] to-[var(--color-primary1)]">
                  Sanood Anwar
                </span>
              </motion.h1>

              <motion.div variants={itemVariants} className="mb-8">
                <div className="w-32 h-1.5 bg-gradient-to-r from-[var(--color-primary2)] to-[var(--color-primary1)] rounded-full" />
                <div className="w-24 h-1.5 bg-gradient-to-r from-[var(--color-primary1)] to-[var(--color-primary2)] rounded-full mt-1 opacity-70" />
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-700 mb-8 leading-relaxed"
              >
                Business innovator with a passion for creating impactful
                solutions through strategic leadership and entrepreneurial
                vision.
              </motion.p>
            </div>

            <motion.div
              variants={fadeIn}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white/90 transform rotate-1 hover:rotate-0 transition-transform duration-500"
            >
              <Image
                src="/sanood.jpg"
                alt="Sanood Anwar"
                height={500}
                width={850}
                className="object-cover transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 1.2 } }}
                  className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg"
                >
                  <p className="text-sm text-[var(--color-primary1)]">
                    "Success comes from doing ordinary things extraordinarily
                    well."
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          {/* Timeline Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-32"
          >
            <motion.div variants={itemVariants} className="mb-12">
              <h2
                className={`text-3xl md:text-4xl font-bold mb-6 text-gray-900 ${montserrat.className}`}
              >
                My Journey
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-primary2)] to-[var(--color-primary1)] rounded-full" />
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 h-full w-0.5 bg-gradient-to-b from-[var(--color-primary2)] via-[var(--color-primary1)] to-transparent" />

              {/* Timeline items */}
              <motion.div
                variants={itemVariants}
                className="relative pl-16 pb-12"
              >
                <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-white border-4 border-blue-500 shadow-md flex items-center justify-center text-blue-600 font-bold">
                  01
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100/70">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Islamia College Peshawar
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    Intermediate Studies
                  </p>
                  <p className="text-gray-700">
                    Built the foundation of my academic journey with a focus on
                    business principles and leadership development.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative pl-16 pb-12"
              >
                <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-white border-4 border-teal-500 shadow-md flex items-center justify-center text-teal-600 font-bold">
                  02
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100/70">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Islamia University of Bahawalpur
                  </h3>
                  <p className="text-teal-600 font-medium mb-3">
                    Entrepreneurship & Business Innovation
                  </p>
                  <p className="text-gray-700">
                    Specialized in developing innovative business models and
                    honing my entrepreneurial mindset.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative pl-16">
                <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-white border-4 border-blue-400 shadow-md flex items-center justify-center text-blue-500 font-bold">
                  03
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100/70">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Ideal Constructions
                  </h3>
                  <p className="text-blue-400 font-medium mb-3">
                    Chief Operating Officer
                  </p>
                  <p className="text-gray-700">
                    Leading strategic initiatives and driving operational
                    excellence in a competitive market landscape.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          {/* Philosophy Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-32"
          >
            <motion.div variants={itemVariants} className="mb-12">
              <h2
                className={`text-3xl md:text-4xl font-bold mb-6 text-gray-900 ${montserrat.className}`}
              >
                Entrepreneurial Philosophy
              </h2>
              <div
                className={` w-24 h-1 bg-gradient-to-r from-[var(--color-primary2)] to-[var(--color-primary1)] rounded-full`}
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-[var(--color-primary2)] to-[var(--color-primary1)] rounded-3xl p-0.5 shadow-2xl"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-[calc(1.5rem-1px)] p-6 md:p-10 border border-white/10">
                <div className="max-w-3xl mx-auto">
                  <motion.blockquote
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      transition: { delay: 0.5 },
                    }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl text-white mb-8 leading-snug"
                  >
                    "I believe in effectual entrepreneurship—creating
                    opportunities from available means rather than waiting for
                    perfect conditions."
                  </motion.blockquote>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.7 },
                    }}
                    viewport={{ once: true }}
                    className="text-lg text-blue-100 leading-relaxed"
                  >
                    This approach emphasizes flexibility, creativity, and
                    strategic action—transforming constraints into advantages
                    and building success through iterative development.
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          {/* Skills Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-32"
          >
            <motion.div variants={itemVariants} className="mb-12">
              <h2
                className={`text-3xl md:text-4xl mb-6 text-gray-900 ${montserrat.className}`}
              >
                Core Competencies
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-primary2)] to-[var(--color-primary1)] rounded-full" />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { delay: index * 0.1 + 0.4, duration: 0.6 },
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white p-5 rounded-xl shadow-sm border border-gray-200/70 hover:shadow-md hover:border-blue-300 transition-all group"
                >
                  <div className="text-3xl mb-3 group-hover:text-blue-600 transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="font-medium text-gray-800 group-hover:text-blue-700 transition-colors">
                    {skill.name}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          {/* CTA Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center"
          >
            <motion.div variants={itemVariants} className="mb-12">
              <h2
                className={`text-4xl font-bold mb-6 text-gray-900 ${playfair.className}`}
              >
                Let's Build Something Extraordinary
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-primary2)] to-[var(--color-primary1)] rounded-full mx-auto" />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              I'm passionate about creating solutions with real impact—let's
              collaborate on your next challenge.
            </motion.p>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <a href={whatsappLink}>
                <button className="cursor-pointer bg-[var(--color-primary2)] px-5 py-3 rounded-sm text-white">
                  <span className="relative z-10">Get In Touch</span>
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
