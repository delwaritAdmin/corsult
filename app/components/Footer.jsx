import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../img/logo_corsult.png";
import { Typography } from "@material-tailwind/react";
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

function Footer() {
  return (
    <section>
      <div className="bg-[#030307] w-full pt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-10 md:pb-6 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:-mt-4">
              <Typography
                as="a"
                href="/"
                className=" cursor-pointer py-2 font-medium transition-all duration-200 "
              >
                <Image src={logo} alt="logo" height={120} width={170} />
              </Typography>
              <p className="text-[#9A9A9C] text-[1rem]">
              Empowering Digital Excellence. We are your one-stop digital agency, offering services ranging from Web Design and Development to UI/UX Design, Logo & Brand Design, UX Audit, WordPress, and SaaS Design. Elevate your online presence with our tailored solutions. Let&rsquo;s redefine your digital journey together.
              </p>
            </div>
            <div className="md:pl-20 lg:pl-0">
              <h2 className="text-white font-semibold text-3xl pb-3">
                Company
              </h2>
              <div className="flex flex-col gap-2 text-[#9A9A9C]">
                <Link
                  href={"#"}
                  className="hover:text-[#75f] transition-all duration-300"
                >
                  About
                </Link>
                <Link
                  href={"#"}
                  className="hover:text-[#75f] transition-all duration-300"
                >
                  Work
                </Link>
                <Link
                  href={"#"}
                  className="hover:text-[#75f] transition-all duration-300"
                >
                  Blog
                </Link>
                <Link
                  href={"#"}
                  className="hover:text-[#75f] transition-all duration-300"
                >
                  career
                </Link>
                <Link
                  href={"#"}
                  className="hover:text-[#75f] transition-all duration-300"
                >
                  Industries
                </Link>
                <Link
                  href={"#"}
                  className="hover:text-[#75f] transition-all duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-white font-semibold text-3xl pb-3">
                Services
              </h2>
              <div className="flex flex-col gap-2 text-[#9A9A9C]">
                <Link
                  href={"#"}
                  className="hover:text-[#75f] transition-all duration-300"
                >
                  UI/UX Design
                </Link>
                <Link
                  href={"#"}
                  className="hover:text-[#75f] transition-all duration-300"
                >
                  Web Design
                </Link>
                <Link
                  href={"#"}
                  className="hover:text-[#75f] transition-all duration-300"
                >
                  WordPress
                </Link>
                <Link
                  href={"#"}
                  className="hover:text-[#75f] transition-all duration-300"
                >
                  Branding
                </Link>
                <Link
                  href={"#"}
                  className="hover:text-[#75f] transition-all duration-300"
                >
                  UX Audit
                </Link>
              </div>
            </div>
            <div className="space-y-5 md:pl-20 lg:pl-0">
              <div>
                <h2 className="text-white font-semibold text-3xl pb-3">
                  Contact Us
                </h2>
                <div className="flex flex-col gap-2 text-[#9A9A9C]">
                  <Link
                    href={"#"}
                    className="hover:text-[#75f] transition-all duration-300 flex gap-2 items-center"
                  >
                    <IoMdMail />
                    <p>syed@corsult.com</p>
                  </Link>
                  <Link
                    href={"#"}
                    className="hover:text-[#75f] transition-all duration-300 flex gap-2 items-center"
                  >
                    <FaWhatsapp />
                    <p>+1 888-626-6062</p>
                  </Link>
                </div>
              </div>
              <div>
                <h2 className="text-white font-semibold text-3xl pb-3">
                  Other
                </h2>
                <Link
                  href={"#"}
                  className="text-[#9A9A9C] hover:text-[#75f] transition-all duration-300"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
          <div className="py-8 flex flex-col gap-4 md:flex-row-reverse md:items-center 
          md:justify-between md:pt-1 md:border-t-[1px] border-[#353539] lg:pt-5">
            <div className="flex items-center gap-2 pb-5 border-b-[1px]
             border-[#353539] md:pb-3 md:border-b-0  md:pt-4">
              <div className="">
                <Link
                  href={"#"}
                  className="flex items-center justify-center border-[1px] border-[#353539]
                   rounded-full p-3 hover:bg-[#6C4DE7] transition-all duration-300"
                >
                  <FaDribbble className="text-white text-[1.2rem]" />
                </Link>
              </div>
              <div className="">
                <Link
                  href={"#"}
                  className="flex items-center justify-center border-[1px] border-[#353539]
                   rounded-full p-3 hover:bg-[#6C4DE7] transition-all duration-300"
                >
                  <FaBehance className="text-white text-[1.2rem]" />
                </Link>
              </div>
              <div className="">
                <Link
                  href={"#"}
                  className="flex items-center justify-center border-[1px] border-[#353539]
                   rounded-full p-3 hover:bg-[#6C4DE7] transition-all duration-300"
                >
                  <FaFacebookF className="text-white text-[1.2rem]" />
                </Link>
              </div>
              <div className="">
                <Link
                  href={"#"}
                  className="flex items-center justify-center border-[1px] border-[#353539]
                   rounded-full p-3 hover:bg-[#6C4DE7] transition-all duration-300"
                >
                  <FaTwitter className="text-white text-[1.2rem]" />
                </Link>
              </div>
              <div className="">
                <Link
                  href={"#"}
                  className="flex items-center justify-center border-[1px] border-[#353539]
                   rounded-full p-3 hover:bg-[#6C4DE7] transition-all duration-300"
                >
                  <FaInstagram className="text-white text-[1.2rem]" />
                </Link>
              </div>
              <div className="">
                <Link
                  href={"#"}
                  className="flex items-center justify-center border-[1px] border-[#353539]
                   rounded-full p-3 hover:bg-[#6C4DE7] transition-all duration-300"
                >
                  <FaLinkedinIn className="text-white text-[1.2rem]" />
                </Link>
              </div>
            </div>
            <p className="text-[#9A9A9C] text-lg">
              ©2023 Design All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
