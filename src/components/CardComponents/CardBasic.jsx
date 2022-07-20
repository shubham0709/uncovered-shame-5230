import React from "react";
import { Box, Image, Text, HStack, Flex } from "@chakra-ui/react";

export const CardBasic = () => {
  return (
    <Box
      padding={"12px"}
      border="1px solid red"
      w="300px"
      h="350px"
      font-family="circularairpro-bold, Helvetica, Arial, sans-serif"
      line-height="25.7143px"
      vertical-align="baseline"
      letter-spacing="normal"
      word-spacing="0px"
      Font
      being
      Rendered="circularairpro-bold 100.0%"
      textAlign={"left"}
      fontWeight={"600"}
    >
      {/* <Text>Travel and Learn with Tripoto's Mindful Retreats</Text> */}
      <Image
        w="100%"
        h="50%"
        src="https://www.bibliophilebookstore.com/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-28-at-1.19.42-PM.jpeg"
        alt="cardImage"
        borderRadius={"5px"}
      />
      <Text color="orange.500" fontSize={"15px"}>
        LUXURY STAYS
      </Text>
      <HStack>
        <Text
          variant="solid"
          margin={"2px 0"}
          textAlign="left"
          fontSize={"20px"}
          padding="0px"
        >
          North East Indian Tour Packagess
        </Text>
      </HStack>
      <Flex fontSize={"15px"}>
        <Text margin={"0 10px 0 0"}>By</Text>
        <Text color="blue">Name </Text>
      </Flex>
    </Box>
  );
};
