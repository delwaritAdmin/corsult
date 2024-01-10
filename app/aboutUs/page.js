"use client"
import React from 'react'
import Header from '../components/Header'
import Footers from '../components/Footers'
import AboutUs from '../components/AboutUs/AboutUs'
import Ourproject from '../components/AboutUs/Ourproject'
import Innovate from '../components/AboutUs/Innovate'
import Ourteam from '../components/AboutUs/Ourteam'
import Clientfeedback from '../components/AboutUs/Clientfeedback'
import Social from '../components/AboutUs/Social'

export default function page() {
  return (
    <>
    <Header/>
    <AboutUs/>
    <Ourproject/>
    <Innovate/>
    <Ourteam/>
    {/* <Clientfeedback/> */}
    <Social/>
    <Footers/>
    </>
  )
}
