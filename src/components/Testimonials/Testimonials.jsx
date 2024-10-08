import React from "react";
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
      "\"ClickDash isn't just another tool—it's become the backbone of our team's operations. Before, we were juggling 5-6 different apps to manage our projects, tasks, and profits. Now, everything's in one place. Our team is more productive, and we're saving hundreds of dollars a month.\"",
  },

  {
    name: "John Doe",
    position: "COO of TechStart",
    image: avatar2,
    quote:
      "\"Managing remote employees across different time zones was a logistical nightmare. ClickDash has simplified our workflow, improved communication, and boosted productivity. The best part? It's like we've given our team an extra set of hands without adding any complexity.\"",
  },
  {
    name: "Sara Al Qasimi",
    position: "CEO of Gulf Innovators",
    image: avatar3,
    quote:
      '"As a small business, we were burning through our budget trying to pay for all the tools we needed to keep our operations running smoothly. ClickDash has been a game-changer. It does everything we need, and the cost savings have been significant. It\'s truly an all-in-one solution for us."',
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
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
    <div className="relative px-4 sm:px-6 py-8 sm:py-12 bg-testimonialsBg">
      <div className="">
        <img
          src={testimonialImg}
          alt="Decorative element"
          //   layout="fill"
          //   objectFit="cover"
          className="object-contain absolute top-0 right-0 z-10"
        />
      </div>
      <div className="min-[1400px]:max-w-[90%] max-w-[94%] mx-auto">
        <h2 className="text-5xl font-outfit-bold text-white mb-12 text-center">
          Our <span className="text-heroColor">Testimonials</span>
        </h2>
        <Slider {...settings} className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4 relative ">
              <div className="bg-testimonialsCard rounded-lg p-6 h-full flex flex-col relative  ">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full absolute left-0 right-0 -top-6 mx-auto "
                />
                <div className="flex items-center mb-4">
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-yellow-500">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-400 flex-grow">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
