import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo_1 from "../img/Teach-Stack/Agular.png"
import logo_2 from "../img/Teach-Stack/androied.png"
import logo_3 from "../img/Teach-Stack/aws.png"
import logo_4 from "../img/Teach-Stack/Azure.png"
import logo_5 from "../img/Teach-Stack/firebase.png"
import logo_6 from "../img/Teach-Stack/flater.png"
import logo_7 from "../img/Teach-Stack/google-cloude.png"
import logo_8 from "../img/Teach-Stack/ibm.png"
import logo_9 from "../img/Teach-Stack/ios.png"
import logo_10 from "../img/Teach-Stack/jenkins.png"
import logo_11 from "../img/Teach-Stack/microsoft-pwa.png"
import logo_12 from "../img/Teach-Stack/mongodb.png"
import logo_13 from "../img/Teach-Stack/ms-sql-server.png"
import logo_14 from "../img/Teach-Stack/my-sql.png"
import logo_15 from "../img/Teach-Stack/net.png"
import logo_16 from "../img/Teach-Stack/node-js.png"
import logo_17 from "../img/Teach-Stack/oracel.png"
import logo_18 from "../img/Teach-Stack/postgre-spl.png"
import logo_19 from "../img/Teach-Stack/power-bi.png"
import logo_20 from "../img/Teach-Stack/powerflow.png"
import logo_21 from "../img/Teach-Stack/python.png"
import logo_22 from "../img/Teach-Stack/react-nativ.png"
import logo_23 from "../img/Teach-Stack/react.png"
import logo_24 from "../img/Teach-Stack/ror.png"
import logo_25 from "../img/Teach-Stack/salesforce.png"
import logo_26 from "../img/Teach-Stack/sharepoint.png"
import logo_27 from "../img/Teach-Stack/sophify.png"
import logo_28 from "../img/Teach-Stack/vue.png"
import logo_29 from "../img/Teach-Stack/wordpress.png"
import logo_30 from "../img/Teach-Stack/wpf.png"

function TechStack() {
  return (
    <section>
      <div className="bg-[#F2F2F2] w-full py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-[#0083E6] text-2xl text-center font-semibold">Technology Expertise</h3>
          <div className="pt-10 w-[100rem] md:w-[120rem] lg:w-[150rem]">
          <div className="marquee-container">
            <div className="marquees flex items-center gap-5 md:gap-10">
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_1} alt="logo" className="w-20"/>
                     <p>Angular</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_2} alt="logo" className="w-20"/>
                     <p>Androied</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_3} alt="logo" className="w-20"/>
                     <p>AWS</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_4} alt="logo" className="w-20"/>
                     <p>Azure</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_5} alt="logo" className="w-20"/>
                     <p>firebase</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_6} alt="logo" className="w-20"/>
                     <p>flater</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_7} alt="logo" className="w-20"/>
                     <p>Google Cloude</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_8} alt="logo" className="w-20"/>
                     <p>IBM</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_9} alt="logo" className="w-20"/>
                     <p>IOS</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_10} alt="logo" className="w-20"/>
                     <p>Jenkins</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_11} alt="logo" className="w-20"/>
                     <p>Microsoft PWA</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_12} alt="logo" className="w-20"/>
                     <p>Mondo DB</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_13} alt="logo" className="w-20"/>
                     <p>MS-Sql-Server</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_14} alt="logo" className="w-20"/>
                     <p>My-SQL</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_15} alt="logo" className="w-20"/>
                     <p>NET</p>
                </div>
            </div>
          </div>
          </div>
          <div className="pt-4 lg:pt-8 w-[100rem] md:w-[120rem] lg:w-[150rem]">
          <marquee direction="right">
            <div className="  flex items-center gap-5 md:gap-10">

            <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_16} alt="logo" className="w-20"/>
                     <p>Node</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_17} alt="logo" className="w-20"/>
                     <p>Oracel</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_18} alt="logo" className="w-20"/>
                     <p>Postgre-SQL</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_19} alt="logo" className="w-20"/>
                     <p>Power-BI</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_20} alt="logo" className="w-20"/>
                     <p>Powerflow</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_21} alt="logo" className="w-20"/>
                     <p>Python</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_22} alt="logo" className="w-20"/>
                     <p>React-Native</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_23} alt="logo" className="w-20"/>
                     <p>React</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_24} alt="logo" className="w-20"/>
                     <p>ROR</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_25} alt="logo" className="w-20"/>
                     <p>Salesforce</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_26} alt="logo" className="w-20"/>
                     <p>Sharepoint</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_27} alt="logo" className="w-20"/>
                     <p>Shopify</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_28} alt="logo" className="w-20"/>
                     <p>VUE</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_29} alt="logo" className="w-20"/>
                     <p>Wordpress</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image src={logo_30} alt="logo" className="w-20"/>
                     <p>WPF</p>
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
