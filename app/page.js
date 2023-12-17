"use client"
import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Footer from "./components/Footer"
import Learn from "./components/Learn"


export default function Home() {
  return(
    <>
       <Header/>
       <Hero/>
       <Services/>
       <Learn/>
       <Footer/>
    </>
  )
}