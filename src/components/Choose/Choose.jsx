import React from "react";
import { chooseImg, chooseImg2 } from "../../assets/img/images";
import { CheckIcon } from "@heroicons/react/20/solid";

const Choose = () => {
  const choose = [
    "Unlimited video meetings for all users.",
    "Full access to time tracking, leave management, and productivity tools.",
    "Secure, built-in team chat—no need for Slack.",
    "Collaborative Kanban-style boards for project management.",
    "24/7 support to ensure your team never hits a roadblock.",
  ];

  return (
    <div className="relative px-4 sm:px-6 py-8 lg:py-4 xl:py-0 xl:h-[100vh]">
      <div className="absolute min-[1400px]:-top-80 xl:-top-36 lg:-top-16 top-36 left-0 right-0 bottom-0 bg-[url('/src/assets/img/chooseBg.png')] bg-no-repeat lg:bg-cover bg-cover opacity-70 w-full -z-30 "></div>
      <div className="bg-black/20 w-full h-full absolute left-0 right-0 -z-20"></div>
      {/* <div className="absolute min-[1500px]:-top-10 xl:top-10 top-8 left-0 right-0 bottom-0 bg-[url('/src/assets/img/chooseBg3.png')] bg-no-repeat bg-contain w-full -z-10"></div> */}
      <div className="absolute -top-6 left-0 h-[230px] w-full bg-black/95 blur-2xl -z-10"></div>

      <div className="min-[1400px]:max-w-[90%] max-w-[94%] mx-auto relative z-10">
        <div className="flex flex-col md:gap-10 gap-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-outfit text-[26px] min-[540px]:text-3xl sm:text-4xl md:text-5xl  leading-tight text-white text-center font-medium">
              Why Choose{" "}
              <span className="text-heroColor font-outfit-bold">
                CollabDash?
              </span>{" "}
            </h3>
          </div>

          <div className="flex md:gap-4 gap-2 items-center lg:flex-row flex-col flex-wrap justify-center md:max-w-7xl md:mx-auto">
            {choose.map((item, index) => (
              <div className="flex md:gap-3 gap-2 items-center justify-center">
                <div className="p-0.5  bg-heroColor rounded-md md:block hidden">
                  <CheckIcon
                    color="black"
                    className="xl:w-5 md:w-4 w-3"
                    fontWeight={800}
                  />
                </div>
                <div>
                  <p className="font-outfit xl:text-lg md:text-base min-[540px]:text-sm text-xs text-white md:text-start text-center">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="min-[1400px]:mt-8">
            <img
              src={chooseImg2}
              alt=""
              className="min-[540px]:w-auto w-[800px] object-contain mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="absolute -bottom-20 left-0 xl:h-[280px] lg:h-[200px] h-[100px] w-full bg-black/100 blur-2xl -z-10"></div>
    </div>
  );
};

export default Choose;
