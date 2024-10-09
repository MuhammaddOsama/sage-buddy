import { Chart, Customer, Hrm } from "@/public/icons/Icon";
import React from "react";

const Platform = () => {
  return (
    <>
      <section className="md:py-20 py-10 bg-[#F8F8F8]">
        <div className="md:container mx-auto px-5">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-6 col-span-full content-center">
              <div className="flex items-center justify-start gap-4">
                <div className="w-12 h-1 bg-orange"></div>
                <p className="font-normal text-sm text-orange">WHAT WE DO</p>
              </div>
              <h1 className="lg:text-4xl text-lg font-semibold text-grey">
                Does more then ever
              </h1>
              <h1 className="lg:text-4xl text-lg font-semibold text-grey">
                platform to achieve goal
              </h1>
              <h1 className="lg:text-4xl text-lg font-semibold text-grey">
                stages.
              </h1>
              <p className="font-normal text-sm text-grey opacity-[65%] leading-5 pt-3">
                What we experienced that most of POS don’t have the capability
                to deal with multiple units for a single item. SageBuddy gives
                non imaginable flexibility to purchase or sale your item in any
                Unit. You can easily define how an item or group of items will
                be purchased and sold. For example
              </p>
              <button className=" text-white text-sm font-normal uppercase px-5 py-[12px] mt-4 rounded-[6px] bg-orange cursor-pointer">
                Read More
              </button>
            </div>
            <div className="lg:col-span-6 col-span-full">
              <div className="grid lg:grid-cols-12 grid-cols-1 gap-5">
                <div className="lg:col-span-6 col-span-full content-center bg-white rounded-lg shadow-sm">
                  <div className="py-9 pr-6 pl-5">
                    <div className="bg-[#F8F8F8] rounded-full w-12 h-12">
                      <Hrm className="pb-5" />
                    </div>
                    <h1 className="lg:text-xs text-sm font-medium text-grey pt-3">
                      Stay in touch with your Customers
                    </h1>
                    <p className="font-normal text-sm text-grey opacity-[65%] leading-5 pt-3">
                      SageBuddy allow you to keep in touch with your customers
                      via SMS. Send messages on new invoices, remaining
                      balances, payments etc.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-6 col-span-full content-center bg-white rounded-lg shadow-sm">
                  <div className="py-9 px-6">
                    <div className="bg-[#F8F8F8] rounded-full w-12 h-12">
                      <Hrm className="pb-5" />
                    </div>
                    <h1 className="lg:text-xs text-sm font-medium text-grey pt-3">
                      HRM
                    </h1>
                    <p className="font-normal text-sm text-grey opacity-[65%] leading-5 pt-3">
                      HRM comes an integral part of SageBuddy. Manage Employees
                      attendance, salary sheets, Leaves/Holidays, Shifts etc.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-12 grid-cols-1 gap-5 pt-5">
                <div className="lg:col-span-6 col-span-full content-center bg-white rounded-lg shadow-sm">
                  <div className="py-7 pl-6 pr-8">
                    <div className="bg-[#F8F8F8] rounded-full w-12 h-12">
                      <Chart className="pb-5" />
                    </div>
                    <h1 className="lg:text-xs text-sm font-medium text-grey pt-3">
                      User Security
                    </h1>
                    <p className="font-normal text-sm text-grey opacity-[65%] leading-5 pt-3">
                      SageBuddy can be used as both standalone and distributed
                      system. It has an impeccable user security implemented.
                      Admin is able to set security levels as per his/her
                      business needs against different user groups.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-6 col-span-full content-center bg-white rounded-lg shadow-sm">
                  <div className="py-9 pr-6 pl-5">
                    <div className="bg-[#F8F8F8] rounded-full w-12 h-12">
                      <Customer className="pb-5" />
                    </div>
                    <h1 className="lg:text-xs text-sm font-medium text-grey pt-3">
                      24/7 Customer Support
                    </h1>
                    <p className="font-normal text-sm text-grey opacity-[65%] leading-5 pt-3">
                      We really care about our customers and never leave them
                      alone. We are always ready to help you 24/7.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Platform;
