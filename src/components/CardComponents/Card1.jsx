import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

export const Card1 = ({ elem }) => {
  return (
    <Box
    // border="1px solid red"
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
      h="320px"
      w="330px"
      cursor={"pointer"}
    >
      <Box h="54%">
        {" "}
        <Image w="100%" h="50%" src={elem?.image || ""} borderRadius={"5px"} />
      </Box>

      <Box h="46%">
        <Text
          fontSize="15"
          color={"rgb(255,115,69)"}
          margin="5px 0"
          fontWeight="550"
        >
          {elem?.title}
        </Text>
        <Text
          fontSize="18"
          fontWeight="550"
          textTransform="capitalize"
          Rendered="circularairpro-bold"
          color={"gray.800"}
        >
          {elem?.description || ""}
        </Text>
      </Box>
    </Box>
  );
};
