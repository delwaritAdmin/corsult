import React from "react";
import Link from "next/link";
import Image from "next/image";
import porfile_1 from "../img/h4-testi-01.png";
import porfile_2 from "../img/h4-testi-02.png";
import porfile_3 from "../img/h4-testi-03.png";
import porfile_4 from "../img/h4-testi-04.png";
import logo_1 from "../img/trustpilot.svg";
import logo_2 from "../img/google.svg";
import { FaStar } from "react-icons/fa6";

function Review() {
  return (
    <section>
      <div className="bg-[#02020af8] w-full py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-lg font-semibold text-[#3961f1] text-center">
            CLIENT EXPERIENCES
          </h3>
          <h1 className="text-white text-center text-4xl font-bold py-4 leading-[48px]">
            Appreciations From Our <br />{" "}
            <span className="text-[#3961f1]"> Satisfied </span> Customers.
          </h1>
          <div className="py-10 flex flex-col gap-10 lg:flex-row lg:gap-6 lg:flex-wrap lg:gap-y-0">
            <div className="bg-[#030308ef] w-full p-10 rounded-xl lg:w-[55%] lg:mb-8">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      src={porfile_1}
                      alt="porfile"
                      className="rounded-full"
                    />
                  </div>
                  <div className="">
                    <h3 className="text-white font-semibold text-2xl">
                      Mateo Daniel
                    </h3>
                    <h4 className="text-[#3961f1] text-lg tracking-tight">
                      CEO At atlantis.com
                    </h4>
                  </div>
                </div>
                <div className="text-end">
                  <p className="text-white">May 9, 2023</p>
                  <p className="text-[#7B7D7F] text-sm">10.30 PM</p>
                </div>
              </div>
              <div className="py-8">
                <p className="text-[#C4C5BF] leading-[30px] ">
                  “Integer purus odio, placerat nec rhoncus in, ullamcorper nec
                  dolor. and utoor himenaeos. Praesent nec neque at dolor
                  venenatis consectetur european gon Donec lacinia placerat
                  felis non aliquam.”
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Image src={logo_1} alt="logo" />
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="text-[#FFC107] text-2xl" />
                  <FaStar className="text-[#FFC107] text-2xl" />
                  <FaStar className="text-[#FFC107] text-2xl" />
                  <FaStar className="text-[#FFC107] text-2xl" />
                  <FaStar className="text-[#FFC107] text-2xl" />
                </div>
              </div>
            </div>

            <div className="bg-[#030308ef] w-full p-10 rounded-xl lg:w-[43%]">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      src={porfile_2}
                      alt="porfile"
                      className="rounded-full"
                    />
                  </div>
                  <div className="">
                    <h3 className="text-white font-semibold text-2xl">
                    Luke Julian
                    </h3>
                    <h4 className="text-[#3961f1] text-lg tracking-tight">
                      CEO At atlantis.com
                    </h4>
                  </div>
                </div>
                <div className="text-end">
                  <p className="text-white">May 9, 2023</p>
                  <p className="text-[#7B7D7F] text-sm">10.30 PM</p>
                </div>
              </div>
              <div className="py-8">
                <p className="text-[#C4C5BF] leading-[30px] ">
                  “Integer purus odio, placerat nec rhoncus in, ullamcorper nec
                  dolor. and utoor himenaeos. Praesent nec neque at dolor
                  venenatis consectetur european gon Donec lacinia placerat
                  felis non aliquam.”
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Image src={logo_2} alt="logo" />
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="text-[#FFC107] text-2xl" />
                  <FaStar className="text-[#FFC107] text-2xl" />
                  <FaStar className="text-[#FFC107] text-2xl" />
                  <FaStar className="text-[#FFC107] text-2xl" />
                  <FaStar className="text-[#FFC107] text-2xl" />
                </div>
              </div>
            </div>

            <div className="bg-[#030308ef] w-full p-10 rounded-xl lg:w-[43%]">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      src={porfile_3}
                      alt="porfile"
                      className="rounded-full"
                    />
                  </div>
                  <div className="">
                    <h3 className="text-white font-semibold text-2xl">
                    Elias Josiah
                    </h3>
                    <h4 className="text-[#3961f1] text-lg tracking-tight">
                      CEO At atlantis.com
                    </h4>
                  </div>
                </div>
                <div className="text-end">
                  <p className="text-white">May 9, 2023</p>
                  <p className="text-[#7B7D7F] text-sm">10.30 PM</p>
                </div>
              </div>
              <div className="py-8">
                <p className="text-[#C4C5BF] leading-[30px] ">
                  “Integer purus odio, placerat nec rhoncus in, ullamcorper nec
                  dolor. and utoor himenaeos. Praesent nec neque at dolor
                  venenatis consectetur european gon Donec lacinia placerat
                  felis non aliquam.”
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Image src={logo_2} alt="logo" />
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="text-[#FFC107] text-2xl" />
                  <FaStar className="text-[#FFC107] text-2xl" />
                  <FaStar className="text-[#FFC107] text-2xl" />
                  <FaStar className="text-[#FFC107] text-2xl" />
                  <FaStar className="text-[#FFC107] text-2xl" />
                </div>
              </div>
            </div>

            <div className="bg-[#030308ef] w-full p-10 rounded-xl lg:w-[55%] lg:mt-8">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      src={porfile_4}
                      alt="porfile"
                      className="rounded-full"
                    />
                  </div>
                  <div className="">
                    <h3 className="text-white font-semibold text-2xl">
                    Colton Roman
                    </h3>
                    <h4 className="text-[#3961f1] text-lg tracking-tight">
                      CEO At atlantis.com
                    </h4>
                  </div>
                </div>
                <div className="text-end">
                  <p className="text-white">May 9, 2023</p>
                  <p className="text-[#7B7D7F] text-sm">10.30 PM</p>
                </div>
              </div>
              <div className="py-8">
                <p className="text-[#C4C5BF] leading-[30px] ">
                  “Integer purus odio, placerat nec rhoncus in, ullamcorper nec
                  dolor. and utoor himenaeos. Praesent nec neque at dolor
                  venenatis consectetur european gon Donec lacinia placerat
                  felis non aliquam.”
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Image src={logo_1} alt="logo" />
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="text-[#FFC107] text-2xl" />
                  <FaStar className="text-[#FFC107] text-2xl" />
                  <FaStar className="text-[#FFC107] text-2xl" />
                  <FaStar className="text-[#FFC107] text-2xl" />
                  <FaStar className="text-[#FFC107] text-2xl" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
