"use client";
import { motion } from "motion/react";

import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import ContactForm from "@components/ContactForm"; // Make sure this file exists
import Navbar from "@components/Navbar";
import Title from "@components/Title";

const contactMethods = [
  {
    icon: <FiMapPin className="text-3xl text-blue-600" />,
    title: "Visit Us",
    details: "77 Square, E-block, Multi-Garden B-17, Islamabad",
    link: "https://maps.app.goo.gl/poXJf6nkisxrN6977",
  },
  {
    icon: <FiPhone className="text-3xl text-blue-600" />,
    title: "Call Us",
    details: "+92 3209840974",
    link: "tel:+923209840974",
  },
  {
    icon: <FiMail className="text-3xl text-blue-600" />,
    title: "Email Us",
    details: "Idealconstructionsic@gmail.com",
    link: "mailto:Idealconstructionsic@gmail.com",
  },
  // {
  //   icon: <FiClock className="text-3xl text-blue-600" />,
  //   title: "Working Hours",
  //   details: "Mon–Fri: 9AM–6PM\nSat: 10AM–4PM",
  //   link: null,
  // },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-24 py-36 bg-[#fdfdfd] text-[#222] ">
        {/* Contact Methods */}
        <Title title="Contact Us" underline />
        <section
          className="mt-20
        "
        >
          <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
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
                    className="text-blue-600 hover:underline"
                  >
                    Learn More
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16">
          <div className="container mx-auto flex flex-col lg:flex-row gap-12">
            {/* Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form and our team will respond shortly.
              </p>
              <ContactForm />
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="-h-full overflow-hidden rounded-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.012470403258!2d72.79310047486335!3d33.68274127329839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfedd4db5357b3%3A0x2e2fd8b1e8325e85!2s77%20SQUARE!5e0!3m2!1sen!2s!4v1746687909442!5m2!1sen!2s"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[var(--color-primary1)] text-white text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-6">
              Book a free consultation with our construction experts today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+923209840974"
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg shadow-lg"
              >
                Call Now
              </a>
              <a
                href="mailto:Idealconstructionsic@gmail.com"
                className="border-2 border-white font-bold py-3 px-8 rounded-lg"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
