import React from "react";
import Link from "next/link";
import Image from "next/image";
import project_img_1 from "../../img/AboutUs/project_1.png";
import project_img_2 from "../../img/AboutUs/project_2.png";
import project_img_3 from "../../img/AboutUs/project_3.png";
import project_img_4 from "../../img/AboutUs/project_4.png";
import { FaDribbble } from "react-icons/fa";
import { BiSolidLeaf } from "react-icons/bi";

function Product() {
  return (
    <section>
      <div className="bg-third py-20 lg:py-40 w-full">
        <div className="container mx-auto">
          <h1 className=" text-white text-7xl md:text-8xl lg:text-9xl text-center font-semibold">
            Our <span className=" font-thin text-white">Products</span>
          </h1>
        </div>
      </div>
      {/* ======================== */}
      {/* <div className="bg-secondery w-full py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="pt-20 grid gap-10 lg:grid-cols-2">

           
            <Link href={"#"} className="flex flex-col gap-5">
              <div className="overflow-hidden bg-cover relative rounded-3xl">
                <Image
                  src={project_img_1}
                  alt="project_image"
                  className="w-full bg-cover bg-no-repeat hover:scale-110 transition-all duration-300 ease-in-out "
                />
              </div>
              <div className="space-y-2">
                <p className=" uppercase text-[#797979] text-sm">web design</p>
                <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
                  <h5 className="text-white font-semibold text-2xl">
                    University Website
                  </h5>
                  <div className="flex">
                    <h4 className="text-primary text-xl hvr-underline-from-left pb-1">
                      View Project
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link href={"#"} className="flex flex-col gap-5">
              <div className="overflow-hidden bg-cover relative rounded-3xl">
                <Image
                  src={project_img_2}
                  alt="project_image"
                  className="w-full bg-cover bg-no-repeat hover:scale-110 transition-all duration-300 ease-in-out "
                />
              </div>
              <div className="space-y-2">
                <p className=" uppercase text-[#797979] text-sm">branding</p>
                <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
                  <h5 className="text-white font-semibold text-2xl">
                    Fillo Branding Design
                  </h5>
                  <div className="flex">
                    <h4 className="text-primary text-xl hvr-underline-from-left pb-1">
                      View Project
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
           
            <Link href={"#"} className="flex flex-col gap-5">
              <div className="overflow-hidden bg-cover relative rounded-3xl">
                <Image
                  src={project_img_3}
                  alt="project_image"
                  className="w-full bg-cover bg-no-repeat hover:scale-110 transition-all duration-300 ease-in-out "
                />
              </div>
              <div className="space-y-2">
                <p className=" uppercase text-[#797979] text-sm">Mobile app</p>
                <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
                  <h5 className="text-white font-semibold text-2xl">
                    HR & Recruitment App
                  </h5>
                  <div className="flex">
                    <h4 className="text-primary text-xl hvr-underline-from-left pb-1">
                      View Project
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
           
            <Link href={"#"} className="flex flex-col gap-5">
              <div className="overflow-hidden bg-cover relative rounded-3xl">
                <Image
                  src={project_img_4}
                  alt="project_image"
                  className="w-full bg-cover bg-no-repeat hover:scale-110 transition-all duration-300 ease-in-out "
                />
              </div>
              <div className="space-y-2">
                <p className=" uppercase text-[#797979] text-sm">assa</p>
                <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
                  <h5 className="text-white font-semibold text-2xl">
                    TimeTracker Saas Product
                  </h5>
                  <div className="flex">
                    <h4 className="text-primary text-xl hvr-underline-from-left pb-1">
                      View Project
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div> */}
      <div className="bg-secondery w-full py-20 ">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center gap-2">
            <h4 className=" text-primary  text-2xl">Product Showcase</h4>
            <h1 className="font-semibold text-white text-5xl lg:text-6xl">
              Product Showcase
            </h1>
            <p className="pt-3 text-center text-white px-10 lg:px-[20rem]">
              Whether your serving costomers at your till, dashing from table to
              table or doing business outdoors, our payment services keep you
              rolling
            </p>
          </div>
          <div className="pt-20 grid gap-4 md:grid-cols-2 lg:gap-6 ">
            <div className="showcase_backbround_1 w-full py-20 lg:py-28 rounded-md">
              <div className="flex flex-col items-center gap-2 lg:gap-3">
                <h2 className=" text-white font-semibold text-4xl ">
                  UI/UX Design
                </h2>
                <p className="text-white text-xl">Let&rsquo;s see Portfolio</p>
                <div className="flex items-center gap-4 pt-3">
                  <button
                    type="button"
                    className="bg-[#6CA12B] py-2 px-4 text-white rounded-full flex items-center gap-1"
                  >
                    <BiSolidLeaf />
                    <p>Engen Lab</p>
                  </button>
                  <button
                    type="button"
                    className="bg-[#FF4547] py-2 px-4 text-white rounded-full flex items-center gap-2"
                  >
                    <FaDribbble />
                    <p>Dribbble</p>
                  </button>
                  <button
                    type="button"
                    className="bg-[#6CA12B] py-2 px-4 text-white rounded-full flex items-center gap-1"
                  >
                    <BiSolidLeaf />
                    <p>Engen Lab</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="showcase_backbround_2 w-full py-20 lg:py-28 rounded-md">
              <div className="flex flex-col items-center gap-2 lg:gap-3">
                <h2 className=" text-white font-semibold text-4xl ">
                  Html Template
                </h2>
                <p className="text-white text-xl">Let&rsquo;s see Portfolio</p>
                <div className="flex items-center gap-4 pt-3">
                  <button
                    type="button"
                    className="bg-[#6CA12B] py-2 px-4 text-white rounded-full flex items-center gap-1"
                  >
                    <BiSolidLeaf />
                    <p>Engen Lab</p>
                  </button>
                  <button
                    type="button"
                    className="bg-[#FF4547] py-2 px-4 text-white rounded-full flex items-center gap-2"
                  >
                    <FaDribbble />
                    <p>Dribbble</p>
                  </button>
                  <button
                    type="button"
                    className="bg-[#6CA12B] py-2 px-4 text-white rounded-full flex items-center gap-1"
                  >
                    <BiSolidLeaf />
                    <p>Engen Lab</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="showcase_backbround_3 w-full py-20 lg:py-28 rounded-md">
              <div className="flex flex-col items-center gap-2 lg:gap-3">
                <h2 className=" text-white font-semibold text-4xl ">
                  WordPress Theme
                </h2>
                <p className="text-white text-xl">Let&rsquo;s see Portfolio</p>
                <div className="flex items-center gap-4 pt-3">
                  <button
                    type="button"
                    className="bg-[#6CA12B] py-2 px-4 text-white rounded-full flex items-center gap-1"
                  >
                    <BiSolidLeaf />
                    <p>Engen Lab</p>
                  </button>
                  <button
                    type="button"
                    className="bg-[#FF4547] py-2 px-4 text-white rounded-full flex items-center gap-2"
                  >
                    <FaDribbble />
                    <p>Dribbble</p>
                  </button>
                  <button
                    type="button"
                    className="bg-[#6CA12B] py-2 px-4 text-white rounded-full flex items-center gap-1"
                  >
                    <BiSolidLeaf />
                    <p>Engen Lab</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="showcase_backbround_4 w-full py-20 lg:py-28 rounded-md">
              <div className="flex flex-col items-center gap-2 lg:gap-3">
                <h2 className=" text-white font-semibold text-4xl ">
                  PHP Script
                </h2>
                <p className="text-white text-xl">Let&rsquo;s see Portfolio</p>
                <div className="flex items-center gap-4 pt-3">
                  <button
                    type="button"
                    className="bg-[#6CA12B] py-2 px-4 text-white rounded-full flex items-center gap-1"
                  >
                    <BiSolidLeaf />
                    <p>Engen Lab</p>
                  </button>
                  <button
                    type="button"
                    className="bg-[#FF4547] py-2 px-4 text-white rounded-full flex items-center gap-2"
                  >
                    <FaDribbble />
                    <p>Dribbble</p>
                  </button>
                  <button
                    type="button"
                    className="bg-[#6CA12B] py-2 px-4 text-white rounded-full flex items-center gap-1"
                  >
                    <BiSolidLeaf />
                    <p>Engen Lab</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="showcase_backbround_5 w-full py-20 lg:py-28 rounded-md">
              <div className="flex flex-col items-center gap-2 lg:gap-3">
                <h2 className=" text-white font-semibold text-4xl ">
                  React Next JS Template
                </h2>
                <p className="text-white text-xl">Let&rsquo;s see Portfolio</p>
                <div className="flex items-center gap-4 pt-3">
                  <button
                    type="button"
                    className="bg-[#6CA12B] py-2 px-4 text-white rounded-full flex items-center gap-1"
                  >
                    <BiSolidLeaf />
                    <p>Engen Lab</p>
                  </button>
                  <button
                    type="button"
                    className="bg-[#FF4547] py-2 px-4 text-white rounded-full flex items-center gap-2"
                  >
                    <FaDribbble />
                    <p>Dribbble</p>
                  </button>
                  <button
                    type="button"
                    className="bg-[#6CA12B] py-2 px-4 text-white rounded-full flex items-center gap-1"
                  >
                    <BiSolidLeaf />
                    <p>Engen Lab</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="showcase_backbround_6 w-full py-20 lg:py-28 rounded-md">
              <div className="flex flex-col items-center gap-2 lg:gap-3">
                <h2 className=" text-white font-semibold text-4xl ">
                  EG Notification Plugin
                </h2>
                <p className="text-white text-xl">Let&rsquo;s see Portfolio</p>
                <div className="flex items-center gap-4 pt-3">
                  <button
                    type="button"
                    className="bg-[#6CA12B] py-2 px-4 text-white rounded-full flex items-center gap-1"
                  >
                    <BiSolidLeaf />
                    <p>Engen Lab</p>
                  </button>
                  <button
                    type="button"
                    className="bg-[#FF4547] py-2 px-4 text-white rounded-full flex items-center gap-2"
                  >
                    <FaDribbble />
                    <p>Dribbble</p>
                  </button>
                  <button
                    type="button"
                    className="bg-[#6CA12B] py-2 px-4 text-white rounded-full flex items-center gap-1"
                  >
                    <BiSolidLeaf />
                    <p>Engen Lab</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
