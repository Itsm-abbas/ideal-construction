"use client";
import React from "react";
import {
  Home,
  Building2,
  Layout,
  RefreshCcw,
  Handshake,
  MessageCircle,
  Phone,
  Clock,
  Shield,
  Award,
  CheckCircle,
} from "lucide-react";
import Navbar from "@components/Navbar";
import { montserrat, poppins, roboto, playfair } from "@lib/font";
import { motion } from "motion/react";
import Image from "next/image";
import { FaWhatsapp, FaArrowRight, FaStar } from "react-icons/fa";
const ServiceDetail = ({ service }) => {
  const whatsappLink = `https://wa.me/923209840974?text=Hello%2C%20I%20am%20interested%20in%20your%20${service.title}%20service`;

  const benefits = [
    { icon: Shield, text: "Quality Guaranteed", color: "text-blue-500" },
    { icon: Clock, text: "On-Time Delivery", color: "text-green-500" },
    { icon: Award, text: "Expert Craftsmanship", color: "text-accent" },
    { icon: CheckCircle, text: "Islamic Values", color: "text-teal" },
  ];

  const getServiceIcon = (iconName) => {
    const icons = {
      Building2: Building2,
      Home: Home,
      Layout: Layout,
      RefreshCcw: RefreshCcw,
      Handshake: Handshake,
    };
    const IconComponent = icons[iconName] || Building2;
    return <IconComponent size={48} className="text-white" />;
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-mint/10 pt-24">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-teal" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-6 mb-8">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl border border-white/20"
                >
                  {getServiceIcon(service.icon)}
                </motion.div>
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4"
                  >
                    <FaStar className="text-accent" />
                    <span
                      className={`text-sm font-medium ${poppins.className}`}
                    >
                      Premium Service
                    </span>
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={`text-4xl lg:text-6xl font-bold mb-4 leading-tight ${montserrat.className}`}
                  >
                    {service.title}
                  </motion.h1>
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className={`text-xl lg:text-2xl text-white/90 max-w-4xl leading-relaxed ${roboto.className}`}
              >
                {service.description}
              </motion.p>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4 mt-8"
              >
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3"
                  >
                    <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                    <span
                      className={`text-white text-sm font-medium ${poppins.className}`}
                    >
                      {benefit.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Content - Main Content Area */}
              <div className="lg:col-span-2 space-y-12">
                {/* Service Overview */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
                >
                  <h2
                    className={`text-3xl font-bold text-primary mb-6 ${montserrat.className}`}
                  >
                    Service Overview
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-accent to-teal rounded-full mb-6" />
                  <p
                    className={`text-lg text-gray-600 leading-relaxed ${roboto.className}`}
                  >
                    {service.longDescription}
                  </p>
                </motion.div>

                {/* Process Steps - MOVED TO MAIN CONTENT AREA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
                >
                  <h3
                    className={`text-3xl font-bold text-primary mb-6 ${montserrat.className}`}
                  >
                    Our Process
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-accent to-teal rounded-full mb-8" />

                  <div className="grid md:grid-cols-2 gap-8">
                    {service.ourProcess.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="flex gap-4 group"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-teal text-white flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4
                            className={`text-xl font-semibold text-gray-800 mb-3 ${poppins.className}`}
                          >
                            {item.title}
                          </h4>
                          <p
                            className={`text-gray-600 leading-relaxed ${roboto.className}`}
                          >
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Faith Note */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative bg-gradient-to-br from-mint to-teal/10 rounded-2xl border border-teal/20 p-8 overflow-hidden"
                >
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-teal/10 rounded-full" />
                  <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-teal/5 rounded-full" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-teal/20 p-2 rounded-lg">
                        <FaStar className="text-teal" />
                      </div>
                      <h3
                        className={`text-xl font-semibold text-teal ${montserrat.className}`}
                      >
                        Our Islamic Promise
                      </h3>
                    </div>
                    <p
                      className={`text-lg text-teal leading-relaxed italic ${playfair.className}`}
                    >
                      {service.faithNote}
                    </p>
                  </div>
                </motion.div>

                {/* Service Image */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </div>

              {/* Right Sidebar - Only Key Features & CTA */}
              <div className="space-y-8">
                {/* Key Features - Sticky */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sticky top-8"
                >
                  <h2
                    className={`text-2xl font-bold text-primary mb-6 ${montserrat.className}`}
                  >
                    Key Features
                  </h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-accent to-teal rounded-full mb-6" />

                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start gap-4 group"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                            <CheckCircle className="w-5 h-5 text-accent" />
                          </div>
                        </div>
                        <span
                          className={`text-gray-700 leading-relaxed ${roboto.className}`}
                        >
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-gradient-to-r from-primary to-teal rounded-xl p-6 text-white"
                  >
                    <h3
                      className={`text-xl font-semibold mb-3 ${montserrat.className}`}
                    >
                      Ready to Get Started?
                    </h3>
                    <p className={`text-white/90 mb-6 ${roboto.className}`}>
                      Contact us today to discuss your project requirements and
                      get a free consultation.
                    </p>

                    <div className="space-y-3">
                      <motion.a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-accent hover:bg-accent/90 text-primary font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>Chat on WhatsApp</span>
                      </motion.a>

                      <motion.a
                        href="tel:+923209840974"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 border border-white/30"
                      >
                        <Phone className="w-5 h-5" />
                        <span>Call Now</span>
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceDetail;
