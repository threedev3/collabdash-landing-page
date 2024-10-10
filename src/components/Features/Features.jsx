import React, { useState } from "react";
import {
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
} from "../../assets/img/images";

const Features = () => {
  const features = [
    {
      icon: feature1,
      firstTitle: "Time & Attendance",
      secondTitle: "Management",
      description:
        "Imagine never having to chase your team for timesheets again. With CollabDash, employees clock in and out effortlessly.",
    },
    {
      icon: feature2,
      firstTitle: "Leave",
      secondTitle: "Management",
      description:
        "Managing leave requests through emails or chats can be a nightmare. How many times have you forgotten to track.",
    },
    {
      icon: feature3,
      firstTitle: "Peer-To-Peer",
      secondTitle: "Chat & Collaboration",
      description:
        "Why are you still paying for Slack when CollabDash offers the same seamless, integrated chat feature at no extra cost?",
    },
    {
      icon: feature4,
      firstTitle: "Video",
      secondTitle: "Meetings",
      description:
        "CollabDash offers you the same seamless video meeting experience as Zoom—without the hefty price tag.",
    },
    {
      icon: feature5,
      firstTitle: "Kanban Style",
      secondTitle: "Project Management",
      description:
        "CollabDash’s intuitive Kanban boards allow you to track tasks and projects with ease. Assign responsibilities.",
    },
  ];

  //   const [hovered, setHovered] = useState(false);

  return (
    <div className="relative px-4 sm:px-6 py-8 sm:py-16 min-h-[100vh]">
      <div className="absolute md:-top-44 min-[540px]:-top-28 -top-20 -left-2 bg-[url('/src/assets/img/circleFeature.png')] bg-no-repeat bg-contain lg:w-[800px] md:w-[700px] min-[540px]:w-[550px] w-[350px] h-[1000px] -z-10"></div>
      <div className="absolute lg:-top-14 top-20 left-0 right-0 bottom-0 bg-[url('/src/assets/img/featuresBg.png')] bg-no-repeat bg-cover h-[107vh] w-full -z-10"></div>
      <div className="absolute -top-6 left-0 h-[271px] w-full bg-black/95 blur-2xl -z-10"></div>
      <div className="min-[1400px]:max-w-[90%] max-w-[94%] mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 lg:mt-24 md:mt-16 mt-4">
        <div className="flex flex-col sm:gap-6 gap-3 z-20 lg:mt-10 md:mt-6 md:mb-0 mb-6">
          <div className="text-white font-outfit-bold sm:text-3xl text-2xl">
            <h3>Features Overview</h3>
          </div>
          <div className="text-white font-outfit sm:text-lg text-base sm:max-w-xs max-w-[280px]">
            <p>
              Streamline workflow, enhance collaboration, and boost productivity
              with our tools—from time tracking to project management.
            </p>
          </div>
          <div>
            <button className="sm:px-6 sm:py-3 px-4 py-2 border-2 border-heroColor rounded-full font-montserrat text-white hover:bg-heroColor transition-colors duration-300">
              Read More
            </button>
          </div>
        </div>

        {features.map((feature, index) => (
          <div key={index} className="relative overflow-hidden">
            <div className="bg-featureCard min-h-[340px] rounded-sm flex flex-col gap-8 py-6 px-6 group hover:bg-hoverfeature transition-colors duration-300 ">
              <div className="h-16 w-16 rounded-full border-2 border-heroColor flex justify-center items-center p-1 group-hover:bg-heroColor transition-colors duration-300 flex-shrink-0">
                <img
                  src={feature.icon}
                  alt=""
                  className="w-8 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="font-outfit text-white text-2xl font-semibold">
                  {feature.firstTitle}
                </h3>
                <h3 className="font-outfit text-heroColor text-2xl font-semibold">
                  {feature.secondTitle}
                </h3>
              </div>

              <div>
                <p className="text-white font-outfit text-base min-h-16">
                  {feature.description}
                </p>
              </div>

              <div>
                <button className="font-outfit text-white text-base underline ">
                  READ MORE
                </button>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[6px] bg-heroColor scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
