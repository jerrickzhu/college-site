"use client";
import { TESTIMONIAL_DATA } from "@/app/constants/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../components/Card";
import Button from "../components/Button";
import { useState } from "react";
import { DM_Serif_Text } from "@next/font/google";

const serif = DM_Serif_Text({ subsets: ["latin"], weight: "400" });

const Carousel = () => {
  const [seeImage, setSeeImage] = useState<boolean>(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <div className="hidden md:flex mt-10 justify-center">
        <h1 className={`${serif.className} text-blue-300 text-5xl`}>
          What are others saying?
        </h1>
      </div>
      <div className="mt-20 flex justify-center">
        <div className="max-w-6xl w-full">
          <Slider {...settings}>
            {TESTIMONIAL_DATA.map((testimonial) => (
              <div key={testimonial.name} className="px-2">
                <Card
                  image={testimonial.image}
                  name={testimonial.name}
                  school={testimonial.school}
                  praise={testimonial.praise}
                />
              </div>
            ))}
          </Slider>
        </div>
        <br></br>
      </div>
      <div className="flex justify-around mt-7 mb-7"></div>
    </>
  );
};

export default Carousel;
