import React from "react";
import Link from "next/link";
import Image from "next/image";
import innovate from "../../img/AboutUs/innovet.png"

function Innovate() {
  return (
    <section>
      <div className="bg-third w-full py-20">
        <div className="container mx-auto">
          <div className="text-center space-y-1 lg:space-y-2">
            <h1 className=" uppercase text-6xl lg:text-8xl font-semibold text-primary">
              We Strive
            </h1>
            <h2 className=" uppercase text-6xl lg:text-8xl font-thin text-white">
              to innovate
            </h2>
          </div>
          <p className="text-[#a7a7a7] mt-[24px]  text-2xl tracking-[1px] lg:leading-[35px] py-4 lg:py-8 text-center lg:px-[12rem]">
            Worked with more than 25 Startups and successfully completed 32
            projects. We also helped some leading brands to build their
            products, digital experiences and brands that connect with users.
          </p>
        </div>
      {/* ========== Innovet image here ================== */}
      <div className="w-full mt-10 lg:mt-24">
          <div className="">
            <Image src={innovate} alt="innovate image "className="w-full"/>
          </div>
      </div>
      </div>
    </section>
  );
}

export default Innovate;
