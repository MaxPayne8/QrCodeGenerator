"use client";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Caraousel = () => {
  const [data, setData] = useState();

  const getPic = async () => {
    const data = await fetch("https://picsum.photos/v2/list?page=2&limit=20");
    const json = await data.json();
    setData(json);
  };
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  console.log(data);
  useEffect(() => {
    getPic();
  }, []);
  return (
    <div className="bg-gray-100 ">
      <Slider {...settings} className="w-[95%]  mx-auto  ">
        {data?.map((img) => (
          <img src={img.download_url} alt="img" className="h-48 m-2 p-2" />
        ))}
      </Slider>
    </div>
  );
};

export default Caraousel;
