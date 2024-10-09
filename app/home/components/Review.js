"use client";
import Image from "next/image";
import img from "@/public/images/line.png";
import img1 from "@/public/images/Ahmad.png";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Arrow1, Arrow2, Colon } from "@/public/icons/Icon";

function SamplePrevArrow(props) {
  const { style, onClick } = props;

  return (
    <div
      className="prev-arrow slick-arrow absolute z-[1] cursor-pointer lg:left-20 left-0 lg:top-[50%] top-[95%] -translate-y-1/2"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <Arrow1 />
    </div>
  );
}
function SampleNextArrow(props) {
  const { style, onClick } = props;

  return (
    <div
      className="prev-arrow slick-arrow absolute z-[1] cursor-pointer lg:right-20 right-0 lg:top-[50%] top-[95%] lg:-translate-x-1/2 translate-x-0 -translate-y-1/2"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <Arrow2 />
    </div>
  );
}

const Review = () => {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <>
      <section className="md:pt-20 pt-10">
        <div className="md:container mx-auto px-5 ">
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <div className="">
                  <div className="mx-auto flex flex-col items-center justify-center lg:mt-24 mt-0">
                    <p className="lg:pt-5 pt-0 text-sm text-orange font-bold cursor-default">
                      REVIEWS
                    </p>
                    <p className="lg:mx-auto text-center font-bold lg:text-4xl text-lg text-grey mt-1 cursor-default">
                      10k Happy Customers
                    </p>
                    <p className="mx-auto text-center lg:px-72 px-4 lg:mt-12 mt-6 leading-8 text-sm text-grey cursor-default">
                      Ashamed no inhabit ferrars it ye besides resolve. Own
                      judgment directly few trifling. Elderly as pursuit at
                      regular do parlors. Rank what has into fond pursuit at
                      regular.
                    </p>
                  </div>
                  <div className="flex justify-center items-center pt-10">
                    <Image src={img} width={675} height={55} />
                  </div>
                  <div className="mx-auto flex flex-col pt-10 pb-20 lg:items-center items-center relative">
                    <Image src={img1} width={120} height={120} />
                    <h1 className="font-medium text-lg text-grey uppercase pt-4">
                      iftikhar ahmad
                    </h1>
                    <p className="font-normal text-sm text-grey uppercase opacity-50">
                      senior developer
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="">
                  <div className="mx-auto flex flex-col items-center justify-center lg:mt-24 mt-0">
                    <p className="lg:pt-5 pt-0 text-sm text-orange font-bold cursor-default">
                      REVIEWS
                    </p>
                    <p className="lg:mx-auto text-center font-bold lg:text-4xl text-lg text-grey mt-1 cursor-default">
                      10k Happy Customers
                    </p>
                    <p className="mx-auto text-center lg:px-72 px-4 lg:mt-12 mt-6 leading-8 text-sm text-grey cursor-default">
                      Ashamed no inhabit ferrars it ye besides resolve. Own
                      judgment directly few trifling. Elderly as pursuit at
                      regular do parlors. Rank what has into fond pursuit at
                      regular.
                    </p>
                  </div>
                  <div className="flex justify-center items-center pt-10">
                    <Image src={img} width={675} height={55} />
                  </div>
                  <div className="mx-auto flex flex-col pt-10 pb-20 lg:items-center items-center relative">
                    <Image src={img1} width={120} height={120} />
                    <h1 className="font-medium text-lg text-grey uppercase pt-4">
                      iftikhar ahmad
                    </h1>
                    <p className="font-normal text-sm text-grey uppercase opacity-50">
                      senior developer
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="">
                  <div className="mx-auto flex flex-col items-center justify-center lg:mt-24 mt-0">
                    <p className="lg:pt-5 pt-0 text-sm text-orange font-bold cursor-default">
                      REVIEWS
                    </p>
                    <p className="lg:mx-auto text-center font-bold lg:text-4xl text-lg text-grey mt-1 cursor-default">
                      10k Happy Customers
                    </p>
                    <p className="mx-auto text-center lg:px-72 px-4 lg:mt-12 mt-6 leading-8 text-sm text-grey cursor-default">
                      Ashamed no inhabit ferrars it ye besides resolve. Own
                      judgment directly few trifling. Elderly as pursuit at
                      regular do parlors. Rank what has into fond pursuit at
                      regular.
                    </p>
                  </div>
                  <div className="flex justify-center items-center pt-10">
                    <Image src={img} width={675} height={55} />
                  </div>
                  <div className="mx-auto flex flex-col pt-10 pb-20 lg:items-center items-center relative">
                    <Image src={img1} width={120} height={120} />
                    <h1 className="font-medium text-lg text-grey uppercase pt-4">
                      iftikhar ahmad
                    </h1>
                    <p className="font-normal text-sm text-grey uppercase opacity-50">
                      senior developer
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="">
                  <div className="mx-auto flex flex-col items-center justify-center lg:mt-24 mt-0">
                    <p className="lg:pt-5 pt-0 text-sm text-orange font-bold cursor-default">
                      REVIEWS
                    </p>
                    <p className="lg:mx-auto text-center font-bold lg:text-4xl text-lg text-grey mt-1 cursor-default">
                      10k Happy Customers
                    </p>
                    <p className="mx-auto text-center lg:px-72 px-4 lg:mt-12 mt-6 leading-8 text-sm text-grey cursor-default">
                      Ashamed no inhabit ferrars it ye besides resolve. Own
                      judgment directly few trifling. Elderly as pursuit at
                      regular do parlors. Rank what has into fond pursuit at
                      regular.
                    </p>
                  </div>
                  <div className="flex justify-center items-center pt-10">
                    <Image src={img} width={675} height={55} />
                  </div>
                  <div className="mx-auto flex flex-col pt-10 pb-20 lg:items-center items-center relative">
                    <Image src={img1} width={120} height={120} />
                    <h1 className="font-medium text-lg text-grey uppercase pt-4">
                      iftikhar ahmad
                    </h1>
                    <p className="font-normal text-sm text-grey uppercase opacity-50">
                      senior developer
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
