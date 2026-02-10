import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Plans from "../components/Plans";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gold from "../components/Gold";
import Feature from "../components/Feature";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />  
         <HeroBanner />
             <Floatingdemo />
            <FloatingWhatsApp />
            <AboutSection />
            <Feature/>
      {/* <Plans/>
      <Gold/>
      <About/>
      <WhyChooseUs/>
      <Contact/> */}
      <Footer />
    </>
  );
}
