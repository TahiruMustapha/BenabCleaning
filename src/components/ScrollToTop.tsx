"use client";
import React, { useEffect } from "react";
import { TbChevronRight } from "react-icons/tb";

const ScrollToTop = () => {
  useEffect(() => {
    const scrollBtn = document.querySelector(".scrollBt") as HTMLElement;
    window.onscroll = () => {
      scrollToFunction();
    };
    const scrollToFunction = () => {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        scrollBtn!.style.display = "block";
      } else {
        scrollBtn!.style.display = "none";
      }
    };
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    scrollBtn?.addEventListener("click", () => {
      scrollToTop();
    });
  },[]);
  return (
    <div className=" w-14 h-14 z-50 hidden teext-3xl fixed top-[85vh] right-3 bg-blue-900 text-gray-200  hover:text-white rounded-full border-[1px] border-yellow-400 shadow-cardShadwo scrollBt hover:border-yellow-400 duration-300">
      <button className=" w-full h-full flex items-center justify-center relative -rotate-90">
        {" "}
        <TbChevronRight className=" text-xl" />{" "}
      </button>
    </div>
  );
};

export default ScrollToTop;
