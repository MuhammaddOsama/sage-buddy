import React from "react";
import Image from "next/image";
import img from "@/public/images/3.png";
const Clients = () => {
  return (
    <>
      <section className="md:pt-20 pt-10 bg-gray-300">
        <div className="md:container mx-auto px-5 ">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-2 gap-16 lg:pt-24 pt-2 lg:pb-24 pb-4 items-center">
            <div className="m-auto">
              <Image
                className="object-cover"
                src={img}
                width={513}
                height={451}
              />
            </div>
            <div className="m-auto lg:w-[300px] w-[250px] lg:h-[300px] h-[250px] rounded-[50%] border-2 border-dashed border-grey border-opacity-50 relative">
              <div className="absolute left-1/2 -translate-x-1/2 -top-6 bg-gray-400">
                <h1 className="text-center font-semibold lg:text-5xl text-lg text-grey">
                  45+
                </h1>
                <p className="text-sm text-center text-grey">Customers</p>
              </div>
              <div className="absolute top-44 left-2 bg-gray-400">
                <h1 className="text-center font-semibold lg:text-5xl text-lg">2</h1>
                <p className="text-sm text-center text-grey">Cities</p>
              </div>
              <div className="absolute top-44 right-2 bg-gray-400">
                <h1 className="text-center font-semibold lg:text-5xl text-lg">1</h1>
                <p className="text-sm text-center text-grey">Cities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
