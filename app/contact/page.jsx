"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import ContactForm from "@components/ContactForm";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <FiMapPin className="text-3xl text-blue-600" />,
      title: "Visit Us",
      details: "123 Construction Avenue, Blue Area, Islamabad, Pakistan",
      link: "https://maps.google.com",
    },
    {
      icon: <FiPhone className="text-3xl text-blue-600" />,
      title: "Call Us",
      details: "+92 300 1234567 (Office)\n+92 300 7654321 (Support)",
      link: "tel:+923001234567",
    },
    {
      icon: <FiMail className="text-3xl text-blue-600" />,
      title: "Email Us",
      details: "info@idealconstruction.com\nsupport@idealconstruction.com",
      link: "mailto:info@idealconstruction.com",
    },
    {
      icon: <FiClock className="text-3xl text-blue-600" />,
      title: "Working Hours",
      details: "Monday - Friday: 9AM - 6PM\nSaturday: 10AM - 4PM",
      link: null,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-gray-900">
        <div className="absolute inset-0 bg-blue-900/50 flex items-center">
          <div className="container mx-auto px-6 text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Let&apos;s Build Something Together
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Our team is ready to discuss your project and answer any
              questions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-md text-center"
              >
                <div className="mb-4 flex justify-center">{method.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600 whitespace-pre-line mb-4">
                  {method.details}
                </p>
                {method.link && (
                  <a
                    href={method.link}
                    className="text-blue-600 hover:text-blue-800 font-medium transition"
                  >
                    Get Directions
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about your project? Fill out the form below and
                our team will get back to you within 24 hours.
              </p>
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="bg-gray-100 rounded-xl overflow-hidden h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.676256654155!2d73.0478563152089!3d33.68434498070392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df949b6f3e4e27%3A0x92c8b3f5a5e5f1b4!2sBlue%20Area%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our construction experts today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+923001234567"
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg shadow-lg"
              >
                Call Now
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:info@idealconstruction.com"
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg"
              >
                Email Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
