"use client";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Learn from "./components/Learn";
import Work from "./components/Work";
import Research from "./components/Research";
import Footers from "./components/Footers";
import Review from "./components/Review";
import Lifecycle from "./components/Lifecycle";
import Recognized from "./components/Recognized";
import States from "./components/States";
import ContactUs from "./components/ContactUs";
import TechStack from "./components/TechStack";
import Industries from "./components/Industries";
import NewTechStack from "./components/NewTechStack";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import WhyChooseUs from "./components/WhyChooseUs";
import OurStact from "./components/OurStact";
import ContactWithUs from "./components/ContactWithUs";

export default function Home() {
  return (
    <div className=" relative">
      <Header />
      <Hero />
      <Services />
      <Industries />
      <OurStact />
      <Work/>
      {/* <TechStack /> */}
      {/* <NewTechStack/> */}
      <Lifecycle />

      <Recognized />
      <ContactWithUs />
      <WhyChooseUs />
      <Learn />
      {/* <Research/> */}
      {/* <States/> */}
      <Review />
      <ContactUs />
      <Footers />

      <FloatingWhatsApp darkMode="true" />
    </div>
  );
}
