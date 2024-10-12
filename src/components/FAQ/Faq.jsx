import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { faqImg } from "../../assets/img/images";

const Faq = () => {
  const faqData = [
    {
      question: "What is CollabDash and how can it help my business?",
      answer:
        "CollabDash is an all-in-one platform designed to simplify your business operations by combining time tracking, leave management, team communication (chat and video), and project management (Kanban-style boards). It helps small to medium-sized businesses streamline workflows, reduce the need for multiple software subscriptions, and enhance team productivity—whether your employees are on-site or remote.",
    },
    {
      question: "Do I need separate tools for video calls and team chat?",
      answer:
        "No, CollabDash includes built-in video meetings and peer-to-peer chat features. You won’t need additional subscriptions for platforms like Zoom or Slack. Your team can easily chat or launch video calls right from the platform, all in one seamless workflow.",
    },
    {
      question: "Can I track my team’s time and manage leave requests?",
      answer:
        "Yes, CollabDash offers a comprehensive time-in/time-out tracking feature, so employees can log their hours easily. The platform also includes leave management, allowing employees to request leave and managers to approve or reject requests—all within the app.",
    },
    {
      question: "How does the project management feature work?",
      answer:
        "CollabDash features a Trello-like Kanban board where you can organize tasks, assign responsibilities, and track project progress. It’s ideal for keeping your team aligned and ensuring all tasks are completed on time, without the need for external project management tools.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial with full access to all features. You can explore time tracking, team collaboration tools, project management, and more, without any commitment or credit card required.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative px-4 sm:px-6 py-8 sm:py-10 overflow-hidden">
      <div className="min-[1400px]:max-w-[90%] max-w-[94%] mx-auto ">
        <div className="flex flex-col md:gap-10 gap-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-outfit-bold text-[26px] min-[540px]:text-3xl sm:text-4xl md:text-5xl  leading-tight text-white text-center font-medium">
              Frequently Asked{" "}
              <span className="text-heroColor ">Questions</span>{" "}
            </h3>
          </div>
          <div className="">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border-b border-white/70 xl:py-10 py-6"
              >
                <button
                  className="flex justify-between gap-3 items-center w-full text-left "
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="min-[1400px]:text-2xl xl:text-xl md:text-xl min-[540px]:text-lg text-lg font-semibold font-outfit text-white capitalize">
                    {item.question}
                  </span>

                  <div
                    className={`border-2 border-white/70 rounded-full p-0.5 ${
                      openIndex === index ? "bg-white" : ""
                    }`}
                  >
                    <ChevronDownIcon
                      className={`sm:w-6 sm:h-6 w-5 h-5 transition-transform duration-300  ${
                        openIndex === index
                          ? "rotate-180 text-black"
                          : "text-white"
                      }`}
                    />
                  </div>
                </button>
                <div
                  className={`mt-4 transition-all duration-300 ease-in-out overflow-hidden xl:w-[96%] w-[93%] ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-white/90 font-outfit md:text-lg sm:text-base text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 pointer-events-none -z-10">
        <img
          src={faqImg}
          alt=""
          className="xl:w-auto w-72 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Faq;
