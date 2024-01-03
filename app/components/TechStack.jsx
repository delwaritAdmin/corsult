import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo_1 from "../img/Teach-Stack/Agular.png";
import logo_2 from "../img/Teach-Stack/androied.png";
import logo_3 from "../img/Teach-Stack/aws.png";
import logo_4 from "../img/Teach-Stack/Azure.png";
import logo_5 from "../img/Teach-Stack/firebase.png";
import logo_6 from "../img/Teach-Stack/flater.png";
import logo_7 from "../img/Teach-Stack/google-cloude.png";
import logo_8 from "../img/Teach-Stack/ibm.png";
import logo_9 from "../img/Teach-Stack/ios.png";
import logo_10 from "../img/Teach-Stack/jenkins.png";
import logo_11 from "../img/Teach-Stack/microsoft-pwa.png";
import logo_12 from "../img/Teach-Stack/mongodb.png";
import logo_13 from "../img/Teach-Stack/ms-sql-server.png";
import logo_14 from "../img/Teach-Stack/my-sql.png";
import logo_15 from "../img/Teach-Stack/net.png";
import logo_16 from "../img/Teach-Stack/node-js.png";
import logo_17 from "../img/Teach-Stack/oracel.png";
import logo_18 from "../img/Teach-Stack/postgre-spl.png";
import logo_19 from "../img/Teach-Stack/power-bi.png";
import logo_20 from "../img/Teach-Stack/powerflow.png";
import logo_21 from "../img/Teach-Stack/python.png";
import logo_22 from "../img/Teach-Stack/react-nativ.png";
import logo_23 from "../img/Teach-Stack/react.png";
import logo_24 from "../img/Teach-Stack/ror.png";
import logo_25 from "../img/Teach-Stack/salesforce.png";
import logo_26 from "../img/Teach-Stack/sharepoint.png";
import logo_27 from "../img/Teach-Stack/sophify.png";
import logo_28 from "../img/Teach-Stack/vue.png";
import logo_29 from "../img/Teach-Stack/wordpress.png";
import logo_30 from "../img/Teach-Stack/wpf.png";

function TechStack() {
  return (
    <section className="   bg-third">
      <div className=" w-full py-16">
        <div className="">
          <h3 className=" text-white pb-10 text-4xl  text-center font-semibold">
            <span className=" text-primary">Technology</span> Expertise
          </h3>

          <div className="pt-10 w-full">
            <div className="marquee-container">
              <div className="marquees flex items-center  gap md:gap-10 flex-wrap">
                <div className="flex flex-col gap-4 items-center ">
                  <Image src={logo_1} alt="logo"  className=" h-13 w-13"  />
                  <p className=" text-white">Angular</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <Image src={logo_2} alt="logo"  className=" h-13 w-13"  />
                  <p className=" text-white">Androied</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <Image src={logo_3} alt="logo"  className=" h-13 w-13"  />
                  <p className=" text-white">AWS</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <Image src={logo_4} alt="logo"  className=" h-13 w-13"  />
                  <p className=" text-white">Azure</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <Image src={logo_5} alt="logo"  className=" h-13 w-13"  />
                  <p className=" text-white">firebase</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <Image src={logo_6} alt="logo"  className=" h-13 w-13"  />
                  <p className=" text-white">flater</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <Image src={logo_7} alt="logo"  className=" h-13 w-13"  />
                  <p className=" text-white">Google Cloude</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <Image src={logo_8} alt="logo"  className=" h-13 w-13"  />
                  <p className=" text-white">IBM</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <Image src={logo_9} alt="logo"  className=" h-13 w-13"  />
                  <p className=" text-white">IOS</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <Image src={logo_10} alt="logo"  className=" h-13 w-13"  />
                  <p className=" text-white">Jenkins</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 w-full">
            <marquee direction="right">
              <div className="  flex items-center gap-5 flex-wrap md:gap-10">
              <div className="flex flex-col gap-4 items-center">
                  <Image src={logo_11} alt="logo"  className=" h-13 w-13"  />
                  <p className=" text-white">Microsoft PWA</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <Image src={logo_12} alt="logo"  className=" h-13 w-13"  />
                  <p className=" text-white">Mondo DB</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <Image src={logo_13} alt="logo"  className=" h-13 w-13"  />
                  <p className=" text-white">MS-Sql-Server</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <Image src={logo_14} alt="logo"  className=" h-13 w-13"  />
                  <p className=" text-white">My-SQL</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <Image src={logo_15} alt="logo"  className=" h-13 w-13"  />
                  <p className=" text-white">NET</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <Image src={logo_16} alt="logo"  className=" h-13 w-13"  />
                  <p className=" text-white">Node</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <Image src={logo_17} alt="logo"  className=" h-13 w-13"  />
                  <p className=" text-white">Oracel</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <Image src={logo_18} alt="logo"  className=" h-13 w-13"  />
                  <p className=" text-white">Postgre-SQL</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <Image src={logo_19} alt="logo"  className=" h-13 w-13"  />
                  <p className=" text-white">Power-BI</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <Image src={logo_20} alt="logo"  className=" h-13 w-13"  />
                  <p className=" text-white">Powerflow</p>
                </div>
              </div>
            </marquee>
          </div>

     
        </div>
      </div>
    </section>
  );
}

export default TechStack;
