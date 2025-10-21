"use client";
import React from "react";
import { motion } from "motion/react";
import Title from "@components/Title";
import Subtitle from "@components/Subtitle";
import { montserrat, poppins, roboto, playfair } from "@lib/font";
import {
  FaStarAndCrescent,
  FaHandshake,
  FaBalanceScale,
  FaHeart,
  FaShieldAlt,
  FaMosque,
  FaQuran,
  FaHandHoldingHeart,
  FaCheckDouble,
  FaBusinessTime,
} from "react-icons/fa";
import { GiStonePath } from "react-icons/gi";
import { IoMdConstruct } from "react-icons/io";
import { BsLightbulb } from "react-icons/bs";

const Values = () => {
  const values = [
    {
      icon: FaCheckDouble,
      title: "Ihsan",
      quote:
        "Verily, Allah loves when one of you does a job, he perfects it. (Al-Bayhaqi)",
      description:
        "Doing everything with excellence, sincerity, and the awareness that Allah sees all that we do - from laying bricks to customer service, we strive for perfection as an act of worship.",
      color: "green",
      decorative: FaStarAndCrescent,
    },
    {
      icon: FaHandshake,
      title: "Honesty",
      quote:
        "The truthful and trustworthy merchant will be with the prophets, the truthful, and the martyrs. (Tirmidhi)",
      description:
        "Truthfulness in every promise, every price quote, and every project update - we consider honesty a sacred trust between us and Allah SWT before it's between us and our clients.",
      color: "blue",
      decorative: FaHandshake,
    },
    {
      icon: FaShieldAlt,
      title: "Trustworthiness (Amanah)",
      quote:
        "The signs of a hypocrite are three: when he speaks, he lies; when he promises, he breaks it; and when he is entrusted, he betrays. (Bukhari)",
      description:
        "Fulfilling every commitment as a sacred trust - whether to clients, partners, or our team. We handle your project as an Amanah from Allah SWT.",
      color: "purple",
      decorative: FaShieldAlt,
    },
    {
      icon: FaBalanceScale,
      title: "Fairness & Justice (Adl)",
      quote: "O you who believe! Stand out firmly for justice... (Quran 4:135)",
      description:
        "Ensuring fairness in pricing, treatment, and decisions - for both clients and laborers. We follow the Islamic principle that the worker deserves his wages before his sweat dries.",
      color: "amber",
      decorative: FaBalanceScale,
    },
    {
      icon: FaHandHoldingHeart,
      title: "Gentleness & Kindness (Rifq)",
      quote: "Allah is Kind and loves kindness in all matters. (Bukhari)",
      description:
        "Dealing with clients, workers, and suppliers with the compassion and respect taught by our Prophet (ﷺ). We believe kindness in business is both Sunnah and good practice.",
      color: "pink",
      decorative: FaHandHoldingHeart,
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: {
        bg: "bg-green-100",
        text: "text-green-600",
        accent: "text-green-100",
      },
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        accent: "text-blue-100",
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        accent: "text-purple-100",
      },
      amber: {
        bg: "bg-amber-100",
        text: "text-amber-600",
        accent: "text-amber-100",
      },
      pink: {
        bg: "bg-pink-100",
        text: "text-pink-600",
        accent: "text-pink-100",
      },
    };
    return colors[color] || colors.green;
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-mint/30 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

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
              Our Foundation
            </span>
          </div>

          <Title
            title={"Our Guiding Principles"}
            shadow={true}
            gradient={true}
          />

          <Subtitle
            subtitle={
              "Built on the foundation of Quranic values and Prophetic teachings"
            }
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed ${roboto.className}`}
          >
            Every brick we lay and every promise we make is grounded in Islamic
            principles of excellence, trust, and service to humanity.
          </motion.p>
        </motion.div>

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Vision Card */}
          <motion.div
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/80 hover:border-accent/20 overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -8 }}
          >
            <div className="absolute -right-10 -top-10 text-gray-100 text-9xl opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <FaMosque />
            </div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-teal transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

            <div className="relative z-10 p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-xl text-blue-600 mr-4 text-2xl">
                  <BsLightbulb />
                </div>
                <h3
                  className={`text-2xl font-bold text-gray-900 ${montserrat.className}`}
                >
                  Our Vision
                </h3>
              </div>
              <p className={`text-gray-700 text-lg leading-relaxed  italic`}>
                "With the will of Allah, we build with Ihsan (Allah sees all
                that we do) — crafting spaces with sincerity, trust, and
                excellence, knowing that every structure we create is a
                responsibility before Him and a service to humanity."
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/80 hover:border-accent/20 overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -8 }}
          >
            <div className="absolute -right-10 -top-10 text-gray-100 text-9xl opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <FaQuran />
            </div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-teal transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

            <div className="relative z-10 p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-4 rounded-xl text-green-600 mr-4 text-2xl">
                  <IoMdConstruct />
                </div>
                <h3
                  className={`text-2xl font-bold text-gray-900 ${montserrat.className}`}
                >
                  Our Mission
                </h3>
              </div>
              <p className={`text-gray-700 text-lg leading-relaxed  italic`}>
                "Our mission is to implement the will of Allah Almighty in all
                our business dealings by consistently meeting our customers'
                expectations in the services we offer. Guided by Shariah-based
                business practices and ethics, we deliver high-quality,
                transparent, and cost-effective construction solutions."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const colorClasses = getColorClasses(value.color);
            const IconComponent = value.icon;
            const DecorativeIcon = value.decorative;

            return (
              <motion.div
                key={value.title}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                {/* Main Value Card */}
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/80 hover:border-accent/20 overflow-hidden h-full">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-mint/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Accent Border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-teal transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                  {/* Decorative Icon */}
                  <div
                    className={`absolute -right-8 -top-8 text-8xl opacity-5 group-hover:opacity-10 transition-opacity duration-500 ${colorClasses.accent}`}
                  >
                    <DecorativeIcon />
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Icon and Title */}
                    <div className="flex items-center mb-6">
                      <div
                        className={`${colorClasses.bg} p-4 rounded-xl ${colorClasses.text} mr-4 text-2xl`}
                      >
                        <IconComponent />
                      </div>
                      <h3
                        className={`text-xl font-bold text-gray-900 ${montserrat.className}`}
                      >
                        {value.title}
                      </h3>
                    </div>

                    {/* Quote */}
                    <p
                      className={`text-gray-700 mb-4 leading-relaxed  italic flex-1`}
                    >
                      "{value.quote}"
                    </p>

                    {/* Description */}
                    <p
                      className={`text-gray-600 leading-relaxed ${roboto.className} flex-1`}
                    >
                      {value.description}
                    </p>

                    {/* Decorative Bottom Element */}
                    <motion.div
                      className="mt-6 w-12 h-1 bg-gradient-to-r from-accent to-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
              </motion.div>
            );
          })}

          {/* Islamic Business Promise Card */}
          <motion.div
            className="group relative col-span-1 md:col-span-2 lg:col-span-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            whileHover={{ y: -8 }}
          >
            <div className="relative bg-gradient-to-br from-primary to-teal rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute -right-10 -top-10 text-white/10 text-9xl group-hover:text-white/20 transition-all duration-500">
                <GiStonePath />
              </div>
              <div className="absolute -left-10 -bottom-10 text-white/10 text-9xl group-hover:text-white/20 transition-all duration-500">
                <FaMosque />
              </div>

              {/* Content */}
              <div className="relative z-10 p-10 text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-white/20 p-4 rounded-xl text-white mr-4 text-2xl">
                    <FaBusinessTime />
                  </div>
                  <h3
                    className={`text-2xl font-bold text-white ${montserrat.className}`}
                  >
                    Our Islamic Business Promise
                  </h3>
                </div>

                <p
                  className={`text-white/90 mb-6 text-lg leading-relaxed ${playfair.className} italic max-w-4xl mx-auto`}
                >
                  "The best earnings are from honest business conducted with a
                  pure heart. (Tabarani)"
                </p>

                <p
                  className={`text-white/80 leading-relaxed ${roboto.className} max-w-4xl mx-auto`}
                >
                  We pledge to conduct all our affairs according to Quranic
                  principles of business ethics, ensuring halal earnings and
                  barakah in every project. Our construction is more than
                  buildings - it's worship through craftsmanship, serving both
                  this world and the hereafter.
                </p>

                {/* Decorative Bottom */}
                <motion.div
                  className="mt-8 w-24 h-1 bg-white/30 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Values;
