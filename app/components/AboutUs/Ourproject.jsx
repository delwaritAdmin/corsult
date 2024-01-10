import React from "react";
import Link from "next/link";
import Image from "next/image";
import project_img_1 from "../../img/AboutUs/project_1.png";
import project_img_2 from "../../img/AboutUs/project_2.png";
import project_img_3 from "../../img/AboutUs/project_3.png";
import project_img_4 from "../../img/AboutUs/project_4.png";

function Ourproject() {
  return (
    <section>
      <div className="bg-secondery w-full py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <h1 className="text-primary font-semibold text-7xl lg:text-8xl uppercase">
              Our <span className="text-white font-thin">project</span>
            </h1>
            <Link
              href={"#"}
              className="text-primary font-semibold text-3xl underline"
            >
              <h4>
                See all <br />
                Projects
              </h4>
            </Link>
          </div>
          <div className="pt-20 grid gap-10 lg:grid-cols-2">
            {/* grid first image  */}
            <Link href={"#"} className="flex flex-col gap-5">
              <div className="overflow-hidden bg-cover relative rounded-3xl">
                <Image
                  src={project_img_1}
                  alt="project_image"
                  className="w-full bg-cover bg-no-repeat hover:scale-110 transition-all duration-300 ease-in-out "
                />
              </div>
              <div className="space-y-2">
                <p className=" uppercase text-[#797979] text-sm">web design</p>
                <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
                  <h5 className="text-white font-semibold text-2xl">
                    University Website
                  </h5>
                  <div className="flex">
                    <h4 className="text-primary text-xl hvr-underline-from-left pb-1">
                      View Project
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
            {/* grid second image  */}
            <Link href={"#"} className="flex flex-col gap-5">
              <div className="overflow-hidden bg-cover relative rounded-3xl">
                <Image
                  src={project_img_2}
                  alt="project_image"
                  className="w-full bg-cover bg-no-repeat hover:scale-110 transition-all duration-300 ease-in-out "
                />
              </div>
              <div className="space-y-2">
                <p className=" uppercase text-[#797979] text-sm">branding</p>
                <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
                  <h5 className="text-white font-semibold text-2xl">
                    Fillo Branding Design
                  </h5>
                  <div className="flex">
                    <h4 className="text-primary text-xl hvr-underline-from-left pb-1">
                      View Project
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
            {/* grid third image  */}
            <Link href={"#"} className="flex flex-col gap-5">
              <div className="overflow-hidden bg-cover relative rounded-3xl">
                <Image
                  src={project_img_3}
                  alt="project_image"
                  className="w-full bg-cover bg-no-repeat hover:scale-110 transition-all duration-300 ease-in-out "
                />
              </div>
              <div className="space-y-2">
                <p className=" uppercase text-[#797979] text-sm">Mobile app</p>
                <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
                  <h5 className="text-white font-semibold text-2xl">
                    HR & Recruitment App
                  </h5>
                  <div className="flex">
                    <h4 className="text-primary text-xl hvr-underline-from-left pb-1">
                      View Project
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
            {/* grid fourth image  */}
            <Link href={"#"} className="flex flex-col gap-5">
              <div className="overflow-hidden bg-cover relative rounded-3xl">
                <Image
                  src={project_img_4}
                  alt="project_image"
                  className="w-full bg-cover bg-no-repeat hover:scale-110 transition-all duration-300 ease-in-out "
                />
              </div>
              <div className="space-y-2">
                <p className=" uppercase text-[#797979] text-sm">assa</p>
                <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
                  <h5 className="text-white font-semibold text-2xl">
                    TimeTracker Saas Product
                  </h5>
                  <div className="flex">
                    <h4 className="text-primary text-xl hvr-underline-from-left pb-1">
                      View Project
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourproject;
