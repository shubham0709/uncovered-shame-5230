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

export default function Slider() {
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
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
      </Swiper>
    </SliderWrapper>
  );
}

const SliderWrapper = Styled.div`
  width:75%;
  margin:auto;
`;
