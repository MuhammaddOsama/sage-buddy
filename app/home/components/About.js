import Image from "next/image";
import React from "react";
import img from "@/public/images/2.png";
const About = () => {
  return (
    <>
      <section className="md:pt-20 pt-10">
        <div className="md:container mx-auto px-5 ">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-6 col-span-full">
              <Image
                className="object-cover sm:w-auto w-full h-full"
                src={img}
                width={586}
                height={472}
              />
            </div>
            <div className="lg:col-span-5 col-span-full content-center">
              <div className="flex items-center justify-start gap-4">
                <div className="w-12 h-1 bg-orange"></div>
                <p className="font-normal text-sm text-orange">
                  A wise Companion
                </p>
              </div>
              <h1 className="lg:text-4xl text-lg font-semibold text-grey">
                Grow your business with
              </h1>
              <h1 className="lg:text-4xl text-lg font-semibold text-grey">
                SageBuddy
              </h1>
              <p className="font-normal text-sm text-grey opacity-[65%] leading-5 pt-3">
                SageBuddy means "A wise Companion", so having SageBuddy as a
                part of your business ensures that you got an intelligent friend
                at your back that will ease your work to your 100% satisfaction.
              </p>
              <p className="font-normal text-sm text-grey opacity-[65%] leading-5 pt-3">
                SageBuddy is a{" "}
                <span className="font-medium underline text-green text-sm leading-5">
                  great
                </span>{" "}
                software for all your needs,{" "}
                <span className="font-medium underline text-green text-sm leading-5">
                  no matter if you need it
                </span>{" "}
                for accountancy, sale/purchase items, keeping inventory,
                purchase and sale item in any measurement unit, manage human
                resource and much more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
