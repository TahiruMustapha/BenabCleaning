import React from "react";
import { FaFacebook, FaFacebookF, FaGoogle, FaGooglePlusG } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
const teamData = [
  {
    img: "/team1.jpg",
    name: "Mrs. Aziz",
    role: "Home Cleaner",
  },
  {
    img: "/team2.jpg",
    name: "Mrs. Rahman",
    role: "House Cleaner",
  },
  {
    img: "/team3.jpg",
    name: "Mrs. Bari",
    role: "Home Cleaner",
  },
  {
    img: "/team4.jpg",
    name: "Mrs. Tahiru",
    role: "House Cleaner",
  },
];
const Team = () => {
  return (
    <div id="team" className=" w-full">
      <div className=" flex flex-col  max-w-[480px] mx-auto  mt-5 items-center justify-between">
        <img src="/service.png" alt="img" className=" mt-10 mb-10" />
        <h3 className=" text-blue-600 font-light tracking-wider">
          OUR MEMBERS
        </h3>
        <div>
          <h4 className="text-blue-600 leading-[1.5]  tracking-wide text-center font-normal text-3xl capitalize mt-10">
            We have members with experience in cleanning
          </h4>
        </div>
      </div>
      <div className=" w-full  md:w-[80%] mx-auto md:mt-20 mt-10 gap-6 h-full md:h-[70vh] flex justify-center flex-col md:flex-row  items-center">
        {teamData.map((team) => (
          <div key={team.name} className=" relative group w-full h-full p-2 md:p-0">
            <div  className="">
              <img
                src={team.img}
                alt="img"
                className=" rounded-md object-cover w-full  "
              />
            </div>
            <div className=" hidden  group-hover:inline-flex flex-col px-3 py-4 items-center justify-center gap-5 absolute text-white  w-[70%] mx-auto top-[64.5%] z-50 left-[15%] right-[25%] md:top-[52%] md:left-[15%] md:right-[20%] bg-blue-900 ">
              <p className=" text-lg font-semibold">{team.name}</p>
              <p>{team.role}</p>
              <p className=" flex w-full cursor-pointer items-center justify-center gap-2">
                <span className=" w-8 h-8 rounded-full bg-white text-blue-900 flex items-center justify-center">
                  <FaFacebookF className=" font-semibold" />
                </span>
                <span className=" w-8 h-8 rounded-full bg-white text-blue-900 flex items-center justify-center">
                  <FaX className=" font-semibold" />
                </span>
                <span className=" w-8 h-8 rounded-full bg-white text-blue-900 flex items-center justify-center">
                <FaGooglePlusG className=" font-semibold"/>
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
