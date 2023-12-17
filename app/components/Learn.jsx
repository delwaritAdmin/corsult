import React from "react";
import Image from "next/image";
import Link from "next/link";

function Learn() {
  return (
    <section>
      <div className="bg-gradient py-20 w-full">
        <div className="conatiner mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-white font-semibold text-4xl lg:text-6xl lg:leading-[75px] text-center">
              Want to learn more about our <br />
              App Development Process?
            </h1>
            <div className="pt-10">
              <Link
                href={"#"}
                className="text-white font-semibold bg-[#28293B] py-4 px-10 rounded-full hover:bg-[#28293bea] transition-all duration-200"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* ================================ */}
      <div className="bg-white w-full py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-3">
            <p className="text-[#fc3b50] ">Our App Development Process</p>
            <h2 className="text-[#2F304B] text-5xl font-bold leading-[55px] lg:px-28">
              Key Steps In Out Mobile App Development Process
            </h2>
            <p className="lg:px-20 lg:pt-5">
              We provide full-cycle mobile app development to fit your business
              domain and budget requirements.
            </p>
          </div>
          <div className="pt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-x-8">
            <div className="space-y-3 border-b-[1px] border-[#2f304533] pb-8">
              <h1 className="font-bold text-5xl text-[#41A2DA]">01</h1>
              <h2 className="text-[#41A2DA] text-3xl font-semibold">
                Discovery & Strategy
              </h2>
              <p className="text-sm tracking-wide leading-5">
                We sign confidentiality (NDA) and hear your App idea and
                discover the App features together and convert those into
                feature specific document and strategize with you the delivery
                sequence from prototype to MVP to full product.
              </p>
            </div>
            <div className="space-y-3 border-b-[1px] border-[#2f304533] pb-8">
              <h1 className="font-bold text-5xl text-[#15245A]">02</h1>
              <h2 className="text-[#15245A] text-3xl font-semibold">
                Discovery & Strategy
              </h2>
              <p className="text-sm tracking-wide leading-5">
              We decide on the technologies and deep level libraries and architecture needed to achieve the App and also the team. We do the estimation of the project on the basis of man hours and price it out and divide the project into milestone or Agile sprints.
              </p>
            </div>
            <div className="space-y-3 border-b-[1px] border-[#2f304533] pb-8">
              <h1 className="font-bold text-5xl text-[#F2BB11]">03</h1>
              <h2 className="text-[#F2BB11] text-3xl font-semibold">
              UI/UX Design
              </h2>
              <p className="text-sm tracking-wide leading-5">
              Since modern software engineering is extremely user focused, we first layout how the App is going to look to its actual users. We first create the Wireframes and then polished high fidelity UI/UX designs which simulates the real experience that the user is going to get on the actual App.
              </p>
            </div>
            <div className="space-y-3 border-b-[1px] border-[#2f304533] pb-8">
              <h1 className="font-bold text-5xl text-[#FB9F00]">04</h1>
              <h2 className="text-[#FB9F00] text-3xl font-semibold">
              Full App Development
              </h2>
              <p className="text-sm tracking-wide leading-5">
              We do the Architecture for the whole product from front end (App or PWA or web app) to backend (DB and API) to integration with third party libraires (Ex. Payment gateway, authentication libraries etc), divide the tasks among the development team and start the development and follow the release schedule.
              </p>
            </div>
            <div className="space-y-3 border-b-[1px] border-[#2f304533] pb-8">
              <h1 className="font-bold text-5xl text-[#2ABD69]">05</h1>
              <h2 className="text-[#2ABD69] text-3xl font-semibold">
              App Testing & QA
              </h2>
              <p className="text-sm tracking-wide leading-5">
              The Testing process happens all the time along with the development. We send you weekly interim releases only after testing those ourselves and once you approve, we move onto the next week’s development sprint.
              </p>
            </div>
            <div className="space-y-3 border-b-[1px] border-[#2f304533] pb-8">
              <h1 className="font-bold text-5xl text-[#236086]">06</h1>
              <h2 className="text-[#236086] text-3xl font-semibold">
              Deployment--Support--Scaling
              </h2>
              <p className="text-sm tracking-wide leading-5">
              Once App is created, we put those on the App stores in your name and make the Backend live on Production. We start doing support & maintenance as soon as the App is live and as soon as you get more and more traction, we help you scaling the product on right cloud platforms so it is able to cater large number of concurrent users (in millions).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Learn;
