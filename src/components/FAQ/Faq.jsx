import React, { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/16/solid";
import { faqImg } from "../../assets/img/images";

const Faq = () => {
  const faqData = [
    {
      question: "How can CollabDash help my remote team stay productive?",
      answer:
        "CollabDash makes it easy to manage remote teams with built-in time tracking, video meetings, and chat—all in one platform. Whether your team is scattered across time zones or working on-site, you’ll have full visibility into productivity and collaboration.",
    },
    {
      question: "Is CollabDash secure?",
      answer:
        "Absolutely. We use enterprise-grade encryption and security protocols to ensure all your data, from chat logs to time entries, stays private and secure.",
    },
    {
      question: "What happens after the 14-day free trial?",
      answer:
        "After your trial, you can choose one of our affordable plans. We’re confident you’ll see the value of CollabDash within the first two weeks, but you’re free to cancel anytime before the trial ends if it’s not the right fit for your team.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative px-4 sm:px-6 py-8 sm:py-16 ">
      <div className="min-[1400px]:max-w-[90%] max-w-[94%] mx-auto ">
        <div className="flex flex-col md:gap-10 gap-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-outfit text-[26px] min-[540px]:text-3xl sm:text-4xl md:text-5xl  leading-tight text-white text-center font-medium">
              Frequently Asked{" "}
              <span className="text-heroColor font-outfit-bold">Questions</span>{" "}
            </h3>
          </div>
          <div className="">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border-b border-white/70 xl:py-12 py-8"
              >
                <button
                  className="flex justify-between gap-3 items-center w-full text-left "
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="min-[1400px]:text-2xl xl:text-xl md:text-xl min-[540px]:text-base text-base font-semibold font-outfit text-white capitalize">
                    {item.question}
                  </span>

                  <div
                    className={`border-2 border-white/70 rounded-full p-0.5 ${
                      openIndex === index ? "bg-white" : ""
                    }`}
                  >
                    <ChevronUpIcon
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
                  <p className="text-white/60 font-outfit md:text-lg sm:text-base text-sm">
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
