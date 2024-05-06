import Image from "next/image";
import React from "react";
import Call from "./Call";

const priceData = [
  {
    img: "/serv1.png",
    title: "BASIC",
    price: "30.99",
    services: [
      "4 Home Cleaning",
      "2 Bedroom Cleaning",
      "2 Bathroom Cleaning",
      "2 Mirror Cleaning",
    ],
  },
  {
    img: "/serv2.png",
    title: "PREMIUM",
    price: "60.99",
    featured: "Featured",
    services: [
      "4 Home Cleaning",
      "2 Bedroom Cleaning",
      "2 Bathroom Cleaning",
      "2 Mirror Cleaning",
    ],
  },
  {
    img: "/serv3.png",
    title: "STANDARD",
    price: "70.99",
    services: [
      "4 Home Cleaning",
      "2 Bedroom Cleaning",
      "2 Bathroom Cleaning",
      "2 Mirror Cleaning",
    ],
  },
];

const Pricing = () => {
  return (
    <div id="pricing" className=" w-full pl-2 md:px-0  md:w-[80%] mx-auto">
      <div className=" w-full   mx-auto flex flex-col items-center justify-center       ">
        <h3 className=" text-blue-600 font-light mt-28 inline-block  tracking-wider">
          PRICING
        </h3>
        <div className=" max-w-[400px]">
          <h4 className="text-blue-600 leading-[1.5]  tracking-wide  font-normal text-2xl md:text-3xl capitalize mb-2 mt-5">
            Flexible Plans
          </h4>
        </div>
        <div className=" flex items-center mt-16  border-gray-200 border-[0.4px] px-3 py-1 rounded-md">
          <button className=" bg-red-700 rounded-md px-6 py-3 text-white">
            Monthly
          </button>
          <button className=" text-blue-800 ml-4">Yearly</button>
          <button className=" bg-blue-900 ml-1 text-white px-2 mr-5 text-sm rounded-md py-[0.10rem]">
            20% Off
          </button>
        </div>
      </div>
      <div className=" w-full md:px-0  md:w-full   flex flex-col md:flex-row items-center gap-7 mt-16">
        {priceData.map((priceInfo) => (
          <div
            className={`${
              priceInfo.featured
                ? `rounded-md relative overflow-hidden   shadow-xl duration-200 w-full  md:w-[800px] py-12 border-gray-100 border-[1px] flex flex-col gap-7  items-center  `
                : `rounded-md  hover:shadow-xl  duration-200 hover:border-none w-full  md:w-[800px] py-12 border-gray-100 border-[1px] flex flex-col gap-7  items-center  `
            }   `}
          >
            <Image src={priceInfo.img} alt="img" width={50} height={50} />
            <h3 className=" text-2xl text-blue-900">{priceInfo.title}</h3>
            <p className=" text-4xl text-blue-900 font-semibold">
              ${priceInfo.price}{" "}
              <span className=" text-gray-400 text-sm font-normal ">
                /Month
              </span>
            </p>
            <ul className=" flex flex-col gap-4 ">
              {priceInfo.services.map((serve) => (
                <li className=" text-gray-400 font-lg">{serve}</li>
              ))}
            </ul>
            {
              priceInfo.featured && ( 
                <p className="  bg-blue-900 absolute top-[0.8rem] left-[130px] rotate-45      text-white w-full text-center py-3">{priceInfo.featured}</p>

              )
            }
            <button className=" bg-blue-800 mt-6 text-white px-8 py-3 border-yellow-300 border-[4px] hover:bg-yellow-300 hover:text-blue-800 duration-300">
              Book Now
            </button>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default Pricing;
