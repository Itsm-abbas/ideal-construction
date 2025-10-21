"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Navbar from "@components/Navbar";
import { montserrat, playfair, poppins, roboto } from "@lib/font";
import Title from "@components/Title";
import Subtitle from "@components/Subtitle";
import {
  FaCheck,
  FaWhatsapp,
  FaPhone,
  FaAward,
  FaUsers,
  FaShieldAlt,
  FaEye,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";
import {
  MessageCircle,
  Phone,
  Star,
  Building2,
  Target,
  Heart,
  ShieldCheck,
  CircleDollarSign,
} from "lucide-react";

const AboutPage = () => {
  const whatsappLink = `https://wa.me/923209840974?text=Hello%2C%20I%20want%20to%20discuss%20a%20construction%20project`;

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

  const stats = [
    { number: "50+", label: "Projects Completed", icon: Building2 },
    { number: "100%", label: "Client Satisfaction", icon: FaAward },
    { number: "5+", label: "Years Experience", icon: FaUsers },
    { number: "∞", label: "Trust Built", icon: FaShieldAlt },
  ];

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

  const timeline = [
    {
      year: "01",
      title: "Islamia College Peshawar",
      subtitle: "Intermediate Studies",
      description:
        "Built the foundation of my academic journey with a focus on business principles and leadership development.",
      color: "blue",
    },
    {
      year: "02",
      title: "Islamia University of Bahawalpur",
      subtitle: "Entrepreneurship & Business Innovation",
      description:
        "Specialized in developing innovative business models and honing my entrepreneurial mindset.",
      color: "teal",
    },
    {
      year: "03",
      title: "Ideal Constructions",
      subtitle: "Chief Operating Officer",
      description:
        "Leading strategic initiatives and driving operational excellence in a competitive market landscape.",
      color: "primary",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-500",
      },
      teal: {
        bg: "bg-teal-100",
        text: "text-teal-600",
        border: "border-teal-500",
      },
      primary: {
        bg: "bg-primary/10",
        text: "text-primary",
        border: "border-primary",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-mint/10 py-10 sm:py-20">
        {/* Hero Section - Sanood Anwar */}
        <section className="relative pt-24 pb-16 lg:py-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal/5 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants} className="mb-6">
                  <span
                    className={`text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full ${poppins.className}`}
                  >
                    ENTREPRENEUR & BUSINESS LEADER
                  </span>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${playfair.className}`}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal">
                    Sanood Anwar
                  </span>
                </motion.h1>

                <motion.div variants={itemVariants} className="mb-8">
                  <div className="w-32 h-1.5 bg-gradient-to-r from-accent to-teal rounded-full" />
                  <div className="w-24 h-1.5 bg-gradient-to-r from-teal to-accent rounded-full mt-1 opacity-70" />
                </motion.div>

                <motion.p
                  variants={itemVariants}
                  className={`text-xl text-gray-700 mb-8 leading-relaxed ${roboto.className}`}
                >
                  Business innovator with a passion for creating impactful
                  solutions through strategic leadership and entrepreneurial
                  vision.
                </motion.p>

                {/* Stats */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-2 gap-6"
                >
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                      className="text-center bg-white rounded-2xl shadow-lg border border-gray-100 p-4"
                    >
                      <div className="bg-accent/10 p-2 rounded-xl inline-flex mb-3">
                        <stat.icon className="text-accent text-xl" />
                      </div>
                      <div
                        className={`text-2xl font-bold text-primary mb-1 ${montserrat.className}`}
                      >
                        {stat.number}
                      </div>
                      <div
                        className={`text-gray-600 text-xs ${poppins.className}`}
                      >
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white/90 transform rotate-1 hover:rotate-0 transition-transform duration-500"
              >
                <Image
                  src="/sanood.jpg"
                  alt="Sanood Anwar"
                  fill
                  className="object-cover transition-all duration-700"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 1.2 } }}
                    className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg"
                  >
                    <p className={`text-sm text-primary ${roboto.className}`}>
                      "Success comes from doing ordinary things extraordinarily
                      well."
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Foundation Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-16"
            >
              {/* Header */}
              <motion.div variants={itemVariants} className="text-center">
                <Title title="Our Foundation" shadow={true} gradient={true} />
              </motion.div>

              {/* Vision Card */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-primary to-teal rounded-3xl p-8 text-white relative overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full" />
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full" />

                <div className="relative z-10 flex flex-col lg:flex-row items-start gap-8">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                    <FaEye className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-3xl font-bold mb-6 ${montserrat.className}`}
                    >
                      Vision
                    </h3>
                    <p
                      className={`text-xl leading-relaxed italic ${playfair.className}`}
                    >
                      "With the will of Allah, we build with Ihsan (Allah sees
                      all that we do) — crafting spaces with sincerity, trust,
                      and excellence, knowing that every structure we create is
                      a responsibility before Him and a service to humanity."
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
              >
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="bg-primary/10 p-4 rounded-2xl">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-3xl font-bold text-primary mb-6 ${montserrat.className}`}
                    >
                      Mission
                    </h3>
                    <div className="space-y-4">
                      <p
                        className={`text-gray-700 leading-relaxed ${roboto.className}`}
                      >
                        Our mission is to implement the will of Allah Almighty
                        in all our business dealings by consistently meeting our
                        customers' expectations in the services we offer. Guided
                        by Shariah-based business practices and ethics, we
                        deliver high-quality, transparent, and cost-effective
                        construction solutions.
                      </p>
                      <p
                        className={`text-gray-700 leading-relaxed ${roboto.className}`}
                      >
                        With a team of skilled architects and professionals, we
                        ensure precision in design, verified material quality,
                        and efficient project management, creating durable and
                        trusted spaces that meet our clients' needs.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Values Card */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
              >
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="bg-primary/10 p-4 rounded-2xl">
                    <CircleDollarSign className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-3xl font-bold text-primary mb-6 ${montserrat.className}`}
                    >
                      Core Values
                    </h3>
                    <div className="space-y-6">
                      {[
                        {
                          title: "Ihsan",
                          description:
                            "Doing everything with excellence, sincerity, and the awareness that Allah sees all that we do.",
                        },
                        {
                          title: "Honesty",
                          description:
                            "Truthfulness in every promise, every price, and every project update.",
                        },
                        {
                          title: "Trustworthiness",
                          description:
                            "Fulfilling every commitment as a sacred trust, whether to clients, partners, or our team.",
                        },
                        {
                          title: "Fairness & Justice",
                          description:
                            "Ensuring fairness in pricing, treatment, and decisions — for both clients and laborers.",
                        },
                        {
                          title: "Gentleness & Kindness",
                          description:
                            "Dealing with clients, workers, and suppliers with compassion and respect.",
                        },
                      ].map((value, index) => (
                        <motion.div
                          key={value.title}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start gap-4 group"
                        >
                          <div className="bg-green-100 p-2 rounded-full mt-1 group-hover:bg-green-200 transition-colors">
                            <FaCheck className="text-green-600 text-sm" />
                          </div>
                          <div>
                            <h4
                              className={`font-bold text-gray-800 text-lg mb-2 ${poppins.className}`}
                            >
                              {value.title}
                            </h4>
                            <p
                              className={`text-gray-600 leading-relaxed ${roboto.className}`}
                            >
                              {value.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 lg:py-24 bg-mint/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="text-center mb-16">
                <Title title="My Journey" shadow={true} gradient={true} />
                <Subtitle subtitle="From academic foundations to entrepreneurial leadership" />
              </motion.div>

              <div className="relative max-w-4xl mx-auto">
                {/* Timeline line */}
                <div className="absolute left-6 lg:left-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-teal to-accent transform -translate-x-1/2" />

                {/* Timeline items */}
                {timeline.map((item, index) => {
                  const colorClasses = getColorClasses(item.color);
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className={`relative flex flex-col lg:flex-row items-start gap-8 mb-12 ${
                        index % 2 === 0 ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Timeline dot */}
                      <div
                        className="absolute left-6 lg:left-1/2 top-6 w-12 h-12 rounded-full bg-white border-4 shadow-lg flex items-center justify-center font-bold transform -translate-x-1/2 z-10"
                        style={{ borderColor: colorClasses.border }}
                      >
                        <span className={colorClasses.text}>{item.year}</span>
                      </div>

                      {/* Content */}
                      <div
                        className={`lg:w-1/2 ${
                          index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                        } ml-20 lg:ml-0`}
                      >
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                          <h3
                            className={`text-xl font-bold text-gray-900 mb-2 ${montserrat.className}`}
                          >
                            {item.title}
                          </h3>
                          <p
                            className={`${colorClasses.text} font-medium mb-3 ${poppins.className}`}
                          >
                            {item.subtitle}
                          </p>
                          <p
                            className={`text-gray-700 leading-relaxed ${roboto.className}`}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Spacer for alternating layout */}
                      <div className="lg:w-1/2 hidden lg:block" />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="text-center mb-16">
                <Title
                  title="Entrepreneurial Philosophy"
                  shadow={true}
                  gradient={true}
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-primary to-teal rounded-3xl p-0.5 shadow-2xl"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-[calc(1.5rem-1px)] p-8 md:p-12 border border-white/10">
                  <div className="max-w-4xl mx-auto text-center">
                    <motion.blockquote
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: { delay: 0.5 },
                      }}
                      viewport={{ once: true }}
                      className={`text-2xl md:text-3xl text-white mb-8 leading-snug ${playfair.className} italic`}
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
                      className={`text-lg text-blue-100 leading-relaxed ${roboto.className}`}
                    >
                      This approach emphasizes flexibility, creativity, and
                      strategic action—transforming constraints into advantages
                      and building success through iterative development.
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 lg:py-24 bg-mint/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="text-center mb-16">
                <Title
                  title="Core Competencies"
                  shadow={true}
                  gradient={true}
                />
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
                    className="bg-white p-5 rounded-xl shadow-sm border border-gray-200/70 hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3
                      className={`font-medium text-gray-800 group-hover:text-primary transition-colors ${poppins.className}`}
                    >
                      {skill.name}
                    </h3>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-primary to-teal rounded-3xl p-12 text-white relative overflow-hidden"
              >
                {/* Background Elements */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-white/5 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <h2
                    className={`text-4xl font-bold mb-6 ${montserrat.className}`}
                  >
                    Let's Build Something Extraordinary
                  </h2>
                  <p
                    className={`text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed ${roboto.className}`}
                  >
                    I'm passionate about creating solutions with real
                    impact—let's collaborate on your next challenge.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-accent hover:bg-accent/90 text-primary font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Get In Touch</span>
                    </motion.a>

                    <motion.a
                      href="tel:+923209840974"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Call Now</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
