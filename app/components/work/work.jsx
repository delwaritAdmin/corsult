import React from "react";
import Image from "next/image";
import Link from "next/link";
import work_img_1 from "../../img/work/work_img_1.webp"
import work_img_2 from "../../img/work/work_img_2.webp"

function work() {
  return (
    <section>
      <div className="bg-secondery w-full py-20 pt-40 ">
        <div className="container mx-auto ">
            <div className="text-center space-y-1">
          <h4 className="text-lg text-primary">Case Studies</h4>
          <h2 className="text-4xl font-semibold text-white">Browse our solutions across industries</h2>
            </div>
            <div className="pt-6 grid gap-4">
                {/* grid first section start  */}
                <div className="grid gap-4">
                    <div className="flex flex-col gap-3">
                        <div>
                            <Image src={work_img_1} alt="image" className=""/>
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
