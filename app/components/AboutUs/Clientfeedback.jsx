import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper React components
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Clientfeedback() {
  return (
    <section>
      <div className="bg-third py-20 w-full">
        <div className="container mx-auto">
          <h2 className="text-primary font-semibold text-7xl lg:text-8xl uppercase text-start">
            CLIENTS <span className="text-white font-thin">FEEDBACK</span>
          </h2>
          <div className="pt-20">
            <Swiper
              slidesPerView={2}
              spaceBetween={0}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper cursor-pointer"
            >
              <SwiperSlide className="py-20 w-full bg-white">
                <div className="">
                  <div className="py-20 flex flex-col gap-2 lg:gap-3">
                    <h2 className="text-3xl font-bold lg:text-4xl lg:pb-2">
                      All Stationary Printings
                    </h2>
                    <p className="text-xl font-semibold">For Professionals</p>
                    <div className="py-2">
                      <button className="uppercase text-white bg-primary py-1 px-5 tracking-[1px]">
                        shop now
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="py-20 w-full bg-white">
                <div className="">
                  <div className="py-20 flex flex-col gap-2 lg:gap-3">
                    <h2 className="text-3xl font-bold lg:text-4xl lg:pb-2">
                      All Stationary Printings
                    </h2>
                    <p className="text-xl font-semibold">For Professionals</p>
                    <div className="py-2">
                      <button className="uppercase text-white bg-primary py-1 px-5 tracking-[1px]">
                        shop now
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
             
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clientfeedback;
