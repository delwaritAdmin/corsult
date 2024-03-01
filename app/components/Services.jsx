import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo1 from "../img/image.png";
import { GoNorthStar } from "react-icons/go";

function Services() {
  return (
    <section>
      <div className=" bg-third w-full py-24">
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
              <p className=" font-semibold  text-primary">Our Services</p>
              <h2 className=" text-5xl text-white font-bold lg:text-6xl">
                We help your business grow
              </h2>
              <p className="text-[#918E93] leading-loose  text-lg pt-5 mt-10">
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
                    <div className="  bg-primary p-4 rounded-full rounded-tr-[10px] rounded-bl-full">
                      <p className="text-white font-bold text-xl">01</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-white font-semibold text-3xl">
                      Search Engine Optimization (SEO)
                    </h2>
                    <p className="text-[#918E93]">
                      Unlock the full potential of your online presence with our
                      Search Engine Optimization (SEO) services. We employ
                      cutting-edge strategies to boost your website&rsquo;s
                      visibility and drive organic traffic. From keyword
                      optimization to content enhancement, we tailor solutions
                      that propel your business to the top of search engine
                      rankings, maximizing your digital reach.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#040408c9] rounded-[45px] p-10 md:p-16 hvr-bounce-to-right overflow-hidden">
                <div className="flex flex-col md:flex-row justify-center gap-5">
                  <div className="flex md:block">
                    <div className="  bg-primary p-4 rounded-full rounded-tr-[10px] rounded-bl-full">
                      <p className="text-white font-bold text-xl">02</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-white font-semibold text-3xl">
                      Email Marketing
                    </h2>
                    <p className="text-[#918E93]">
                      Harness the power of Email Marketing with our agency. We
                      craft compelling campaigns that engage your audience,
                      drive conversions, and foster brand loyalty. From
                      captivating subject lines to personalized content, we
                      optimize every aspect of your email strategy to deliver
                      measurable results and elevate your digital presence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#040408c9] rounded-[45px] p-10 md:p-16 hvr-bounce-to-right overflow-hidden">
                <div className="flex flex-col md:flex-row justify-center gap-5">
                  <div className="flex md:block">
                    <div className="  bg-primary p-4 rounded-full rounded-tr-[10px] rounded-bl-full">
                      <p className="text-white font-bold text-xl">03</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-white font-semibold text-3xl">
                      Social Media Marketing
                    </h2>
                    <p className="text-[#918E93]">
                      Elevate your brand&rsquo;s online presence with our Social
                      Media Marketing expertise. We curate engaging content,
                      strategize impactful campaigns, and foster meaningful
                      connections with your audience across diverse platforms.
                      From content creation to analytics, we maximize your reach
                      and engagement, driving tangible results for your business
                      in the digital realm.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#040408c9] rounded-[45px] p-10 md:p-16 hvr-bounce-to-right overflow-hidden">
                <div className="flex flex-col md:flex-row justify-center gap-5">
                  <div className="flex md:block">
                    <div className="  bg-primary p-4 rounded-full rounded-tr-[10px] rounded-bl-full">
                      <p className="text-white font-bold text-xl">04</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-white font-semibold text-3xl">
                      Pay Per Click (PPC) Management
                    </h2>
                    <p className="text-[#918E93]">
                      Our agency excels in Pay Per Click (PPC) Management,
                      optimizing your digital advertising campaigns for maximum
                      impact. With meticulous keyword research, compelling ad
                      copy, and strategic bidding strategies, we drive targeted
                      traffic to your website while maximizing your ROI. Let us
                      elevate your online visibility and grow your business
                      exponentially.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#040408c9] rounded-[45px] p-10 md:p-16 hvr-bounce-to-right overflow-hidden">
                <div className="flex flex-col md:flex-row justify-center gap-5">
                  <div className="flex md:block">
                    <div className="  bg-primary p-4 rounded-full rounded-tr-[10px] rounded-bl-full">
                      <p className="text-white font-bold text-xl">05</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-white font-semibold text-3xl">
                      eCommerce Marketing
                    </h2>
                    <p className="text-[#918E93]">
                      At our agency, we excel in eCommerce Marketing, driving
                      your online store to new heights of success. Through
                      targeted strategies in SEO, social media, email campaigns,
                      and conversion optimization, we amplify your brand&rsquo;s
                      visibility and sales. Let us navigate the digital
                      landscape and elevate your eCommerce business to
                      unprecedented levels.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#040408c9] rounded-[45px] p-10 md:p-16 hvr-bounce-to-right overflow-hidden">
                <div className="flex flex-col md:flex-row justify-center gap-5">
                  <div className="flex md:block">
                    <div className="  bg-primary p-4 rounded-full rounded-tr-[10px] rounded-bl-full">
                      <p className="text-white font-bold text-xl">06</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-white font-semibold text-3xl">
                      Local SEO
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
              <div className="bg-[#040408c9] rounded-[45px] p-10 md:p-16 hvr-bounce-to-right overflow-hidden">
                <div className="flex flex-col md:flex-row justify-center gap-5">
                  <div className="flex md:block">
                    <div className="  bg-primary p-4 rounded-full rounded-tr-[10px] rounded-bl-full">
                      <p className="text-white font-bold text-xl">07</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-white font-semibold text-3xl">
                      Web Design and Development
                    </h2>
                    <p className="text-[#918E93]">
                      Our agency specializes in Web Design and Development,
                      crafting visually stunning and highly functional websites
                      tailored to your brand&rsquo;s needs. From sleek user
                      interfaces to robust backend systems, we ensure seamless
                      user experiences across all devices. Let us transform your
                      online presence into a captivating digital masterpiece.
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
