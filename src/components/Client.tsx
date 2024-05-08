"use client";
import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
// const clientData = [
//   {
//     icon: <FaQuoteLeft />,
//     info: "When our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing.",
//     clientImg: "/client1.jpg",
//     clientName: "Tahiru Mustapaha",
//     position: "CEO",
//   },
//   {
//     icon: <FaQuoteLeft />,
//     info: "When our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing.",
//     clientImg: "/client2.jpg",
//     clientName: "Ahmed Nazil",
//     position: "CEO",
//   },
//   {
//     icon: <FaQuoteLeft />,
//     info: "When our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing.",
//     clientImg:"/client1.jpg",
//     clientName:"Mubarrik",
//     position:"CEO"
//   },
//   {
//     icon: <FaQuoteLeft />,
//     info: "When our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing.",
//     clientImg:"/client1.jpg",
//     clientName:"Mubarrik",
//     position:"CEO"
//   },
// ];

const Client = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    dots: false,
    centerPadding: "60px",
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div id="client" className="  w-full md:w-[85%] overflow-hidden mx-auto">
      <div className=" w-full flex flex-col items-center">
        <h3 className=" text-blue-600 font-light mt-28 inline-block  tracking-wider">
          CLIENT REVIEW
        </h3>
        <div className=" max-w-[400px]">
          <h4 className="text-blue-600 leading-[1.5]  tracking-wide  font-normal text-3xl capitalize mb-2 mt-5">
            What they say about us
          </h4>
        </div>
      </div>
      <div className="   w-full    mt-10 mb-20   ">
        <Slider {...settings} className="  ">
          
          <div className=" overflow-x-hidden  mx-1  max-w-[540px] shadow-md mt-5 py-8 px-4    flex flex-col gap-4  ">
            <span className=" text-5xl text-blue-900">
              <FaQuoteLeft className=" mb-4" />
            </span>
            <p className=" text-gray-400 leading-7 text-lg italic ">
              When our power of choice is untrammelled and when nothing prevents
              our being able to do what we like best, every pleasure is to be
              welcomed and every pain avoided. But in certain circumstances and
              owing.
            </p>
            <div className=" mt-6 flex items-center gap-3 ">
              <Image
                src={'/client1.jpg'}
                alt="img"
                width={50}
                height={50}
                className=" w-[20] h-[20] rounded-full"
              />
              <div>
                <p className=" text-blue-900 text-lg font-semibold">
                Tahiru Mustapaha
                </p>
                <p className=" text-gray-400 text-lg ">CEO</p>
              </div>
            </div>
          </div>
          <div className=" max-w-[550px] overflow-x-hidden mx-1    shadow-md mt-5 py-8 px-4    flex flex-col gap-4  ">
            <span className=" text-5xl text-blue-900">
              <FaQuoteLeft className=" mb-4" />
            </span>
            <p className=" text-gray-400 leading-7 text-lg italic ">
              When our power of choice is untrammelled and when nothing prevents
              our being able to do what we like best, every pleasure is to be
              welcomed and every pain avoided. But in certain circumstances and
              owing.
            </p>
            <div className=" mt-6 flex items-center gap-3 ">
              <Image
                src={'/client2.jpg'}
                alt="img"
                width={50}
                height={50}
                className=" w-[20] h-[20] rounded-full"
              />
              <div>
                <p className=" text-blue-900 text-lg font-semibold">
                Tahiru Mustapaha
                </p>
                <p className=" text-gray-400 text-lg ">CEO</p>
              </div>
            </div>
          </div>
          <div className=" max-w-[550px] overflow-x-hidden mx-1      shadow-md mt-5 py-8 px-4    flex flex-col gap-4  ">
            <span className=" text-5xl text-blue-900">
              <FaQuoteLeft className=" mb-4" />
            </span>
            <p className=" text-gray-400 leading-7 text-lg italic ">
              When our power of choice is untrammelled and when nothing prevents
              our being able to do what we like best, every pleasure is to be
              welcomed and every pain avoided. But in certain circumstances and
              owing.
            </p>
            <div className=" mt-6 flex items-center gap-3 ">
              <Image
                src={'/client1.jpg'}
                alt="img"
                width={50}
                height={50}
                className=" w-[20] h-[20] rounded-full"
              />
              <div>
                <p className=" text-blue-900 text-lg font-semibold">
                Tahiru Mustapaha
                </p>
                <p className=" text-gray-400 text-lg ">CEO</p>
              </div>
            </div>
          </div>
        
          
        </Slider>
      </div>
    </div>
  );
};

export default Client;
