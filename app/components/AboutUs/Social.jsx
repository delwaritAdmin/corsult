import React from "react";
import Link from "next/link";
import Image from "next/image";
import icon_1 from "../../img/AboutUs/icon_1.webp";
import icon_2 from "../../img/AboutUs/icon_2.webp";
import icon_3 from "../../img/AboutUs/icon_3.webp";
import icon_4 from "../../img/AboutUs/icon_4.webp";

function Social() {
  return (
    <section>
      <div className="bg-third w-full py-20">
        <div className="container mx-auto">
          <h1 className="text-primary font-semibold text-7xl lg:text-8xl uppercase">
            Social <span className="text-white font-thin">Accounts</span>
          </h1>
          <div className="pt-20 flex gap-10 items-start">
            <div className="bg-secondery py-24 w-full hover:bg-primary hover:text-white text-primary rounded-3xl transition-all duration-500">
              <div className="flex flex-col items-center gap-10">
                <Image src={icon_1} alt="icon_1" className="w-20" />
                <h4 className="text-3xl font-semibold">Dribbble</h4>
              </div>
            </div>
            <div className="bg-secondery py-20 w-full hover:bg-primary hover:text-white text-primary rounded-3xl transition-all duration-500">
              <div className="flex flex-col items-center gap-10">
                <Image src={icon_2} alt="icon_1" className="w-20" />
                <h4 className="text-3xl font-semibold">LinkedIn</h4>
              </div>
            </div>
          </div>
          <div className="pt-4 flex gap-10 items-end">
            <div className="bg-secondery py-20 w-full hover:bg-primary hover:text-white text-primary rounded-3xl transition-all duration-500">
              <div className="flex flex-col items-center gap-10">
                <Image src={icon_3} alt="icon_1" className="w-20" />
                <h4 className="text-3xl font-semibold">Behance</h4>
              </div>
            </div>
            <div className="bg-secondery py-24 w-full hover:bg-primary hover:text-white text-primary rounded-3xl transition-all duration-500">
              <div className="flex flex-col items-center gap-10">
                <Image src={icon_4} alt="icon_1" className="w-20" />
                <h4 className="text-3xl font-semibold">Instagram</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========= project on your mind ============== */}
      <div className="bg-secondery w-full py-20">
        <div className="container mx-auto">
        <h1 className="text-primary font-semibold text-7xl lg:text-9xl uppercase text-center lg:px-[4rem]">
        ANY PROJECT IDEA <span className="text-white font-thin">IN MIND?</span>
          </h1>
          <p className="text-[#a7a7a7] mt-[24px]  text-2xl tracking-[1px] lg:leading-[35px] py-4 lg:py-8 text-center lg:px-[12rem]">We will do a quick analysis and submit a free proposal for it. Don&rsquo;t worry, it&rsquo;s safe and private.</p>
          <div className="pt-5 lg:pt-8 flex justify-center">
            <button type="button " className="py-4 px-7 bg-primary text-white font-semibold text-xl hover:text-primary hover:bg-white transition-all duration-300 rounded-full">Share your Idea</button>

          </div>



        </div>

      </div>
    </section>
  );
}

export default Social;
