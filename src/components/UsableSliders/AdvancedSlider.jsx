import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Image } from "@chakra-ui/react";
import { CardTravel } from "../CardComponents/CardTravel";

export default function AdvancedSlider({ arr, limit }) {
  console.log("arr from advanced slider", arr);
  return (
    <SliderWrapper>
      <Swiper
        key={Date.now()}
        slidesPerView={limit || 3}
        spaceBetween={30}
        slidesPerGroup={limit || 3}
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
              <CardTravel elem={elem} />
            </SwiperSlide>
          ))}
      </Swiper>
    </SliderWrapper>
  );
}

const SliderWrapper = Styled.div`

`;
