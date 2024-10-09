import React from "react";
import img5 from "@/public/images/5.png";
import Image from "next/image";
const Order = () => {
  return (
    <>
      <section className="md:pt-20 pt-10 bg-[#F8F8F8]">
        <div className="md:container mx-auto px-5 ">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-6 col-span-full">
              <Image
                className="object-cover w-full h-full"
                src={img5}
                width={586}
                height={472}
              />
            </div>
            <div className="lg:col-span-6 col-span-full content-center">
              <div className="flex items-center justify-start gap-4">
                <div className="w-12 h-1 bg-orange"></div>
                <p className="font-normal text-sm text-orange">
                  create quotation
                </p>
              </div>
              <h1 className="lg:text-4xl text-lg font-semibold text-grey">
                Order Quotations
              </h1>

              <p className="font-normal text-sm text-grey opacity-[65%] leading-5 pt-3">
                Create Quotation and turn them into sales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
