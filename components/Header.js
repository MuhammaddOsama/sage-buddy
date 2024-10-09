"use client";
import { Close, Logo, Toggle } from "@/public/icons/Icon";
import Link from "next/link";
import { Fragment, useState } from "react";

const Header = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const toggleMenu = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <Fragment>
      <div className="bg-white py-3.5 sticky top-0 z-10">
        <div className="md:container mx-auto px-5">
          <div className=" flex justify-between items-center">
           <Link href="/home"> <Logo className="lg:w-[185px] lg:h-11 w-[150px] h-7" /></Link>
            <ul className="lg:flex hidden space-x-6">
              <Link href="/success-stories">
                <li className="text-[14px] text-grey hover:text-green">Success Stories</li>
              </Link>
              <Link href="/bussiness-solution">
                <li className="text-[14px] text-grey hover:text-green">Business Solution</li>
              </Link>
              <Link href="/contact">
                <li className="text-[14px] text-grey hover:text-green">Contact us</li>
              </Link>
            </ul>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <button
                  className="lg:block hidden text-grey text-[14px] "
                  type="submit"
                >
                  LOGIN
                </button>
              </Link>
              <Link href="/register">
                <button
                  className="text-white bg-orange text-[14px] rounded-[6px] md:py-[10px] py-2 md:px-[15px] px-3 "
                  type="submit"
                >
                  SIGNUP
                </button>
              </Link>
              {/* toggle icon  */}
              <button
                onClick={toggleMenu}
                className="bg-green rounded lg:hidden block"
              >
                <Toggle />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        // <div className={`${isOpen === "bg-white" ? "" : ""} absolute top-0 right-0`}>
        <div className="absolute top-0 right-0 z-10 bg-green w-[300px] h-screen">
          <button className="absolute top-2 right-2" onClick={toggleMenu}>
            <Close />
          </button>

          <ul className="flex flex-col pl-6 pt-7">
            <Link href="/login">
              <button
                className=" text-white text-[14px] font-bold pb-5"
                type="submit"
              >
                LOGIN
              </button>
            </Link>
            <Link href="/">
              <li className="text-[14px] text-white py-2 ">Success Stories</li>
            </Link>
            <Link href="/">
              <li className="text-[14px] text-white py-2 ">
                Business Solution
              </li>
            </Link>
            <Link href="/">
              <li className="text-[14px] text-white py-2 ">Contact us</li>
            </Link>
          </ul>
        </div>
      )}
      {isOpen && (
        <div
          className="bg-opacity-50 bg-grey w-full h-screen absolute top-0 z-0"
          onClick={toggleMenu}
        ></div>
      )}
    </Fragment>
  );
};

export default Header;
