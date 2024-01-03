import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Hero_img from "../img/hero_img.png";
import img_ani from "../img/animation_text.svg";
import { FaArrowRight } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  const [stateValue, setStateValue] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change the state value
      setStateValue(!stateValue);
    }, 5000); // 20 seconds in milliseconds

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [stateValue]); // useEffect depends on stateValue

  return (
    <section className=" lg:min-h-[100vh]  relative">
      <div className="bg-[#22262A] overflow-hidden  relative banner-area w-full  lg:py-20 lg:pt-40 pt-52">
        <div className="container mx-auto lg:px-[5rem]  ">
          <div className="grid grid-cols-1   lg:pt-[6rem] lg:grid-cols-3">
            <div className=" lg:col-span-2 transition-all duration-300">
              {stateValue ? (
                <h1 className="lg:text-7xl transition-all duration-300 text-5xl lg:leading-[1.5] leading-relaxed font-bold text-white">
                  Set Your{" "}
                  <span className="text-primary underline">Business</span>{" "}
                  <br /> With Innovative Plan
                </h1>
              ) : (
                <h1 className="lg:text-5xl transition-all duration-300 text-5xl lg:leading-[1.5] leading-relaxed font-bold text-white">
                  Using the latest innovations in AI To Super charge
                  <span className="text-primary"> your services</span>
                </h1>
              )}
              {/* <TypeAnimation
                sequence={[
                  "Using the latest innovations in Ai To Super charge your services",
                  3000,
                  "Set Your Business With Innovative Plan",
                ]}
                speed={10}
                repeat={Infinity}
                className="lg:text-7xl text-5xl font-bold text-white animate-pulse"
              />{" "} */}
              <p className="text-white mt-10  text-left text-[1rem] leading-[33px]  lg:pr-[16rem]">
                Curabitur sed facilisis erat. Vestibulum pharetra eros eget
                fringilla porttitor. oltorrent gongi Duis a orci nunc.
                Suspendisse ac convallis sapien, quis commodo libero. Donec nec
                duomoi luctus, pellentesque lacus sed, mollis going leo.
              </p>
              <div className="pt-8 z-40">
                <Link href={"#"} className="flex items-center">
                  <div className=" z-30  ">
                    <svg
                      width={60}
                      fill="#027EEC"
                      height={60}
                      viewBox="0 0 60 60"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1.51038 32.6729C-0.990382 34.1837 -0.232333 37.9945 2.65612 38.4335C4.97848 38.7866 6.09439 41.4804 4.70164 43.3722C2.96938 45.7248 5.12803 48.9555 7.9646 48.2555C10.245 47.6925 12.3074 49.7548 11.7445 52.0354C11.0445 54.8721 14.2752 57.0306 16.6278 55.2984C18.5196 53.9057 21.2139 55.0216 21.5665 57.3439C22.0054 60.2322 25.8161 60.9904 27.3271 58.4896C28.5419 56.479 31.4581 56.479 32.6729 58.4896C34.1837 60.9904 37.9945 60.2323 38.4335 57.3439C38.7866 55.0215 41.4804 53.9056 43.3722 55.2984C45.7248 57.0306 48.9555 54.872 48.2555 52.0354C47.6925 49.755 49.7548 47.6925 52.0354 48.2555C54.872 48.9555 57.0306 45.7248 55.2984 43.3722C53.9057 41.4804 55.0216 38.7861 57.3439 38.4335C60.2322 37.9946 60.9904 34.1839 58.4896 32.6729C56.479 31.4581 56.479 28.5419 58.4896 27.3271C60.9904 25.8163 60.2323 22.0055 57.3439 21.5665C55.0215 21.2134 53.9056 18.5196 55.2984 16.6278C57.0306 14.2752 54.872 11.0445 52.0354 11.7445C49.7549 12.3075 47.6925 10.2452 48.2555 7.9646C48.9555 5.12795 45.7248 2.96938 43.3722 4.70164C41.4804 6.09426 38.7861 4.9784 38.4335 2.65612C37.9946 -0.23224 34.1839 -0.990422 32.6729 1.51038C31.4581 3.52095 28.5419 3.52095 27.3271 1.51038C25.8163 -0.990382 22.0055 -0.232333 21.5665 2.65612C21.2134 4.97848 18.5196 6.09439 16.6278 4.70164C14.2752 2.96938 11.0445 5.12803 11.7445 7.9646C12.3075 10.245 10.2452 12.3074 7.9646 11.7445C5.12795 11.0445 2.96938 14.2752 4.70164 16.6278C6.09426 18.5196 4.9784 21.2139 2.65612 21.5665C-0.232239 22.0054 -0.990423 25.8161 1.51038 27.3271C3.52095 28.5419 3.52095 31.4581 1.51038 32.6729Z" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2 -ml-11 z-40">
                    <p className=" uppercase text-white ">view all work</p>
                    <FaArrowRight className="  text-white  block  transition-all duration-300 hover:rotate-0   -rotate-45" />
                  </div>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className=" flex ">
                <div className="border border-[#027EEC] pr-4  rounded-[20rem] z-40 ">
                  <Image
                    src={Hero_img}
                    alt="Hero"
                    className=" -ml-2 max-w-[400px] rounded-[20rem]"
                  />
                </div>
              </div>
            </div>

            {/* banner image */}

            <div className="banerImage hidden lg:block absolute top-[7.5rem] right-[15rem] ">
              <Image
                className="  rounded-[50%] w-[150px] h-[150px]   "
                src={Hero_img}
                width={150}
                height={150}
                alt="banner image"
              />
            </div>
          </div>
          <div className=" ">
            <div className=" hidden lg:block">
              <div className="flex items-center justify-between">
                <div className="">
                  <Link href={"#"} className="">
                    <div className="flex items-center gap-1">
                      <p className=" uppercase text-white font-semibold ">
                        scroll down
                      </p>
                      <FaArrowRight className="text-[#027EEC] rotate-[45deg] mt-1" />
                    </div>
                  </Link>
                </div>
              </div>

              <div className=" lg:absolute video-area pl-64 md:pl-[40rem] lg:pl-0 ">
                <div className="img_animation ">
                  <Image
                    src={img_ani}
                    alt="amimation"
                    className="animate-spining"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full  bg-transparent  absolute top-[68%]">
          <p className="marquee-text text-[98px] text-white opacity-[.03] font-bold bg-transparent uppercase">
            Our agency makes your happiness
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
