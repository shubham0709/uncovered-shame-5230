import React from "react";
import { Box,Text, Flex } from "@chakra-ui/react";
import SliderPackages from "./SliderPackage";
import { OverviewPackage } from "./OverviewPackage";
import { DetailsSlider } from "./DetailsSlider";
export const Packages = () => {
  return (
    <Box marginTop={"100px"}>
    <Text>Explore One of Asia's Spookiest Spots While Unwinding Amidst Nature | Seegreen Lodges, Mussoorie</Text>
      <Flex>
        <Box w="65%" h="400px" padding={"50px 20px 0 50px"} border="1px solid red">
            <SliderPackages />
            <OverviewPackage />
        </Box>
        <Box border="1px solid green">
          <DetailsSlider />
        </Box>
      </Flex>
    </Box>
  );
};
