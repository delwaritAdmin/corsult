import React from "react";
import Image from "next/image";
import Link from "next/link";
import smlogo from "../img/Ellipse1.svg";
import smlogo2 from "../img/Ellipse2.svg";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section>
      <div className="bg-[#151130fd] w-full  py-32 lg:py-40">
        <div className="container mx-auto px-4">
          <div className="-mt-10 flex justify-between lg:px-36">
            <div className="">
              <Image src={smlogo} alt="logo" className="" />
            </div>
            <div className=""></div>
          </div>
          <div className=" flex flex-col items-center gap-1">
            <h3 className="text-white font-semibold text-center text-4xl lg:text-6xl">
              Creating Impactful Digital
            </h3>
            <h3 className="text-white font-semibold text-center text-4xl lg:text-6xl px-38">
              Products for <span className="text-gradient">Developers</span>
            </h3>
          </div>
          <div className="flex justify-end -mt-8 lg:mr-10">
            <Image src={smlogo2} alt="logo" className="" />
          </div>
          <p className="text-[#6A687B] font-semibold text-center py-2 lg:px-48">
            Our suite of solutions is designed to streamline operations and
            enhance productivity for startups, developers, and businesses. Our
            mission is to simplify the complexities of modern business and tech
            startups, enabling our customers to focus on what truly matters -
            their growth and success.
          </p>
          <div className="py-8 flex justify-center">
            <Link
              href={"#"}
              className="text-white flex items-center gap-2 font-semibold bg-gradient hover:bg-[#011444] rounded-full py-4 px-10 "
            >
              <p>Explore All Products</p>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
