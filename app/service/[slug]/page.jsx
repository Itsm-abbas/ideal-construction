import { notFound } from "next/navigation";
import servicesData from "@lib/services.json";
import { Home, Building2, Layout, RefreshCcw, Handshake } from "lucide-react";
import Navbar from "@components/Navbar";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }) {
  const service = servicesData.find((service) => service.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 overflow-hidden">
        {/* Hero Section */}
        <div className="relative mb-16 rounded-3xl overflow-hidden bg-gradient-to-r from-[#157a6e] to-[#0f5e54] animate-fade-in-up">
          <div className="absolute inset-0 bg-noise opacity-10" />
          <div className="relative z-10 py-16 px-8 sm:py-24 sm:px-16 text-white">
            <div className="mb-6 p-4 w-20 h-20 flex items-center justify-center bg-white/20 rounded-xl backdrop-blur-sm animate-fade-in-up animation-delay-100">
              {service.icon === "Building2" && (
                <Building2 size={40} className="text-white" />
              )}
              {service.icon === "Home" && (
                <Home size={40} className="text-white" />
              )}
              {service.icon === "Layout" && (
                <Layout size={40} className="text-white" />
              )}
              {service.icon === "RefreshCcw" && (
                <RefreshCcw size={40} className="text-white" />
              )}
              {service.icon === "Handshake" && (
                <Handshake size={40} className="text-white" />
              )}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-200">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl opacity-90 leading-relaxed animate-fade-in-up animation-delay-300">
              {service.description}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <div className="mb-12 animate-fade-in-up animation-delay-400">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 relative inline-block">
                Service Overview
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#157a6e] opacity-30"></span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {service.longDescription}
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up animation-delay-500">
              <div className="bg-gradient-to-br from-[#f0f9f8] to-[#e0f3f1] p-8 rounded-2xl border border-[#157a6e]/10 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#157a6e]/10 rounded-full"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#157a6e]/5 rounded-full"></div>
                <div className="relative z-10">
                  <p className="text-lg italic text-[#157a6e] font-medium">
                    {service.faithNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 animate-fade-in-up animation-delay-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="sticky top-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 animate-fade-in-up animation-delay-700">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                  Key Features
                </h2>

                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start group animate-fade-in-up"
                      style={{ animationDelay: `${700 + index * 100}ms` }}
                    >
                      <div className="flex-shrink-0 mt-1 mr-4">
                        <div className="w-8 h-8 rounded-full bg-[#157a6e]/10 flex items-center justify-center group-hover:bg-[#157a6e]/20 transition-colors">
                          <svg
                            className="h-5 w-5 text-[#157a6e]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <span className="text-lg text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 bg-gradient-to-r from-[#157a6e] to-[#0f5e54] p-6 rounded-xl text-white animate-fade-in-up animation-delay-800">
                  <h3 className="text-xl font-semibold mb-3">
                    Ready to get started?
                  </h3>
                  <p className="mb-5 opacity-90">
                    Contact us today to discuss your project requirements.
                  </p>
                  <button className="w-full bg-white text-[#157a6e] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition duration-300">
                    Schedule Consultation
                  </button>
                </div>
              </div>

              {/* Process Steps */}
              <div className="mt-8 bg-gray-50 p-8 rounded-2xl border border-gray-200 animate-fade-in-up animation-delay-900">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Our Process
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Initial Consultation",
                      desc: "We discuss your vision and requirements",
                    },
                    {
                      step: "2",
                      title: "Planning & Design",
                      desc: "Creating tailored solutions for your needs",
                    },
                    {
                      step: "3",
                      title: "Execution",
                      desc: "Quality implementation with regular updates",
                    },
                    {
                      step: "4",
                      title: "Delivery",
                      desc: "Final review and handover",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 animate-fade-in-up"
                      style={{ animationDelay: `${900 + index * 100}ms` }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#157a6e] text-white flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
