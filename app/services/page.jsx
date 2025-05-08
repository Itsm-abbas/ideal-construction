import servicesData from "@lib/services.json";
import { Home, Building2, Layout, RefreshCcw, Handshake } from "lucide-react";
import Link from "next/link";
import Navbar from "@components/Navbar";
import Title from "@components/TitleWF";
// Icon component mapping
const iconComponents = {
  Home,
  Building2,
  Layout,
  RefreshCcw,
  Handshake,
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-24 py-36 bg-[#fdfdfd] text-[#222]">
        {/* Page Header */}
        <Title title="Our Services" />

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {servicesData.map((service, index) => {
            const IconComponent = iconComponents[service.icon];
            const animationDelay = `${index * 100}ms`;

            return (
              <Link
                key={service.slug}
                href={`/service/${service.slug}`}
                className="group animate-fade-in-up"
                style={{ animationDelay }}
              >
                <div className="h-full p-6 border border-gray-200 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#157a6e]/30">
                  <div className="mb-4 p-3 w-14 h-14 flex items-center justify-center bg-[#157a6e]/10 rounded-xl text-[#157a6e] group-hover:bg-[#157a6e]/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#157a6e] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-sm text-[#157a6e] font-medium mt-auto pt-4 border-t border-gray-200 group-hover:border-[#157a6e]/30 transition-colors duration-300">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
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
            <button className="bg-white text-[#157a6e] hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
