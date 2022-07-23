import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation } from "swiper";
import { CardDetail } from "../CardComponents/CardDetails";
export default function DetailsSlider({ arr, setNavigation }) {
  return (
    <Swiper
      key={Date.now()}
      slidesPerView={3}
      spaceBetween={30}
      slidesPerGroup={3}
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
        <CardDetail elem={elem}/>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
