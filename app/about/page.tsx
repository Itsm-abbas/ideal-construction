"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiAward, FiUsers, FiHome, FiCheckCircle } from "react-icons/fi";
import TeamMemberCard from "@components/TeamMemberCard";

export default function AboutPage() {
  const stats = [
    {
      value: "12+",
      label: "Years Experience",
      icon: <FiAward className="text-3xl" />,
    },
    {
      value: "150+",
      label: "Projects Completed",
      icon: <FiCheckCircle className="text-3xl" />,
    },
    {
      value: "50+",
      label: "Happy Clients",
      icon: <FiUsers className="text-3xl" />,
    },
    {
      value: "5",
      label: "Industry Awards",
      icon: <FiHome className="text-3xl" />,
    },
  ];

  const team = [
    {
      name: "Ahmed Khan",
      role: "Founder & CEO",
      bio: "With 20 years in construction, Ahmed brings visionary leadership to every project.",
      image: "/team/ahmed.jpg",
    },
    {
      name: "Sara Malik",
      role: "Lead Architect",
      bio: "Specializing in sustainable design, Sara creates spaces that inspire.",
      image: "/team/sara.jpg",
    },
    {
      name: "Ali Raza",
      role: "Project Director",
      bio: "Ali ensures every project meets our exacting standards for quality.",
      image: "/team/ali.jpg",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] bg-gray-900">
        <Image
          src="/about-hero.jpg"
          alt="Construction team working"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Building Visions, Creating Legacies
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              For over a decade, we&apos;ve transformed dreams into
              architectural marvels across Pakistan.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-md text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <Image
                src="/about-story.jpg"
                alt="Company founder on construction site"
                width={600}
                height={400}
                className="rounded-xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Humble Beginnings
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010 with just three employees, Ideal Construction
                began as a small renovation company in Islamabad. Through
                dedication to quality and customer satisfaction, we&apos;ve
                grown into one of Pakistan&apos;s most trusted construction
                firms.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey reflects our core values: integrity, innovation, and
                impeccable craftsmanship. Each project we undertake carries our
                founder&apos;s original vision - to build not just structures,
                but lasting relationships.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="italic text-gray-700">
                  &quot;We don&apos;t just construct buildings - we create
                  spaces where lives unfold and memories are made.&quot;
                </p>
                <p className="font-medium mt-2">- Ahmed Khan, Founder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The brilliant minds behind our success stories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="text-blue-600 text-4xl mb-4">❶</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quality Without Compromise
              </h3>
              <p className="text-gray-600">
                We source only premium materials and employ rigorous quality
                control at every construction phase.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="text-blue-600 text-4xl mb-4">❷</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Transparent Communication
              </h3>
              <p className="text-gray-600">
                Regular updates and honest discussions ensure you&apos;re
                informed at every project stage.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="text-blue-600 text-4xl mb-4">❸</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sustainable Practices
              </h3>
              <p className="text-gray-600">
                Eco-friendly construction methods that reduce environmental
                impact without sacrificing durability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
