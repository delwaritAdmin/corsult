import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

function ContactUs() {
  return (
    <section>
      <div className="bg-[#22262A] w-full py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col">
            <h2 className="text-transform text-center text-[3rem] md:text-7xl md:px-20 lg:text-9xl">
              WORK WITH US
            </h2>
            <h1 className="text-transform-2 text-center text-6xl md:text-8xl lg:text-[10rem]">
              LET&rsquo;S TALK
            </h1>
            <div className="flex justify-center -mt-10 md:-mt-14 lg:-mt-24">
              <Link
                href={"#"}
                className=" flex gap-0 items-center text-white hover:bg-[#027EEC] transition-all duration-500 border-[1px] border-[#32C5FA] rounded-full h-[10rem] w-[10rem] p-8 md:p-10 md:text-lg md:h-[12rem] md:w-[12rem] lg:h-[15rem] lg:w-[15rem] lg:p-16  lg:text-xl lg:gap-1"
              >
                <p>Contact With Us.</p>
                <div>
                  <FaArrowRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
