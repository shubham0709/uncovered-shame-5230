import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Image } from "@chakra-ui/react";

export default function AutoplayImageSlider({ arr, borderRad }) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {arr?.length > 0 &&
          arr.map((elem, i) => (
            <SwiperSlide key={i}>
              <Image src={elem.image || elem} borderRadius={borderRad || 0} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
