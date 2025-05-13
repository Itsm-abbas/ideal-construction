import servicesData from "@lib/services.json";
import { Home, Building2, Layout, RefreshCcw, Handshake } from "lucide-react";
import Link from "next/link";
import Navbar from "@components/Navbar";
import Title from "@components/TitleWF";
import Image from "next/image";
import MotionWrapper from "@components/MotionWrapper";
import { poppins } from "@lib/font";
import { FaArrowRight } from "react-icons/fa";
// Icon component mapping
const iconComponents = {
  Home,
  Building2,
  Layout,
  RefreshCcw,
  Handshake,
};
const whatsappLink = `https://wa.me/923209840974?text=Hello%2C%20I%20want%20a%20quote%20for%20construction%20work`;

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-24 py-36 bg-[#fdfdfd] text-[#222]">
        {/* Page Header */}
        <Title title="Our Services" />

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12 md:py-24 ">
          {servicesData.map((service, index) => {
            const animationDelay = `${index * 100}ms`;

            return (
              <Link href={`/service/${service.slug}`} passHref key={index}>
                <MotionWrapper
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px 0px -100px 0px" }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  animationDelay={animationDelay}
                  className="group  border border-gray-100/70 bg-white rounded-3xl shadow-xs hover:shadow-lg transition-all duration-500 hover:border-transparent relative h-full flex flex-col"
                >
                  {/* Subtle background effect on hover */}
                  <div className="  absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                  <div className="relative z-10 flex-1 flex flex-col ">
                    <Image
                      width={150}
                      height={200}
                      className="w-full"
                      src={service.image}
                      alt={service.title}
                    />

                    {/* Title container with proper spacing */}
                    <div className="p-6 flex flex-col items-center flex-1 gap-4">
                      <div className="">
                        <h3
                          className={`text-lg text-[var(--color-primary1)] leading-tight ${poppins.className} `}
                        >
                          {service.title}
                        </h3>
                        {/* Underline that appears on hover */}
                        <div className="w-0 h-1 bg-[var(--color-primary2)] opacity-70 group-hover:w-full transition-all duration-500 mt-2"></div>
                      </div>
                      {/* Description with better readability */}
                      <p className="text-gray-600  mb-5 flex-1 ">
                        {service.description}
                      </p>
                      {/* Faith note with decorative border */}
                      <div className="mt-auto flex text-center  border-t w-full border-gray-200/60 group-hover:border-[#157a6e]/30 transition-colors duration-500">
                        <span className="block text-sm text-[var(--color-primary2)] italic">
                          {service.faithNote}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 justify-end text-sm text-[var(--color-accent)] hover:opacity-80 font-medium mt-auto pt-4 border-t border-gray-200 /30 transition-colors duration-300 uppercase w-full">
                        Read More
                        <span>
                          <FaArrowRight className="w-2" />
                        </span>
                      </div>
                    </div>
                  </div>
                </MotionWrapper>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center animate-fade-in animation-delay-500">
          <div className="bg-gradient-to-r from-[#157a6e] to-[#0f5e54] p-8 rounded-2xl text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Contact us today to discuss how we can help with your project.
            </p>
            <a href={whatsappLink}>
              <button className="bg-white cursor-pointer text-[#157a6e] hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105">
                Schedule Consultation
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
