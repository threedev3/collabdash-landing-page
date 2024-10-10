import React, { useState } from "react";
import { logo } from "../../assets/img/images";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Pricing", id: "pricing" },
    { name: "Why Choose Us", id: "why-choose-us" },
    { name: "FAQ", id: "faq" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); // Close the mobile menu after clicking
  };

  return (
    <nav className="relative z-50">
      <div className="flex flex-row justify-between items-center gap-3">
        <div className="cursor-pointer xl:w-auto lg:w-48 w-auto">
          <img src={logo} alt="" className="object-contain" />
        </div>

        <ul className="lg:flex lg:items-center xl:gap-6 gap-4 hidden">
          {navigation.map((item, index) => (
            <li
              key={index}
              className="list-none font-outfit uppercase cursor-pointer text-navigationText hover:text-heroColor transition-all duration-300 xl:text-base text-sm"
              onClick={() => handleScroll(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className="lg:flex lg:items-center xl:gap-6 gap-4 hidden">
          <button className="xl:py-2 py-1.5 xl:px-6 px-4 border-2 border-heroColor rounded-full text-white font-outfit hover:bg-heroColor transition-all duration-300xl:text-base text-sm">
            Sign In
          </button>
          <button className="xl:py-2 py-1.5 xl:px-6 px-4 border-2 border-heroColor bg-heroColor rounded-full text-white font-outfit hover:bg-transparent transition-all duration-300 xl:text-base text-sm">
            Book A Demo
          </button>
        </div>

        <div
          className="lg:hidden block w-10 h-8 cursor-pointer z-50 relative"
          onClick={toggleMenu}
        >
          <Bars3Icon
            className={`h-8 w-8 text-white absolute inset-0 transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-0 rotate-90 scale-50"
                : "opacity-100 rotate-0 scale-100"
            }`}
          />
          <XMarkIcon
            className={`h-8 w-8 text-white absolute inset-0 transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 rotate-90 scale-50"
            }`}
          />
        </div>
      </div>

      {/* Full-screen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-95 transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 ease-in-out lg:hidden flex items-center justify-center`}
      >
        <div className="flex flex-col items-center justify-center h-full w-full">
          <ul className="space-y-4 text-center">
            {navigation.map((item, index) => (
              <li
                key={index}
                className="font-outfit-bold uppercase cursor-pointer text-white hover:text-heroColor transition-all duration-300 sm:text-4xl min-[540px]:text-3xl text-2xl"
                onClick={() => handleScroll(item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <div className="mt-12 space-y-4 w-64">
            <button className="w-full py-3 px-6 border-2 border-heroColor rounded-full text-white font-outfit hover:bg-heroColor transition-all duration-300 text-xl">
              Sign In
            </button>
            <button className="w-full py-3 px-6 border-2 border-heroColor bg-heroColor rounded-full text-white font-outfit hover:bg-transparent transition-all duration-300 text-xl">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
