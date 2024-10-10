import React from "react";
import { logo } from "../../assets/img/images";

const Footer = () => {
  const navigation = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Pricing", id: "pricing" },
    { name: "Why Choose Us", id: "why-choose-us" },
    { name: "FAQ", id: "faq" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="relative px-4 sm:px-6 pt-8 pb-4 sm:pt-16 sm:pb-8 bg-testimonialsBg">
      <div className="min-[1400px]:max-w-[90%] max-w-[94%] mx-auto ">
        <div className="flex flex-col md:gap-10 gap-6">
          <div className="mx-auto  cursor-pointer" onClick={scrollToTop}>
            <img src={logo} alt="" className="w-full h-auto" />
          </div>

          <div className="flex lg:gap-6 gap-3 items-center justify-center flex-wrap">
            {navigation.map((item, index) => (
              <div
                className="flex lg:gap-6 gap-3 items-center"
                key={index}
                onClick={() => handleScroll(item.id)}
              >
                <p className="font-outfit text-white/60 sm:text-base text-sm uppercase cursor-pointer hover:text-heroColor transition-all duration-300">
                  {item.name}
                </p>
                {index !== 5 && (
                  <div className="font-outfit sm:text-base text-sm text-white/60">
                    |
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="h-0.5 w-full bg-white/30 rounded-full mt-8"></div>

          <div className="flex min-[540px]:flex-row flex-col justify-between items-center gap-3">
            <div className="">
              <p className="font-outfit text-white/60 md:text-lg min-[540px]:text-sm text-sm">
                Copyright © {currentYear} Collabez
              </p>
            </div>
            <div className="">
              <p className="font-outfit text-white/60 md:text-lg min-[540px]:text-sm text-sm">
                Privacy Policy | Terms & Conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
