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
import { CardBasic } from "../CardComponents/CardBasic";

export default function MediumSlider() {
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
          <CardBasic />
        </SwiperSlide>
        <SwiperSlide>
          <CardBasic />
        </SwiperSlide>
        <SwiperSlide>
          <CardBasic />
        </SwiperSlide>
        <SwiperSlide>
          <CardBasic />
        </SwiperSlide>
        <SwiperSlide>
          <CardBasic />
        </SwiperSlide>
      </Swiper>
    </SliderWrapper>
  );
}

const SliderWrapper = Styled.div`
  /* width:75%;
  margin:auto; */
  /* border: 1px solid green; */
`;
