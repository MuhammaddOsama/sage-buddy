import Image from "next/image";
import React from "react";
import img1 from "@/public/images/location.svg";
import img2 from "@/public/images/phone-call.svg";
import img3 from "@/public/images/envelope.svg";
const Contact = () => {
  return (
    <>
      <div className="lg:py-16 py-4 text-center bg-[#F8F8F8]">
        <h1 className="text-grey font-medium lg:text-2xl text-lg lg:pb-5 pb-2">
          Contact Us
        </h1>
        <p className="text-xs text-green font-normal">
          Home
          <span className="text-xs text-grey font-normal">/ Contact Us</span>
        </p>
      </div>
      <section className="md:py-20 py-10 bg-white">
        <div className="md:container mx-auto px-5 ">
          <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-7 gap-2">
            <div className="lg:col-span-6 col-span-12 pb-5">
              <div className="flex items-center justify-start gap-4">
                <div className="w-12 h-1 bg-orange"></div>
                <p className="font-normal text-sm text-orange uppercase">
                  contact us
                </p>
              </div>
              <h1 className="lg:text-4xl text-lg font-semibold text-grey">
                Grow your business with SageBuddy
              </h1>
              <h1 className="lg:text-4xl text-lg font-semibold text-grey">
                We have to change this text.
              </h1>
              <form className="lg:pt-10 pt-5">
                <input
                  type="text"
                  alt=""
                  placeholder="Name"
                  className="w-full h-[49px] border rounded-md opacity-[50%] pl-3"
                />
                <div className="flex justify-between items-start lg:mt-5 mt-2 lg:space-x-[30px] space-x-[10px]">
                  <input
                    type="text"
                    alt=""
                    placeholder="Email"
                    className="w-full h-[49px] border rounded-md opacity-[50%] pl-3"
                  />
                  <input
                    type="text"
                    alt=""
                    placeholder="Phone"
                    className="w-full h-[49px] border rounded-md opacity-[50%] pl-3"
                  />
                </div>
                <textarea
                  className="w-full lg:mt-5 mt-2 pt-3 border rounded-md opacity-[50%] pl-3"
                  name="textarea"
                  rows="5"
                  cols="50"
                  placeholder="Message"
                ></textarea>
                <button className=" text-white text-sm font-normal uppercase px-10 py-[12px] lg:mt-4 mt-2 rounded-[6px] bg-green cursor-pointer">
                  Send now
                </button>
              </form>
            </div>
            <div className="lg:col-start-9 col-span-full col-start-1 col-end-13">
              <div className="lg:mt-28 mt-3 border rounded-[8px]">
                <div className="border-b py-7 pl-5">
                  <div className="flex">
                    <Image
                      className="h-fit"
                      src={img1}
                      width={30}
                      height={30}
                    />
                    <h1 className="lg:text-xl text-md font-medium text-grey pl-5">
                      Location
                    </h1>
                  </div>
                  <p className="text-sm font-normal text-grey opacity-[70%] px-12 pt-5">
                    Office no 14, 3rd Floor, Rehman Palaza, Sargodha
                  </p>
                </div>
                <div className="border-b py-7 pl-5">
                  <div className="flex">
                    <Image
                      className="h-fit"
                      src={img2}
                      width={30}
                      height={30}
                    />
                    <h1 className="lg:text-xl text-md font-medium text-grey pl-5">
                      Make a Call{" "}
                    </h1>
                  </div>
                  <p className="text-sm font-normal text-grey opacity-[70%] pl-12 pt-5">
                    048 376 8719
                  </p>
                </div>
                <div className="py-10 pl-5">
                  <div className="flex">
                    <Image
                      className="h-fit"
                      src={img3}
                      width={30}
                      height={30}
                    />
                    <h1 className="lg:text-xl text-md font-medium text-grey pl-5">
                      Email Us
                    </h1>
                  </div>
                  <p className="text-sm font-normal text-grey opacity-[70%] pl-12 pt-5">
                    info@sagebuddy.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
