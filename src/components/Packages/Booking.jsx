import React from "react";
import { Box,Text, Flex } from "@chakra-ui/react";
import SliderPackages from "./SliderPackage";
import { OverviewPackage } from "./OverviewPackage";
import CustoemrDetailForm from "../CustomerDetailsProceedToBook/CustomerDetailsForm";
export const Packages = () => {
  return (
    <Box margin={"80px 0 0 0" } textAlign="left" h="2750px" border="1px solid green">
    <Flex margin={"0 100px" } fontWeight="400"> 
      <Text color="blue.400">  Tour Packages :  </Text>
      <Text fontSize={"15px"}> {" "}  Explore One of Asia's Spookiest Spots While Unwinding Amidst Nature | Seegreen Lodges, Mussoorie</Text>
    </Flex>
      <Flex>
        <Box w="65%" h="550px" padding={"15px 0px 0px 50px"} border="1px solid green" margin={"0 30px 0 40px"}>
            <SliderPackages />
        </Box>
        <Box border="1px solid green" >
          <CustoemrDetailForm/>
        </Box>
      </Flex>
    </Box>
  );
};
