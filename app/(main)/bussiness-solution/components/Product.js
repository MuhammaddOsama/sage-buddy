import React from "react";
import img from "@/public/images/4.png";
import Image from "next/image";
const Product = () => {
  return (
    <>
      <section className="md:pt-20 pt-10">
        <div className="md:container mx-auto px-5 ">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-6 col-span-full content-center">
              <div className="flex items-center justify-start gap-4">
                <div className="w-12 h-1 bg-orange"></div>
                <p className="font-normal text-sm text-orange">
                  Sagebuddy gives
                </p>
              </div>
              <h1 className="lg:text-4xl text-lg font-semibold text-grey">
                Flexible Unit Handling
              </h1>
              <h1 className="lg:text-4xl text-lg font-semibold text-grey">
                for a single Product
              </h1>
              <p className="font-normal text-sm text-grey opacity-[65%] leading-5 pt-3">
                SageBuddy gives you non imaginable flexibility to purchase or
                sale your item in any Unit. You can easily define how an item or
                group of items will be purchased and sold.
              </p>
            </div>
            <div className="lg:col-span-6 col-span-full">
              <Image
                className="object-cover w-full h-full"
                src={img}
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

export default Product;
