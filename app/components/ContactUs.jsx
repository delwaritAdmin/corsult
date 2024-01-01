import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

function ContactUs() {
  return (
    <section>
      <div className="bg-[#22262A] w-full py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col">
            <h2 className="text-transform text-center text-[5rem] md:text-[6.5rem] lg:text-[8rem]">
              WORK WITH US
            </h2>
            <h1 className="text-transform-2 text-center text-[7rem] md:text-[8.5rem] lg:text-[12rem]">
              LET&rsquo;S TALK
            </h1>
            <div className="flex justify-center -mt-16 md:-mt-24 lg:-mt-28">
              <Link
                href={"#"}
                className=" overflow-hidden flex gap-0 items-center text-white hover:bg-[#027EEC] transition-all duration-500 border-[1px] border-[#32C5FA] rounded-full  p-11 text-4xl font-semibold h-[18rem] w-[18rem] lg:h-[25rem] lg:w-[25rem] lg:p-16 lg:text-5xl  lg:leading-[55px]"
              >
                <p>Contact With Us.</p>
                <div>
                  <FaArrowRight className="-rotate-[45deg]"/>
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
