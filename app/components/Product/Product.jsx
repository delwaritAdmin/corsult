import React from "react";
import Link from "next/link";
import Image from "next/image";
import project_img_1 from "../../img/AboutUs/project_1.png";
import project_img_2 from "../../img/AboutUs/project_2.png";
import project_img_3 from "../../img/AboutUs/project_3.png";
import project_img_4 from "../../img/AboutUs/project_4.png";
import { FaDribbble } from "react-icons/fa";
import { BiSolidLeaf } from "react-icons/bi";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function Product() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section>
      <div className="bg-third py-20 lg:py-40 w-full">
        <div className="container mx-auto">
          <h1 className=" text-white text-7xl md:text-8xl lg:text-9xl text-center font-semibold">
            Coming Soon
          </h1>
        </div>
      </div>
      {/* ======================== */}
   
   
   
     



      
    </section>
  );
}

export default Product;
