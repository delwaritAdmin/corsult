import React from "react";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import expert from "../img/chosse/expert-team.svg";
import proccess from "../img/chosse/transparent-process.svg";
import domain from "../img/chosse/global-network.svg";
import ontime from "../img/chosse/on-time-results.svg";
import support from "../img/chosse/custom-software-development-support.svg";
import end from "../img/chosse/mobile-app-development-end-to-end-services.svg";

export default function WhyChooseUs() {
  return (
    <section className="py-[5rem] bg-secondery">
      <div className="container mx-auto">
        <div className="  grid grid-cols-1 lg:grid-cols-5  items-center justify-items-center">
          <div className="heading col-span-2 text-center  text-white lg:text-left">
            <h1 className=" text-4xl font-bold ">We take your business</h1>
            <h1 className=" text-4xl font-bold text-primary ">
              Very Seriously
            </h1>
            <p className="  py-4 leading-relaxed px-20 lg:px-0 lg:pr-[3.5rem]">
              Suffescom Solutions Inc. is a reputable development company that
              offers quality services to its worldwide clientele. We are a
              one-stop development service provider for clients in different
              business domains.
            </p>
            <Button
              className="mt-2 shadow-none   transition-all duration-300  bg-primary rounded-full  capitalize   px-[4rem]"
              variant="outline"
            >
              Talk To Experts Now
            </Button>
          </div>
          <div className="box__content lg:col-span-3 mt-10">
            <div className="cart__wrapper  grid md:grid-cols-2 gap-1">
              {/* ======cart==== */}
              <div className=" text-white shadow-slate-200 rounded-sm bg-[#17191D] p-6 flex justify-center items-center  space-x-8">
                <div className="  bg-[#F3F1FE] p-2">
                  <Image
                    src={expert}
                    height={120}
                    width={120}
                    alt="expert team"
                  />
                </div>
                <div>
                  <h3 className=" font-bold text-2xl">Expert Team</h3>
                  <p className="mt-2">
                    We leverage our domain expertise to apply the latest
                    technology to solve complex business challenges.
                  </p>
                </div>
              </div>
              {/* ======cart end==== */}
              {/* ======cart==== */}
              <div className="text-white shadow-slate-200 rounded-sm bg-[#17191D] p-6 flex justify-center items-center  space-x-8">
                <div className="  bg-[#F3F1FE] p-2">
                  <Image
                    src={proccess}
                    height={120}
                    width={120}
                    alt="expert team"
                  />
                </div>
                <div>
                  <h3 className=" font-bold text-2xl">Transparent Process</h3>
                  <p className="mt-2">
                    We leverage our domain expertise to apply the latest
                    technology to solve complex business challenges.
                  </p>
                </div>
              </div>
              {/* ======cart end==== */}
              {/* ======cart==== */}
              <div className="text-white shadow-slate-200 rounded-sm bg-[#17191D] p-6 flex justify-center items-center  space-x-8">
                <div className="  bg-[#F3F1FE] p-2">
                  <Image
                    src={domain}
                    height={120}
                    width={120}
                    alt="expert team"
                  />
                </div>
                <div>
                  <h3 className=" font-bold text-2xl">Multi-Domain</h3>
                  <p className="mt-2">
                    We leverage our domain expertise to apply the latest
                    technology to solve complex business challenges.
                  </p>
                </div>
              </div>
              {/* ======cart end==== */}
              {/* ======cart==== */}
              <div className="text-white shadow-slate-200 rounded-sm bg-[#17191D] p-6 flex justify-center items-center  space-x-8">
                <div className="  bg-[#F3F1FE] p-2">
                  <Image
                    src={ontime}
                    height={120}
                    width={120}
                    alt="expert team"
                  />
                </div>
                <div>
                  <h3 className=" font-bold text-2xl">On-Time Delivery</h3>
                  <p className="mt-2">
                    We leverage our domain expertise to apply the latest
                    technology to solve complex business challenges.
                  </p>
                </div>
              </div>
              {/* ======cart end==== */}
              {/* ======cart==== */}
              <div className="text-white shadow-slate-200 rounded-sm bg-[#17191D] p-6 flex justify-center items-center  space-x-8">
                <div className="  bg-[#F3F1FE] p-2">
                  <Image src={end} height={120} width={120} alt="expert team" />
                </div>
                <div>
                  <h3 className=" font-bold text-2xl">On-Time Delivery</h3>
                  <p className="mt-2">
                    We leverage our domain expertise to apply the latest
                    technology to solve complex business challenges.
                  </p>
                </div>
              </div>
              {/* ======cart end==== */}
              {/* ======cart==== */}
              <div className="text-white shadow-slate-200 rounded-sm bg-[#17191D] p-6 flex justify-center items-center  space-x-8">
                <div className="  bg-[#F3F1FE] p-2">
                  <Image
                    src={support}
                    height={120}
                    width={120}
                    alt="expert team"
                  />
                </div>
                <div>
                  <h3 className=" font-bold text-2xl">On-Time Delivery</h3>
                  <p className="mt-2">
                    We leverage our domain expertise to apply the latest
                    technology to solve complex business challenges.
                  </p>
                </div>
              </div>
              {/* ======cart end==== */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
