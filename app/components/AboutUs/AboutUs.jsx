import React from "react";
import Link from "next/link";
import Image from "next/image";
import icon from "../../img/AboutUs/icon.webp";
import bg from "../../img/AboutUs/bg_img.jpg";

function AboutUs() {
  return (
    <section>
      <div className="bg-third py-20 w-full">
        <div className="container mx-auto">
          {/* <h1 className=" text-white text-7xl md:text-8xl lg:text-9xl text-center font-semibold">
            About <span className=" font-thin text-white">us</span>
          </h1> */}
          <h1 className=" text-white text-5xl text-center font-semibold">
            Coming Soon!
          </h1>
        </div>
      </div>
      {/* =============== text section ================= */}
      {/* <div className="bg-secondery w-full py-20 ">
        <div className="container mx-auto lg:px-[10rem]">
          <h2 className=" text-4xl font-semibold text-white leading-[50px] lg:leading-[60px] text-center lg:text-[2.6rem]">
            <span className="flex md:gap-4 items-center md:justify-center">
              <p>Corsult is a design startup agency</p>{" "}
            
              <p className="md:order-3 hidden lg:block"> that specialized</p>{" "}
            </span>{" "}
            in Product, UI/UX and Branding. We collaborate with startups and
            leading brands to create premium web, mobile App, Saas and Digital
            products. We help them successfully build strong brands, leverage
            their story telling channels .
          </h2>
        </div>
      </div> */}
      {/* =============== Image section ================ */}
      {/* <div className="w-full">
        <div>
          <Image
           src={bg} 
           alt="background image" 
           className="w-full" 
           />
        </div>
      </div> */}
      {/* =============== second text section ================= */}
      {/* <div className="bg-third py-20 w-full">
        <div className="container mx-auto">
              <h1 className="text-5xl font-semibold text-primary lg:pr-[35rem] lg:leading-[60px]">Our Goal Is To Create Products For The Internet Economy.</h1>
              <p className="text-[#a7a7a7] mt-[24px]  text-2xl tracking-[1px] lg:leading-[35px] pt-3 md:pt-0">Winden is building banking products and services to support the next generation of entrepreneurs. The world as we know is no longer the same, and changes now occur in days and months, not years. The digital revolution is here, and Winden is at the center, supporting entrepreneurs and businesses propelling the growth of the global internet economy.</p>           
        </div>
      </div> */}
    </section>
  );
}

export default AboutUs;
