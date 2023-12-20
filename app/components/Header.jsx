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
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resdize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
      <Typography
        as="li"
        variant="small"
        className="py-1 px-5 font-medium hvr-underline-from-center transition-all duration-300   "
      >
        <a href="#" className="flex items-center text-lg">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="py-1 px-5 font-medium hvr-underline-from-center transition-all duration-300 "
      >
        <a href="#" className="flex items-center text-lg">
          Product
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="py-1 px-5 font-medium hvr-underline-from-center transition-all duration-300 "
      >
        <a href="#" className="flex items-center text-lg">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="py-1 px-5 font-medium hvr-underline-from-center transition-all duration-300 "
      >
        <a href="#" className="flex items-center text-lg">
          Blog
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="py-1 px-5 font-medium hvr-underline-from-center transition-all duration-300 "
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
      className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 md:px-4 lg:px-8 lg:py-4 bg-[#151130] border-none"
    >
      <div className="flex items-center container mx-auto px-4 justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className=" cursor-pointer py-2 font-medium transition-all duration-200 "
        >
          <Image
            src={logo}
            height={120}
            width={175}
            alt="logo"
            className="w-32 md:w-[80%] lg:w-[70%]"
          />
        </Typography>
        <div className="block lg:hidden">
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
              <IoMdClose className="text-2xl text-[#027EEC]" />
            ) : (
              <GiHamburgerMenu className="text-2xl text-[#027EEC]" />
            )}
          </IconButton>
        </div>
        <div className="hidden lg:block">
          {/* <div className="flex items-center gap-2 order-2 ">
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
          </div> */}
          <div>
            <Link
              href="#"
              className="hvr-bounce-to-left overflow-hidden flex items-center gap-2 font-semibold hover:text-white border-[#32C5FA] border-2  rounded-full py-3 px-9 text-sm "
            >
              Start for free
            </Link>
          </div>
        </div>
      </div>
      <MobileNav open={openNav} className="px-4">
        {navList}
      </MobileNav>
    </Navbar>
  );
}
