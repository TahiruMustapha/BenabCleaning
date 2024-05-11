import Image from "next/image";
import React from "react";
import { FaUser } from "react-icons/fa6";
import { MdAccessTimeFilled, MdKeyboardArrowRight } from "react-icons/md";
const blogData = [
  {
    img: "/blog1.jpg",
    cleaningType: "Carpet Cleaning",
    timeIcon: <MdAccessTimeFilled />,
    time: "8-May-2024",
    how: "How to hire a carpet clean home service..",
    userIcon: <FaUser />,
    userName: "Al-Hamid",
    post: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum hic officia quaerat sapiente, vitae.",
    readMore: "Read More",
    readMoreIcon: <MdKeyboardArrowRight />,
  },
  {
    img: "/blog2.jpg",
    cleaningType: "Carpet Cleaning",
    timeIcon: <MdAccessTimeFilled />,
    time: "8-May-2024",
    how: "How to hire a carpet clean home service..",
    userIcon: <FaUser />,
    userName: "Al-Hamid",
    post: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum hic officia quaerat sapiente, vitae.",
    readMore: "Read More",
    readMoreIcon: <MdKeyboardArrowRight />,
  },
  {
    img: "/blog3.jpg",
    cleaningType: "Carpet Cleaning",
    timeIcon: <MdAccessTimeFilled />,
    time: "8-May-2024",
    how: "How to hire a carpet clean home service..",
    userIcon: <FaUser />,
    userName: "Al-Hamid",
    post: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum hic officia quaerat sapiente, vitae.",
    readMore: "Read More",
    readMoreIcon: <MdKeyboardArrowRight />,
  },
];
const Blog = () => {
  return (
    <div id="blog" className="  mt-20 mb-20 h-full">
      <div className=" flex flex-col  max-w-[480px] mx-auto  mt-5 items-center justify-between">
        <h3 className=" text-blue-600 font-light tracking-wider">BLOG</h3>
        <div>
          <h4 className="text-blue-900 leading-[1.5]  tracking-wide text-center font-normal text-3xl capitalize mt-5">
            Recent News
          </h4>
        </div>
      </div>
      <div className=" h-full  flex  px-2 py-2 flex-col md:flex-row gap-6  mt-20 w-full md:w-[85%] mx-auto ">
        {blogData.map((blogItem) => (
          <div className=" w-full md:w-[600px]  bg-blue-50 pb-6 ">
            <img src={blogItem.img} alt="img"   className=" w-full object-cover" />
          <div className=" mt-6 px-6">
              <div className=" flex items-center gap-4">
                <p className=" text-blue-800 bg-yellow-300 px-1 py-2 rounded-md">{blogItem.cleaningType}</p>
                <p className=" flex items-center gap-1 text-blue-800"> <span className=" text-blue-800 ">{blogItem.timeIcon}</span> {blogItem.time}</p>
              </div>
              <p className=" text-blue-900 mt-6 text-xl capitalize font-medium tracking-wide" >{blogItem.how}</p>
              <p className=" text-blue-900 mt-6 flex items-center gap-4 text-lg"> <span>{blogItem.userIcon}</span> By {blogItem.userName}</p>

              <p className=" mt-6  w-full text-left text-blue-900 leading-7">{blogItem.post}</p>
              <p className=" mt-6 text-blue-900 flex items-center gap-1 cursor-pointer">{blogItem.readMore} <span className=" text-xl font-semibold">{blogItem.readMoreIcon}</span></p>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
