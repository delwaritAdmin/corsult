import React from "react";
import Link from "next/link";
import Image from "next/image";
import journal_1 from "../../img/AboutUs/journal_1.png";
import journal_2 from "../../img/AboutUs/journal_2.png";
import journal_3 from "../../img/AboutUs/journal_3.png";

function Agencyjournal() {
  return (
    <section>
      <div className="bg-secondery py-20 w-full">
        <div className="container mx-auto">
          <h2 className="text-primary font-semibold text-7xl lg:text-8xl uppercase text-start">
            AGENCY <span className="text-white font-thin">JOURNAL</span>
          </h2>
          <div className="pt-20 grid gap-10 lg:grid-cols-3">
            {/* grid first image  */}
            <Link
              href={"#"}
              className="flex flex-col gap-5 bg-white w-full rounded-3xl overflow-hidden pb-4 "
            >
              <div className="overflow-hidden bg-cover relative  ">
                <Image
                  src={journal_1}
                  alt="project_image"
                  className="w-full bg-cover bg-no-repeat hover:scale-110 transition-all duration-300 ease-in-out "
                />
              </div>
              <div className="space-y-4 px-5 py-2">
                <p className=" uppercase text-[#151515] text-2xl font-semibold ">
                  Design Systems : Empowering Collaboration and Brand Cohesion
                </p>
                <div className="flex items-center justify-between">
                  <h5 className="text-primary font-semibold text-xl">Design</h5>
                  <h4 className="text-primary text-xl">August 13, 2024</h4>
                </div>
              </div>
            </Link>
            {/* grid second image  */}
            <Link
              href={"#"}
              className="flex flex-col gap-5 bg-white w-full rounded-3xl overflow-hidden pb-4 "
            >
              <div className="overflow-hidden bg-cover relative  ">
                <Image
                  src={journal_2}
                  alt="project_image"
                  className="w-full bg-cover bg-no-repeat hover:scale-110 transition-all duration-300 ease-in-out "
                />
              </div>
              <div className="space-y-4 px-5 py-2">
                <p className=" uppercase text-[#151515] text-2xl font-semibold">
                  Responsive web design : Creating an optimal user experience
                  across devices
                </p>
                <div className="flex items-center justify-between">
                  <h5 className="text-primary font-semibold text-xl">Design</h5>
                  <h4 className="text-primary text-xl">August 13, 2024</h4>
                </div>
              </div>
            </Link>
            {/* grid third image  */}
            <Link
              href={"#"}
              className="flex flex-col gap-5 bg-white w-full rounded-3xl overflow-hidden pb-4 "
            >
              <div className="overflow-hidden bg-cover relative  ">
                <Image
                  src={journal_3}
                  alt="project_image"
                  className="w-full bg-cover bg-no-repeat hover:scale-110 transition-all duration-300 ease-in-out "
                />
              </div>
              <div className="space-y-4 px-5 py-2">
                <p className=" uppercase text-[#151515] text-2xl font-semibold">
                  Creative design industry with artificial intelligence (A.I)
                  and Their future
                </p>
                <div className="flex items-center justify-between">
                  <h5 className="text-primary font-semibold text-xl">Design</h5>
                  <h4 className="text-primary text-xl">August 13, 2024</h4>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Agencyjournal;
