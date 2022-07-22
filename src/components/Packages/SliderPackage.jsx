import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Image } from "@chakra-ui/react";

export default function SliderPackages() {
  return (
    <>
      <Swiper 
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image w="100%" h="200px" src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642601942_lead_form_final_1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642502177_11.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642502197_330263448.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642502216_286286477.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642502238_5.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642502257_3.jpeg" />
        </SwiperSlide>
        {/* hlkj */}
        <SwiperSlide>
          <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642502324_photo_1605720444820_30c8f2a4460c.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642502382_istockphoto_1333134892_170667a.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642502465_photo_1540099741100_f2842527d744.jpeg" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642502091_286778639.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642502485_18.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642502678_img_5037.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642502496_283268477.jpeg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
