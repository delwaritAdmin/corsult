import React from "react";
import Link from "next/link";
import Image from "next/image";
import team_img_1 from "../../img/AboutUs/team_member_1.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper React components
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Ourteam() {
  return (
    <section>
      <div className=" bg-secondery py-20 w-full">
        <div className="container mx-auto">
          <h2 className="text-primary font-semibold text-8xl lg:text-8xl uppercase text-center">
            Our <span className="text-white font-thin">team</span> 🔥
          </h2>
          <div className="pt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className=" relative">
              <Image
                src={team_img_1}
                alt="Team-member-1"
                className="w-full z-10"
              />
              <div className=" absolute left-0 top-auto bottom-0 right-0 pt-[24px] mx-0 bg-white text-center rounded-b-2xl">
                <div className="mb-[8px] block">
                  <h3 className="text-[#333] text-[28px] font-semibold">
                    Emon Hasan Khan
                  </h3>
                </div>
                <div className="text-[16px] text-[#595855] pb-4 ">
                  Creative Director
                </div>
              </div>
            </div>
            <div className=" relative">
              <Image
                src={team_img_1}
                alt="Team-member-1"
                className="w-full z-10"
              />
              <div className=" absolute left-0 top-auto bottom-0 right-0 pt-[24px] mx-0 bg-white text-center rounded-b-2xl">
                <div className="mb-[8px] block">
                  <h3 className="text-[#333] text-[28px] font-semibold">
                    Emon Hasan Khan
                  </h3>
                </div>
                <div className="text-[16px] text-[#595855] pb-4 ">
                  Creative Director
                </div>
              </div>
            </div>
            <div className=" relative">
              <Image
                src={team_img_1}
                alt="Team-member-1"
                className="w-full z-10"
              />
              <div className=" absolute left-0 top-auto bottom-0 right-0 pt-[24px] mx-0 bg-white text-center rounded-b-2xl">
                <div className="mb-[8px] block">
                  <h3 className="text-[#333] text-[28px] font-semibold">
                    Emon Hasan Khan
                  </h3>
                </div>
                <div className="text-[16px] text-[#595855] pb-4 ">
                  Creative Director
                </div>
              </div>
            </div>
            {/* <div className=" relative">
            <Image src={team_img_1} alt="Team-member-1" className="w-full z-10"/>
            <div className=" absolute left-0 top-auto bottom-0 right-0 pt-[24px] mx-0 bg-white text-center rounded-b-2xl">
              <div className="mb-[8px] block">
                <h3 className="text-[#333] text-[28px] font-semibold">
                  Emon Hasan Khan 
                </h3>
              </div>
              <div className="text-[16px] text-[#595855] pb-4 ">
                Creative Director
              </div>
            </div>
          </div>
          <div className=" relative">
            <Image src={team_img_1} alt="Team-member-1" className="w-full z-10"/>
            <div className=" absolute left-0 top-auto bottom-0 right-0 pt-[24px] mx-0 bg-white text-center rounded-b-2xl">
              <div className="mb-[8px] block">
                <h3 className="text-[#333] text-[28px] font-semibold">
                  Emon Hasan Khan 
                </h3>
              </div>
              <div className="text-[16px] text-[#595855] pb-4 ">
                Creative Director
              </div>
            </div>
          </div>
          <div className=" relative">
            <Image src={team_img_1} alt="Team-member-1" className="w-full z-10"/>
            <div className=" absolute left-0 top-auto bottom-0 right-0 pt-[24px] mx-0 bg-white text-center rounded-b-2xl">
              <div className="mb-[8px] block">
                <h3 className="text-[#333] text-[28px] font-semibold">
                  Emon Hasan Khan 
                </h3>
              </div>
              <div className="text-[16px] text-[#595855] pb-4 ">
                Creative Director
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourteam;
