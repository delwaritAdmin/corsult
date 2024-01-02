import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo1 from "../img/image.png";
import { GoNorthStar } from "react-icons/go";

function Services() {
  return (
    <section>
      <div className=" bg-secondery w-full py-20">
        {/* <div className="pb-8 lg:pb-28 space-y-4 cursor-default lg:hidden ">
          <marquee direction="right">
            <div className="text-[#353539] flex gap-3">
              <p className="text-5xl font-bold lg:text-7xl">BRANDING</p>
              <div className="mt-5 lg:mt-10">
                <GoNorthStar className="text-[#7654FD] text-2xl" />
              </div>
              <p className="text-5xl lg:text-7xl font-bold">WEB DEVELOPMENT</p>
              <div className="mt-5 lg:mt-10">
                <GoNorthStar className="text-[#7654FD] text-2xl" />
              </div>
              <p className="text-5xl lg:text-7xl font-bold">FRONT END DESIGN</p>
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
              <p className="text-5xl lg:text-7xl font-bold">WEB DEVELOPMENT</p>
              <div className="mt-5 lg:mt-10">
                <GoNorthStar className="text-[#7654FD] text-2xl" />
              </div>
              <p className="text-5xl lg:text-7xl font-bold">FRONT END DESIGN</p>
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
        </div> */}
        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-3 text-center lg:text-start lg:sticky lg:top-64 lg:h-screen">
              <p className=" font-semibold text-[#FFE600]">Our Services</p>
              <h2 className=" text-5xl text-white font-bold lg:text-6xl">
                We help your business grow
              </h2>
              <p className="text-[#918E93]  text-lg pt-5">
                Transform your vision into thriving reality with our digital
                expertise. Specializing in Web Design, Development, UI/UX, Logo
                & Brand Design, UX Audit, WordPress, SaaS, and more. Elevate
                your online presence and drive business growth with our tailored
                solutions.
              </p>
            </div>
            <div className=" grid grid-cols-1 gap-10 cursor-default">
              <div className="bg-[#040408c9] rounded-[45px] p-10 md:p-16 hvr-bounce-to-right overflow-hidden">
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
                      In the realm of our agency, we weave dreams into pixels,
                      infusing every UI/UX design with passion. Embracing the
                      bittersweet dance of aesthetics and functionality, our
                      creations transcend screens, evoking emotions that linger.
                      Elevate your digital narrative with designs that not only
                      captivate but resonate profoundly
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#040408c9] rounded-[45px] p-10 md:p-16 hvr-bounce-to-right overflow-hidden">
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
                      We&rsquo;re architects of emotion in pixels. With every
                      web design, we blend passion and functionality, creating
                      an immersive online symphony. Let your digital presence be
                      a resonating tale, where aesthetics meet seamless
                      functionality, weaving a narrative that lingers and
                      captivates.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#040408c9] rounded-[45px] p-10 md:p-16 hvr-bounce-to-right overflow-hidden">
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
                      Sculpting logos, shaping brands. Uplift your essence
                      through our expert logo and brand design services. Convey
                      your vision, and we&rsquo;ll breathe life into it,
                      guaranteeing indelible impressions that resonate. Your
                      identity, meticulously crafted for lasting distinction.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#040408c9] rounded-[45px] p-10 md:p-16 hvr-bounce-to-right overflow-hidden">
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
                      Enhance performance with profound insights. Heighten user
                      engagement through our thorough UX Audit services. Unveil
                      your digital hurdles, and we&rsquo;ll pinpoint
                      enhancements for a seamless and intuitive journey. Let
                      data illuminate the path to an elevated user experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#040408c9] rounded-[45px] p-10 md:p-16 hvr-bounce-to-right overflow-hidden">
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
                      Embark on WordPress wonders. Simplify your digital voyage
                      with our proficient WordPress services. Convey your
                      vision, and we&rsquo;ll mold it into a user-friendly,
                      SEO-optimized masterpiece. Let&rsquo;s collaborate to
                      craft digital excellence that resonates with your
                      audience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#040408c9] rounded-[45px] p-10 md:p-16 hvr-bounce-to-right overflow-hidden">
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
                      In the realm of SaaS, global UX is paramount for user
                      satisfaction and retention. Design Monks, with
                      international expertise, elevates your product&rsquo;s
                      design. Trust our dedicated SaaS professionals for a
                      resonant global experience that ensures user engagement
                      and loyalty.
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
