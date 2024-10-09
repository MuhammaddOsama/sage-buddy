import {
  Twitter,
  Youtube,
  Facebook,
  Linkedin,
  Phone2,
  Email2,
  Logo2,
} from "@/public/icons/Icon";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className="md:pt-20 pt-10 md:pb-20 pb-10 bg-grey ">
        <div className="md:container mx-auto px-5">
          <div className="grid lg:grid-cols-12 grid-cols-3">
            <div className="col-span-3">
              <div className="items-center justify-center lg:pt-[74px] pt-0">
                <Link href="/home">
                  {" "}
                  <Logo2 className="w-48 h-11" />
                </Link>
                <div className="flex justify-start items-center space-x-2 lg:pt-[54px] pt-7 ">
                  <Email2 />
                  <p className="text-white text-sm text-start">
                    info@sagebuddy.com
                  </p>
                </div>
                <div className="flex justify-start items-center space-x-2 pt-3">
                  <Phone2 />
                  <p className="text-white text-sm text-start">048 376 8719</p>
                </div>
                <div className="flex items-end space-x-2 pt-6">
                  <Link
                    href="/#"
                    className="flex items-center justify-center w-[22px] h-[22px] bg-light-gray rounded-[5px]"
                  >
                    <Facebook />
                  </Link>
                  <Link
                    href="/#"
                    className="flex items-center justify-center w-[22px] h-[22px] bg-light-gray rounded-[5px] "
                  >
                    <Twitter />
                  </Link>
                  <Link
                    href="/#"
                    className="flex items-center justify-center w-[22px] h-[22px] bg-light-gray rounded-[5px]"
                  >
                    <Youtube />
                  </Link>
                  <Link
                    href="/#"
                    className="flex items-center justify-center w-[22px] h-[22px] bg-light-gray rounded-[5px]"
                  >
                    <Linkedin />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-9">
              <div className="grid lg:grid-cols-3 grid-cols-1">
                <div className="lg:pt-[90px] pt-[30px]">
                  <p className="font-bold text-md text-white ">
                    BUSINESS SOLUTIONS
                  </p>
                  <ul className="mx-auto pt-4 flex flex-col justify-center items-start space-y-3 cursor-pointer">
                    <Link
                      href="/"
                      className="hover:underline text-sm text-white hover:text-green"
                    >
                      Accounting Softwares
                    </Link>
                    <Link
                      href="/"
                      className="hover:underline text-sm text-white hover:text-green"
                    >
                      Kinnow Factorry ERP
                    </Link>
                    <Link
                      href="/"
                      className="hover:underline text-sm text-white hover:text-green"
                    >
                      Points of salaes
                    </Link>
                    <Link
                      href="/"
                      className="hover:underline text-sm text-white hover:text-green"
                    >
                      Whole salaes
                    </Link>
                    <Link
                      href="/"
                      className="hover:underline text-sm text-white hover:text-green"
                    >
                      Online Accounting
                    </Link>
                  </ul>
                </div>
                <div className="lg:pt-[90px] pt-[30px]">
                  <p className=" font-bold text-md text-white">
                    COMPANY
                  </p>
                  <ul className="mx-auto pt-4 flex flex-col justify-center items-start space-y-3 cursor-pointer">
                    <Link
                      href="/"
                      className="hover:underline txt-sm text-white hover:text-green"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/team-member"
                      className="hover:underline txt-sm text-white hover:text-green"
                    >
                      Our team
                    </Link>
                    <Link
                      href="/contact"
                      className="hover:underline txt-sm text-white hover:text-green"
                    >
                      Contact Us
                    </Link>
                  </ul>
                </div>
                <div className="lg:pt-[90px] pt-[30px]">
                  <p className="font-bold text-md text-white ">OTHERS LINK</p>
                  <ul className="mx-auto pt-4 flex flex-col justify-center items-start space-y-3  cursor-pointer">
                    <Link
                      href="/"
                      className="hover:underline text-smm text-white hover:text-green"
                    >
                      Terms and Condition
                    </Link>
                    <Link
                      href="/"
                      className="hover:underline text-smm text-white hover:text-green"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="/"
                      className="hover:underline text-smm text-white hover:text-green"
                    >
                      Disclaimer
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#181522] w-full bottom-0">
        <p className="text-white text-sm text-center lh:py-7 py-4">
          Copyright 2021 - SageBuddy.com
        </p>
      </div>
    </>
  );
};

export default Footer;
