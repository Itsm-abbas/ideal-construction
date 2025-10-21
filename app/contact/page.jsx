"use client";
import { motion } from "motion/react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiMessageCircle,
} from "react-icons/fi";
import ContactForm from "@components/ContactForm";
import Navbar from "@components/Navbar";
import Title from "@components/Title";
import Subtitle from "@components/Subtitle";
import { montserrat, poppins, roboto } from "@lib/font";
import {
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { MessageCircle, Phone, MapPin, Mail, Clock } from "lucide-react";

const contactMethods = [
  {
    icon: <MapPin className="text-2xl text-accent" />,
    title: "Visit Our Office",
    details: "77 Square, E-block, Multi-Garden B-17, Islamabad",
    link: "https://maps.app.goo.gl/poXJf6nkisxrN6977",
    buttonText: "Get Directions",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <Phone className="text-2xl text-accent" />,
    title: "Call Us Directly",
    details: "+92 320 9840974",
    subdetails: "Mon-Fri: 9AM-6PM",
    link: "tel:+923209840974",
    buttonText: "Call Now",
    color: "from-green-500 to-green-600",
  },
  {
    icon: <Mail className="text-2xl text-accent" />,
    title: "Send Us Email",
    details: "Idealconstructionsic@gmail.com",
    link: "mailto:Idealconstructionsic@gmail.com",
    buttonText: "Send Email",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: <MessageCircle className="text-2xl text-accent" />,
    title: "Chat on WhatsApp",
    details: "Quick responses & instant quotes",
    link: "https://wa.me/923209840974",
    buttonText: "Start Chat",
    color: "from-teal to-teal/90",
  },
];

export default function ContactPage() {
  const whatsappLink = `https://wa.me/923209840974?text=Hello%2C%20I%20want%20to%20discuss%20a%20construction%20project`;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-mint/10 pt-24">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal/5 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className={`text-sm font-medium ${poppins.className}`}>
                  Get In Touch
                </span>
              </div>

              <Title
                title="Let's Build Together"
                shadow={true}
                gradient={true}
              />

              <Subtitle subtitle="Ready to start your construction project? We're here to bring your vision to life with quality and excellence." />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`max-w-2xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed ${roboto.className}`}
              >
                Contact us for a free consultation and let's discuss how we can
                transform your construction dreams into reality with Islamic
                values at the core.
              </motion.p>
            </motion.div>

            {/* Contact Methods Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/80 hover:border-accent/20 p-6 text-center h-full">
                    {/* Icon */}
                    <div className="bg-gradient-to-br from-accent/10 to-teal/10 p-4 rounded-2xl inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>

                    {/* Content */}
                    <h3
                      className={`text-lg font-bold text-primary mb-3 ${montserrat.className} group-hover:text-primary/90 transition-colors duration-300`}
                    >
                      {method.title}
                    </h3>

                    <p
                      className={`text-gray-700 mb-2 leading-relaxed ${roboto.className}`}
                    >
                      {method.details}
                    </p>

                    {method.subdetails && (
                      <p
                        className={`text-gray-500 text-sm mb-4 ${roboto.className}`}
                      >
                        {method.subdetails}
                      </p>
                    )}

                    {/* CTA Button */}
                    <motion.a
                      href={method.link}
                      target={method.link.includes("http") ? "_blank" : "_self"}
                      rel={
                        method.link.includes("http")
                          ? "noopener noreferrer"
                          : ""
                      }
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${method.color} text-white font-semibold px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 text-sm`}
                    >
                      {method.buttonText}
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
              >
                <div className="mb-8">
                  <h2
                    className={`text-3xl font-bold text-primary mb-4 ${montserrat.className}`}
                  >
                    Send Us a Message
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-accent to-teal rounded-full mb-4" />
                  <p
                    className={`text-gray-600 leading-relaxed ${roboto.className}`}
                  >
                    Fill out the form below and our team will get back to you
                    within 24 hours. We're excited to learn about your project
                    and discuss how we can help bring it to life.
                  </p>
                </div>
                <ContactForm />
              </motion.div>

              {/* Map & Location Info */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Map */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="h-80 lg:h-96">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.012470403258!2d72.79310047486335!3d33.68274127329839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfedd4db5357b3%3A0x2e2fd8b1e8325e85!2s77%20SQUARE!5e0!3m2!1sen!2s!4v1746687909442!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-2xl"
                    />
                  </div>
                  <div className="p-6">
                    <h3
                      className={`text-xl font-bold text-primary mb-3 ${montserrat.className}`}
                    >
                      Our Location
                    </h3>
                    <p className={`text-gray-600 ${roboto.className}`}>
                      77 Square, E-block, Multi-Garden B-17, Islamabad
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-gradient-to-br from-primary to-teal rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                      <Clock className="w-5 h-5" />
                    </div>
                    <h3 className={`text-xl font-bold ${montserrat.className}`}>
                      Business Hours
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`${roboto.className}`}>
                        Monday - Friday
                      </span>
                      <span className={`font-semibold ${poppins.className}`}>
                        9:00 AM - 6:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={`${roboto.className}`}>Saturday</span>
                      <span className={`font-semibold ${poppins.className}`}>
                        10:00 AM - 4:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={`${roboto.className}`}>Sunday</span>
                      <span className={`font-semibold ${poppins.className}`}>
                        Closed
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
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
                    Ready to Start Your Project?
                  </h2>
                  <p
                    className={`text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed ${roboto.className}`}
                  >
                    Book a free consultation with our construction experts today
                    and let's discuss how we can bring your vision to life with
                    quality and excellence.
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
                      <span>Free WhatsApp Consultation</span>
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

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className={`text-white/70 text-sm mt-6 ${roboto.className}`}
                  >
                    📞 Available 24/7 for urgent construction inquiries
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
