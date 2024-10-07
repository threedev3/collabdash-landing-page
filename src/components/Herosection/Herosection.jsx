import React from "react";
import Navbar from "../Navbar/Navbar";
import { heroLaptop } from "../../assets/img/images";

const Herosection = () => {
  return (
    <div className="relative px-20 py-12 h-screen overflow-hidden">
      {/* <div className="absolute inset-0 px-20 py-10 bg-gradient-to-b from-purpleGrad via-transparent to-transparent h-screen "> */}
      <div className="absolute inset-0  bg-gradient-to-b from-heroColor via-transparent to-transparent opacity-30 h-screen -z-10"></div>
      {/* <div className="absolute inset-0  bg-gradient-to-b from-purpleGrad via-transparent to-transparent opacity-40 h-screen -z-10"></div> */}
      <div className="absolute inset-0 bg-[url('/src/assets/img/purpleShade.png')] bg-no-repeat bg-cover h-screen w-full -z-10"></div>
      <div className="max-w-[90%] mx-auto flex flex-col gap-12">
        <Navbar />

        <div className="flex flex-row justify-between mt-24 ">
          <div className="absolute bottom-16 left-0 right-0 bg-[url('/src/assets/img/heroBg.png')] bg-no-repeat bg-cover h-[635px] w-full -z-10"></div>
          <div className="flex flex-col gap-10 max-w-4xl ">
            <div>
              <h3 className="text-[64px] leading-tight font-outfit-bold text-white tracking-wide">
                One Platform to Manage{" "}
                <span className="text-heroColor">Your Team’s Time</span>
              </h3>
            </div>
            <div className="max-w-3xl">
              <p className="text-xl text-navigationText opacity-80 font-montserrat ">
                "Stop wasting time and money juggling multiple tools. CollabDash
                is your all-in-one solution, empowering your team to stay
                productive and connected—without the hassle of managing multiple
                subscriptions."
              </p>
            </div>

            <div>
              <button className="py-3 px-6 bg-heroColor text-white rounded-full text-lg font-montserrat">
                Start your 14-Day Free Trial today
              </button>
            </div>
          </div>

          <div className="absolute top-48 right-0">
            <img
              src={heroLaptop}
              alt=""
              className="w-[1007px] h-[635px] object-cover"
            />
          </div>
        </div>
      </div>
      {/* </div> */}

      <div className="bg-black border-t-2 border-b-2 border-gray-600 w-full absolute bottom-12 left-0 right-0 flex flex-row whitespace-nowrap overflow-x-auto overflow-y-hidden no-scrollbar px-6 py-6 transform rotate-3">
        <div className="flex animate-marquee-ltr">
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex items-center mr-8 text-white font-outfit text-2xl "
              >
                LET&apos;S CREATE EXTRA ORDINARY
                <span className="inline-block w-8 h-8 border-2 border-white transform rotate-45 mx-8"></span>
              </div>
            ))}
        </div>
      </div>
      <div className="bg-black border-t-2 border-b-2 border-gray-600 w-full absolute bottom-12 left-0 right-0 flex flex-row whitespace-nowrap overflow-x-auto overflow-y-hidden no-scrollbar px-6 py-6 transform -rotate-3">
        <div className="flex animate-marquee-rtl">
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex items-center mr-8 text-white font-outfit text-2xl "
              >
                LET&apos;S CREATE EXTRA ORDINARY
                <span className="inline-block w-8 h-8 border-2 border-white transform rotate-45 mx-8"></span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Herosection;
