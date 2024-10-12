import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { heroImg, smallHeroImg } from "../../assets/img/images";

const Herosection = () => {
  // const words = ["Team's Time", "Collaboration", "Projects"];
  const words = [
    "Time Tracking",
    "Projects",
    "Video Calls",
    "Team Chats",
    "Workflows",
  ];
  const [currentWord, setCurrentWord] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 500); // Transition time
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative px-4 sm:px-6 py-8 sm:py-12 min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-heroColor via-transparent to-transparent opacity-30 -z-10"></div>
      <div className="absolute inset-0 bg-[url('/src/assets/img/purpleShade.png')] bg-no-repeat bg-cover w-full -z-10"></div>
      <div className="min-[1400px]:max-w-[90%] max-w-[94%] mx-auto flex flex-col gap-8 xl:gap-12">
        <Navbar />

        <div className="flex flex-col justify-around items-center lg:flex-row lg:justify-between lg:items-center xl:h-[70vh] h-[70vh] lg:mt-0 sm:mt-10 mt-6">
          <div className="absolute min-[1400px]:-bottom-10 xl:-bottom-10 -bottom-20 left-0 right-0 bg-[url('/src/assets/img/heroBg.png')] bg-no-repeat bg-cover h-[100vh] opacity-50 w-full -z-10"></div>
          <div className="flex flex-col gap-4 sm:gap-6 min-[1560px]:max-w-4xl xl:max-w-3xl lg:max-w-xl sm:text-center lg:text-left">
            <div>
              {/* <h3 className="text-[26px] min-[540px]:text-3xl sm:text-4xl md:text-5xl xl:text-[56px] xl:leading-tight min-[1560px]:text-7xl leading-tight font-outfit-bold text-white tracking-wide lg:text-start sm:text-center">
                One Platform to Manage{" "}
                <span className="text-heroColor">
                  Your{" "}
                  <span
                    className={`word-transition ${
                      isAnimating ? "slide-out" : "slide-in"
                    }`}
                  >
                    {words[currentWord]}
                  </span>
                </span>
              </h3> */}
              <h3 className="text-[26px] min-[540px]:text-3xl sm:text-4xl md:text-5xl xl:text-[56px] xl:leading-tight min-[1560px]:text-7xl leading-tight font-outfit-bold text-white tracking-wide lg:text-start sm:text-center">
                One Platform to Manage Your{" "}
                <span className="text-heroColor">
                  <span
                    className={`word-transition ${
                      isAnimating ? "slide-out" : "slide-in"
                    }`}
                  >
                    {words[currentWord]}
                  </span>
                </span>
              </h3>
            </div>
            <div className="min-[1400px]:max-w-3xl xl:max-w-2xl lg:max-w-xl mx-auto lg:mx-0 ">
              <p className="text-base sm:text-xl lg:text-xl xl:text-2xl min-[1400px]:text-[28px] text-white opacity-80 font-outfit">
                Stop wasting time and money juggling multiple tools. CollabDash
                is your all-in-one solution, empowering your team to stay
                productive and connected—without the hassle of managing multiple
                subscriptions
              </p>
            </div>

            <div>
              <button
                className="py-2 lg:py-2 px-4 sm:px-12 capitalize bg-heroColor text-white rounded-full text-sm sm:text-xl font-bold font-outfit hover:bg-opacity-90 transition-colors duration-300"
                onClick={() => handleScroll("contact-us")}
              >
                Start your 14-day trial
              </button>
            </div>
          </div>

          {/* <div className="mt-8 lg:mt-0 lg:absolute lg:right-0  min-[1060px]:top-52 min-[1400px]:top-48 lg:block hidden"> */}
          <div className="mt-8 lg:mt-0 lg:block hidden">
            <img
              src={heroImg}
              alt="Hero Laptop"
              className="w-full absolute min-[1486px]:top-[10%] xl:top-[10%] top-[22%] right-0 max-w-[600px] xl:max-w-[850px] min-[1486px]:max-w-5xl  object-contain"
            />
          </div>
          <div className="lg:hidden flex justify-center mt-8">
            <img
              src={smallHeroImg}
              alt="Hero Laptop"
              className="w-auto object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
