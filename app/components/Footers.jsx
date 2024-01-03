import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import {
  FaWhatsapp,
  FaDribbble,
  FaBehance,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footers() {
  return (
    <section>
      <div className=" bg-third w-full pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col  items-center gap-2 text-white">
            <h3 className="text-xl">Have a Project To Discuss?</h3>
            <h1 className="font-bold text-5xl lg:pt-2">We&rsquo;re ready!</h1>
            <div className="pt-12">
              <Link
                href={"#"}
                className="text-[#0180EB] hover:text-white border-2 border-[#32C5FA] rounded-full py-4 px-10 hvr-bounce-to-left overflow-hidden transition-all duration-200"
              >
                LET&rsquo;S CONNECT!
              </Link>
            </div>
          </div>
          <div className="pt-24 grid grid-cols-1 gap-7 md:gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="text-white lg:col-span-2">
              <h3 className="text-xl font-bold lg:text-2xl">Services</h3>
              <div className="px-4 lg:px-0 pt-3 lg:pt-7 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-x-5 lg:grid-cols-2 lg:gap-y-3">
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  Custom Software Development
                </Link>
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  Android App Development
                </Link>
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  IPhone App Development
                </Link>
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  Web Development
                </Link>
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  Game Development
                </Link>
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  Mobile App Support
                </Link>
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  Startup App Development
                </Link>
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  Flutter App Development
                </Link>
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  Cross Platform App Development
                </Link>
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  React Native App Development
                </Link>
              </div>
            </div>
            <div className="text-white lg:col-span-2">
              <h3 className="text-xl font-bold lg:text-2xl">Solutions</h3>
              <div className="px-4 lg:px-0 pt-3 lg:pt-7 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-x-5 lg:grid-cols-2 lg:col-span-2">
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  Automotive App Development
                </Link>
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  Healthcare App Development
                </Link>
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  On-Demand App Development
                </Link>
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  Ecommerce App Development
                </Link>
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  Real Estate App Development
                </Link>
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  Music App Development
                </Link>
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  IT Staff Augmentation
                </Link>
              </div>
            </div>
            <div className="text-white">
              <h2 className=" text-xl font-bold lg:text-2xl">About Us</h2>
              <div className="px-4 lg:px-0 pt-3 lg:pt-7 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-x-5 lg:grid-cols-1">
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  About TekRevol
                </Link>
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  Referral Program
                </Link>
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  Blogs
                </Link>
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  Press
                </Link>
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  Events
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-10 lg:flex lg:items-center lg:gap-16 lg:pb-7 lg:justify-between">
            <div className=" text-white">
              <h2 className="text-xl font-bold lg:text-2xl">Locations</h2>
              <div className="grid grid-cols-4 gap-1 px-6 mt-6 lg:grid-cols-10 lg:gap-x-6 lg:gap-y-3 lg:px-0">
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  HOU
                </Link>
                <div className="flex items-center gap-2">
                  <p className=" cursor-default">|</p>
                  <Link
                    href={"#"}
                    className="text-sm hover:text-[#0180EB] transition-all duration-200"
                  >
                    ATX
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <p className=" cursor-default">|</p>
                  <Link
                    href={"#"}
                    className="text-sm hover:text-[#0180EB] transition-all duration-200"
                  >
                    DTX
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <p className=" cursor-default">|</p>
                  <Link
                    href={"#"}
                    className="text-sm hover:text-[#0180EB] transition-all duration-200"
                  >
                    SF
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <p className=" cursor-default hidden lg:block">|</p>
                  <Link
                    href={"#"}
                    className="text-sm hover:text-[#0180EB] transition-all duration-200"
                  >
                    MIA
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <p className=" cursor-default">|</p>
                  <Link
                    href={"#"}
                    className="text-sm hover:text-[#0180EB] transition-all duration-200"
                  >
                    CHI
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <p className=" cursor-default">|</p>
                  <Link
                    href={"#"}
                    className="text-sm hover:text-[#0180EB] transition-all duration-200"
                  >
                    NYC
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <p className=" cursor-default">|</p>
                  <Link
                    href={"#"}
                    className="text-sm hover:text-[#0180EB] transition-all duration-200"
                  >
                    DC
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <p className=" cursor-default hidden lg:block">|</p>
                  <Link
                    href={"#"}
                    className="text-sm hover:text-[#0180EB] transition-all duration-200"
                  >
                    LA
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <p className=" cursor-default">|</p>
                  <Link
                    href={"#"}
                    className="text-sm hover:text-[#0180EB] transition-all duration-200"
                  >
                    DXB
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <p className="block cursor-default lg:hidden">|</p>
                  <Link
                    href={"#"}
                    className="text-sm hover:text-[#0180EB] transition-all duration-200"
                  >
                    QA
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <p className=" cursor-default">|</p>
                  <Link
                    href={"#"}
                    className="text-sm hover:text-[#0180EB] transition-all duration-200"
                  >
                    BH
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <p className=" cursor-default hidden lg:block">|</p>
                  <Link
                    href={"#"}
                    className="text-sm hover:text-[#0180EB] transition-all duration-200"
                  >
                    KSA
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <p className=" cursor-default">|</p>
                  <Link
                    href={"#"}
                    className="text-sm hover:text-[#0180EB] transition-all duration-200"
                  >
                    LDN
                  </Link>
                </div>
              </div>
            </div>
            <div className=" pt-8">
              <div
                className="flex items-center gap-2 
             border-[#353539] md:pb-3 md:pt-4"
              >
                <div className="">
                  <Link
                    href={"#"}
                    className="flex items-center justify-center border-[1px] border-[#353539]
                   rounded-full p-3 hvr-bounce-to-left overflow-hidden transition-all duration-300"
                  >
                    <FaDribbble className="text-white " />
                  </Link>
                </div>
                <div className="">
                  <Link
                    href={"#"}
                    className="flex items-center justify-center border-[1px] border-[#353539]
                   rounded-full p-3 hvr-bounce-to-left overflow-hidden transition-all duration-300"
                  >
                    <FaBehance className="text-white " />
                  </Link>
                </div>
                <div className="">
                  <Link
                    href={"#"}
                    className="flex items-center justify-center border-[1px] border-[#353539]
                   rounded-full p-3 hvr-bounce-to-left overflow-hidden transition-all duration-300"
                  >
                    <FaFacebookF className="text-white " />
                  </Link>
                </div>
                <div className="">
                  <Link
                    href={"#"}
                    className="flex items-center justify-center border-[1px] border-[#353539]
                   rounded-full p-3 hvr-bounce-to-left overflow-hidden transition-all duration-300"
                  >
                    <FaTwitter className="text-white " />
                  </Link>
                </div>
                <div className="">
                  <Link
                    href={"#"}
                    className="flex items-center justify-center border-[1px] border-[#353539]
                   rounded-full p-3 hvr-bounce-to-left overflow-hidden transition-all duration-300"
                  >
                    <FaInstagram className="text-white " />
                  </Link>
                </div>
                <div className="">
                  <Link
                    href={"#"}
                    className="flex items-center justify-center border-[1px] border-[#353539]
                   rounded-full p-3 hvr-bounce-to-left overflow-hidden transition-all duration-300"
                  >
                    <FaLinkedinIn className="text-white " />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10 text-white flex flex-col gap-4 lg:flex-row lg:justify-between">
            <p>© Tekrevol 2023. All rights reserved</p>
            <div className="flex gap-1 md:gap-2">
              <Link
                href={"#"}
                className="text-sm hover:text-[#0180EB] transition-all duration-200"
              >
                Terms and Conditions
              </Link>
              <div className="flex items-center gap-1 md:gap-2">
                <p className=" cursor-default">|</p>
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  Privacy Policy
                </Link>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <p className=" cursor-default">|</p>
                <Link
                  href={"#"}
                  className="text-sm hover:text-[#0180EB] transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footers;
