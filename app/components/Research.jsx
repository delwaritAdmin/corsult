import React from "react";
import Image from "next/image";
import Link from "next/link";
import image_1 from "../img/research_1.jpg";
import image_2 from "../img/research_2.png";
import image_3 from "../img/research_3.jpg";

function Research() {
  return (
    <section>
      <div className="bg-[#151130fd] w-full py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-2 text-center">
            <h3 className="text-white font-semibold text-3xl lg:text-5xl">
              Research
            </h3>
            <p className="text-[#027EEC] text-lg">
              A Well-Detailed Research About The Innovative Topics.
            </p>
          </div>
          <div className="pt-14 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="text-white hover:text-[#027EEC] transition-all duration-200">
              <Link href={"#"}>
                <div className="relative bg-cover overflow-hidden ">
                  <Image
                    src={image_1}
                    alt="Researce_img"
                    className="w-full bg-cover bg-no-repeat ease-in-out hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div className="pt-4">
                  <h2 className="font-semibold text-xl">
                    How AI Is Transforming Businesses: A Complete Guide
                  </h2>
                </div>
              </Link>
              <p className="pt-2 text-[#027EEC]">Harnil Oza</p>
            </div>

            <div className="text-white hover:text-[#027EEC] transition-all duration-200">
              <Link href={"#"}>
                <div className="relative bg-cover overflow-hidden ">
                  <Image
                    src={image_2}
                    alt="Researce_img"
                    className="w-full bg-cover bg-no-repeat ease-in-out hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div className="pt-4">
                  <Link href={"#"} className="font-semibold text-xl">
                    How to Hire PHP Developers in 2023?
                  </Link>
                </div>
              </Link>
              <p className="pt-2 text-[#027EEC]">Harnil Oza</p>
            </div>

            <div className="text-white hover:text-[#027EEC] transition-all duration-200">
              <Link href={"#"}>
                <div className="relative bg-cover overflow-hidden ">
                  <Image
                    src={image_3}
                    alt="Researce_img"
                    className="w-full bg-cover bg-no-repeat ease-in-out hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div className="pt-4">
                  <Link href={"#"} className="font-semibold text-xl">
                    Definitive Guide to Hire Unity3D Developers in 2023
                  </Link>
                </div>
              </Link>
              <p className="pt-2 text-[#027EEC]">Harnil Oza</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Research;
