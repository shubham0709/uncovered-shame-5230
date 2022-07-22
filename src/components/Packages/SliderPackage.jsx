import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PhoneIcon } from "@chakra-ui/icons";
import "./styles.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import {
  Box,
  Divider,
  Flex,
  Grid,
  Image,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { OverviewPackage } from "./OverviewPackage";
// get data of location
let place = JSON.parse(localStorage.getItem("bookingAmount"))?.place || "";
// get data of number
let priceStr = JSON.parse(localStorage.getItem("bookingAmount"))?.price || 0;
let arr = ["1", "2", "3", "4", "5", "6", "7", "9", "0"];
let ans = "";
for (let i = 0; i < priceStr.length; i++) {
  if (arr.indexOf(priceStr[i]) !== -1) {
    ans += priceStr[i];
  }
}

let price = Number(ans) || 10000;
price = Number(price);

// get Data of description
let description = JSON.parse(
  localStorage.getItem("bookingAmount")
)?.description;
let rating = (Math.random() * 5).toFixed(1);

let duration = JSON.parse(localStorage.getItem("bookingAmount"))?.duration;
let durationValue = "";
for (let i = 0; i < duration?.length; i++) {
  if (duration[i] == "D") {
    durationValue += " " + "Days";
  }
  if (duration[i] == "N") {
    durationValue += " " + "Nights";
  } else {
    durationValue += duration[i];
  }
}
console.log("durationValue", durationValue);
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
        <SwiperSlide w="100%" h="350px">
          <Box padding="0 40px 40px 40px ">
            <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642601942_lead_form_final_1.png" />
          </Box>
        </SwiperSlide>
        <SwiperSlide w="100%" h="400px">
          <Box padding="0 40px 40px">
            <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642502177_11.jpeg" />
          </Box>
        </SwiperSlide>
        <SwiperSlide w="100%" h="400px">
          <Box padding="0 40px 40px">
            <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642502197_330263448.jpeg" />
          </Box>
        </SwiperSlide>
        <SwiperSlide w="100%" h="400px">
          <Box padding="0 40px 40px">
            <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642502216_286286477.jpeg" />
          </Box>
        </SwiperSlide>
        <SwiperSlide w="100%" h="400px">
          <Box padding="0 40px 40px">
            <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642502238_5.jpeg" />
          </Box>
        </SwiperSlide>
        <SwiperSlide w="100%" h="400px">
          <Box padding="0 40px 40px">
            <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642502257_3.jpeg" />
          </Box>
        </SwiperSlide>
        {/* hlkj */}
        <SwiperSlide>
          <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642502324_photo_1605720444820_30c8f2a4460c.jpeg" />
        </SwiperSlide>
        <SwiperSlide w="100%" h="400px">
          <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642502382_istockphoto_1333134892_170667a.jpeg" />
        </SwiperSlide>
        <SwiperSlide w="100%" h="400px">
          <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642502465_photo_1540099741100_f2842527d744.jpeg" />
        </SwiperSlide>

        <SwiperSlide w="100%" h="400px">
          <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642502091_286778639.jpeg" />
        </SwiperSlide>
        <SwiperSlide w="100%" h="400px">
          <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642502485_18.jpeg" />
        </SwiperSlide>
        <SwiperSlide w="100%" h="400px">
          <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642502678_img_5037.jpg" />
        </SwiperSlide>
        <SwiperSlide w="100%" h="400px">
          <Image src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1642502496_283268477.jpeg" />
        </SwiperSlide>
      </Swiper>
      <Box>
        <Text
          color="black.500"
          fontSize={"25px"}
          margin={"8px"}
          fontWeight="700"
        >
          {description}
        </Text>

        <Flex margin={"5px 0"} justifyContent="space-between">
          <Flex cursor={"pointer"}>
            <Box w="30px" h="30px">
              <Image
                margin="5px"
                src="https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg"
                borderRadius={"50%"}
              ></Image>
            </Box>
            <Text
              color="black.300"
              fontSize={"18px"}
              margin={"8px"}
              fontWeight="400"
            >
              {" "}
              Tripoto Verification Partner
            </Text>
            <Box w="20px" h="20px">
              <Image
                margin="12px 5px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvePwnAsjmMK75nfDSjeYBvAIGwxUAsUTNrzl3c0s4M9ILsTtOlmC2OOzel9Wwmxmg7Y8&usqp=CAU"
              ></Image>
            </Box>
          </Flex>

          <Flex
            cursor={"pointer"}
            color_hover="green"
            color="red.500"
            fontSize={"20px"}
          >
            {" "}
            <PhoneIcon margin={"5px"} /> <Text>08046162990</Text>
          </Flex>
        </Flex>
        <Divider />
        <Box color="black.300" fontSize={"18px"} margin={"8px"}>
          <Flex>
            <Text fontWeight="600">Rating: {rating}</Text>
            <Image
              w="120px"
              h="22px"
              marginLeft={"5px"}
              src="https://www.clipartmax.com/png/middle/67-676962_5-out-of-5-stars-4-5-out-of-5-star-rating.png"
            />
          </Flex>

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
                    {durationValue}
                  </TagLabel>
                </Tag>
              </Box>
              <Box>
                <Flex margin=" 5px 5px 0 0 ">
                  <Text margin="0 5px 0 0" fontWeight="500" fontSize={"18px"}>
                    {priceStr}
                  </Text>
                  <Text fontSize={"15px"} color="gray.400">
                    /Person
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>

          <Text fontWeight="300">Location</Text>
          <Text fontWeight="600">{place}</Text>
          <Text fontWeight="300">Highlights</Text>
          <Grid
            fontSize={"15px"}
            fontWeight="600"
            templateColumns="repeat(6, 1fr)"
            gap={3}
            margin="10px 0"
          >
            <Flex>
              <Image
                w="30px"
                h="20px"
                src="https://cdn1.tripoto.com/media/filter/tst/img/2/Image/1555425505_meals.png"
              />
              <Text>Meals</Text>
            </Flex>
            <Flex>
              <Image
                w="30px"
                h="20px"
                src="https://cdn1.tripoto.com/media/filter/tst/img/2/Image/1555425508_homestay.png"
              />
              <Text>Homestay</Text>
            </Flex>
            <Flex>
              <Image
                w="30px"
                h="20px"
                src="https://cdn1.tripoto.com/media/filter/tst/img/2/Image/1592388058_safe_to_travel.png"
              />
              <Text>Safe to Travel</Text>
            </Flex>
            <Flex>
              <Image
                w="30px"
                h="20px"
                src="https://cdn1.tripoto.com/media/filter/tst/img/2/Image/1592388015_adventure.png"
              />
              <Text>Adventure</Text>
            </Flex>
            <Flex>
              <Image
                w="30px"
                h="20px"
                src="https://cdn1.tripoto.com/media/filter/tst/img/2/Image/1592388046_hill_station.png"
              />
              <Text>Hill Station</Text>
            </Flex>
            <Flex>
              <Image
                w="30px"
                h="20px"
                src="https://cdn1.tripoto.com/media/filter/tst/img/2/Image/1592388052_nature.png"
              />
              <Text>Nature</Text>
            </Flex>
            <Flex>
              <Image
                w="30px"
                h="20px"
                src="https://cdn1.tripoto.com/media/filter/tst/img/2/Image/1592388084_wellness.png"
              />
              <Text>Wellness</Text>
            </Flex>
            <Flex>
              <Image
                w="30px"
                h="20px"
                margin="5px"
                src="https://cdn1.tripoto.com/media/filter/tst/img/2/Image/1592388038_hidden_gem.png"
              />
              <Text>Hidden Gem</Text>
            </Flex>
            <Flex>
              <Image
                w="30px"
                h="20px"
                src="https://cdn1.tripoto.com/media/filter/tst/img/2/Image/1592387999_activities_included.png"
              />
              <Text>Activities Included</Text>
            </Flex>
            <Flex>
              <Image
                w="30px"
                h="20px"
                src="https://cdn1.tripoto.com/media/filter/tst/img/16404/Image/1649655227_icons8_wi_fi_40.png"
              />
              <Text>Wi-Fi</Text>
            </Flex>
          </Grid>
        </Box>
      </Box>
      <OverviewPackage />
    </>
  );
}
