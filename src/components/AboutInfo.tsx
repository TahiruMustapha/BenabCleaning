import React from "react";
import { navData } from "./Header";
import { MdArrowRightAlt } from "react-icons/md";
const aboutInfoData = [
  {
    img: "/about4.jpg",
    active: true,
    title: "Office Cleaning",
    desc: "I will give you a complete account of the system, and expound the actual teach of the great way.",
    btnText: "Learn More",
    btnIcon: <MdArrowRightAlt />,
  },
  {
    img: "/about5.jpg",
    title: "Kitchen Cleaning",
    desc: "I will give you a complete account of the system, and expound the actual teach of the great way.",
    btnText: "Learn More",
    btnIcon: <MdArrowRightAlt />,
  },
  {
    img: "/about22.jpg",
    title: "Window Cleaning",
    desc: "I will give you a complete account of the system, and expound the actual teach of the great way.",
    btnText: "Learn More",
    btnIcon: <MdArrowRightAlt />,
  },
  {
    img: "/about33.jpg",
    title: "Home Cleaning",
    desc: "I will give you a complete account of the system, and expound the actual teach of the great way.",
    btnText: "Learn More",
    btnIcon: <MdArrowRightAlt />,
  },
];
const AboutInfo = () => {
  return (
    <div id={"/about"} className=" w-full mt-20 ">
      <div className=" flex flex-col  max-w-[480px] mx-auto  mt-5 items-center justify-between">
        <img src="/service.png" alt="img" className=" mt-10 mb-10" />
        <h3 className=" text-blue-600 font-light tracking-wider">WHAT WE DO</h3>
        <div>
          <h4 className="text-blue-600 leading-[1.5] tracking-wide text-center font-medium text-3xl capitalize mt-10">
            We give professional experience offer in cleaning service
          </h4>
        </div>
      </div>
      <div className=" w-full p-3 md:w-[80%] mx-auto mt-10 md:mt-32 md:flex items-center gap-6  ">
        {aboutInfoData.map((servBox) => (
          <div
            key={servBox.title}
            className={`w-full border-[0.5px] border-gray-50   text-center shadow-lg duration-200   rounded-md `}
          >
            <img src={servBox.img} alt="img" className=" w-full" />

            <h3 className=" text-blue-800 pt-6 font-medium text-lg mb-6">
              {servBox.title}
            </h3>
            <p className=" text-lg mb-6 px-3 text-gray-500 leading-8">
              {servBox.desc}
            </p>
            <button className=" cursor-pointer text-base mb-6 mx-auto  flex items-center gap-1 text-blue-800">
              {servBox.btnText}{" "}
              <span className=" text-xl font-extrabold">
                {" "}
                {servBox.btnIcon}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutInfo;
