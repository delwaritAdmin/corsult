import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
import logo from "../img/logo_corsult.png";
import { BsTwitter, BsDiscord } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resdize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
      <Typography
        as="li"
        variant="small"
        className="py-2 px-5 font-medium hover:bg-[#2D2945] rounded-full transition-all duration-300   "
      >
        <a href="#" className="flex items-center text-lg">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="py-2 px-5 font-medium hover:bg-[#2D2945] rounded-full transition-all duration-300 "
      >
        <a href="#" className="flex items-center text-lg">
          Product
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="py-2 px-5 font-medium hover:bg-[#2D2945] rounded-full transition-all duration-300 "
      >
        <a href="#" className="flex items-center text-lg">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="py-2 px-5 font-medium hover:bg-[#2D2945] rounded-full transition-all duration-300 "
      >
        <a href="#" className="flex items-center text-lg">
          Blog
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="py-2 px-5 font-medium hover:bg-[#2D2945] rounded-full transition-all duration-300 "
      >
        <a href="#" className="flex items-center text-lg">
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      id="header"
      className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-[#151130] border-none"
    >
      <div className="flex items-center container mx-auto px-4 justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className=" cursor-pointer py-2 font-medium transition-all duration-200 "
        >
          <Image src={logo} height={120} width={170} alt="logo" />
        </Typography>
        <div className="block lg:hidden">
          <div className="flex items-center gap-2 order-2 ">
            <Link href="#">
              <div className="flex items-center justify-center p-2 hover:bg-[#2D2945] rounded-full transition-all duration-300">
                <BsTwitter className="text-[#B9B8C1] text-[1.4rem]" />
              </div>
            </Link>
            <Link href="#">
              <div className="flex items-center justify-center p-2 hover:bg-[#2D2945] rounded-full transition-all duration-300">
                <BsDiscord className="text-[#B9B8C1] text-[1.4rem]" />
              </div>
            </Link>
            <Link href="#">
              <div className="flex items-center justify-center p-2 hover:bg-[#2D2945] rounded-full transition-all duration-300">
                <FaFacebookF className="text-[#B9B8C1] text-[1.4rem]" />
              </div>
            </Link>
            <Link href="#">
              <div className="flex items-center justify-center p-2 hover:bg-[#2D2945] rounded-full transition-all duration-300">
                <FaInstagram className="text-[#B9B8C1] text-[1.4rem] " />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center gap-2 order-2 ">
            <Link href="#">
              <div className="flex items-center justify-center p-2 hover:bg-[#2D2945] rounded-full transition-all duration-300">
                <BsTwitter className="text-[#B9B8C1] text-xl" />
              </div>
            </Link>
            <Link href="#">
              <div className="flex items-center justify-center p-2 hover:bg-[#2D2945] rounded-full transition-all duration-300">
                <BsDiscord className="text-[#B9B8C1] text-xl" />
              </div>
            </Link>
            <Link href="#">
              <div className="flex items-center justify-center p-2 hover:bg-[#2D2945] rounded-full transition-all duration-300">
                <FaFacebookF className="text-[#B9B8C1] text-xl" />
              </div>
            </Link>
            <Link href="#">
              <div className="flex items-center justify-center p-2 hover:bg-[#2D2945] rounded-full transition-all duration-300">
                <FaInstagram className="text-[#B9B8C1] text-xl " />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <MobileNav open={openNav} className="">
        {navList}
      </MobileNav>
    </Navbar>
  );
}
