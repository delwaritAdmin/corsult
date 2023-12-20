"use client"
import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Footer from "./components/Footer"
import Learn from "./components/Learn"
import Work from "./components/Work"
import Research from "./components/Research"
import Footers from "./components/Footers"


export default function Home() {
  return(
    <>
       <Header/>
       <Hero/>
       <Services/>
       <Work/>
       <Research/>
       <Learn/>
       {/* <Footer/> */}
       <Footers/>
    </>
  )
}