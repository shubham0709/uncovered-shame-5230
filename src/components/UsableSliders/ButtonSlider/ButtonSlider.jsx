import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Button } from "@chakra-ui/react";

export default function ButtonSlider({ arr, bg }) {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        slidesPerGroup={6}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {arr?.length > 0 &&
          arr.map((elem, i) => (
            <SwiperSlide key={i}>
              <Button
                color="white"
                borderRadius="40px"
                fontSize="15px"
                bg={bg}
                pl="20"
                pr="20"
                pt="10"
                pb="10"
              >
                {elem}
              </Button>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
