import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroBanner from "../components/Herobanner";
import Floatingdemo from "../components/Floatingdemo";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import AboutSection from "../components/AboutSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Feature from "../components/Feature";
import ReasonsSection from "../components/ReasonsSection"
import HowItWorks from "../components/HowItWorks"
import AdminPanelFeatures from "../components/AdminPanelFeatures"
import TrackInflows from "../components/TrackInflows"
import Advantages from "../components/Advantages"
import AgentApp from "../components/AgentApp";
import FAQ from "../components/FAQ";
import Reports from "../components/Reports";
import FeatureHighlights from "../components/FeatureHighlights";
import ScrollingPopup from "../components/Popup";
import FeatureComparisonTable from "../components/FeatureComparisonTable";


export default function Home() {
  return (
    <>
    
      <Navbar />
      <Hero />
      <HeroBanner />
      <FeatureHighlights/>
       <Floatingdemo />
      <FloatingWhatsApp />
      <AboutSection />
      <ScrollingPopup />
      <FeatureComparisonTable/>
       <Feature/>
       <ReasonsSection/>
       <HowItWorks/>
        <AdminPanelFeatures/>
        <TrackInflows/>
        <Reports/>
        <Advantages/>
        <AgentApp/>    
        <FAQ/>
      <Contact/>
      <Footer />
    </>
  );
}
