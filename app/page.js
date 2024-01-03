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
import States from "./components/States";
import ContactUs from "./components/ContactUs";
import TechStack from "./components/TechStack";
import Industries from "./components/Industries";
import NewTechStack from "./components/NewTechStack";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import WhyChooseUs from "./components/WhyChooseUs";
import OurStact from "./components/OurStact";

export default function Home() {
  return (
    <div className=" relative">
      <Header />
      <Hero />
      <Services />
      <Industries />
      <OurStact />
      {/* <Work/> */}
      {/* <TechStack /> */}
      {/* <NewTechStack/> */}
      <Lifecycle />

      <WhyChooseUs />

      <Learn />
      {/* <Research/> */}
      {/* <States/> */}
      <Review />
      <ContactUs />
      <Footers />
      {/* get a free quote */}
      <div className=" virtical animate-pulse  cursor-pointer  rounded-l-xl fixed right-0 top-[40%] -translate-y-[50%] z-50 bg-red-600 text-center md:px-2 py-8 md:py-12">
        <p className=" text-white font-bold  rotate-180 ">Get Free Quote</p>
      </div>
      {/* get a free quote */}
      <FloatingWhatsApp darkMode="true" />
    </div>
  );
}
