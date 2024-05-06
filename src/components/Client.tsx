import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
const clientData = [
  {
    icon: <FaQuoteLeft />,
    info: "When our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing.",
    clientImg:"/client1.jpg",
    clientName:"Tahiru Mustapaha",
    position:"CEO"
  },
  {
    icon: <FaQuoteLeft />,
    info: "When our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing.",
    clientImg:"/client2.jpg",
    clientName:"Ahmed Nazil",
    position:"CEO"
  },
  {
    icon: <FaQuoteLeft />,
    info: "When our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing.",
    clientImg:"/client1.jpg",
    clientName:"Mubarrik",
    position:"CEO"
  },
];

const Client = () => {
    const settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        dots:true,
        arrows: false,
        autoplaySpeed: 2000,
      };
  return (
    <div id="client" className=" w-full">
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
      <div>
        {
            clientData.map((clientInfo)=>(
                <Slider {...settings}>
                   <div>
                    {clientInfo.icon}
                    <p>{clientInfo.info}</p>
                    <div className=" flex">
                        <Image src={clientInfo.clientImg} alt="img" width={40} height={40}/>
                        <div>
                            <p>{clientInfo.clientName}</p>
                            <p>{clientInfo.position}</p>
                        </div>
                    </div>
                   </div>
                </Slider>
            ))
        }
      </div>
    </div>
  );
};

export default Client;
