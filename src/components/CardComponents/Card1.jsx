import React from "react";
import {  Box, Image, Text } from "@chakra-ui/react";

export const Card1 = ({ cardData }) => {
  return (
    <Box
      adding={"12px"}
      fontFamily="circularairpro-bold, Helvetica, -apple-system,Arial, sans-serif"
      lineHeight="25.7143px"
      verticalAlign="baseline"
      letterSpacing="normal"
      wordSpacing="0px"
      Font
      being
      Rendered="circularairpro-bold 100.0%"
      textAlign={"left"}
      fontWeight={"600"}
      h="320px"
    >
     <Box  h="56%">
     <Image
      // border="1px solid blue"
        borderRadius={"5px"}
        src="https://www.bibliophilebookstore.com/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-28-at-1.19.42-PM.jpeg"
      ></Image>
     </Box>
      <Box h="44%">
      <Text    fontSize="15" color={"rgb(255,115,69)"} margin="5px 0">
        North East {" "}
      </Text>
      <Text
        fontSize="19"
        fontWeight="530"
        lineHeight="25.7143px"
        textTransform="capitalize"
        Rendered="circularairpro-bold"
      >
        North East Indian Tour Packages North East Indian Tour Packagess{" "}
      </Text>
      </Box>
      {/* <Text fontSize='6xl'>{cardData.category}</Text>     */}
    </Box>
  );
};
