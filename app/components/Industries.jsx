import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaHandHoldingHeart,
  FaShippingFast,
  FaToolbox,
  FaTools,
} from "react-icons/fa";
import { FaBrazilianRealSign, FaHospitalUser } from "react-icons/fa6";
import { BsFillBagCheckFill, BsBank } from "react-icons/bs";
import { IoIosSchool } from "react-icons/io";
import { GiFactory } from "react-icons/gi";
import { VscLaw } from "react-icons/vsc";
import { ImTicket } from "react-icons/im";

function Industries() {
  return (
    <section>
      <div className=" bg-third w-full py-20">
        <div className="container mx-auto px-4">
          <div className="p-6 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:items-center lg:gap-0 lg:gap-x-8">
            <div className=" bg-secondery p-5 lg:py-16 rounded-xl lg:col-span-2">
              <h2 className="font-bold text-primary text-4xl lg:text-5xl">
                Industries We <br />
                Serve
              </h2>
              <p className="leading-[24px] text-white pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis quam sint eos optio tenetur eum voluptate quibusdam
                reprehenderit nobis? Deserunt amet reiciendis explicabo, quae
                aut aliquam illum doloribus esse veritatis.
              </p>
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                <div className=" bg-secondery shadow-md shadow-[#3F464E] rounded-[16px] p-4 lg:py-6 flex flex-col gap-2 items-center cursor-pointer hvr-bounce-to-left overflow-hidden hover:text-white text-[#027EEC]">
                  <div className="bg-[#eaf3ff] p-5 rounded-xl">
                    <FaHandHoldingHeart className="text-3xl text-[#444444]" />
                  </div>
                  <Link
                    href={"#"}
                    className="underline underline-offset-1 font-semibold  "
                  >
                    HelthCare
                  </Link>
                </div>
                <div className="bg-secondery  shadow-md shadow-[#3F464E] rounded-[16px] p-4 lg:py-6 flex flex-col gap-2 items-center cursor-pointer hvr-bounce-to-left overflow-hidden hover:text-white text-[#027EEC]">
                  <div className="bg-[#eaf3ff] p-5 rounded-xl">
                    <BsFillBagCheckFill className="text-3xl text-[#444444]" />
                  </div>
                  <Link
                    href={"#"}
                    className="underline underline-offset-1 font-semibold "
                  >
                    Retail
                  </Link>
                </div>
                <div className="bg-secondery  shadow-md shadow-[#3F464E] rounded-[16px] p-4 lg:py-6 flex flex-col gap-2 items-center cursor-pointer hvr-bounce-to-left overflow-hidden hover:text-white text-[#027EEC]">
                  <div className="bg-[#eaf3ff] p-5 rounded-xl">
                    <BsBank className="text-3xl text-[#444444]" />
                  </div>
                  <Link
                    href={"#"}
                    className="underline underline-offset-1 font-semibold "
                  >
                    Finance
                  </Link>
                </div>
                <div className="bg-secondery   shadow-md shadow-[#3F464E] rounded-[16px] p-4 lg:py-6 flex flex-col gap-2 items-center cursor-pointer hvr-bounce-to-left overflow-hidden hover:text-white text-[#027EEC]">
                  <div className="bg-[#eaf3ff] p-5 rounded-xl">
                    <IoIosSchool className="text-3xl text-[#444444]" />
                  </div>
                  <Link
                    href={"#"}
                    className="underline underline-offset-1 font-semibold "
                  >
                    Education
                  </Link>
                </div>
                <div className="bg-secondery   shadow-md shadow-[#3F464E] rounded-[16px] p-4 lg:py-6 flex flex-col gap-2 items-center cursor-pointer hvr-bounce-to-left overflow-hidden hover:text-white text-[#027EEC]">
                  <div className="bg-[#eaf3ff] p-5 rounded-xl">
                    <FaBrazilianRealSign className="text-2xl text-[#444444]" />
                  </div>
                  <Link
                    href={"#"}
                    className="underline underline-offset-1 font-semibold "
                  >
                    Real-estate
                  </Link>
                </div>
                <div className="bg-secondery   shadow-md shadow-[#3F464E] rounded-[16px] p-4 lg:py-6 flex flex-col gap-2 items-center cursor-pointer hvr-bounce-to-left overflow-hidden hover:text-white text-[#027EEC]">
                  <div className="bg-[#eaf3ff] p-5 rounded-xl">
                    <GiFactory className="text-3xl text-[#444444]" />
                  </div>
                  <Link
                    href={"#"}
                    className="underline underline-offset-1 font-semibold "
                  >
                    Manufacturing
                  </Link>
                </div>
                <div className="bg-secondery   shadow-md shadow-[#3F464E] rounded-[16px] p-4 lg:py-6 flex flex-col gap-2 items-center cursor-pointer hvr-bounce-to-left overflow-hidden hover:text-white text-[#027EEC]">
                  <div className="bg-[#eaf3ff] p-5 rounded-xl">
                    <FaShippingFast className="text-3xl text-[#444444]" />
                  </div>
                  <Link
                    href={"#"}
                    className="underline underline-offset-1 font-semibold "
                  >
                    Transportation
                  </Link>
                </div>
                <div className="bg-secondery   shadow-md shadow-[#3F464E] rounded-[16px] p-4 lg:py-6 flex flex-col gap-2 items-center cursor-pointer hvr-bounce-to-left overflow-hidden hover:text-white text-[#027EEC]">
                  <div className="bg-[#eaf3ff] p-5 rounded-xl">
                    <ImTicket className="text-3xl text-[#444444]" />
                  </div>
                  <Link
                    href={"#"}
                    className="underline underline-offset-1 font-semibold "
                  >
                    Entertainment
                  </Link>
                </div>
                <div className="bg-secondery   shadow-md shadow-[#3F464E] rounded-[16px] p-4 lg:py-6 flex flex-col gap-2 items-center cursor-pointer hvr-bounce-to-left overflow-hidden hover:text-white text-[#027EEC]">
                  <div className="bg-[#eaf3ff] p-5 rounded-xl">
                    <FaHospitalUser className="text-3xl text-[#444444]" />
                  </div>
                  <Link
                    href={"#"}
                    className="underline underline-offset-1 font-semibold "
                  >
                    Hospitality
                  </Link>
                </div>
                <div className="bg-secondery   shadow-md shadow-[#3F464E] rounded-[16px] p-4 lg:py-6 flex flex-col gap-2 items-center cursor-pointer hvr-bounce-to-left overflow-hidden hover:text-white text-[#027EEC]">
                  <div className="bg-[#eaf3ff] p-5 rounded-xl">
                    <FaToolbox className="text-3xl text-[#444444]" />
                  </div>
                  <Link
                    href={"#"}
                    className="underline underline-offset-1 font-semibold "
                  >
                    Travel
                  </Link>
                </div>
                <div className="bg-secondery   shadow-md shadow-[#3F464E] rounded-[16px] p-4 lg:py-6 flex flex-col gap-2 items-center cursor-pointer hvr-bounce-to-left overflow-hidden hover:text-white text-[#027EEC]">
                  <div className="bg-[#eaf3ff] p-5 rounded-xl">
                    <VscLaw className="text-3xl text-[#444444]" />
                  </div>
                  <Link
                    href={"#"}
                    className="underline underline-offset-1 font-semibold transition-all durat ion-200 "
                  >
                    Legal
                  </Link>
                </div>
                <div className="bg-secondery   shadow-md shadow-[#3F464E] rounded-[16px] p-4 lg:py-6 flex flex-col gap-2 items-center cursor-pointer hvr-bounce-to-left overflow-hidden hover:text-white text-[#027EEC]">
                  <div className="bg-[#eaf3ff] p-5 rounded-xl">
                    <FaTools className="text-3xl text-[#444444]" />
                  </div>
                  <Link
                    href={"#"}
                    className="underline underline-offset-1 font-semibold "
                  >
                    Construction
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Industries;
