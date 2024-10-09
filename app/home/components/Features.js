import {
  Arrow,
  Hardware,
  Kinno,
  Sales,
  Store,
  Tiles,
  Warehouse,
} from "@/public/icons/Icon";
import React from "react";

const Features = () => {
  return (
    <>
      <section className="md:pt-20 pt-10 md:pb-20 pb-10 bg-white">
        <div className="md:container mx-auto px-5">
          <div className="text-center">
            <p className="font-normal text-sm text-orange uppercase ">
              OUR FEATURES
            </p>
            <h1 className="font-semibold lg:text-4xl text-lg text-grey">
              Solutions for your
            </h1>
            <h1 className="font-semibold lg:text-4xl text-lg text-grey">Bussiness</h1>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 lg:pt-10 pt-5">
            <div className="bg-[#F8F8F8] rounded lg:py-14 py-7 ">
              <h2 className="font-medium lg:text-xl text-lg text-center text-grey">
                Point of Sales
              </h2>
              <div className="lg:py-14 py-7">
                <Sales className="mx-auto" />
              </div>
              <p className="opacity-[65%] font-normal text-sm text-center text-grey leading-5 px-5">
                SageBuddy has the capability to deal with these kind of
                variations and above this inventory remains 100% intact and
                correct.
              </p>
              <div className="flex justify-center items-centers pt-7">
                <h1 className="uppercase text-sm font-medium text-orange">
                  Learn More
                </h1>
                <Arrow />
              </div>
            </div>
            <div className="bg-[#F8F8F8] rounded lg:py-14 py-7 ">
              <h2 className="font-medium lg:text-xl text-lg text-center text-grey">
                Cold Storage / Warehouse
              </h2>
              <div className="lg:py-14 py-7">
                <Warehouse className="mx-auto" />
              </div>
              <p className="opacity-[65%] font-normal text-sm text-center text-grey leading-5 px-5">
                SageBuddy has the capability to deal with these kind of
                variations and above this inventory remains 100% intact and
                correct.
              </p>
              <div className="flex justify-center items-center pt-7">
                <h1 className="uppercase text-sm font-medium text-orange">
                  Learn More
                </h1>
                <Arrow />
              </div>
            </div>
            <div className="bg-[#F8F8F8] rounded lg:py-14 py-7">
              <h2 className="font-medium lg:text-xl text-lg text-center text-grey">
                Kinno Factory ERP
              </h2>
              <div className="lg:py-14 py-7">
                <Kinno className="mx-auto " />
              </div>

              <p className="opacity-[65%] font-normal text-sm text-center text-grey leading-5 px-5">
                SageBuddy is designed to target any user in market due to its
                user friendliness. It just takes couple of days to get addict of
                it.
              </p>
              <div className="flex justify-center items-center pt-7">
                <h1 className="uppercase text-sm font-medium text-orange">
                  Learn More
                </h1>
                <Arrow />
              </div>
            </div>
          </div>
          {/* Row two */}
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 pt-5">
            <div className="bg-[#F8F8F8] rounded lg:py-14 py-7 ">
              <h2 className="font-medium lg:text-xl text-lg text-center text-grey">
                Tiles / Sanitary Retail Shop
              </h2>
              <div className="lg:py-14 py-7">
                <Tiles className="mx-auto" />
              </div>
              <p className="opacity-[65%] font-normal text-sm text-center text-grey leading-5 px-5">
                SageBuddy has the capability to deal with these kind of
                variations and above this inventory remains 100% intact and
                correct.
              </p>
              <div className="flex justify-center items-centers pt-7">
                <h1 className="uppercase text-sm font-medium text-orange">
                  Learn More
                </h1>
                <Arrow />
              </div>
            </div>
            <div className="bg-[#F8F8F8] rounded lg:py-14 py-7">
              <h2 className="font-medium lg:text-xl text-lg text-center text-grey">
                Pharmacy Store
              </h2>
              <div className="lg:py-14 py-7">
                <Store className="mx-auto" />
              </div>
              <p className="opacity-[65%] font-normal text-sm text-center text-grey leading-5 px-5">
                SageBuddy has the capability to deal with these kind of
                variations and above this inventory remains 100% intact and
                correct.
              </p>
              <div className="flex justify-center items-center pt-7">
                <h1 className="uppercase text-sm font-medium text-orange">
                  Learn More
                </h1>
                <Arrow />
              </div>
            </div>
            <div className="bg-[#F8F8F8] rounded lg:py-14 py-7">
              <h2 className="font-medium lg:text-xl text-lg text-center text-grey">
                Hardware & Plywood Shop
              </h2>
              <div className="lg:py-14 py-7">
                <Hardware className="mx-auto" />
              </div>

              <p className="opacity-[65%] font-normal text-sm text-center text-grey leading-5 px-5">
                SageBuddy is designed to target any user in market due to its
                user friendliness. It just takes couple of days to get addict of
                it.
              </p>
              <div className="flex justify-center items-center pt-7">
                <h1 className="uppercase text-sm font-medium text-orange">
                  Learn More
                </h1>
                <Arrow />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
