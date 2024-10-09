import Image from "next/image";
import React from "react";
import img from "@/public/images/vector.png";
const Hero = () => {
  return (
    <>
      <section className="">
        <div className="bg-hero bg-cover sm:h-[calc(100vh-118px)] h-full">
          <div className="md:container mx-auto px-5">
            <div className="py-24">
              <h6 className="text-orange text-sm leading-4">
                Integral & User Friendly
              </h6>
              <h2 className="text-white lg:text-[40px] text-[20px]">
                Redefine Your
              </h2>
              <h2 className="text-white lg:text-[40px] text-[20px]">
                Business Approach{" "}
              </h2>
              <div className="relative">
                <h2 className="text-white lg:text-[40px] text-[20px] relative lg:z-10 z-0">
                  With Sage Buddy
                </h2>
                <Image
                  className=" xl:block hidden absolute z- top-2 xl:left-[83px] left-[40px]"
                  src={img}
                  alt="ing"
                  width={300}
                  height={300}
                />
              </div>
              <p className="lg:text-sm text-xs  text-white font-normal leading-[22px]">
                Sale and Purchase Items in multiple units, allows great
              </p>
              <p className="lg:text-sm text-xs  text-white font-normal leading-[22px]">
                flexibility to deal with measurement unit.
              </p>
              <button className=" text-white text-sm font-normal uppercase px-5 py-[12px] mt-4 rounded-[6px] bg-green cursor-pointer">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
