import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

function Learn() {
  return (
    <section className="  bg-[#17191D]">
      {/* ================================ */}
      <div className="  bg-third w-full py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-2">
            <p className=" uppercase text-primary font-medium  text-sm lg:px-20 lg:pt-5">
              Our Software development
            </p>
            <h2 className="text-white mt-2 text-5xl font-bold leading-[55px] lg:px-28">
              Process
            </h2>
          </div>

          <div className=" mt-16 grid pb-10 grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <div className="space-y-2    rounded-sm shadow-md bg-[#17191D]  p-5">
              <h1 className="font-bold text-4xl   text-primary">01</h1>

              <h2 className=" text-white text-2xl font-semibold">
                Requierment Analysis
              </h2>

              <p className="text-sm text-white tracking-wide leading-6 pt-3">
                Understand your needs, objectives, and the challenges the
                software aims to address.
              </p>
            </div>

            <div className="space-y-2  rounded-sm shadow-md  bg-[#17191D] p-5">
              <h1 className="font-bold text-4xl  text-primary">02</h1>
              <h2 className="text-white text-2xl font-semibold">
                Planning & Design
              </h2>
              <p className=" text-sm text-white tracking-wide leading-6 pt-5">
                Draft a detailed plan and create a blueprint, conbering
                architecture ,user interface, user experience.
              </p>
            </div>
            <div className="space-y-2  rounded-sm shadow-md  bg-[#17191D] p-5">
              <h1 className="font-bold text-4xl  text-primary">03</h1>
              <h2 className="  text-white text-2xl font-semibold">
                Development
              </h2>
              <p className=" text-sm text-white tracking-wide leading-6 pt-3">
                Code software, ensuring each module aligns with the design and
                function samiessly.
              </p>
            </div>
            <div className="space-y-2    rounded-sm shadow-md  bg-[#17191D] p-5">
              <h1 className="font-bold text-4xl  text-primary">04</h1>
              <h2 className=" text-white text-2xl font-semibold">Testing</h2>
              <p className=" text-sm text-white tracking-wide leading-6 pt-3">
                Rigorously enaluate the software for bugs, performance issues,
                and reliability.
              </p>
            </div>
            <div className="space-y-2     rounded-sm shadow-md  bg-[#17191D] p-5">
              <h1 className="font-bold text-4xl  text-primary">05</h1>
              <h2 className=" text-white text-2xl font-semibold">Deployment</h2>
              <p className=" text-sm text-white tracking-wide leading-6 pt-3">
                Launch the software in a live enbironment, making it accessible
                to end-users.
              </p>
            </div>
            <div className="space-y-2  rounded-sm shadow-md  bg-[#17191D] p-5">
              <h1 className="font-bold text-4xl  text-primary">06</h1>
              <h2 className=" text-white text-2xl font-semibold">
                Maintenance & support
              </h2>
              <p className=" text-sm tracking-wide text-white leading-6">
                Provide ongoing support, addressing any updates, issues, or
                inprovenents to keep the software optimal.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" py-20 w-full">
        <div className="conatiner mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-white font-semibold text-4xl lg:text-6xl lg:leading-[75px] text-center">
              Want to learn more about our <br />
              App Development Process?
            </h1>
            <div className="pt-10">
              <Link
                href={"#"}
                className="text-white flex items-center gap-2 font-semibold bg-[#232630] py-4 px-10 rounded-full overflow-hidden border-[#32C5FA] border-2 transition-all duration-200"
              >
                <p>Talk to an Expert</p>
                <FaArrowRightLong className="mt-1" />
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Learn;
