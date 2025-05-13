// import { sanityClient } from "../lib/sanity";

import Hero from "@components/Hero";
import Services from "@components/Services";
import Projects from "@components/Projects";
import Navbar from "@components/Navbar";
import WhyChooseUs from "@components/WhyChooseUs";
import Values from "@components/Values";

export default function Home() {
  // const projects = await sanityClient.fetch(query);

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
