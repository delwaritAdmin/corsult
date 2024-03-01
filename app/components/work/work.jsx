import React, { Profiler } from "react";
import Image from "next/image";
import Link from "next/link";
import work_img_1 from "../../img/work/work_img_1.webp";
import work_img_2 from "../../img/work/work_img_2.webp";
import work_img_3 from "../../img/work/work_img_3.webp";
import work_img_4 from "../../img/work/work_img_4.webp";
import work_img_5 from "../../img/work/work_img_5.webp";
import work_img_6 from "../../img/work/work_img_6.webp";
import work_img_7 from "../../img/work/work_img_7.webp";
import calltoaction from "../../img/call-to-action.svg";
import profile from "../../img/work/profile.webp";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function work() {
  return (
    <section>
      <div className="bg-third py-20 lg:py-40 w-full">
        <div className="container mx-auto">
          <h1 className=" text-white text-5xl text-center font-semibold">
           Comming Soon....!
          </h1>
        </div>
      </div>
      {/* =============================== */}
      {/* <div className="bg-secondery w-full py-20 ">
        <div className="container mx-auto ">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-white lg:text-5xl lg:px-[20rem]">
              Browse our solutions across industries
            </h2>
          </div>
          <div className="pt-10 grid gap-4 lg:grid-cols-2 lg:items-center lg:gap-10">


         
         
            <div className="grid gap-8">
            
            
              <div className="flex flex-col gap-4">
                <Link href={"#"} className="dm-case-thumbnail image hover:z-0">
                  <div className=" relative overflow-hidden bg-cover">
                    <Image
                      src={work_img_1}
                      alt="image"
                      className=" bg-cover bg-no-repeat ease-in-out hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <span className="dm-case-button ">Explore</span>
                </Link>
                <Link
                  href={"#"}
                  className="text-white hover:text-primary transition-all duration-300  text-2xl lg:text-3xl font-semibold pr-10 leading-tight"
                >
                  Navigating the future of distributed energy systems
                </Link>
                <p className="text-[#ccc] text-sm py-1 leading-tight">
                  The CRM platform for Akij Cement revolutionizes the referral
                  system. Specifically tailored for engineers and masons, it
                  provides intuitive tools...
                </p>
                <div className="flex">
                  <p className=" bg-third rounded-full py-[2px] px-3 text-sm text-primary">
                    Energy
                  </p>
                </div>
              </div>
            
              <div className="flex flex-col gap-4">
                <Link href={"#"} className="dm-case-thumbnail image hover:z-0">
                  <div className=" relative overflow-hidden bg-cover">
                    <Image
                      src={work_img_2}
                      alt="image"
                      className=" bg-cover bg-no-repeat ease-in-out hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <span className="dm-case-button ">Explore</span>
                </Link>
                <Link
                  href={"#"}
                  className="text-white hover:text-primary transition-all duration-300 text-2xl lg:text-3xl font-semibold pr-10 leading-tight"
                >
                  Akij Cement&rsquo;s Leap into Digitalized Referrals
                </Link>
                <p className="text-[#ccc] text-sm py-1 leading-tight">
                  The CRM platform for Akij Cement revolutionizes the referral
                  system. Specifically tailored for engineers and masons, it
                  provides intuitive tools...
                </p>
                <div className="flex">
                  <p className=" bg-third rounded-full py-[2px] px-3 text-sm text-primary">
                    Construction
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <Link href={"#"} className="dm-case-thumbnail image hover:z-0">
                  <div className=" relative overflow-hidden bg-cover">
                    <Image
                      src={work_img_3}
                      alt="image"
                      className=" bg-cover bg-no-repeat ease-in-out hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <span className="dm-case-button ">Explore</span>
                </Link>
                <Link
                  href={"#"}
                  className="text-white hover:text-primary transition-all duration-300 text-2xl lg:text-3xl font-semibold pr-10 leading-tight"
                >
                  Revolutionize Your Dining Experience Today
                </Link>
                <p className="text-[#ccc] text-sm py-1 leading-tight">
                  The CRM platform for Akij Cement revolutionizes the referral
                  system. Specifically tailored for engineers and masons, it
                  provides intuitive tools...
                </p>
                <div className="flex gap-3">
                  <p className=" bg-third rounded-full py-[2px] px-3 text-sm text-primary">
                    Restaurant
                  </p>
                  <p className=" bg-third rounded-full py-[2px] px-3 text-sm text-primary">
                    Food
                  </p>
                </div>
              </div>
            
              <div className="flex flex-col gap-4">
                <Link href={"#"} className="dm-case-thumbnail image hover:z-0">
                  <div className=" relative overflow-hidden bg-cover">
                    <Image
                      src={work_img_4}
                      alt="image"
                      className=" bg-cover bg-no-repeat ease-in-out hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <span className="dm-case-button ">Explore</span>
                </Link>
                <Link
                  href={"#"}
                  className="text-white hover:text-primary transition-all duration-300 text-2xl lg:text-3xl font-semibold pr-10 leading-tight"
                >
                  Intuitive vehicle management solutions
                </Link>
                <p className="text-[#ccc] text-sm py-1 leading-tight">
                  The CRM platform for Akij Cement revolutionizes the referral
                  system. Specifically tailored for engineers and masons, it
                  provides intuitive tools...
                </p>
                <div className="flex gap-3">
                  <p className=" bg-third rounded-full py-[2px] px-3 text-sm text-primary">
                    Automobile
                  </p>
                  <p className=" bg-third rounded-full py-[2px] px-3 text-sm text-primary">
                    Saas
                  </p>
                </div>
              </div>
            </div>
         
            <div className="grid gap-8">
             
              <div className="flex flex-col gap-4">
                <Link href={"#"} className="dm-case-thumbnail image hover:z-0">
                  <div className=" relative overflow-hidden bg-cover">
                    <Image
                      src={work_img_5}
                      alt="image"
                      className=" bg-cover bg-no-repeat ease-in-out hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <span className="dm-case-button ">Explore</span>
                </Link>
                <Link
                  href={"#"}
                  className="text-white hover:text-primary transition-all duration-300 text-2xl lg:text-3xl font-semibold pr-10 leading-tight"
                >
                  Ways & Villas: Maldivian Travel Redesign
                </Link>
                <p className="text-[#ccc] text-sm py-1 leading-tight">
                  The CRM platform for Akij Cement revolutionizes the referral
                  system. Specifically tailored for engineers and masons, it
                  provides intuitive tools...
                </p>
                <div className="flex gap-3">
                  <p className=" bg-third rounded-full py-[2px] px-3 text-sm text-primary">
                    Travel
                  </p>
                </div>
              </div>
           
              <div className="flex flex-col gap-4">
                <Link href={"#"} className="dm-case-thumbnail image hover:z-0">
                  <div className=" relative overflow-hidden bg-cover">
                    <Image
                      src={work_img_6}
                      alt="image"
                      className=" bg-cover bg-no-repeat ease-in-out hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <span className="dm-case-button ">Explore</span>
                </Link>
                <Link
                  href={"#"}
                  className="text-white hover:text-primary transition-all duration-300 text-2xl lg:text-3xl font-semibold pr-10 leading-tight"
                >
                  Onethread project management software redesign
                </Link>
                <p className="text-[#ccc] text-sm py-1 leading-tight">
                  The CRM platform for Akij Cement revolutionizes the referral
                  system. Specifically tailored for engineers and masons, it
                  provides intuitive tools...
                </p>
                <div className="flex gap-3">
                  <p className=" bg-third rounded-full py-[2px] px-3 text-sm text-primary">
                    Project Manegment
                  </p>
                </div>
              </div>
             
              <div className="flex flex-col gap-4">
                <Link href={"#"} className="dm-case-thumbnail image hover:z-0">
                  <div className=" relative overflow-hidden bg-cover">
                    <Image
                      src={work_img_7}
                      alt="image"
                      className=" bg-cover bg-no-repeat ease-in-out hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <span className="dm-case-button ">Explore</span>
                </Link>
                <Link
                  href={"#"}
                  className="text-white hover:text-primary transition-all duration-300 text-2xl lg:text-3xl font-semibold pr-10 leading-tight"
                >
                  Carnesia- One-stop beauty care retailer
                </Link>
                <p className="text-[#ccc] text-sm py-1 leading-tight">
                  The CRM platform for Akij Cement revolutionizes the referral
                  system. Specifically tailored for engineers and masons, it
                  provides intuitive tools...
                </p>
                <div className="flex gap-3">
                  <p className=" bg-third rounded-full py-[2px] px-3 text-sm text-primary">
                    Beauty Care Products
                  </p>
                  <p className=" bg-third rounded-full py-[2px] px-3 text-sm text-primary">
                    Ecommerce
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-20 grid gap-10 lg:grid-cols-3">
            <div className=" bg-third w-full py-10 rounded-3xl px-8 lg:col-span-2">
              <div className="grid gap-10 md:grid-cols-2">
                <div className="flex justify-center md:order-last">
                  <Image
                    src={calltoaction}
                    alt="call to action "
                    className="w-96"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className=" text-primary font-semibold text-2xl md:text-3xl mb-[15px]">
                    Got a project in mind?
                  </h3>
                  <h1 className="text-3xl lg:text-6xl md:text-5xl  mb-[16px] font-bold  text-white md:leading-[55px]">
                    Let&rsquo;s discuss the details
                  </h1>
                  <div className="pt-8 md:pt-16">
                    <button className="font-semibold text-white text-xl py-4 px-10 rounded-full bg-primary hover:text-black hover:bg-white transition-all duration-300">
                      Schdule a Call
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary w-full py-10 rounded-3xl px-8">
              <div className="flex flex-col gap-5">
                <div>
                  <Image src={profile} alt="profile" className="w-28" />
                </div>
                <h3 className="text-white font-semibold text-xl md:text-3xl lg:text-2xl">
                  My name is Noman, Design Manager at Design Monks. I will
                  answer all your questions.
                </h3>
                <div className="pt-5">
                  <button className="font-semibold hover:text-white text-xl py-4 px-10 rounded-full hover:bg-black text-black bg-white transition-all duration-300 flex items-center gap-3">
                    <p>Ask Question</p>
                    <IoLogoWhatsapp className="text-green-500 text-[1.6rem]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default work;
