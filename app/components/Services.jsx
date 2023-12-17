import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo1 from "../img/image.png";
import { GoNorthStar } from "react-icons/go";

function Services() {
  return (
    <section>
      <div className="bg-[#030308] w-full py-20">
        <div className="container mx-auto px-4 cursor-default">
          <div className="pb-8 lg:pb-28 space-y-4">
            <marquee direction="right">
              <div className="text-[#353539] flex gap-3">
                <p className="text-5xl font-bold lg:text-7xl">BRANDING</p>
                <div className="mt-5 lg:mt-10">
                  <GoNorthStar className="text-[#7654FD] text-2xl" />
                </div>
                <p className="text-5xl lg:text-7xl font-bold">
                  WEB DEVELOPMENT
                </p>
                <div className="mt-5 lg:mt-10">
                  <GoNorthStar className="text-[#7654FD] text-2xl" />
                </div>
                <p className="text-5xl lg:text-7xl font-bold">
                  FRONT END DESIGN
                </p>
                <div className="mt-5 lg:mt-10">
                  <GoNorthStar className="text-[#7654FD] text-2xl" />
                </div>
                <p className="text-5xl lg:text-7xl font-bold">WORDPRESS</p>
                <div className="mt-5 lg:mt-10">
                  <GoNorthStar className="text-[#7654FD] text-2xl" />
                </div>
                <p className="text-5xl lg:text-7xl font-bold">UXAUDIT</p>
                <div className="mt-5 lg:mt-10">
                  <GoNorthStar className="text-[#7654FD] text-2xl" />
                </div>
                <p className="text-5xl lg:text-7xl font-bold">
                  MOBILE APP DEVELOPMENT
                </p>
                <div className="mt-5 lg:mt-10">
                  <GoNorthStar className="text-[#7654FD] text-2xl" />
                </div>
                <p className="text-5xl lg:text-7xl font-bold">ECOMMERCE</p>
                <div className="mt-5 lg:mt-10">
                  <GoNorthStar className="text-[#7654FD] text-2xl" />
                </div>
                <p className="text-5xl lg:text-7xl font-bold">UI/UX DESIGN</p>
                <div className="mt-5 lg:mt-10">
                  <GoNorthStar className="text-[#7654FD] text-2xl" />
                </div>
              </div>
            </marquee>
            <marquee direction="">
            <div className="text-[#353539] flex gap-3">
                <p className="text-5xl font-bold lg:text-7xl">BRANDING</p>
                <div className="mt-5 lg:mt-10">
                  <GoNorthStar className="text-[#7654FD] text-2xl" />
                </div>
                <p className="text-5xl lg:text-7xl font-bold">
                  WEB DEVELOPMENT
                </p>
                <div className="mt-5 lg:mt-10">
                  <GoNorthStar className="text-[#7654FD] text-2xl" />
                </div>
                <p className="text-5xl lg:text-7xl font-bold">
                  FRONT END DESIGN
                </p>
                <div className="mt-5 lg:mt-10">
                  <GoNorthStar className="text-[#7654FD] text-2xl" />
                </div>
                <p className="text-5xl lg:text-7xl font-bold">WORDPRESS</p>
                <div className="mt-5 lg:mt-10">
                  <GoNorthStar className="text-[#7654FD] text-2xl" />
                </div>
                <p className="text-5xl lg:text-7xl font-bold">UXAUDIT</p>
                <div className="mt-5 lg:mt-10">
                  <GoNorthStar className="text-[#7654FD] text-2xl" />
                </div>
                <p className="text-5xl lg:text-7xl font-bold">
                  MOBILE APP DEVELOPMENT
                </p>
                <div className="mt-5 lg:mt-10">
                  <GoNorthStar className="text-[#7654FD] text-2xl" />
                </div>
                <p className="text-5xl lg:text-7xl font-bold">ECOMMERCE</p>
                <div className="mt-5 lg:mt-10">
                  <GoNorthStar className="text-[#7654FD] text-2xl" />
                </div>
                <p className="text-5xl lg:text-7xl font-bold">UI/UX DESIGN</p>
                <div className="mt-5 lg:mt-10">
                  <GoNorthStar className="text-[#7654FD] text-2xl" />
                </div>
              </div>
            </marquee>
          </div>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-3 text-center lg:text-start">
              <p className=" font-semibold text-[#FFE600]">Our Services</p>
              <h2 className=" text-5xl text-white font-bold lg:text-6xl">
                We help your business grow
              </h2>
              <p className="text-[#918E93]  text-lg pt-5">
                As a distinguished UI/UX design firm, we offer comprehensive
                solutions encompassing research, wireframing, UI design, and
                development. Here are our specialized services:
              </p>
            </div>
            <div className=" grid grid-cols-1 gap-10">
              <div className="bg-[#1C1C20] rounded-[45px] p-16">
                <div className="flex flex-col md:flex-row justify-center gap-5">
                  <div className="flex md:block">
                    <div className=" bg-[#7755FF] p-4 rounded-full rounded-tr-[10px] rounded-bl-full">
                      <p className="text-white font-bold text-xl">01</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-white font-semibold text-3xl">
                      UI UX Design
                    </h2>
                    <p className="text-[#918E93]">
                      We take care of every design detail, so you can nurture
                      your business. Share your vision, and we&rsquo;ll craft a
                      seamless global user experience. Let&rsquo;s create magic
                      together!
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1C1C20] rounded-[45px] p-16">
                <div className="flex flex-col md:flex-row justify-center gap-5">
                  <div className="flex md:block">
                    <div className=" bg-[#7755FF] p-4 rounded-full rounded-tr-[10px] rounded-bl-full">
                      <p className="text-white font-bold text-xl">02</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-white font-semibold text-3xl">
                      Web Design
                    </h2>
                    <p className="text-[#918E93]">
                      Elevate your online presence with our expert web design
                      solutions. Share your dream, and we&rsquo;ll transform it into a
                      responsive, SEO-optimized website. Let&rsquo;s turn clicks into
                      loyal customers!
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1C1C20] rounded-[45px] p-16">
                <div className="flex flex-col md:flex-row justify-center gap-5">
                  <div className="flex md:block">
                    <div className=" bg-[#7755FF] p-4 rounded-full rounded-tr-[10px] rounded-bl-full">
                      <p className="text-white font-bold text-xl">03</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-white font-semibold text-3xl">
                      Logo & Brand Design
                    </h2>
                    <p className="text-[#918E93]">
                      Crafting logos, building brands. Elevate your identity
                      with our specialized logo and brand design services. Share
                      your vision, and we&rsquo;ll bring it to life, ensuring
                      memorable impressions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1C1C20] rounded-[45px] p-16">
                <div className="flex flex-col md:flex-row justify-center gap-5">
                  <div className="flex md:block">
                    <div className=" bg-[#7755FF] p-4 rounded-full rounded-tr-[10px] rounded-bl-full">
                      <p className="text-white font-bold text-xl">04</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-white font-semibold text-3xl">
                      UX Audit
                    </h2>
                    <p className="text-[#918E93]">
                      Optimize with insights. Elevate user engagement with our
                      comprehensive UX Audit services. Share your digital
                      challenges, and we&rsquo;ll pinpoint improvements for an
                      intuitive journey.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1C1C20] rounded-[45px] p-16">
                <div className="flex flex-col md:flex-row justify-center gap-5">
                  <div className="flex md:block">
                    <div className=" bg-[#7755FF] p-4 rounded-full rounded-tr-[10px] rounded-bl-full">
                      <p className="text-white font-bold text-xl">05</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-white font-semibold text-3xl">
                      WordPress
                    </h2>
                    <p className="text-[#918E93]">
                      WordPress wonders await. Streamline your digital journey
                      with our expert WordPress services. Share your concept,
                      and we&rsquo;ll shape it into a user-friendly, SEO-optimized
                      masterpiece. Let&rsquo;s collaborate and craft excellence!
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1C1C20] rounded-[45px] p-16">
                <div className="flex flex-col md:flex-row justify-center gap-5">
                  <div className="flex md:block">
                    <div className=" bg-[#7755FF] p-4 rounded-full rounded-tr-[10px] rounded-bl-full">
                      <p className="text-white font-bold text-xl">06</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-white font-semibold text-3xl">
                      SaaS Design
                    </h2>
                    <p className="text-[#918E93]">
                      Global UX in SaaS is crucial for user satisfaction and
                      retention. At Design Monks, our international expertise
                      elevates your product&rsquo;s design. Trust our dedicated SaaS
                      professionals for a globally resonant experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
