// app/page.jsx
"use client";
import Services from "@components/Services";
import Projects from "@components/Projects";
import Navbar from "@components/Navbar";
import WhyChooseUs from "@components/WhyChooseUs";
import Values from "@components/Values";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@components/Hero"), { ssr: false });

export default function Home() {
  return (
    <main>
      <Navbar home />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Values />
      <Projects />
    </main>
  );
}
