import Image from "next/image";
import React from "react";
import img6 from "@/public/images/6.png";
import { Check } from "@/public/icons/Icon";
const Payment = () => {
  return (
    <>
      <section className="md:pt-20 pt-10">
        <div className="md:container mx-auto px-5 ">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-6 col-span-full content-center">
              <div className="flex items-center justify-start gap-4">
                <div className="w-12 h-1 bg-orange"></div>
                <p className="font-normal text-sm text-orange">
                  What we experienced
                </p>
              </div>
              <h1 className="lg:text-4xl text-lg font-semibold text-grey">
                Flexible Payment Handling
              </h1>
              <p className="font-normal text-sm text-grey opacity-[65%] leading-5 pt-3">
                SageBuddy gives you a great flexibility to manage single sales
                amount into multiple account i.e.
              </p>
              <div className="flex flex-row items-center space-x-2 pt-4">
                <div className="bg-green w-12 h-12 rounded-full  flex items-center justify-center">
                  <Check />
                </div>
                <span className="text-sm font-medium text-[#000000]">
                  Cash Counter
                </span>
              </div>
              <div className="flex flex-row items-center space-x-2 pt-4">
                <div className="bg-green w-12 h-12 rounded-full  flex items-center justify-center">
                  <Check />
                </div>
                <span className="text-sm font-medium text-[#000000]">
                  Jazzcash
                </span>
              </div>
              <div className="flex flex-row items-center space-x-2 pt-4">
                <div className="bg-green w-12 h-12 rounded-full  flex items-center justify-center">
                  <Check />
                </div>
                <span className="text-sm font-medium text-[#000000]">
                  Easypaisa
                </span>
              </div>
              <p className="font-normal text-sm text-grey opacity-[65%] leading-5 pt-3">
                There is no limit for it.
              </p>
            </div>
            <div className="lg:col-span-6 col-span-full">
              <Image
                className="object-cover w-full h-full"
                src={img6}
                width={586}
                height={472}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
