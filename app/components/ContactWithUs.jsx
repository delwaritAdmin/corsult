import React from "react";

function ContactWithUs() {
  return (
    <section>
      <div className="bg-third py-20 w-full">
        <div className="container mx-auto lg:px-[15rem] ">
          <div className="flex justify-center">
            {/* contact section start  */}
            <div className="bg-white  ">
              <div className="grid gap-4 md:grid-cols-2">
                {/* Text content start */}
                <div>
                  <div className="contact_backbround w-full h-full hidden md:block">
                    <div className=" relative top-[55%]">
                        <div className="p-4">
                      <h2 className="text-3xl leading-tighter text-white">
                        Get Outstanding <br />{" "}
                        <span className="text-4xl font-semibold text-primary">
                          Business Growth
                        </span>{" "}
                        <br />{" "}
                        <span className="font-semibold ">
                          With Future Ready <br />Solutions
                        </span>
                      </h2>
                        </div>
                    </div>
                  </div>
                  <div className=" block md:hidden">
                    <h2 className="text-xl leading-tighter text-center">
                      Get Outstanding <br />{" "}
                      <span className="text-4xl font-semibold text-primary">
                        Business Growth
                      </span>{" "}
                      <br />{" "}
                      <span className="text-black font-semibold text-3xl">
                        With Future Ready Solutions
                      </span>
                    </h2>
                  </div>
                </div>
                {/* Input section start */}
                <div className="space-y-4 p-4">
                  <h3 className="text-black text-2xl font-semibold px-4 text-center">
                    Get Free Consultation From Top Industry Experts
                  </h3>
                  <input
                    type="text"
                    name="text"
                    placeholder="Full Name"
                    className="w-full border-2 border-[#ccc] text-[#555] p-2 focus:outline-none"
                  />
                  <input
                    type="email"
                    name="text"
                    placeholder="Email"
                    className="w-full border-2 border-[#ccc] text-[#555] p-2 focus:outline-none"
                  />
                  <input
                    type="number"
                    name="number"
                    placeholder="Mobile Number With Country Code"
                    className="w-full border-2 border-[#ccc] text-[#555] p-2 focus:outline-none"
                  />
                  <textarea
                    name="text"
                    placeholder="Your Project Description"
                    rows={3}
                    className="w-full border-2 border-[#ccc] text-[#555] p-2 focus:outline-none"
                  ></textarea>
                  <div className="space-y-2">
                    <p className="font-semibold text-center">
                      Your idea is protected with us.
                    </p>
                    {/* button  */}
                    <div className="flex justify-center">
                      <button className="text-white font-semibold text-lg py-2 w-full bg-primary border-[#ccc] border hover:border-white buttonshadow transition-all duration-200">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* contact section end  */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactWithUs;
