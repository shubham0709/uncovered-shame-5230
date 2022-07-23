import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

export const CardDetail = ({ elem }) => {
  return (
    <Box
      adding={"12px"}
      fontFamily="circularairpro-bold, Helvetica, -apple-system,Arial, sans-serif"
      verticalAlign="baseline"
      wordSpacing="0px"
      lineHeight="27.7143px"
      letterSpacing="1"
      Font
      being
      backgroundColor="RGBA(0, 0, 0, 0)"
      Rendered="circularairpro-bold 100.0%"
      textAlign={"left"}
      h="270px"
      w="350px"
      cursor={"pointer"}
    >
      <Box h="85%">
        {" "}
        <Image w="100%" h="50%" src={elem?.image || ""} borderRadius={"5px"} />
      </Box>

      <Box h="15%">
        <Text
          fontSize="18"
          fontWeight="550"
          marginTop={"10px"}
          textTransform="capitalize"
          Rendered="circularairpro-bold"
          color={"gray.800"}
        >
          {elem?.place || ""}
        </Text>
      </Box>
    </Box>
  );
};
