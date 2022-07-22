import React from "react";
import { Box, Image, Text, HStack, Flex } from "@chakra-ui/react";

export const CardBasic = ({ elem }) => {
  return (
    <Box
      adding={"12px"}
      fontFamily="circularairpro-bold, Helvetica, -apple-system,Arial, sans-serif"
      lineHeight="35.7143px"
      verticalAlign="baseline"
      letterSpacing="normal"
      wordSpacing="1"
      Font
      being
      Rendered="circularairpro-bold 100.0%"
      textAlign={"left"}
      h="420px"
      w="330px"
    >
      {/* <Text>Travel and Learn with Tripoto's Mindful Retreats</Text> */}
      <Box h="54%">
        {" "}
        <Image w="100%" h="50%" src={elem?.image || ""} borderRadius={"5px"} />
      </Box>
      <Box h="46%">
        <Text color="orange.500" 
        fontWeight="550"
        fontSize={"18px"}  margin={"5px 0"}
        >
          {elem?.title || "LUXURY"}
        </Text>
        <HStack>
          <Text
            variant="solid"
            margin={"5px 0"}
            textAlign="left"
            fontSize={"23px"}
            padding="0px"
            fontWeight="600"
            color={"gray.800"}
          >
            {elem?.description || ""}
          </Text>
        </HStack>
        <Flex fontSize={"18px"} >
          <Text margin={"0 10px 0 0"} >By</Text>
          <Text color="rgb(85,173,225)">{elem?.by || ""} </Text>
        </Flex>
      </Box>
    </Box>
  );
};
