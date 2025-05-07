"use client";

import { motion } from "framer-motion";
import { Building2, Home, Layout, RefreshCcw, Handshake } from "lucide-react";
import { montserrat, poppins } from "@lib/font";
import Title from "@components/Title";
import Subtitle from "@components/Subtitle";

const services = [
  {
    title: "Project Management & Consultancy",
    icon: <Building2 size={40} className="text-[#157a6e]" />,
    description:
      "Seamless execution from start to finish, guided by professionalism, transparency, and Islamic values.",
    faithNote:
      "“Verily, Allah loves that when anyone of you does a job, he should perfect it.” (Bayhaqi)",
  },
  {
    title: "Residential Construction",
    icon: <Home size={40} className="text-[#157a6e]" />,
    description:
      "From foundations to finishing, we build homes with sincerity and verified material quality — as if we’re building for our own families.",
    faithNote: "A home built on trust is a blessing in both worlds.",
  },
  {
    title: "Architectural & 3D Design",
    icon: <Layout size={40} className="text-[#157a6e]" />,
    description:
      "Visualize before you build — elegant, accurate, and purposeful designs by certified Muslim architects.",
    faithNote: "Clarity in vision leads to barakah in execution.",
  },
  {
    title: "Renovation & Remodeling",
    icon: <RefreshCcw size={40} className="text-[#157a6e]" />,
    description:
      "Give your property a new life with modern upgrades, durable finishes, and peaceful aesthetics.",
    faithNote:
      "Beautify your space — for indeed, Allah is Beautiful and loves beauty. (Muslim)",
  },
  {
    title: "Investor Partnership Program",
    icon: <Handshake size={40} className="text-[#157a6e]" />,
    description:
      "Invest, build, and share profits (60/40) with full project handling — all rooted in Shariah principles of fairness and risk-sharing.",
    faithNote: "A halal partnership brings rizq, trust, and multiplied reward.",
  },
];

export default function ServicesSection() {
  return (
    <section
      className="bg-gradient-to-b from-white to-[#f8fafc] py-12 px-6 sm:px-10"
      id="services"
    >
      <div className="max-w-6xl mx-auto text-center">
        <Title title={"Our Services"} shadow={true} gradient={true} />
        <Subtitle
          subtitle={
            "Our services are more than construction — they are acts of trust and responsibility."
          }
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12 md:py-24 px-4 sm:px-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px 0px -100px 0px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group p-8 border border-gray-100/70 bg-white rounded-3xl shadow-xs hover:shadow-lg transition-all duration-500 hover:border-transparent relative h-full flex flex-col"
            >
              {/* Subtle background effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              <div className="relative z-10 flex-1 flex flex-col">
                {/* Icon with nice background */}
                <div className="mb-6 p-3 w-14 h-14 flex items-center justify-center bg-[#157a6e]/10 rounded-xl text-[#157a6e] group-hover:bg-[#157a6e]/20 transition-colors duration-300">
                  {service.icon}
                </div>

                {/* Title container with proper spacing */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 leading-tight">
                    {service.title}
                  </h3>
                  {/* Underline that appears on hover */}
                  <div className="w-0 h-1 bg-[#157a6e] opacity-70 group-hover:w-full transition-all duration-500 mt-2"></div>
                </div>

                {/* Description with better readability */}
                <p className="text-gray-600 leading-relaxed mb-5 text-lg flex-1">
                  {service.description}
                </p>

                {/* Faith note with decorative border */}
                <div className="mt-auto pt-4 border-t border-gray-200/60 group-hover:border-[#157a6e]/30 transition-colors duration-500">
                  <span className="block text-sm text-[#157a6e] font-medium italic">
                    {service.faithNote}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
