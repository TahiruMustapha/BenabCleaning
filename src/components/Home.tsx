import React from 'react'
import GetStarted from './GetStarted'
import PlayBtn from './PlayBtn'
import Slider from "react-slick";

const Home = () => {
    const settings = {
        infinite: true,
    
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        arrows: false,
        autoplaySpeed: 2000,
      };
  return (
    <div className='  h-[100vh]'>
       <Slider {...settings} className=" ">
        <div className=" relative">
          <img
            src={"/cln1.jpg"}
            alt="image"
            className=" w-full h-[100vh]  object-cover"
          />
          <div className="  max-w-[650px] top-40   left-10  absolute ">
            <h3 className=" text-xl  font-bold text-white">
              WE ARE CLEANING EXPERT
            </h3>
            <h2 className=" mt-8 text-5xl leading-tight text-white capitalize font-bold">
              We have the best cleaning services offering in Ghana
            </h2>
            <p className=" mt-8  leading-tight  text-white font-medium text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              sapiente animi amet veritatis non corrupti itaque molestiae,
              magni, minus, doloribus eius.
            </p>
            <div className=" mt-8 flex  gap-4 w-ful items-center ">
              <GetStarted />
              <PlayBtn />
            </div>
          </div>
        </div>
        <div className=" relative">
          <img
            src={"/cln4.jpg"}
            alt="image"
            className=" w-full h-[100vh]  object-cover"
          />
          <div className="  max-w-[650px] top-40 left-[10%] absolute ">
            <h3 className=" text-xl font-bold text-white">
            CLEANING SERVICE
            </h3>
            <h2 className=" mt-8 text-5xl leading-tight text-white capitalize font-bold">
              We have the best cleaning services offering in Ghana
            </h2>
            <p className=" mt-8 leading-tight text-white font-medium text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              sapiente animi amet veritatis non corrupti itaque molestiae,
              magni, minus, doloribus eius.
            </p>
            <div className=" mt-8 flex gap-4 w-full items-center ">
              <GetStarted />
              <PlayBtn />
            </div>
          </div>
        </div>

        <div className=" relative">
          <img
            src={"/cln3.jpg"}
            alt="image"
            className=" w-full h-[100vh] mb-10 object-cover"
          />

          <div className="  max-w-[650px] top-40 right-10 absolute ">
            <h3 className=" text-xl pl-2 md:pl-0 font-bold text-white"> CLEANING SERVICE</h3>
            <h2 className=" mt-8 pl-2 md:pl-0 text-5xl leading-tight text-white capitalize font-bold">
              Do you want a personal cleaning service?
            </h2>
            <p className=" mt-8 pl-2 md:pl-0 leading-tight text-white font-medium text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              sapiente animi amet veritatis non corrupti itaque molestiae,
              magni, minus, doloribus eius.
            </p>
            <div className=" mt-8 pl-2 md:pl-0 flex gap-4 w-ful items-center justify-end ">
              <GetStarted />
              <PlayBtn />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Home
