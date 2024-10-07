import React from "react";
import { logo } from "../../assets/img/images";

const Navbar = () => {
  const navigation = [
    "Home",
    "Services",
    "Testimonials",
    "Pricing",
    "Why Choose Us",
    "FAQ",
  ];

  return (
    <nav className="flex flex-row justify-between items-center gap-3">
      <div>
        <img src={logo} alt="" className="" />
      </div>

      <ul className="flex items-center gap-6">
        {navigation.map((item, index) => (
          <li
            key={index}
            className="list-none font-outfit uppercase cursor-pointer text-navigationText hover:text-heroColor transition-all duration-300"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-6">
        <button className="py-2 px-6 border-2 border-heroColor rounded-full text-white font-outfit hover:bg-heroColor transition-all duration-300">
          Sign In
        </button>
        <button className="py-2 px-6 border-2 border-heroColor bg-heroColor rounded-full text-white font-outfit hover:bg-transparent transition-all duration-300 box-border">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
