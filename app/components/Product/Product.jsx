import React from "react";
import Link from "next/link";
import Image from "next/image";
import project_img_1 from "../../img/AboutUs/project_1.png";
import project_img_2 from "../../img/AboutUs/project_2.png";
import project_img_3 from "../../img/AboutUs/project_3.png";
import project_img_4 from "../../img/AboutUs/project_4.png";
import { FaDribbble } from "react-icons/fa";
import { BiSolidLeaf } from "react-icons/bi";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function Product() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

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
      {/* =================== product section start ========== */}
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
      {/* ============== contact start =================== */}
      <div className=" bg-[#161519] w-full py-20">
        <div className="container mx-auto">
          <div className="grid gap-20 lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-col gap-5 pb-10">
              <div className="section-title-1">
                <span className="text-center hidden lg:block">Contact</span>
                <h2>Contact</h2>
              </div>
              <p className="text-[17px] text-[#b5b5b5] font-light leading-[35px] lg:pr-28 lg:py-10">
                We’re happy to answer any questions you may have and help your
                determine which of our services best fit your needs.
              </p>
              <div className="pt-5 flex">
                <div className="border border-[#06d889] py-4 px-8 ">
                  <h4 className="text-2xl font-medium text-[#06d889]">
                    Call Us Now:{" "}
                    <span>
                      <Link
                        href={"#"}
                        className="text-white hover:text-[#0E7651] transition-all duration-500"
                      >
                        +880 1212-3475678
                      </Link>
                    </span>
                  </h4>
                </div>
              </div>
              {/* Accordion section start  */}
              <div className=" pt-10 lg:pt-16">
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="text-white  focus:text-[#06d889] border-[#ededed33] focus:border-[#06d889] py-4"
                  >
                    Step 01
                  </AccordionHeader>
                  <AccordionBody className="text-[15px] leading-[30px] text-[#b5b5b5] pt-[20px] pb-[30px] px-[20px]">
                    Aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Praesent nec neque at dolor
                    venenatis consectetur eu quis ex. placerat felis non
                    aliquam.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className="text-white focus:text-[#06d889] border-[#ededed33] focus:border-[#06d889] py-4"
                  >
                    Step 02
                  </AccordionHeader>
                  <AccordionBody className="text-[15px] leading-[30px] text-[#b5b5b5] pt-[20px] pb-[30px] px-[20px]">
                    Aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Praesent nec neque at dolor
                    venenatis consectetur eu quis ex. placerat felis non
                    aliquam.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                  <AccordionHeader
                    onClick={() => handleOpen(3)}
                    className="text-white focus:text-[#06d889] border-[#ededed33] focus:border-[#06d889] py-4"
                  >
                    Step 03
                  </AccordionHeader>
                  <AccordionBody className="text-[15px] leading-[30px] text-[#b5b5b5] pt-[20px] pb-[30px] px-[20px]">
                    Aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Praesent nec neque at dolor
                    venenatis consectetur eu quis ex. placerat felis non
                    aliquam.
                  </AccordionBody>
                </Accordion>
              </div>
            </div>
            {/* grid second section start  */}

            <div className="contact_bg_1 w-full py-5 pb-10">
              <div className=" border-b border-[#ffffff0d]  text-center pb-5">
                <h5 className="text-white font-medium text-2xl">
                  Make a Free Consulting
                </h5>
              </div>
              <div className="flex flex-col gap-5 mx-5 pt-5">
                <div className=" grid lg:grid-cols-2 gap-5">
                  <div className="">
                    <h6 className="text-white font-medium pb-2 text-[14px]">
                      First Name
                    </h6>
                    <input
                      type="name"
                      name="name"
                      className="bg-[#1F2427] w-full border border-[#ffffff0d] rounded-[10px] text-[#dedada] py-[10px] px-[15px] focus:outline-none"
                    />
                  </div>
                  <div className="">
                    <h6 className="text-white font-medium pb-2 text-[14px]">
                      Last Name
                    </h6>
                    <input
                      type="name"
                      name="name"
                      className="bg-[#1F2427] w-full border border-[#ffffff0d] rounded-[10px] text-[#dedada] py-[10px] px-[15px] focus:outline-none"
                    />
                  </div>
                </div>
                <div className="">
                  <h6 className="text-white font-medium pb-2 text-[14px]">
                    Company/Organization
                  </h6>
                  <input
                    type="address"
                    name="address"
                    className="bg-[#1F2427] w-full border border-[#ffffff0d] rounded-[10px] text-[#dedada] py-[10px] px-[15px] focus:outline-none"
                  />
                </div>
                <div className="">
                  <h6 className="text-white font-medium pb-2 text-[14px]">
                    Email
                  </h6>
                  <input
                    type="email"
                    name="email"
                    className="bg-[#1F2427] w-full border border-[#ffffff0d] rounded-[10px] text-[#dedada] py-[10px] px-[15px] focus:outline-none"
                  />
                </div>
                <div className="">
                  <h6 className="text-white font-medium pb-2 text-[14px]">
                    Phone
                  </h6>
                  <input
                    type="text"
                    name="phone"
                    className="bg-[#1F2427] w-full border border-[#ffffff0d] rounded-[10px] text-[#dedada] py-[10px] px-[15px] focus:outline-none"
                  />
                </div>
                <div className="">
                  <h6 className="text-white font-medium pb-2 text-[14px]">
                    Message
                  </h6>
                  <textarea
                    name="text"
                    rows={6}
                    className="bg-[#1F2427] w-full border border-[#ffffff0d] rounded-[10px] text-[#dedada] py-[10px] px-[15px] focus:outline-none"
                  ></textarea>
                </div>
                <div className="flex items-start mt-4">
                  <button
                    type="button"
                    className="bg-[#06d889] py-[12px] px-[62px] rounded-[5px] text-[17px] text-[#1d1d1d] font-bold hover:bg-[#0A1019] hover:text-white transition-all duration-500"
                  >
                    Submit
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
