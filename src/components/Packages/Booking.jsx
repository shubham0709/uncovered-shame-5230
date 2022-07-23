import React, { useEffect } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import SliderPackages from "./SliderPackage";
import CustoemrDetailForm from "../CustomerDetailsProceedToBook/CustomerDetailsForm";
export const Booking = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <Box h="69px" backgroundColor="#2F9BDB" position=""></Box>
      <Box margin={" 20px 20px 0 50px"} textAlign="left" h="2750px">
        <Flex margin={"0 70px"} fontWeight="400">
          <Text color="blue.400"> Tour Packages : </Text>
          <Text fontSize={"15px"}>
            {" "}
            Explore One of Asia's Spookiest Spots While Unwinding Amidst Nature
            | Seegreen Lodges, Mussoorie
          </Text>
        </Flex>
        <Flex>
          <Box w="70%" h="550px" padding={"10px 0px 0px 25px"}>
            <SliderPackages />
          </Box>
          <Box w="30%" position={"relative"} padding={"0 20px"}>
            <CustoemrDetailForm />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};
