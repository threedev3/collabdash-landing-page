import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  avatar1,
  avatar2,
  avatar3,
  testimonialImg,
} from "../../assets/img/images";

const testimonials = [
  {
    name: "Ayesha Khan",
    position: "Founder of Creative Digital",
    image: avatar1,
    quote:
      "CollabDash isn’t just another tool—it’s become the backbone of our team’s operations. Before, we were juggling Slack, Zoom, and Trello, and it was eating into our profits. Now, everything’s in one place. Our team is more productive, and we’re saving hundreds of dollars a month.",
  },

  {
    name: "John Doe",
    position: "COO of TechStart",
    image: avatar2,
    quote:
      "Managing remote employees across different time zones was a logistical nightmare. CollabDash has simplified everything. From time tracking to video meetings, every feature works seamlessly. It’s like we’ve given our team an extra set of hands without adding any complexity.",
  },
  {
    name: "Sara Al Qasimi",
    position: "CEO of Gulf Innovators",
    image: avatar3,
    quote:
      "As a small business, we were burning through cash trying to pay for all the tools we needed to keep our team connected and productive. CollabDash has solved that. It does everything we need, and the cost savings have been a game-changer for us.",
  },
];

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    afterChange: (current) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative px-4 sm:px-6 pt-8 pb-16 sm:pt-20 sm:pb-32 bg-testimonialsBg">
      <div className="">
        <img
          src={testimonialImg}
          alt="Decorative element"
          className="object-contain absolute top-0 right-0 z-0 opacity-80 lg:h-80 h-60"
        />
      </div>
      <div className="min-[1400px]:max-w-[90%] max-w-[94%] mx-auto ">
        <h2 className="text-[26px] min-[540px]:text-3xl sm:text-4xl md:text-5xl  leading-tight font-outfit-bold text-white mb-12 text-center relative z-10">
          Our <span className="text-heroColor">Testimonials</span>
        </h2>
        <Slider {...settings} className="testimonial-slider ">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative pt-8 ">
              <div
                className={`bg-white/10 rounded-xl p-6 h-full flex flex-col justify-center items-center relative min-[1378px]:min-h-64 xl:min-h-[292px] lg:min-h-[276px] min-[943px]:min-h-60 min-[819px]:min-h-64 min-h-[270px] cursor-pointer  ${
                  activeSlide === index
                    ? "bg-white/20 border border-white/25"
                    : ""
                }`}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 z-40">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full w-20 h-20 object-contain mx-auto "
                  />
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <div className="flex flex-col gap-2 items-center  mt-8">
                    <h3 className="text-xl font-semibold text-white font-outfit text-center">
                      {testimonial.name}
                    </h3>
                    <p className="text-heroColor text-center text-lg font-outfit">
                      {testimonial.position}
                    </p>
                  </div>
                  <blockquote
                    className={`flex-grow text-center font-outfit italic min-[1400px]:text-base xl:text-sm text-xs xl:max-w-[420px] transition-opacity duration-300 ${
                      activeSlide === index ? "text-white" : "text-white/60"
                    }`}
                  >
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
