import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Pricing from "./components/Pricing";
import Awards from "./components/Awards";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import ReactLenis from "lenis/react";

export default function App() {
  return (
    <>
      <ReactLenis root />
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Experience />
        <Pricing />
        <Awards />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
