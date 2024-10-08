import React from "react";
import Navbar from "../Navbar/Navbar";
import { heroLaptop, smallHeroLaptop } from "../../assets/img/images";

const Herosection = () => {
  return (
    // <div className="relative px-4 py-8 md:px-6 md:py-12 h-screen overflow-hidden">
    //   <div className="absolute inset-0  bg-gradient-to-b from-heroColor via-transparent to-transparent opacity-30 h-screen -z-10"></div>
    //   <div className="absolute inset-0 bg-[url('/src/assets/img/purpleShade.png')] bg-no-repeat bg-cover h-screen w-full -z-10"></div>
    //   <div className="max-w-[94%] mx-auto flex flex-col gap-8 md:gap-12">
    //     <Navbar />

    //     <div className="flex flex-col-reverse md:flex-row md:justify-between min-[1450px]:mt-24 mt-8 md:mt-16 ">
    //       <div className="absolute bottom-16 left-0 right-0 bg-[url('/src/assets/img/heroBg.png')] bg-no-repeat bg-cover h-[400px] md:h-[500px] lg:h-[635px] w-full -z-10"></div>
    //       <div className="flex flex-col gap-6 md:gap-10 max-w-full md:max-w-2xl lg:max-w-4xl">
    //         <div>
    //           <h3 className="text-3xl md:text-5xl lg:text-[64px] leading-snug md:leading-tight lg:leading-tight font-outfit-bold text-white tracking-wide">
    //             One Platform to Manage{" "}
    //             <span className="text-heroColor">Your Team’s Time</span>
    //           </h3>
    //         </div>
    //         <div className="max-w-full md:max-w-3xl">
    //           <p className="text-base md:text-lg lg:text-xl text-navigationText opacity-80 font-montserrat">
    //             "Stop wasting time and money juggling multiple tools. CollabDash
    //             is your all-in-one solution, empowering your team to stay
    //             productive and connected—without the hassle of managing multiple
    //             subscriptions."
    //           </p>
    //         </div>

    //         <div>
    //           <button className="py-2 md:py-3 px-4 md:px-6 bg-heroColor text-white rounded-full text-base md:text-lg font-montserrat">
    //             Start your 14-Day Free Trial today
    //           </button>
    //         </div>
    //       </div>

    //       <div className="flex justify-center md:justify-end mt-8 md:mt-0 md:absolute md:min-[1450px]:top-48 md:top-36 right-0 w-full md:w-auto">
    //         <img
    //           src={heroLaptop}
    //           alt="Laptop showing the app"
    //           className="w-full md:w-[60%] lg:w-[50%] xl:w-[100%] object-contain"
    //         />
    //       </div>
    //     </div>
    //   </div>

    // <div className="bg-black border-t-2 border-b-2 border-gray-600 w-full absolute bottom-12 left-0 right-0 flex flex-row whitespace-nowrap overflow-x-auto overflow-y-hidden no-scrollbar px-6 py-6 transform rotate-3">
    //     <div className="flex animate-marquee-ltr">
    //       {Array(2)
    //         .fill(null)
    //         .map((_, duplicateIndex) => (
    //           <div className="flex" key={duplicateIndex}>
    //             {Array(10)
    //               .fill(null)
    //               .map((_, index) => (
    //                 <div
    //                   key={index}
    //                   className="flex items-center mr-8 text-white font-outfit text-2xl"
    //                 >
    //                   LET&apos;S CREATE EXTRAORDINARY
    //                   <span className="inline-block w-8 h-8 border-2 border-white transform rotate-45 mx-8"></span>
    //                 </div>
    //               ))}
    //           </div>
    //         ))}
    //     </div>
    //   </div>
    //   <div className="bg-black border-t-2 border-b-2 border-gray-600 w-full absolute bottom-12 left-0 right-0 flex flex-row whitespace-nowrap overflow-x-auto overflow-y-hidden no-scrollbar px-6 py-6 transform -rotate-3">
    //     <div className="flex animate-marquee-rtl">
    //       {Array(2)
    //         .fill(null)
    //         .map((_, duplicateIndex) => (
    //           <div className="flex" key={duplicateIndex}>
    //             {Array(10)
    //               .fill(null)
    //               .map((_, index) => (
    //                 <div
    //                   key={index}
    //                   className="flex items-center mr-8 text-white font-outfit text-2xl"
    //                 >
    //                   LET&apos;S CREATE EXTRAORDINARY
    //                   <span className="inline-block w-8 h-8 border-2 border-white transform rotate-45 mx-8"></span>
    //                 </div>
    //               ))}
    //           </div>
    //         ))}
    //     </div>
    //   </div>
    // </div>

    <div className="relative px-4 sm:px-6 py-8 sm:py-12 min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-heroColor via-transparent to-transparent opacity-30 -z-10"></div>
      <div className="absolute inset-0 bg-[url('/src/assets/img/purpleShade.png')] bg-no-repeat bg-cover w-full -z-10"></div>
      <div className="min-[1400px]:max-w-[90%] max-w-[94%] mx-auto flex flex-col gap-8 sm:gap-12">
        <Navbar />

        <div className="flex flex-col justify-center lg:flex-row lg:justify-between lg:items-center xl:h-[70vh] h-[60vh] lg:mt-0 sm:mt-10 mt-6">
          <div className="absolute min-[1400px]:-bottom-10 xl:-bottom-10 -bottom-20 left-0 right-0 bg-[url('/src/assets/img/heroBg.png')] bg-no-repeat bg-cover h-[90vh] opacity-50 w-full -z-10"></div>
          <div className="flex flex-col gap-4 sm:gap-6 min-[1560px]:max-w-4xl xl:max-w-3xl lg:max-w-2xl text-center lg:text-left">
            <div>
              <h3 className="text-[26px] min-[540px]:text-3xl sm:text-4xl md:text-5xl xl:text-6xl min-[1560px]:text-7xl leading-tight font-outfit-bold text-white tracking-wide">
                One Platform to Manage{" "}
                <span className="text-heroColor">Your Team’s Time</span>
              </h3>
            </div>
            <div className="xl:max-w-3xl lg:max-w-xl mx-auto lg:mx-0">
              <p className="text-sm sm:text-base xl:text-xl text-navigationText opacity-80 font-montserrat">
                "Stop wasting time and money juggling multiple tools. CollabDash
                is your all-in-one solution, empowering your team to stay
                productive and connected—without the hassle of managing multiple
                subscriptions."
              </p>
            </div>

            <div>
              <button className="py-2 lg:py-3 px-4 sm:px-6 bg-heroColor text-white rounded-full text-sm sm:text-lg font-montserrat hover:bg-opacity-90 transition-colors duration-300">
                Start your 14-Day Free Trial today
              </button>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:absolute lg:right-0  min-[1060px]:top-52 min-[1400px]:top-48 lg:block hidden">
            <img
              src={heroLaptop}
              alt="Hero Laptop"
              className="w-full max-w-lg min-[1060px]:max-w-xl min-[1400px]:max-w-3xl  object-contain"
            />
          </div>
          <div className="lg:hidden flex justify-center ">
            <img
              src={smallHeroLaptop}
              alt="Hero Laptop"
              className="w-full sm:max-w-xl max-w-md object-contain"
            />
          </div>
        </div>
      </div>
      {/* <div className="bg-black border-t-2 border-b-2 border-gray-600 w-full absolute min-[1400px]:bottom-12 xl:bottom-8 bottom-6 left-0 right-0 flex flex-row whitespace-nowrap overflow-x-auto overflow-y-hidden no-scrollbar px-6 py-4 min-[1400px]:py-6 transform rotate-3">
        <div className="flex animate-marquee-ltr">
          {Array(2)
            .fill(null)
            .map((_, duplicateIndex) => (
              <div className="flex" key={duplicateIndex}>
                {Array(10)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center mr-8 text-white font-outfit text-2xl"
                    >
                      LET&apos;S CREATE EXTRAORDINARY
                      <span className="inline-block w-8 h-8 border-2 border-white transform rotate-45 mx-8"></span>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>
      <div className="bg-black border-t-2 border-b-2 border-gray-600 w-full absolute bottom-12 left-0 right-0 flex flex-row whitespace-nowrap overflow-x-auto overflow-y-hidden no-scrollbar px-6 py-4 min-[1400px]:py-6 transform -rotate-3">
        <div className="flex animate-marquee-rtl">
          {Array(2)
            .fill(null)
            .map((_, duplicateIndex) => (
              <div className="flex" key={duplicateIndex}>
                {Array(10)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center mr-8 text-white font-outfit text-2xl"
                    >
                      LET&apos;S CREATE EXTRAORDINARY
                      <span className="inline-block w-8 h-8 border-2 border-white transform rotate-45 mx-8"></span>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div> */}
      <div className="bg-black border-t-2 border-b-2 border-gray-600 w-full absolute min-[1400px]:bottom-12 xl:bottom-12 lg:bottom-6 md:bottom-20 bottom-8 left-0 right-0 flex flex-row whitespace-nowrap overflow-hidden no-scrollbar px-6 md:py-6 py-4 lg:py-4 min-[1400px]:py-6 transform lg:rotate-3 rotate-6">
        {/* <div className="flex animate-marquee-ltr"> */}
        <div className="flex">
          {Array(2)
            .fill(null)
            .map((_, duplicateIndex) => (
              <div className="flex" key={duplicateIndex}>
                {Array(10)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center text-white font-outfit text-md sm:text-xl md:text-2xl"
                    >
                      LET&apos;S CREATE EXTRAORDINARY
                      <span className="inline-block sm:w-6 w-4 sm:h-6 h-4 md:w-8 md:h-8 border-2 border-white transform rotate-45 mx-4 md:mx-8"></span>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>

      <div className="bg-black border-t-2 border-b-2 border-gray-600 w-full absolute min-[1400px]:bottom-12 xl:bottom-12 lg:bottom-6 md:bottom-20 bottom-8 left-0 right-0 flex flex-row whitespace-nowrap overflow-hidden no-scrollbar px-6 md:py-6 py-4 lg:py-4 min-[1400px]:py-6 transform lg:-rotate-3 -rotate-6">
        {/* <div className="flex animate-marquee-rtl"> */}
        <div className="flex">
          {Array(2)
            .fill(null)
            .map((_, duplicateIndex) => (
              <div className="flex" key={duplicateIndex}>
                {Array(10)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center text-white font-outfit text-md sm:text-xl md:text-2xl"
                    >
                      LET&apos;S CREATE EXTRAORDINARY
                      <span className="inline-block sm:w-6 w-4 sm:h-6 h-4 md:w-8 md:h-8 border-2 border-white transform rotate-45 mx-4 md:mx-8"></span>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Herosection;
