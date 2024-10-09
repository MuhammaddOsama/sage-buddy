import { Logo } from "@/public/icons/Icon";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <>
      <section className="md:pt-20 pt-10 bg-[#F8F8F8]">
        <div className="md:container mx-auto px-5 ">
          <Logo className="w-[185px] h-[44px] mx-auto items-center" />
          <form className="mx-auto my-5 lg:max-w-[520px] w-full rounded-xl border bg-white">
            <div className="flex flex-col items-center lg:px-36 px-2 pt-5">
              <h1 className="font-medium text-[26px] text-grey uppercase">
                Sign In
              </h1>
              <p className="font-light text-sm text-grey pt-5 ">
                Don't have an account yet?
                <Link href="register">
                  <span className="font-normal text-sm text-orange pl-1">
                    Sign up
                  </span>
                </Link>
              </p>
            </div>
            <div className="flex flex-col items-start pl-6 pt-10 pr-6">
              <label className="font-normal text-sm text-grey pb-5">
                Your Email
              </label>
              <input
                className="w-full h-14 pl-4 border rounded-md placeholder:font-normal"
                type="text"
                alt=""
                name=""
                placeholder="info@sagebuddy.com"
              />
            </div>
            <div className="flex flex-col items-start pl-6 pt-10 pr-6">
              <label className="font-normal text-sm text-grey pb-5">
                password
              </label>
              <input
                className="w-full h-14 pl-4 border rounded-md placeholder:font-normal"
                type="password"
                alt=""
                name=""
                placeholder="**********"
              />
            </div>
            {/* <div className="flex items-start justify-between pl-6  pt-10 pr-6">
              <div className="flex flex-row items-start justify-evenly space-x-1">
                <input
                  className="w-5 h-5 rounded-md"
                  type="checkbox"
                  alt=""
                  name=""
                />
                <p className="font-normal text-sm text-grey opacity-[65%]">
                  Remember me
                </p>
              </div>

              <p className="font-normal text-sm text-green">Forgot Password?</p>
            </div> */}
            <div className="items-start pl-6 pt-10 pr-6 pb-10">
              <button
                className="font-medium text-sm text-white bg-green py-4 w-full rounded-md uppercase"
                type="submit"
              >
                signin
              </button>
            </div>
          </form>
          <p className="mx-auto text-center font-normal text-sm text-grey opacity-[70%] py-10">
            Copyright 2021 - SageBuddy.com
          </p>
        </div>
      </section>
    </>
  );
};

export default Login;
