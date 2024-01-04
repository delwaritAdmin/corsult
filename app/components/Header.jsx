import React, { useState } from "react";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Navbar,
  MobileNav,
  IconButton,
  Button,
  Typography,
} from "@material-tailwind/react";

import Image from "next/image";
import * as Scroll from "react-scroll";

import Link from "next/link";
import logo from "../img/logo_corsult.png";
import { BsTwitter, BsDiscord } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  const [sticy, setSticy] = useState(false);

  React.useEffect(() => {
    window.addEventListener("resdize", () => {
      window.innerWidth >= 960 && setOpenNav(false);
    });

    const handleScroll = () => {
      if (window.scrollY >= 50) {
        // Your function to be executed when scrolled 150px
        setSticy(true);
        // Add your custom logic or function call here
      } else {
        setSticy(false);
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex   space-x-10 flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2">
      <li>
        {" "}
        <Link href="/" className="flex items-center text-sm">
          Home
        </Link>
      </li>

      <li>
        <Link href="/webdevelopment" className="flex items-center text-sm">
          Service
        </Link>
      </li>
      <li>
        <a href="#" className="flex items-center text-sm">
          Products
        </a>
      </li>

      <li>
        <a href="#" className="flex items-center text-sm">
          Our Clients
        </a>
      </li>

      <li>
        <a href="#" className="flex items-center text-sm">
          Careers
        </a>
      </li>
      <li>
        <Link href="/blog" className="flex items-center text-sm">
          Blog
        </Link>
      </li>

      <li>
        <a href="#" className="flex items-center text-sm">
          About
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center text-sm">
          Contact
        </a>
      </li>
    </ul>
  );

  return (
    <Navbar
      id="header"
      className={`header-area absolute top-0 z-50 
      
      
      rounded-none bg-transparent border-none${
        sticy ? "   fixed  bg-black" : "  "
      }`}
    >
      <div className="flex    lg:items-center   py-[.30rem]   mx-auto max-w-full  px-4 justify-between text-blue-gray-900">
        <Link
          href="/"
          className=" cursor-pointer py-2 block font-medium transition-all duration-200 "
        >
          <Image
            src={logo}
            height={120}
            width={175}
            alt="logo"
            className="w-32 md:w-[80%] lg:w-[70%]"
          />
        </Link>

        {/* <div className="block lg:hidden">
          <div className="flex items-center gap-2 order-2 ">
            <Link href="#">
              <div className="flex items-center justify-center p-1 md:p-2 hover:bg-[#2D2945] rounded-full transition-all duration-300">
                <BsTwitter className="text-[#B9B8C1] md:text-[1.5rem]" />
              </div>
            </Link>
            <Link href="#">
              <div className="flex items-center justify-center p-1 md:p-2 hover:bg-[#2D2945] rounded-full transition-all duration-300">
                <BsDiscord className="text-[#B9B8C1] md:text-[1.5rem]" />
              </div>
            </Link>
            <Link href="#">
              <div className="flex items-center justify-center p-1 md:p-2 hover:bg-[#2D2945] rounded-full transition-all duration-300">
                <FaFacebookF className="text-[#B9B8C1] md:text-[1.5rem]" />
              </div>
            </Link>
            <Link href="#">
              <div className="flex items-center justify-center p-1 md:p-2 hover:bg-[#2D2945] rounded-full transition-all duration-300">
                <FaInstagram className="text-[#B9B8C1] md:text-[1.5rem] " />
              </div>
            </Link>
          </div>
        </div>  */}

        <div className="">
          <div className="mr-4 hidden lg:block">{navList}</div>

          <IconButton
            variant="text"
            className="   text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <IoMdClose className="text-2xl  text-white" />
            ) : (
              <GiHamburgerMenu className="text-2xl  text-white" />
            )}
          </IconButton>
        </div>

        <Button
          className="  hidden 2xl:block  transition-all duration-300 hover:bg-primary rounded-full  border px-6"
          variant="outline"
        >
          get a quate
        </Button>
      </div>

      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
}
