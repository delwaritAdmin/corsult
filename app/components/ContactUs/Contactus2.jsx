import React from "react";
import Link from "next/link";

function Contactus2() {
  return (
    <section>
      <div className="bg-third py-20 lg:py-40 w-full">
        <div className="container mx-auto">
          <h1 className=" text-white text-7xl md:text-8xl lg:text-9xl text-center font-semibold">
            Contact <span className=" font-thin text-white">us</span>
          </h1>
        </div>
      </div>
      {/* ======== contact input ============= */}
      <div className="bg-third pt-10 pb-28 w-full">
        <div className="container mx-auto">
          <div className="bg-white w-full py-10 rounded-3xl">
            <div className="flex flex-col gap-7 border-b border-[#d6d2c9] pb-10 px-10 lg:grid lg:grid-cols-2">
              <h1 className="text-[#151515] font-bold text-6xl">
                Have Any Project Idea In Mind?
              </h1>
              <p className="text-[#a7a7a7]  text-2xl tracking-[1px] lg:leading-[35px]">
                We are a diverse group of digital product specialists made up of
                seasoned product managers, designers, and developers.
              </p>
            </div>
            <div className="pt-10 grid gap-16 px-10 lg:grid-cols-2">
              <div className="flex flex-col gap-5 lg:gap-8 lg:border-r border-[#d6d2c9]">
                <div className="flex_section_1 space-y-4">
                  <h5 className="text-[#151515] font-bold text-2xl">
                    Select Services{" "}
                    <span className="text-xl font-normal">
                      (You can choose more than one)
                    </span>
                  </h5>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={"#"}
                      className="py-3 px-8 text-xl bg-[#F8F3E9] text-[#7A7772] rounded-full"
                    >
                      Mobile App
                    </Link>
                    <Link
                      href={"#"}
                      className="py-3 px-8 text-xl bg-[#F8F3E9] text-[#7A7772] rounded-full"
                    >
                      Website Design
                    </Link>
                    <Link
                      href={"#"}
                      className="py-3 px-8 text-xl bg-[#F8F3E9] text-[#7A7772] rounded-full"
                    >
                      Branding
                    </Link>
                    <Link
                      href={"#"}
                      className="py-3 px-8 text-xl bg-[#F8F3E9] text-[#7A7772] rounded-full"
                    >
                      Web App/Dashboard
                    </Link>
                    <Link
                      href={"#"}
                      className="py-3 px-8 text-xl bg-[#F8F3E9] text-[#7A7772] rounded-full"
                    >
                      Webflow
                    </Link>
                  </div>
                </div>
                <div className="flex_section_2 space-y-4">
                  <h5 className="text-[#151515] font-bold text-2xl">
                    Your Budget{" "}
                    <span className="text-xl font-normal">(In USD)</span>
                  </h5>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={"#"}
                      className="py-3 px-8 text-xl bg-[#F8F3E9] text-[#7A7772] rounded-full"
                    >
                      Less than 3k
                    </Link>
                    <Link
                      href={"#"}
                      className="py-3 px-8 text-xl bg-[#F8F3E9] text-[#7A7772] rounded-full"
                    >
                      3k-8k
                    </Link>
                    <Link
                      href={"#"}
                      className="py-3 px-8 text-xl bg-[#F8F3E9] text-[#7A7772] rounded-full"
                    >
                      8k-15k
                    </Link>
                    <Link
                      href={"#"}
                      className="py-3 px-8 text-xl bg-[#F8F3E9] text-[#7A7772] rounded-full"
                    >
                      More than 15k
                    </Link>
                  </div>
                </div>
              </div>
              {/* input section start  */}
              <div className="flex flex-col gap-5 ">
                <div className="w-full flex flex-col gap-5 lg:flex-row lg:justify-between ">
                  <div className="space-y-2 w-full">
                    <p className="text-[#151515] text-lg">Your name</p>
                    <input
                      type="name"
                      name="name"
                      placeholder="Enter Your Name"
                      className="w-full border border-[#d6d2c9] focus:border-primary py-3 px-4 rounded-xl focus:border-[1px] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2 w-full">
                    <p className="text-[#151515] text-lg">Email address</p>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your email"
                      className="w-full border border-[#d6d2c9] focus:border-primary py-3 px-4 rounded-xl focus:border-[1px] focus:outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2 w-full">
                  <p className="text-[#151515] text-lg">
                    Project details (Optional)
                  </p>
                  <textarea
                    name="text"
                    rows={7}
                    placeholder="Project description"
                    className="w-full border border-[#d6d2c9] focus:border-primary py-3 px-4 rounded-xl focus:border-[1px] focus:outline-none"
                  />
                </div>
                <div className="pt-5">
                  <button
                    type="button"
                    className="py-3 w-full border border-primary rounded-full bg-primary text-white font-semibold text-xl hover:text-primary hover:bg-white transition-all duration-300"
                  >
                    Send Your Inquary
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactus2;
