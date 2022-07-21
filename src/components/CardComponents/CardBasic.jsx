import React from "react";
import { Box, Image, Text, HStack, Flex } from "@chakra-ui/react";

export const CardBasic = ({ elem }) => {
  console.log(elem, " form card basic");
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
      {/* <Text>Travel and Learn with Tripoto's Mindful Retreats</Text> */}
      <Box h="56%">
        {" "}
        <Image w="100%" h="50%" src={elem?.image || ""} borderRadius={"5px"} />
      </Box>
      <Box h="44%">
        <Text color="orange.500" fontSize={"15px"}>
          {elem?.title || "LUXURY"}
        </Text>
        <HStack>
          <Text
            variant="solid"
            margin={"2px 0"}
            textAlign="left"
            fontSize={"20px"}
            padding="0px"
          >
            {elem?.description || ""}
          </Text>
        </HStack>
        <Flex fontSize={"15px"}>
          <Text margin={"0 10px 0 0"}>By</Text>
          <Text color="blue">{elem?.by || ""} </Text>
        </Flex>
      </Box>
    </Box>
  );
};
