import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

function ContactUs() {
  return (
    <section>
      <div className="bg-[#22262A] w-full py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col">
            <h2 className="text-transform text-center text-4xl md:text-7xl px-20 lg:text-9xl">
              WORK WITH US
            </h2>
            <h1 className="text-transform-2 text-center text-5xl md:text-8xl lg:text-[10rem]">
              LET&rsquo;S TALK
            </h1>
            <div className="flex justify-center -mt-10 md:-mt-16 lg:-mt-24">
              <Link href={"#"} className="contact-btn flex gap-0 ">
             
               <p> Contact With Us.</p>
               <div>
                <FaArrowRight/>
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
