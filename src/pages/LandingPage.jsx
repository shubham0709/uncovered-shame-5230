import React from "react";
import { Box, Image, Flex } from "@chakra-ui/react";
import BasicSlider from "../components/UsableSliders/BasicSlider";
import MediumSlider from "../components/UsableSliders/MediumSlider";
import AdvancedSlider from "../components/UsableSliders/AdvancedSlider";

export const LandingPage = () => {
  return (
    <Box>
      <Box w="80%" margin={"auto"}>
        <Flex justifyContent={"space-around"}>
          <Image
            w="25%"
            src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png"
          />
          <Image
            w="25%"
            src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192307_cc.png"
          />
          <Image
            w="25%"
            src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192273_bb.png"
          />
          <Image
            w="25%"
            src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192344_dd.png"
          />
        </Flex>
      </Box>
      <Box>
        <BasicSlider></BasicSlider>
        <MediumSlider></MediumSlider>
        <AdvancedSlider></AdvancedSlider>
      </Box>
    </Box>
  );
};
