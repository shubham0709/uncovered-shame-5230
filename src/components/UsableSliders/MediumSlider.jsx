import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation } from "swiper";
import { Card1 } from "../CardComponents/Card1";

export default function MediumSlider({ arr, limit, setNavigation }) {
  return (
    <Swiper
      key={Date.now()}
      slidesPerView={limit || 4}
      spaceBetween={30}
      slidesPerGroup={limit || 4}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={setNavigation === false ? false : true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {arr?.length > 0 &&
        arr.map((elem, i) => (
          <SwiperSlide key={i}>
            <Card1 elem={elem} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
