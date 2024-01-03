import React from "react";
import Image from "next/image";
import Link from "next/link";
import award from "../img/Recognized/awards.svg";
import logo_1 from "../img/Recognized/g2-logo.webp";
import logo_2 from "../img/Recognized/goodfirms.webp";
import logo_3 from "../img/Recognized/clutch-logo.webp";
import logo_4 from "../img/Recognized/design-rush-logo.webp";
import { FaStar } from "react-icons/fa6";

function Recognized() {
  return (
    <section>
      <div className=" bg-[#1B1F23] py-20 w-full">
        <div className="container mx-auto">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2">
            {/* grid content start */}
            <div className="text-center space-y-4 md:space-y-6 lg:space-y-4">
              <h1 className="text-primary text-4xl md:text-5xl lg:text-4xl font-bold ">
                We Are Recognized By
              </h1>
              <p className="text-white text-lg md:text-xl lg:text-lg">
                Suffescom Solutions takes the top spot for its quality services
                at the most reputable platforms. We have served numerous
                industries with advanced tech solutions that helps them create
                an incredible brand identity.
              </p>
              <div className="flex justify-center">
                <Image src={award} alt="logo" className="" />
              </div>
            </div>
            {/* grid cart start */}
            <div className="grid grid-cols-2 gap-3 md:gap-5">
              {/* cart 1  */}
              <div className=" bg-[#17191D] p-10 rounded-sm">
                <div className="flex flex-col items-center gap-2">
                  <Image src={logo_1} alt="logo" className="w-full pb-1" />
                  <p className="text-primary font-semibold text-2xl">5.0</p>
                  <div className="flex items-center justify-center gap-1">
                    <FaStar className="text-[#FFC107] md:text-2xl" />
                    <FaStar className="text-[#FFC107] md:text-2xl" />
                    <FaStar className="text-[#FFC107] md:text-2xl" />
                    <FaStar className="text-[#FFC107] md:text-2xl" />
                    <FaStar className="text-[#FFC107] md:text-2xl" />
                  </div>
                </div>
              </div>
              {/* cart 2  */}
              <div className=" bg-[#17191D] p-10 rounded-sm">
                <div className="flex flex-col items-center gap-2">
                  <Image src={logo_2} alt="logo" className="w-full" />
                  <p className="text-primary font-semibold text-2xl">5.0</p>
                  <div className="flex items-center justify-center gap-1">
                    <FaStar className="text-[#FFC107] md:text-2xl" />
                    <FaStar className="text-[#FFC107] md:text-2xl" />
                    <FaStar className="text-[#FFC107] md:text-2xl" />
                    <FaStar className="text-[#FFC107] md:text-2xl" />
                    <FaStar className="text-[#FFC107] md:text-2xl" />
                  </div>
                </div>
              </div>
              {/* cart 3  */}
              <div className=" bg-[#17191D] p-10 rounded-sm">
                <div className="flex flex-col items-center gap-2">
                  <Image src={logo_3} alt="logo" className="w-full pb-1" />
                  <p className="text-primary font-semibold text-2xl">4.9</p>
                  <div className="flex items-center justify-center gap-1">
                    <FaStar className="text-[#FFC107] md:text-2xl" />
                    <FaStar className="text-[#FFC107] md:text-2xl" />
                    <FaStar className="text-[#FFC107] md:text-2xl" />
                    <FaStar className="text-[#FFC107] md:text-2xl" />
                    <FaStar className="text-[#FFC107] md:text-2xl" />
                  </div>
                </div>
              </div>
              {/* cart 4  */}
              <div className=" bg-[#17191D] p-10 rounded-sm">
                <div className="flex flex-col items-center gap-2">
                  <Image src={logo_4} alt="logo" className="w-60 pb-1" />
                  <p className="text-primary font-semibold text-2xl">5.0</p>
                  <div className="flex items-center justify-center gap-1">
                    <FaStar className="text-[#FFC107] md:text-2xl" />
                    <FaStar className="text-[#FFC107] md:text-2xl" />
                    <FaStar className="text-[#FFC107] md:text-2xl" />
                    <FaStar className="text-[#FFC107] md:text-2xl" />
                    <FaStar className="text-[#FFC107] md:text-2xl" />
                  </div>
                </div>
              </div>
              {/* cart end  */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recognized;
