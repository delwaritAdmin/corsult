import React from "react";
import Link from "next/link";
import Image from "next/image";
import line_start from "../img/Lifecycle/start.png";
import line_upper from "../img/Lifecycle/upper.png";
import line_down from "../img/Lifecycle/lower.png";
import line_end from "../img/Lifecycle/end.png";
import req_img from "../img/Lifecycle/ic-requirement.png";
import plan_img from "../img/Lifecycle/ic-planning.png";
import proto_img from "../img/Lifecycle/ic-prototyping.png";
import devel_img from "../img/Lifecycle/ic-delvelopment.png";
import release_img from "../img/Lifecycle/ic-release.png";
import { FaAngleDoubleRight } from "react-icons/fa";

function Lifecycle() {
  return (
    <section>
      <div className="bg-[] w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-[#444444] text-3xl text-center">
            Development Lifecycle
          </h2>
          <div className="py-10 grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-0 lg:gap-0">
            <div className="flex flex-col items-center  md:mt-5 ">
              <div className="hidden md:block">
                <Image src={line_start} alt="line-up" className="" />
              </div>
              <div>
                <Image
                  src={req_img}
                  alt="reuriremtnt"
                  className="w-60 md:w-24 lg:w-40 md:-mt-10 md:ml-3 lg:-mt-[5rem] lg:ml-0"
                />
                <div className="pt-3 flex items-center justify-center gap-1">
                  <p className="text-[#444444] font-semibold hover:text-[#027EEC] transition-all duration-200">
                    Requirement
                  </p>
                  <FaAngleDoubleRight className="text-[#5F8BE5]" />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:mt-10 ">
              <div className="flex flex-col-reverse gap-2 md:gap-0 md:flex-col ">
                <div className="pb-3 flex items-center justify-center gap-1">
                  <p className="text-[#444444] font-semibold hover:text-[#027EEC] transition-all duration-200">
                    Planning
                  </p>
                  <FaAngleDoubleRight className="text-[#5F8BE5]" />
                </div>
                <Image
                  src={plan_img}
                  alt="Planning"
                  className="w-64 md:w-24 lg:w-40"
                />
              </div>
              <div className="hidden md:block">
                <Image
                  src={line_down}
                  alt="line-up"
                  className="md:-mt-10 lg:-mt-20"
                />
              </div>
            </div>

            <div className="flex flex-col items-center lg:mt-5">
              <div className="hidden md:block">
                <Image src={line_upper} alt="line-up" />
              </div>
              <div>
                <Image
                  src={proto_img}
                  alt="Prototying"
                  className="w-60 md:w-24 lg:w-40 md:-mt-10 lg:-mt-[5rem]"
                />
                <div className="pt-3 flex items-center justify-center gap-1">
                  <p className="text-[#444444] font-semibold hover:text-[#027EEC] transition-all duration-200">
                    Prototying
                  </p>
                  <FaAngleDoubleRight className="text-[#5F8BE5]" />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:mt-10">
              <div className="flex flex-col-reverse gap-2 md:gap-0 md:flex-col ">
                <div className="pb-3 flex items-center justify-center gap-1">
                  <p className="text-[#444444] font-semibold hover:text-[#027EEC] transition-all duration-200">
                    Development
                  </p>
                  <FaAngleDoubleRight className="text-[#5F8BE5]" />
                </div>
                <Image
                  src={devel_img}
                  alt="Development"
                  className="w-60 md:w-24 lg:w-40 md:ml-3 lg:ml-0"
                />
              </div>
              <div className="hidden md:block">
                <Image
                  src={line_down}
                  alt="line-up"
                  className="md:-mt-10 lg:-mt-20"
                />
              </div>
            </div>

            <div className="flex flex-col items-center lg:mt-5">
              <div className="hidden md:block">
                <Image src={line_end} alt="line-up" />
              </div>
              <div>
                <Image
                  src={release_img}
                  alt="Release"
                  className="w-60 md:w-24 lg:w-40 md:-mt-10 lg:-mt-[5rem]"
                />
                <div className="pt-3 flex items-center justify-center gap-1">
                  <p className="text-[#444444] font-semibold hover:text-[#027EEC] transition-all duration-200">
                    Release
                  </p>
                  <FaAngleDoubleRight className="text-[#5F8BE5]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lifecycle;
