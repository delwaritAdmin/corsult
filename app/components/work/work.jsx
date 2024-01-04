import React from "react";
import Image from "next/image";
import Link from "next/link";
import work_img_1 from "../../img/work/work_img_1.webp";
import work_img_2 from "../../img/work/work_img_2.webp";
import work_img_3 from "../../img/work/work_img_3.webp";
import work_img_4 from "../../img/work/work_img_4.webp";
import work_img_5 from "../../img/work/work_img_5.webp";
import work_img_6 from "../../img/work/work_img_6.webp";
import work_img_7 from "../../img/work/work_img_7.webp";

function work() {
  return (
    <section>
      <div className="bg-secondery w-full py-20 pt-40 ">
        <div className="container mx-auto ">
          <div className="text-center space-y-1 lg:space-y-2">
            <h4 className="text-lg text-primary lg:text-lg">Case Studies</h4>
            <h2 className="text-4xl font-semibold text-white lg:text-5xl lg:px-[20rem]">
              Browse our solutions across industries
            </h2>
          </div>
          <div className="pt-10 grid gap-4 lg:grid-cols-2 lg:items-center lg:gap-10">
            {/* grid first section start  */}
            <div className="grid gap-8">
              {/* cart 1 start */}
              <div className="flex flex-col gap-4">
                <Link href={"#"} className="dm-case-thumbnail image hover:z-0">
                  <Image src={work_img_1} alt="image" className="" />
                  <span className="dm-case-button ">Explore</span>
                </Link>
                <Link
                  href={"#"}
                  className="text-white hover:text-primary transition-all duration-300  text-2xl lg:text-3xl font-semibold pr-10 leading-tight"
                >
                  Navigating the future of distributed energy systems
                </Link>
                <p className="text-[#ccc] text-sm py-1 leading-tight">
                  The CRM platform for Akij Cement revolutionizes the referral
                  system. Specifically tailored for engineers and masons, it
                  provides intuitive tools...
                </p>
                <div className="flex">
                  <p className=" bg-third rounded-full py-[2px] px-3 text-sm text-primary">
                    Energy
                  </p>
                </div>
              </div>
              {/* cart 2 start */}
              <div className="flex flex-col gap-4">
                <Link href={"#"} className="dm-case-thumbnail image hover:z-0">
                  <Image src={work_img_2} alt="image" className="" />
                  <span className="dm-case-button ">Explore</span>
                </Link>
                <Link
                  href={"#"}
                  className="text-white hover:text-primary transition-all duration-300 text-2xl lg:text-3xl font-semibold pr-10 leading-tight"
                >
                  Akij Cement&rsquo;s Leap into Digitalized Referrals
                </Link>
                <p className="text-[#ccc] text-sm py-1 leading-tight">
                  The CRM platform for Akij Cement revolutionizes the referral
                  system. Specifically tailored for engineers and masons, it
                  provides intuitive tools...
                </p>
                <div className="flex">
                  <p className=" bg-third rounded-full py-[2px] px-3 text-sm text-primary">
                    Construction
                  </p>
                </div>
              </div>
              {/* cart 3 start */}
              <div className="flex flex-col gap-4">
                <Link href={"#"} className="dm-case-thumbnail image hover:z-0">
                  <Image src={work_img_3} alt="image" className="" />
                  <span className="dm-case-button ">Explore</span>
                </Link>
                <Link
                  href={"#"}
                  className="text-white hover:text-primary transition-all duration-300 text-2xl lg:text-3xl font-semibold pr-10 leading-tight"
                >
                  Revolutionize Your Dining Experience Today
                </Link>
                <p className="text-[#ccc] text-sm py-1 leading-tight">
                  The CRM platform for Akij Cement revolutionizes the referral
                  system. Specifically tailored for engineers and masons, it
                  provides intuitive tools...
                </p>
                <div className="flex gap-3">
                  <p className=" bg-third rounded-full py-[2px] px-3 text-sm text-primary">
                    Restaurant
                  </p>
                  <p className=" bg-third rounded-full py-[2px] px-3 text-sm text-primary">
                    Food
                  </p>
                </div>
              </div>
              {/* cart 4 start */}
              <div className="flex flex-col gap-4">
                <Link href={"#"} className="dm-case-thumbnail image hover:z-0">
                  <Image src={work_img_4} alt="image" className="" />
                  <span className="dm-case-button ">Explore</span>
                </Link>
                <Link
                  href={"#"}
                  className="text-white hover:text-primary transition-all duration-300 text-2xl lg:text-3xl font-semibold pr-10 leading-tight"
                >
                  Intuitive vehicle management solutions
                </Link>
                <p className="text-[#ccc] text-sm py-1 leading-tight">
                  The CRM platform for Akij Cement revolutionizes the referral
                  system. Specifically tailored for engineers and masons, it
                  provides intuitive tools...
                </p>
                <div className="flex gap-3">
                  <p className=" bg-third rounded-full py-[2px] px-3 text-sm text-primary">
                    Automobile
                  </p>
                  <p className=" bg-third rounded-full py-[2px] px-3 text-sm text-primary">
                    Saas
                  </p>
                </div>
              </div>
            </div>
            {/* grid second section start */}
            <div className="grid gap-8">
              {/* cart 5 start */}
              <div className="flex flex-col gap-4">
                <Link href={"#"} className="dm-case-thumbnail image hover:z-0">
                  <Image src={work_img_5} alt="image" className="" />
                  <span className="dm-case-button ">Explore</span>
                </Link>
                <Link
                  href={"#"}
                  className="text-white hover:text-primary transition-all duration-300 text-2xl lg:text-3xl font-semibold pr-10 leading-tight"
                >
                  Ways & Villas: Maldivian Travel Redesign
                </Link>
                <p className="text-[#ccc] text-sm py-1 leading-tight">
                  The CRM platform for Akij Cement revolutionizes the referral
                  system. Specifically tailored for engineers and masons, it
                  provides intuitive tools...
                </p>
                <div className="flex gap-3">
                  <p className=" bg-third rounded-full py-[2px] px-3 text-sm text-primary">
                    Travel
                  </p>
                </div>
              </div>
              {/* cart 6 start */}
              <div className="flex flex-col gap-4">
                <Link href={"#"} className="dm-case-thumbnail image hover:z-0">
                  <Image src={work_img_6} alt="image" className="" />
                  <span className="dm-case-button ">Explore</span>
                </Link>
                <Link
                  href={"#"}
                  className="text-white hover:text-primary transition-all duration-300 text-2xl lg:text-3xl font-semibold pr-10 leading-tight"
                >
                  Onethread project management software redesign
                </Link>
                <p className="text-[#ccc] text-sm py-1 leading-tight">
                  The CRM platform for Akij Cement revolutionizes the referral
                  system. Specifically tailored for engineers and masons, it
                  provides intuitive tools...
                </p>
                <div className="flex gap-3">
                  <p className=" bg-third rounded-full py-[2px] px-3 text-sm text-primary">
                    Project Manegment
                  </p>
                </div>
              </div>
              {/* cart 7 start */}
              <div className="flex flex-col gap-4">
                <Link href={"#"} className="dm-case-thumbnail image hover:z-0">
                  <Image src={work_img_7} alt="image" className="" />
                  <span className="dm-case-button ">Explore</span>
                </Link>
                <Link
                  href={"#"}
                  className="text-white hover:text-primary transition-all duration-300 text-2xl lg:text-3xl font-semibold pr-10 leading-tight"
                >
                  Carnesia- One-stop beauty care retailer
                </Link>
                <p className="text-[#ccc] text-sm py-1 leading-tight">
                  The CRM platform for Akij Cement revolutionizes the referral
                  system. Specifically tailored for engineers and masons, it
                  provides intuitive tools...
                </p>
                <div className="flex gap-3">
                  <p className=" bg-third rounded-full py-[2px] px-3 text-sm text-primary">
                    Beauty Care Products
                  </p>
                  <p className=" bg-third rounded-full py-[2px] px-3 text-sm text-primary">
                    Ecommerce
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default work;
