import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import figma from "../img/Teach-Stack/figma-tech-icon.svg";
import html from "../img/Teach-Stack/html-tech-icon.svg";
import css from "../img/Teach-Stack/css-tech-icon.svg";
import bootstap from "../img/Teach-Stack/bootstrap-tech-icon.webp";
import angular from "../img/Teach-Stack/angularjs-tech-icon.webp";
import react from "../img/Teach-Stack/react-js-tech-icon.svg";
import tailwind from "../img/Teach-Stack/tailwind-css-tech-icon.webp";
import metrialui from "../img/Teach-Stack/material-ui-tech-icon.webp";
import nextjs from "../img/Teach-Stack/next-js-tech-icon.webp";
import FrontEnd from "../img/Teach-Stack/front-end-development.svg";

export default function OurStact() {
  const [menu, setMenu] = useState(0);

  const handleMenu = () => {
    setMenu();
  };

  console.log(menu);

  return (
    <section className="py-20 bg-third">
      <div className="container mx-atuo">
        <div>
          <div className="heading col-span-2 text-center  text-white ">
            <h1 className=" text-4xl font-bold ">Our Tech Stacks</h1>
          </div>

          {/* =======Main content===== */}

          <div className="wrapper rounded-sm mt-8 grid  gap-y-6 md:gap-y-0 gap-x-6 grid-cols-1 md:grid-cols-3  bg-[#17191D] p-8 text-white">
            {/* menu left */}
            <div className="menu  ">
              <ul className=" space-y-6 ">
                <li
                  onClick={() => setMenu(0)}
                  className={`shadow-md flex p-3   ${
                    menu === 0 ? "bg-primary " : ""
                  }  cursor-pointer rounded-sm   items-center space-x-6`}
                >
                  <Image src={FrontEnd} alt="front end development" />
                  <h4>Front End Development</h4>
                </li>
                <li
                  onClick={() => setMenu(1)}
                  className={`shadow-md flex p-3   ${
                    menu === 1 ? "bg-primary " : ""
                  }  cursor-pointer rounded-sm   items-center space-x-6`}
                >
                  <span className="block">logo</span>
                  <h4>Front End Development</h4>
                </li>
                <li
                  onClick={() => setMenu(2)}
                  className={`shadow-md flex p-3   ${
                    menu === 2 ? "bg-primary " : ""
                  }  cursor-pointer rounded-sm   items-center space-x-6`}
                >
                  <span className="block">logo</span>
                  <h4>Front End Development</h4>
                </li>
              </ul>
            </div>
            {/* tech */}

            <div className="tech col-span-2  transition-all duration-300">
              {menu === 0 ? (
                <div className=" transition-opacity duration-300 grid grid-cols-2 md:grid-cols-3 gap-5">
                  {/* item */}
                  <div className=" p-4 border  space-y-2  border-gray-600  flex flex-col justify-center items-center ">
                    <Image src={figma} alt="icon" />
                    <p className="font-bold">Figma</p>
                  </div>

                  <div className=" p-4 border  space-y-2  border-gray-600  flex flex-col justify-center items-center ">
                    <Image src={html} alt="icon" />
                    <p className="font-bold">html 5</p>
                  </div>
                  <div className=" p-4 border  space-y-2  border-gray-600  flex flex-col justify-center items-center ">
                    <Image src={css} alt="icon" />
                    <p className="font-bold">CSS</p>
                  </div>
                  <div className=" p-4 border  space-y-2  border-gray-600  flex flex-col justify-center items-center ">
                    <Image src={bootstap} alt="icon" />
                    <p className="font-bold">Bootstap</p>
                  </div>

                  <div className=" p-4 border  space-y-2  border-gray-600  flex flex-col justify-center items-center ">
                    <Image src={react} alt="icon" />
                    <p className="font-bold">React</p>
                  </div>
                  <div className=" p-4 border  space-y-2  border-gray-600  flex flex-col justify-center items-center ">
                    <Image src={angular} alt="icon" />
                    <p className="font-bold">Angular.js</p>
                  </div>

                  <div className=" p-4 border  space-y-2  border-gray-600  flex flex-col justify-center items-center ">
                    <Image src={tailwind} alt="icon" />
                    <p className="font-bold">tailwind</p>
                  </div>

                  <div className=" p-4 border  space-y-2  border-gray-600  flex flex-col justify-center items-center ">
                    <Image src={nextjs} alt="icon" />
                    <p className="font-bold">Next.Js</p>
                  </div>
                  <div className=" p-4 border  space-y-2  border-gray-600  flex flex-col justify-center items-center ">
                    <Image src={metrialui} alt="icon" />
                    <p className="font-bold">MatrialUI</p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          {/* =======Main content  End===== */}
        </div>
      </div>
    </section>
  );
}
