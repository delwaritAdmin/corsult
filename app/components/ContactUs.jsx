import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { LuArrowRight } from "react-icons/lu";
import { TfiArrowRight } from "react-icons/tfi";

function ContactUs() {
  return (
    <section>
      <div className="bg-[#22262A] w-full pb-28 pt-10">
        <div className="container mx-auto px-4">
         
         
          <div className="flex flex-col">
            <h2 className="text-transform text-center text-[5rem] md:text-[6.5rem] lg:text-[8rem]">
              WORK WITH US
            </h2>
            <h1 className="text-transform-2 text-center text-[7rem] md:text-[8.5rem] lg:text-[13rem] brightness-95">
              LET&rsquo;S TALK
            </h1>
           
           
            <div className="flex justify-center -mt-16 md:-mt-24 lg:-mt-28 ">
              <Link
                href={"#"}
                className="contact_bg overflow-hidden flex gap-0 items-center text-white  transition-all duration-500 border-[1px] border-[#7e7e7e] rounded-full  p-10 text-3xl  h-[16rem] w-[16rem] lg:h-[18rem] lg:w-[18rem]  "
              >
                <p className=" text-md">Contact With Us.</p>
                <div>
                  <TfiArrowRight className="-rotate-[45deg] font-mono" />
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
