import React from "react";
import Image from "next/image";
import iftikhar from "@/public/images/iftikhar.png";
import ammar from "@/public/images/ammar.png";
import qasim from "@/public/images/qasim.png";
import { Facebook, Linkedin2, Twitter2 } from "@/public/icons/Icon";
import Link from "next/link";
const Team = () => {
  return (
    <>
      <div className="lg:py-16 py-4 text-center bg-[#F8F8F8]">
        <h1 className="text-grey font-medium lg:text-2xl text-lg lg:pb-5 pb-2">
          Team Members
        </h1>
        <p className="text-xs text-green font-normal">
          Home
          <span className="text-xs text-grey font-normal">
            / Success Stories
          </span>
        </p>
      </div>
      <section className="lg:py-20 py-10">
        <div className="md:container mx-auto px-5 ">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            <div className="shadow-sm relative ">
              <Image
                className="w-full"
                src={iftikhar}
                width={340}
                height={382}
              />
              <div className=" bg-white p-1 absolute top-1/2 -translate-y-1/2 -right-5  flex flex-col justify-center items-center rounded-md space-y-2">
                <Link
                  href="/#"
                  className="flex items-center justify-center w-[22px] h-[22px] bg-orange rounded-[5px]"
                >
                  <Facebook />
                </Link>
                <Link
                  href="/#"
                  className="flex items-center justify-center w-[22px] h-[22px] bg-white-100 rounded-[5px] "
                >
                  <Twitter2 />
                </Link>
                <Link
                  href="/#"
                  className="flex items-center justify-center w-[22px] h-[22px] bg-white-100 rounded-[5px]"
                >
                  <Linkedin2 />
                </Link>
              </div>
              <h1 className="font-medium text-[20px] text-grey text-center">
                Iftikhar Ali
              </h1>
              <p className="text-sm font-normal text-grey text-center">
                Full Stack Developer
              </p>
            </div>
            <div className="shadow-sm relative ">
              <Image className="w-full" src={ammar} width={340} height={382} />
              <div className=" bg-white p-1 absolute top-1/2 -translate-y-1/2 -right-5  flex flex-col justify-center items-center rounded-md space-y-2">
                <Link
                  href="/#"
                  className="flex items-center justify-center w-[22px] h-[22px] bg-orange rounded-[5px]"
                >
                  <Facebook />
                </Link>
                <Link
                  href="/#"
                  className="flex items-center justify-center w-[22px] h-[22px] bg-white-100 rounded-[5px] "
                >
                  <Twitter2 />
                </Link>
                <Link
                  href="/#"
                  className="flex items-center justify-center w-[22px] h-[22px] bg-white-100 rounded-[5px]"
                >
                  <Linkedin2 />
                </Link>
              </div>
              <h1 className="font-medium text-[20px] text-grey text-center">
                Ammar Hanif
              </h1>
              <p className="text-sm font-normal text-grey text-center">
                UI/UX Designer
              </p>
            </div>
            <div className="shadow-sm relative ">
              <Image className="w-full" src={qasim} width={340} height={382} />
              <div className=" bg-white p-1 absolute top-1/2 -translate-y-1/2 -right-5  flex flex-col justify-center items-center rounded-md space-y-2">
                <Link
                  href="/#"
                  className="flex items-center justify-center w-[22px] h-[22px] bg-orange rounded-[5px]"
                >
                  <Facebook />
                </Link>
                <Link
                  href="/#"
                  className="flex items-center justify-center w-[22px] h-[22px] bg-white-100 rounded-[5px] "
                >
                  <Twitter2 />
                </Link>
                <Link
                  href="/#"
                  className="flex items-center justify-center w-[22px] h-[22px] bg-white-100 rounded-[5px]"
                >
                  <Linkedin2 />
                </Link>
              </div>
              <h1 className="font-medium text-[20px] text-grey text-center">
                Muhammad Qasim
              </h1>
              <p className="text-sm font-normal text-grey text-center">
                Front End Developer
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            <div className="shadow-sm relative ">
              <Image
                className="w-full"
                src={iftikhar}
                width={340}
                height={382}
              />
              <div className=" bg-white p-1 absolute top-1/2 -translate-y-1/2 -right-5  flex flex-col justify-center items-center rounded-md space-y-2">
                <Link
                  href="/#"
                  className="flex items-center justify-center w-[22px] h-[22px] bg-orange rounded-[5px]"
                >
                  <Facebook />
                </Link>
                <Link
                  href="/#"
                  className="flex items-center justify-center w-[22px] h-[22px] bg-white-100 rounded-[5px] "
                >
                  <Twitter2 />
                </Link>
                <Link
                  href="/#"
                  className="flex items-center justify-center w-[22px] h-[22px] bg-white-100 rounded-[5px]"
                >
                  <Linkedin2 />
                </Link>
              </div>
              <h1 className="font-medium text-[20px] text-grey text-center">
                Iftikhar Ali
              </h1>
              <p className="text-sm font-normal text-grey text-center">
                Full Stack Developer
              </p>
            </div>
            <div className="shadow-sm relative ">
              <Image className="w-full" src={ammar} width={340} height={382} />
              <div className=" bg-white p-1 absolute top-1/2 -translate-y-1/2 -right-5  flex flex-col justify-center items-center rounded-md space-y-2">
                <Link
                  href="/#"
                  className="flex items-center justify-center w-[22px] h-[22px] bg-orange rounded-[5px]"
                >
                  <Facebook />
                </Link>
                <Link
                  href="/#"
                  className="flex items-center justify-center w-[22px] h-[22px] bg-white-100 rounded-[5px] "
                >
                  <Twitter2 />
                </Link>
                <Link
                  href="/#"
                  className="flex items-center justify-center w-[22px] h-[22px] bg-white-100 rounded-[5px]"
                >
                  <Linkedin2 />
                </Link>
              </div>
              <h1 className="font-medium text-[20px] text-grey text-center">
                Ammar Hanif
              </h1>
              <p className="text-sm font-normal text-grey text-center">
                UI/UX Designer
              </p>
            </div>
            <div className="shadow-sm relative ">
              <Image className="w-full" src={qasim} width={340} height={382} />
              <div className=" bg-white p-1 absolute top-1/2 -translate-y-1/2 -right-5  flex flex-col justify-center items-center rounded-md space-y-2">
                <Link
                  href="/#"
                  className="flex items-center justify-center w-[22px] h-[22px] bg-orange rounded-[5px]"
                >
                  <Facebook />
                </Link>
                <Link
                  href="/#"
                  className="flex items-center justify-center w-[22px] h-[22px] bg-white-100 rounded-[5px] "
                >
                  <Twitter2 />
                </Link>
                <Link
                  href="/#"
                  className="flex items-center justify-center w-[22px] h-[22px] bg-white-100 rounded-[5px]"
                >
                  <Linkedin2 />
                </Link>
              </div>
              <h1 className="font-medium text-[20px] text-grey text-center">
                Muhammad Qasim
              </h1>
              <p className="text-sm font-normal text-grey text-center">
                Front End Developer
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
