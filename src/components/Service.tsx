import React from "react";
import { navData } from "./Header";
import { MdArrowRightAlt } from "react-icons/md";
const serviceData = [
  {
    img: "/serv1.png",
    active:true,
    title: "Office Cleaning",
    desc: "I will give you a complete account of the system, and expound the actual teach of the great way.",
    btnText: "Learn More",
    btnIcon: <MdArrowRightAlt />,
  },
  {
    img: "/serv2.png",
    title: "Kitchen Cleaning",
    desc: "I will give you a complete account of the system, and expound the actual teach of the great way.",
    btnText: "Learn More",
    btnIcon: <MdArrowRightAlt />,
  },
  {
    img: "/serv3.png",
    title: "Window Cleaning",
    desc: "I will give you a complete account of the system, and expound the actual teach of the great way.",
    btnText: "Learn More",
    btnIcon: <MdArrowRightAlt />,
  },
  {
    img: "/serv4.png",
    title: "Home Cleaning",
    desc: "I will give you a complete account of the system, and expound the actual teach of the great way.",
    btnText: "Learn More",
    btnIcon: <MdArrowRightAlt />,
  },
];
const Service = () => {
  return (
    <div  id="service" className=" w-full mt-20 ">
      <div className=" flex flex-col  max-w-[450px] mx-auto  mt-5 items-center justify-between">
        <img src="/service.png" alt="img" className=" mt-10 mb-10" />
        <h3 className=" text-blue-600 font-light tracking-wider">
          WHAT WE OFFER
        </h3>
        <div>
          <h4 className="text-blue-600 text-center font-medium text-3xl capitalize mt-10">
            Over 30+ Years of experience in cleaning service
          </h4>
        </div>
      </div>
      <div className=" w-[80%] mx-auto mt-32  flex items-center gap-6  ">
        {serviceData.map((servBox) => (
          <div key={servBox.title} className={ servBox.active == true ?`w-full px-5 hover:border-none shadow-lg duration-200 py-4  rounded-md  `:  `w-full px-5 hover:border-none hover:shadow-lg duration-200 py-4 border-[1px] rounded-md  border-gray-200`}>
            <img src={servBox.img} alt="img" className=" mb-8 mt-4 w-14" />
            <h3 className=" text-blue-800 font-medium text-lg mb-6">{servBox.title}</h3>
            <p className=" text-lg mb-6 text-gray-500 leading-8">{servBox.desc}</p>
            <button className=" cursor-pointer text-base mb-6 flex items-center gap-1 text-blue-800">
              {servBox.btnText} <span className=" text-xl font-extrabold"> {servBox.btnIcon}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
