"use client"
import React from 'react'
import Header from '../components/Header'
import Contactus2 from "../components/ContactUs/Contactus2"
import Footers from '../components/Footers'
import Social from '../components/AboutUs/Social'
import Agencyjournal from '../components/AboutUs/Agencyjournal'

export default function page() {
  return (
    <>
    <Header/>
    <Contactus2/>
    <Agencyjournal/>
    <Social/>
    <Footers/>
    </>
  )
}