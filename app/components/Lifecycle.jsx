import React from "react";
import Link from "next/link";
import Image from "next/image";
import line_start from "../img/Lifecycle/start.png";
import line_upper from "../img/Lifecycle/upper.png";
import line_down from "../img/Lifecycle/lower.png";
import line_end from "../img/Lifecycle/end.png";
import req_img from "../img/Lifecycle/requirement.png";
import plan_img from "../img/Lifecycle/plan.png";
import proto_img from "../img/Lifecycle/prototying.png";
import devel_img from "../img/Lifecycle/development.png";
import release_img from "../img/Lifecycle/rekease.png";
import { FaAngleDoubleRight } from "react-icons/fa";

function Lifecycle() {
  return (
    <section className=" bg-secondery py-8">
      <div className="bg-[] w-full py-16">
        <div className="container mx-auto  xpx-4">
          <h2 className="text-primary  font-semibold mb-4 text-3xl lg:text-4xl text-center">
            Development <span className="text-white"> Lifecycle</span>
          </h2>
          <div className="py-10 grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-0 lg:gap-0">
            <div className="flex flex-col items-center  md:mt-5 lg:mt-4 ">
              <div className="hidden md:block">
                <Image src={line_start} alt="line-up" className="lg:w-80 md:-mt-4" />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={req_img}
                  alt="reuriremtnt"
                  className="w-60 md:w-28 lg:w-28 md:-mt-10 lg:-mt-[5rem] "
                />
                <div className="pt-3 flex items-center justify-center gap-1">
                  <p className="text-white font-semibold hover:text-[#027EEC] transition-all duration-200">
                    Requirement
                  </p>
                  <FaAngleDoubleRight className="text-[#8C52FE]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center lg:mt-9 ">
              <div className="flex flex-col-reverse gap-2 md:gap-0 md:flex-col ">
                <div className="pb-3 flex items-center justify-center gap-1">
                  <p className="text-white font-semibold hover:text-[#027EEC] transition-all duration-200">
                    Planning
                  </p>
                  <FaAngleDoubleRight className="text-[#5F8BE5]" />
                </div>
                <Image
                  src={plan_img}
                  alt="Planning"
                  className="w-64 md:w-28 lg:w-28"
                />
              </div>
              <div className="hidden md:block">
                <Image
                  src={line_down}
                  alt="line-up"
                  className="md:-mt-16 lg:-mt-10 lg:w-80"
                />
              </div>
            </div>
            <div className="flex flex-col items-center lg:mt-2">
              <div className="hidden md:block">
                <Image src={line_upper} alt="line-up" className="lg:w-96" />
              </div>
              <div>
                <Image
                  src={proto_img}
                  alt="Prototying"
                  className="w-60 md:w-28 lg:w-28 md:-mt-10 lg:-mt-[5rem]"
                />
                <div className="pt-3 flex items-center justify-center gap-1">
                  <p className="text-white font-semibold hover:text-[#027EEC] transition-all duration-200">
                    Prototying
                  </p>
                  <FaAngleDoubleRight className="text-[#29B68B]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center lg:mt-10">
              <div className="flex flex-col-reverse gap-2 md:gap-0 md:flex-col">
                <div className="pb-3 flex items-center justify-center  gap-1">
                  <p className="text-white font-semibold hover:text-[#027EEC] transition-all duration-200 md:ml-4 lg:ml-0">
                    Development
                  </p>
                  <FaAngleDoubleRight className="text-[#F2913B]" />
                </div>
                <Image
                  src={devel_img}
                  alt="Development"
                  className="w-60 md:w-28 lg:w-28 md:ml-3 lg:ml-0"
                />
              </div>
              <div className="hidden md:block">
                <Image
                  src={line_down}
                  alt="line-up"
                  className="md:-mt-16 lg:-mt-10 lg:w-80"
                />
              </div>
            </div>
            <div className="flex flex-col items-center lg:mt-2">
              <div className="hidden md:block">
                <Image src={line_end} alt="line-up" className="lg:w-80" />
              </div>
              <div>
                <Image
                  src={release_img}
                  alt="Release"
                  className="w-60 md:w-28 lg:w-28 md:-mt-10 lg:-mt-[5rem] "
                />
                <div className="pt-3 flex items-center justify-center gap-1">
                  <p className="text-white font-semibold hover:text-[#027EEC] transition-all duration-200">
                    Release
                  </p>
                  <FaAngleDoubleRight className="text-primary" />
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
