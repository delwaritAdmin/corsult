import React from "react";
import Header from "../Header";
import Footers from "../Footers";
import { Button } from "@material-tailwind/react";
import web from "../../img/service/web.png";
import Image from "next/image";

export default function WebDevelopment() {
  return (
    <>
      <Header />
      {/* ======= hero ====== */}
      <section className="py-[8rem] relative   bg-secondery">
        <div className="container mx-auto">
          <div className="hero  items-center   flex-col  md:flex-row flex justify-between">
            <div className=" text-center space-y-5 md:text-left  order-2 md:order-1 ">
              <h1 className=" text-white   font-semibold text-4xl">
                Web Development
              </h1>
              <p className="  text-white  lg:pr-[20rem] md:pr-[7rem]">
                Custom web application development by our expert web app
                developers. Front-end & design, backend, database, and server
                scale designed to fit your custom workflow.
              </p>
              <Button className=" bg-primary   font-normal rounded-full px-[4rem] py-2 text-white">
                Get Started
              </Button>
            </div>

            <div className="  self-end order-1 md:order-2">
              <Image
                src={web}
                className="  "
                height={800}
                width={800}
                alt="webdevelopemnt"
              />
            </div>
          </div>
        </div>

        {/* ======= capability ====== */}
        <section className="  absolute     h-full w-full  md:top-[80%] top-[90%]     ">
          <div className="container mx-auto">
            <div className="capability grid gap-8 -top-[50rem] grid-cols-1 lg:grid-cols-3">
              <div className=" bg-[#090A0D]    space-y-6 rounded-xl  p-10">
                <h1 className=" text-white text-4xl     font-semibold">
                  Saritasa’s Capabilities
                </h1>

                <p className=" text-white">
                  We’re passionate about delivering innovative solutions to fit
                  your needs.
                </p>
                <Button className="   py-4  font-bold   w-full   bg-white     rounded-full px-[4rem]    text-black">
                  Contact Us
                </Button>
              </div>

              <div className="lg:col-span-2  text-white flex-col md:flex-row  flex justify-between   rounded-xl items-center    bg-[#090A0D]    p-[4rem]">
                <div className=" space-y-10">
                  <div className=" space-x-4">
                    <span>logo</span>
                    Design
                  </div>
                  <div className=" space-x-4">
                    <span>logo</span>
                    Design
                  </div>
                  <div className=" space-x-4">
                    <span>logo</span>
                    Design
                  </div>
                </div>
                <div className=" space-y-10 mt-6 md:mt-0">
                  <div className=" space-x-4">
                    <span>logo</span>
                    Design
                  </div>
                  <div className=" space-x-4">
                    <span>logo</span>
                    Design
                  </div>
                  <div className=" space-x-4">
                    <span>logo</span>
                    Design
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ======= end ====== */}
      </section>
      {/* ======= end ====== */}
      {/* =======Getting Started====== */}
      <section className=" pb-20 pt-[35rem] lg:pt-[18rem] bg-third">
        <div className="  flex justify-center items-center ">
          <div className="   border-b-2 border-primary  w-[95%] "></div>
          <h1 className="   text-4xl text-white font-bold w-full text-center">
            {" "}
            Getting Started
          </h1>
          <div className="   border-b-2 border-primary w-[95%]"></div>
        </div>
        <div className="container mx-auto">
          <div>
            <div className=" text-white mt-8 flex flex-col lg:flex-row  items-center space-y-10 lg:space-y-0 lg:space-x-[8rem] justify-center">
              <div className=" flex space-x-3">
                <div>logo</div>
                <div>
                  <p className=" text-primary">Step 1</p>
                  <p>Contact Us</p>
                </div>
                <div>Icon</div>
              </div>
              <div className=" flex space-x-3">
                <div>logo</div>
                <div>
                  <p className=" text-primary">Step 2</p>
                  <p>Contact Us</p>
                </div>
                <div>Icon</div>
              </div>
              <div className=" flex space-x-3">
                <div>logo</div>
                <div>
                  <p className=" text-primary">Step 3</p>
                  <p>Contact Us</p>
                </div>
                <div>Icon</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======Getting End Started====== */}
      {/* =======Contact Started====== */}
      <section className=" py-[6rem]  bg-secondery ">
        <div className="container mx-auto text-white">
          <div className="   font-semibold  space-y-2 text-2xl text-center">
            <h3 className="text-primary">
              Call Us <span className="text-white text-sm">or</span>
            </h3>
            <h1 className=" text-4xl">Have Us Call You</h1>
          </div>

          <div className="grid grid-cols-1 mt-10 lg:grid-cols-4 gap-5">
            <div className=" order-2 lg:order-1 grid rounded-md  grid-cols-1 lg:col-span-3 md:grid-cols-2 gap-5  bg-gray-100 p-10  ">
              <div className=" space-y-2 text-black">
                <label className="   font-semibold">Your Name</label>
                <input
                  type="text"
                  className="w-full  rounded-md text-white bg-gray-800 p-2"
                />
              </div>
              <div className=" space-y-2 text-black">
                <label className="   font-semibold">Compnay Name</label>
                <input
                  type="text"
                  className="w-full   rounded-md text-white bg-gray-800 p-2"
                />
              </div>

              <div className=" space-y-2 text-black">
                <label className="   font-semibold">Email</label>
                <input
                  type="email"
                  className="w-full  rounded-md text-white bg-gray-800 p-2"
                />
              </div>

              <div className=" space-y-2  text-white">
                <label className="    font-semibold  text-black">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="w-full  rounded-md  text-white bg-gray-800 p-2"
                />
              </div>

              <div className=" space-y-2 text-black md:col-span-2">
                <label className="   font-semibold">
                  Tell About Your Project
                </label>
                <textarea
                  className=" w-full  rounded-md p-3 text-white bg-gray-800"
                  id="userInput"
                  name="userInput"
                  rows="7"
                  cols="50"
                ></textarea>
              </div>

              <Button className="  w-full  rounded-md md:col-span-2     px-[4rem] py-4 bg-gray-800  text-white font-bold  ">
                submit
              </Button>
            </div>

            {/* ======== locaiton======== */}
            <div className=" order-1 bg-gray-200 lg:order-2 pb-10 w-full rounded-md">
              <h1 className=" text-center text-bold mt-10   font-semibold  text-black text-xl">
                Office Locations
              </h1>
              <ul className=" text-black ml-10 mt-5  font-semibold">
                <li>NYC</li>
                <li>NGA</li>
                <li>BD</li>
                <li>IND</li>
              </ul>

              <div className=" flex justify-center items-center w-full">
                <div className="   border-b-2 mt-[6rem] border-primary   w-[90%]"></div>
              </div>

              <div className=" mt-14   text-center">
                <h3 className=" text-black mb-2   font-bold text-xl">
                  Contact Us
                </h3>

                <div className="  grid   grid-cols-1 gap-2 justify-items-center">
                  <Button className=" bg-transparent py-2   w-[80%] text-black shadow-none border-2 border-primary">
                    4754898958
                  </Button>
                  <Button className=" bg-transparent py-2   w-[80%] text-black shadow-none border-2 lowercase border-primary">
                    corsult@gmail.com
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =======Contact End Started====== */}
      <Footers />
    </>
  );
}
