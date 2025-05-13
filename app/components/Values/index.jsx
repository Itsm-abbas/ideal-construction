"use client";
import React from "react";
import { motion } from "motion/react";
import Title from "@components/Title";
import Subtitle from "@components/Subtitle";
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
  return (
    <>
      {/* Core Values Section with Islamic Touch */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" py-24 px-6 md:px-20 bg-gray-50"
      >
        <motion.div className="mb-16 text-center">
          <Title
            title={"Our Guiding Principles"}
            shadow={true}
            gradient={true}
            className="mb-4"
          />
          <Subtitle
            subtitle={
              "Built on the foundation of Quranic values and Prophetic teachings"
            }
            className="max-w-3xl mx-auto"
          />
        </motion.div>

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all relative overflow-hidden group"
            whileHover={{ y: -5 }}
          >
            <div className="absolute -right-10 -top-10 text-gray-100 text-9xl opacity-10 group-hover:opacity-20 transition-opacity">
              <FaMosque />
            </div>
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-4 rounded-xl text-blue-600 mr-4 text-2xl">
                <BsLightbulb />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              "With the will of Allah, we build with Ihsan (Allah sees all that
              we do) — crafting spaces with sincerity, trust, and excellence,
              knowing that every structure we create is a responsibility before
              Him and a service to humanity."
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all relative overflow-hidden group"
            whileHover={{ y: -5 }}
          >
            <div className="absolute -right-10 -top-10 text-gray-100 text-9xl opacity-10 group-hover:opacity-20 transition-opacity">
              <FaQuran />
            </div>
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-4 rounded-xl text-green-600 mr-4 text-2xl">
                <IoMdConstruct />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              "Our mission is to implement the will of Allah Almighty in all our
              business dealings by consistently meeting our customers'
              expectations in the services we offer. Guided by Shariah-based
              business practices and ethics, we deliver high-quality,
              transparent, and cost-effective construction solutions."
            </p>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Ihsan */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all relative overflow-hidden group"
            whileHover={{ y: -5 }}
          >
            <div className="absolute -right-10 -top-10 text-green-100 text-9xl opacity-10 group-hover:opacity-20 transition-opacity">
              <FaStarAndCrescent />
            </div>
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-4 rounded-xl text-green-600 mr-4 text-2xl">
                <FaCheckDouble />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Ihsan</h3>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Verily, Allah loves when one of you does a job, he perfects it."
              (Al-Bayhaqi)
            </p>
            <p className="text-gray-600">
              Doing everything with excellence, sincerity, and the awareness
              that Allah sees all that we do - from laying bricks to customer
              service, we strive for perfection as an act of worship.
            </p>
          </motion.div>

          {/* Honesty */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all relative overflow-hidden group"
            whileHover={{ y: -5 }}
          >
            <div className="absolute -right-10 -top-10 text-blue-100 text-9xl opacity-10 group-hover:opacity-20 transition-opacity">
              <FaHandshake />
            </div>
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-4 rounded-xl text-blue-600 mr-4 text-2xl">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Honesty</h3>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "The truthful and trustworthy merchant will be with the prophets,
              the truthful, and the martyrs." (Tirmidhi)
            </p>
            <p className="text-gray-600">
              Truthfulness in every promise, every price quote, and every
              project update - we consider honesty a sacred trust between us and
              Allah SWT before it's between us and our clients.
            </p>
          </motion.div>

          {/* Trustworthiness */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all relative overflow-hidden group"
            whileHover={{ y: -5 }}
          >
            <div className="absolute -right-10 -top-10 text-purple-100 text-9xl opacity-10 group-hover:opacity-20 transition-opacity">
              <FaShieldAlt />
            </div>
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-4 rounded-xl text-purple-600 mr-4 text-2xl">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Trustworthiness (Amanah)
              </h3>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "The signs of a hypocrite are three: when he speaks, he lies; when
              he promises, he breaks it; and when he is entrusted, he betrays."
              (Bukhari)
            </p>
            <p className="text-gray-600">
              Fulfilling every commitment as a sacred trust - whether to
              clients, partners, or our team. We handle your project as an
              Amanah from Allah SWT.
            </p>
          </motion.div>

          {/* Fairness & Justice */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all relative overflow-hidden group"
            whileHover={{ y: -5 }}
          >
            <div className="absolute -right-10 -top-10 text-amber-100 text-9xl opacity-10 group-hover:opacity-20 transition-opacity">
              <FaBalanceScale />
            </div>
            <div className="flex items-center mb-6">
              <div className="bg-amber-100 p-4 rounded-xl text-amber-600 mr-4 text-2xl">
                <FaBalanceScale />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Fairness & Justice (Adl)
              </h3>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "O you who believe! Stand out firmly for justice..." (Quran 4:135)
            </p>
            <p className="text-gray-600">
              Ensuring fairness in pricing, treatment, and decisions - for both
              clients and laborers. We follow the Islamic principle that the
              worker deserves his wages before his sweat dries.
            </p>
          </motion.div>

          {/* Gentleness & Kindness */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all relative overflow-hidden group"
            whileHover={{ y: -5 }}
          >
            <div className="absolute -right-10 -top-10 text-pink-100 text-9xl opacity-10 group-hover:opacity-20 transition-opacity">
              <FaHandHoldingHeart />
            </div>
            <div className="flex items-center mb-6">
              <div className="bg-pink-100 p-4 rounded-xl text-pink-600 mr-4 text-2xl">
                <FaHandHoldingHeart />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Gentleness & Kindness (Rifq)
              </h3>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Allah is Kind and loves kindness in all matters." (Bukhari)
            </p>
            <p className="text-gray-600">
              Dealing with clients, workers, and suppliers with the compassion
              and respect taught by our Prophet (ﷺ). We believe kindness in
              business is both Sunnah and good practice.
            </p>
          </motion.div>

          {/* Islamic Business Ethics */}
          <motion.div
            className="bg-gradient-to-br from-[var(--color-primary2)] to-[var(--color-primary1)] p-8 rounded-2xl shadow-lg text-white relative overflow-hidden group"
            whileHover={{ y: -5 }}
          >
            <div className="absolute -right-10 -top-10 text-white/10 text-9xl group-hover:text-white/20 transition-all">
              <GiStonePath />
            </div>
            <div className="flex items-center mb-6">
              <div className="bg-white/20 p-4 rounded-xl text-white mr-4 text-2xl">
                <FaBusinessTime />
              </div>
              <h3 className="text-xl font-bold">
                Our Islamic Business Promise
              </h3>
            </div>
            <p className="mb-4 italic">
              "The best earnings are from honest business conducted with a pure
              heart." (Tabarani)
            </p>
            <p>
              We pledge to conduct all our affairs according to Quranic
              principles of business ethics, ensuring halal earnings and barakah
              in every project. Our construction is more than buildings - it's
              worship through craftsmanship.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Values;
