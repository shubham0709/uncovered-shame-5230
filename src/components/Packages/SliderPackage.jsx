import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PhoneIcon } from '@chakra-ui/icons'
import "./styles.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Box,Divider,Flex, Image, Tag, TagLabel, Text } from "@chakra-ui/react";
import { OverviewPackage } from "./OverviewPackage";

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
        <SwiperSlide w="100%" h="400px" border={"1px solid green"} >
       <Box  border={"1px solid red"} padding="10px">
       <Image   src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642601942_lead_form_final_1.png" />
       </Box>
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
      <Box><Text color="black.500" fontSize={"25px"} margin={"8px"} fontWeight="700">Hike to a Natural Pool and Go Bushcrafting at this Luxury Camp | Moksham Himalayan Campsite, Pangot</Text>

      <Flex margin={"5px 0"} justifyContent="space-between">
         <Flex cursor={"pointer"}>
           <Box w="30px" h="30px">
            <Image
              margin="5px"
              src="https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg"
              borderRadius={"50%"}
            ></Image>
          </Box>
          <Text color="black.300" fontSize={"18px"} margin={"8px"} fontWeight="400" >
            {" "}
            Tripoto Verification Partner
          </Text>
          <Box w="20px" h="20px" >
            <Image
              margin="12px 5px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvePwnAsjmMK75nfDSjeYBvAIGwxUAsUTNrzl3c0s4M9ILsTtOlmC2OOzel9Wwmxmg7Y8&usqp=CAU"
            ></Image>
          </Box>
         </Flex>



         
         <Flex cursor={"pointer"} color_hover="green" color="red.500" fontSize={"20px"}> <PhoneIcon/> <Text>08046162990</Text></Flex>
        </Flex>
        <Divider/>
        <Box color="black.300" fontSize={"18px"} margin={"8px"}>
          <Text >Rating: 4.8</Text>


          <Box>
          <Flex margin="10px  5px" justifyContent={"space-between"}>
            
          <Box>
              {" "}
              <Tag
                size="lg"
                colorScheme="teal"
                variant="solid"
                borderRadius="full"
                color="white"
              >
                <TagLabel>
                {/* {elem?.duration || "2D-3N"} */}
                3Day- 4Night
                </TagLabel>
              </Tag>
            </Box>




            <Box>
              <Flex margin=" 5px 5px 0 0 ">
                <Text margin="0 5px 0 0" fontSize={"18px"}>
                20000
                  {/* {elem?.price || 2000} */}
                </Text>
                <Text fontSize={"15px"} color="gray.400">
                  /Person
                </Text>
              </Flex>
            </Box>
          </Flex>
          </Box>

          <Text>Location</Text>
          <Text>prope</Text>
          <Text>Highlights</Text>
        </Box>
      </Box>
      <OverviewPackage />

    </>
  );
}
