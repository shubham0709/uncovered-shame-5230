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
import { Card1 } from "../CardComponents/Card1";

export default function BasicSlider() {
  return (
    <SliderWrapper>
      <Swiper
        key={Date.now()}
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card1 />
        </SwiperSlide>
        <SwiperSlide>
          <Card1 />
        </SwiperSlide>
        <SwiperSlide>
          <Card1 />
        </SwiperSlide>
        <SwiperSlide>
          <Card1 />
        </SwiperSlide>
      </Swiper>
    </SliderWrapper>
  );
}

const SliderWrapper = Styled.div`
  /* width:75%;
  margin:auto; */
  /* height: 350px;
  border: 1px solid green; */
  /* padding:10px; */
`;
