"use client"
import React from 'react'
import Header from '../components/Header'
import Footers from '../components/Footers'
import Innovate from '../components/AboutUs/Innovate'
import Product from '../components/Product/Product'
import Social from '../components/AboutUs/Social'


export default function page() {
  return (
    <>
    <Header/>
     <Product/>
    {/* <Innovate/> */}
    {/* <Social/> */}
    <Footers/>
    </>
  )
}
