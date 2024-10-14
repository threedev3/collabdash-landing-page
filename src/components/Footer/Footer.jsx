import React from "react";
import { collabDashLogo } from "../../assets/img/images";

const Footer = () => {
  const navigation = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Pricing", id: "pricing" },
    { name: "Why Choose Us", id: "why-choose-us" },
    { name: "Contact Us", id: "contact-us" },
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
    <div className="relative px-4 sm:px-6 pt-4 pb-4 sm:pt-8 sm:pb-8 bg-testimonialsBg">
      <div className="min-[1400px]:max-w-[90%] max-w-[94%] mx-auto ">
        <div className="flex flex-col md:gap-8 gap-6">
          <div className="mx-auto  cursor-pointer" onClick={scrollToTop}>
            <img
              src={collabDashLogo}
              alt=""
              className=" w-[260px] aspect-auto object-contain"
            />
          </div>

          <div className="flex lg:gap-6 gap-3 items-center justify-center flex-wrap">
            {/* {navigation.map((item, index) => (
              <div
                className="flex lg:gap-6 gap-3 items-center"
                key={index}
                onClick={() => handleScroll(item.id)}
              >
                <p className="font-outfit text-white/60 sm:text-base text-sm uppercase cursor-pointer hover:text-heroColor transition-all duration-300">
                  {item.name}
                </p>
                {index !== 6 && (
                  <div className="font-outfit sm:text-base text-sm text-white/60">
                    |
                  </div>
                )}
              </div>
            ))} */}

            <div className="flex flex-col lg:gap-6 gap-3 items-center">
              <p className="font-outfit text-white/90 md:text-lg min-[540px]:text-sm text-sm text-center">
                CollabDash is fully owned by ASE Global LLC & CollabEZ FZE LLC
                Business Center, SPC FZ, Sharjah, UAE
              </p>
              <div className="flex items-center sm:gap-3 gap-2">
                <p className="font-outfit text-white/90 md:text-base min-[540px]:text-sm text-sm">
                  +97142206029
                </p>
                <a
                  className="font-outfit text-white/90 md:text-base min-[540px]:text-sm text-sm"
                  href="mailto:hello@collabez.ae"
                >
                  hello@collabez.ae
                </a>
                <a
                  className="font-outfit text-white/90 md:text-base min-[540px]:text-sm text-sm"
                  href="https://collabez.ae/"
                  target="_blank"
                >
                  https://collabez.ae
                </a>
              </div>
            </div>
          </div>

          <div className="h-0.5 w-full bg-white/30 rounded-full"></div>

          <div className="flex justify-center items-center gap-3">
            <div className="">
              <p className="font-outfit text-white/90 md:text-lg min-[540px]:text-sm text-sm">
                Copyright © {currentYear} CollabDash
              </p>
            </div>
            {/* <div className="">
              <p className="font-outfit text-white/60 md:text-lg min-[540px]:text-sm text-sm">
                Privacy Policy | Terms & Conditions
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
