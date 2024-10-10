import React from "react";
import { trialIcon, priceIcon } from "../../assets/img/images";
import { CheckIcon } from "@heroicons/react/20/solid";

const Pricing = () => {
  const pricing = [
    {
      icon: trialIcon,
      title: "14-Day Free Trial",
      tagLine: "Start using CollabDash today",
      checkPoints: ["With no obligation", "No credit card required."],
    },
    {
      icon: priceIcon,
      title: "Affordable Pricing Plans",
      tagLine: "We’re committed to transparent pricing",
      checkPoints: [
        "Pay just $XX per user per month.",
        "No hidden fees, no confusing limits.",
      ],
    },
  ];

  return (
    <div className="relative px-4 sm:px-6 py-8 sm:py-16 ">
      <div className="absolute md:top-20 left-0 bg-[url('/src/assets/img/pricingImg.png')] bg-no-repeat bg-contain lg:w-[400px] md:w-[700px] min-[540px]:w-[550px] w-[350px] h-[600px] -z-10 opacity-80"></div>

      <div className="absolute lg:-top-14 top-20 left-0 right-0 bottom-0 bg-[url('/src/assets/img/pricingBg.png')] bg-no-repeat bg-cover opacity-90 w-full h-[95%] -z-10"></div>

      <div className="min-[1400px]:max-w-[90%] max-w-[94%] mx-auto ">
        <div className="flex flex-col md:gap-10 gap-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-outfit text-[26px] min-[540px]:text-3xl sm:text-4xl md:text-5xl  leading-tight text-white text-center font-medium">
              A Cost-Effective{" "}
              <span className="text-heroColor font-outfit-bold">Solution</span>{" "}
              Built for Start-ups and Small Teams
            </h3>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="font-outfit text-white/80 text-center text-lg">
              Unlike other platforms that charge for each additional feature,
              CollabDash offers one simple, affordable price for everything.
              Stop wasting money on separate subscriptions for time tracking,
              communication, project management, and video conferencing.
            </p>
          </div>

          <div className="w-full mt-4 md:px-12">
            <div className="grid md:grid-cols-[1fr_0.1fr_1fr] grid-cols-1 gap-3">
              {/* First Card */}

              <div className="flex flex-col gap-4 items-start w-full p-6 bg-transparent h-full custom-border">
                <div className="flex flex-col justify-center items-center gap-4">
                  <div>
                    <img
                      src={pricing[0].icon}
                      alt="trialIcon"
                      className="lg:w-auto w-16 object-contain"
                    />
                  </div>
                  <div className="h-1 w-14 bg-heroColor rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-white lg:text-2xl text-xl font-outfit font-semibold">
                    {pricing[0].title}
                  </h3>
                </div>
                <div>
                  <p className="text-white/60 lg:text-lg text-base font-outfit lg:min-h-0 md:min-h-[60px]">
                    {pricing[0].tagLine}
                  </p>
                </div>
                {pricing[0].checkPoints.map((item, index) => (
                  <div className="flex gap-4 items-center" key={index}>
                    <div className="p-0.5 bg-white rounded-md">
                      <CheckIcon color="black" width={20} fontWeight={800} />
                    </div>
                    <p className="text-white font-outfit lg:text-lg text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Separator */}
              <div className="h-auto w-0.5 bg-white/30 rounded-full mx-auto md:block hidden"></div>

              {/* Second Card */}
              <div className="flex flex-col gap-4 items-start w-full p-6 bg-transparent h-full custom-border">
                <div className="flex flex-col justify-center items-center gap-4">
                  <div>
                    <img
                      src={pricing[1].icon}
                      alt="priceIcon"
                      className="lg:w-auto w-16 object-contain"
                    />
                  </div>
                  <div className="h-1 w-14 bg-heroColor rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-white lg:text-2xl text-xl font-outfit font-semibold">
                    {pricing[1].title}
                  </h3>
                </div>
                <div>
                  <p className="text-white/60 lg:text-lg text-base font-outfit lg:min-h-0 md:min-h-[52px]">
                    {pricing[1].tagLine}
                  </p>
                </div>
                {pricing[1].checkPoints.map((item, index) => (
                  <div className="flex gap-4 items-center" key={index}>
                    <div className="p-0.5 bg-white rounded-md">
                      <CheckIcon color="black" width={20} fontWeight={800} />
                    </div>
                    <p className="text-white font-outfit lg:text-lg text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-0.5 w-full bg-white/30 rounded-full  mt-16"></div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
