import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../img/logo.png";
import { AiOutlineSolution } from "react-icons/ai";
import { FaRegLightbulb, FaShippingFast, FaPhoneAlt } from "react-icons/fa";
import { SiInteractiondesignfoundation } from "react-icons/si";
import { RiSpeakLine } from "react-icons/ri";
import { FaMedal, FaLocationDot } from "react-icons/fa6";
import { TbWorldSearch, TbSocial } from "react-icons/tb";
import { IoMdMail } from "react-icons/io";
import {
  MdOutlineDesignServices,
  MdDeveloperBoard,
  MdDeveloperMode,
  MdOutlineAppSettingsAlt,
  MdOutlineHighQuality,
  MdOutlineSearch,
  MdOnlinePrediction,
} from "react-icons/md";
import { TbBrandProducthunt } from "react-icons/tb";
import {
  PiMicrosoftTeamsLogoLight,
  PiMicrosoftOutlookLogo,
} from "react-icons/pi";



function Innovations() {
  return (
    <section>
      <div className="bg-white w-full py-20">
        <div className="container mx-auto">
          <Link href={"/"}>
            <Image src={logo} alt="logo" className="w-80" />
          </Link>
          <h1 className="mt-4 py-4 text-gradient_2 font-bold text-4xl lg:text-6xl lg:pr-60">
            Using the latest innovations in Ai To Super charge your services
          </h1>
          <div className="pt-5 lg:pt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-3">
              <div>
                <AiOutlineSolution className="text-[#BF4069] text-7xl " />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-semibold">Reliable Solutions</h3>
                <p className=" text-[#aaaaaa] text-lg">
                  Provide inerlligent solutions breaking any form of complexity
                  through our extensive experience.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div>
                <FaRegLightbulb className="text-[#BF4069] text-7xl " />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-semibold">
                  Cost-effective Solutions
                </h3>
                <p className=" text-[#aaaaaa] text-lg">
                  Solutions that are pocket friendly and add more value to your
                  business with better ROI.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div>
                <SiInteractiondesignfoundation className="text-[#BF4069] text-7xl " />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-semibold">Interactive Designs</h3>
                <p className=" text-[#aaaaaa] text-lg">
                  Plan and design intuitively to ka,e interfaces more resptive
                  for the users.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div>
                <RiSpeakLine className="text-[#BF4069] text-7xl " />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-semibold">
                  Impressive Communication
                </h3>
                <p className=" text-[#aaaaaa] text-lg">
                  Will organized to keep Constantly in touch with our clients
                  when they need us.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div>
                <FaMedal className="text-[#BF4069] text-6xl " />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-semibold">Quality of Service </h3>
                <p className=" text-[#aaaaaa] text-lg">
                  Ensure customer satisfaction through continously delivcering
                  excellent serveces flawlessly.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div>
                <FaShippingFast className="text-[#BF4069] text-6xl " />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-semibold">Prompt Delivery</h3>
                <p className=" text-[#aaaaaa] text-lg">
                  Plan, develop and deliver projects promptly as how it is
                  promised at the beginning.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-gradient_2 w-full py-4">
          <div className=" container mx-auto">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="hidden lg:block"></div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2 items-center">
                  <div className="bg-white py-1 px-5 rounded-full">
                    <h3 className="font-semibold text-3xl text-gradient_2">
                      $1299
                    </h3>
                  </div>
                  <h4 className="text-white font-semibold text-2xl">
                    Starter Website
                  </h4>
                </div>
                <div className="flex items-center gap-4">
                  <h1 className=" font-bold text-5xl text-white">20%</h1>
                  <h3 className="text-white font-semibold text-2xl">
                    DISCOUNT <br />{" "}
                    <span className="text-xl">Valid till April</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-10 bg-gradient_3">
          <div className="container mx-auto">
            <h4 className="font-semibold text-white text-3xl lg:text-4xl">
              Services we provide
            </h4>
            {/* grid start  */}
            <div className=" pt-6 grid gap-4 md:gap-0 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-start gap-4 border-b border-dashed p-6 py-8 md:border-r ">
                <div className="border border-dashed rounded-xl">
                  <TbBrandProducthunt className="text-[#BF4069] text-7xl " />
                </div>
                <div className="flex flex-col gap-1">
                  <p className=" text-[#aaaaaa] text-lg">
                    Product Stratgy Consulting
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    Launch a successful degital product
                  </h3>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-dashed p-6 py-8 md:px-8 lg:border-r">
                <div className="border border-dashed rounded-xl">
                  <MdOutlineDesignServices className="text-[#BF4069] text-7xl " />
                </div>
                <div className="flex flex-col gap-1">
                  <p className=" text-[#aaaaaa] text-lg">UI/UX Design</p>
                  <h3 className="text-2xl font-semibold text-white">
                    Design user-friendly apps and websites
                  </h3>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-dashed p-6 py-8 md:px-8">
                <div className="border border-dashed rounded-xl">
                  <MdDeveloperBoard className="text-[#BF4069] text-7xl " />
                </div>
                <div className="flex flex-col gap-1">
                  <p className=" text-[#aaaaaa] text-lg">
                    Product Stratgy Consulting
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    Launch a successful degital product
                  </h3>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-dashed p-6 py-8 md:border-r">
                <div className="border border-dashed rounded-xl">
                  <PiMicrosoftTeamsLogoLight className="text-[#BF4069] text-7xl " />
                </div>
                <div className="flex flex-col gap-1">
                  <p className=" text-[#aaaaaa] text-lg">
                    Custom Software Development
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    Build software for special meeds
                  </h3>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-dashed p-6 py-8 md:px-8 lg:border-r">
                <div className="border border-dashed rounded-xl">
                  <MdDeveloperMode className="text-[#BF4069] text-7xl " />
                </div>
                <div className="flex flex-col gap-1">
                  <p className=" text-[#aaaaaa] text-lg">Web Development</p>
                  <h3 className="text-2xl font-semibold text-white">
                    Create websutes that you can adjust
                  </h3>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-dashed p-6 py-8 md:px-8">
                <div className="border border-dashed rounded-xl">
                  <MdOutlineAppSettingsAlt className="text-[#BF4069] text-7xl " />
                </div>
                <div className="flex flex-col gap-1">
                  <p className=" text-[#aaaaaa] text-lg">
                    Mobile App Development
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    Develop impactful mobile apps
                  </h3>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-dashed p-6 py-8 md:border-r">
                <div className="border border-dashed rounded-xl">
                  <PiMicrosoftOutlookLogo className="text-[#BF4069] text-7xl " />
                </div>
                <div className="flex flex-col gap-1">
                  <p className=" text-[#aaaaaa] text-lg">
                    Software Products Development
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    Build software products for providing services
                  </h3>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-dashed p-6 py-8 md:px-8 lg:border-r">
                <div className="border border-dashed rounded-xl">
                  <MdDeveloperMode className="text-[#BF4069] text-7xl " />
                </div>
                <div className="flex flex-col gap-1">
                  <p className=" text-[#aaaaaa] text-lg">Web app Development</p>
                  <h3 className="text-2xl font-semibold text-white">
                    Develop impactful wev apps
                  </h3>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-dashed p-6 py-8 md:px-8">
                <div className="border border-dashed rounded-xl">
                  <MdOutlineHighQuality className="text-[#BF4069] text-7xl " />
                </div>
                <div className="flex flex-col gap-1">
                  <p className=" text-[#aaaaaa] text-lg">
                    Quality Assurance & UAT
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    Creating Bug-Free Apps
                  </h3>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-dashed p-6 py-8 md:border-r lg:border-b-0">
                <div className="border border-dashed rounded-xl">
                  <MdOutlineSearch className="text-[#BF4069] text-7xl " />
                </div>
                <div className="flex flex-col gap-1">
                  <p className=" text-[#aaaaaa] text-lg">
                    Search Engine OPtimixation (SEO)
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    Ranks at the top in search engines
                  </h3>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-dashed p-6 py-8 md:px-8 lg:border-r lg:border-b-0">
                <div className="border border-dashed rounded-xl">
                  <TbSocial className="text-[#BF4069] text-7xl " />
                </div>
                <div className="flex flex-col gap-1">
                  <p className=" text-[#aaaaaa] text-lg">
                    Social Media Manegment
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    Reach the world Through social media
                  </h3>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-dashed p-6 py-8 md:px-8 lg:border-none">
                <div className="border border-dashed rounded-xl">
                  <MdOnlinePrediction className="text-[#BF4069] text-7xl " />
                </div>
                <div className="flex flex-col gap-1">
                  <p className=" text-[#aaaaaa] text-lg">
                    Online Reputation Development
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    Build your own brand online
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto pt-10">
          <h2 className="text-gradient_2 font-bold text-3xl lg:text-4xl">
            You are one step away to take your business to next level...
          </h2>
          <div className="pt-10 flex flex-col  gap-4 lg:gap-8">
            <div className="flex items-center justify-center gap-2">
              <FaLocationDot className="text-[#3676C1] text-lg  lg:text-3xl" />
              <p className="text-lg lg:text-2xl">
                580 Hempstead Turnpike, West Hempstead, NY 11552
              </p>
            </div>
            <div className="flex  gap-5 items-center flex-wrap md:gap-10 lg:justify-evenly">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#3676C1] text-lg lg:text-3xl" />
                <p className="text-lg lg:text-2xl">518-598-6259</p>
              </div>
              <div className="flex items-center gap-2">
                <TbWorldSearch className="text-[#3676C1] text-lg lg:text-3xl" />
                <p className="text-lg lg:text-2xl">www.corsult.com</p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdMail className="text-[#3676C1] text-lg lg:text-3xl" />
                <p className="text-lg lg:text-2xl">sales@corsult.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Innovations;
