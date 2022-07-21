import React from "react";
import {
  Box,
  Image,
  Text,
  Tag,
  HStack,
  TagLabel,
  Flex,
  Divider,
} from "@chakra-ui/react";

export const CardTravel = ({ elem }) => {
  return (
    <Box
      boder="1px solid red"
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
      h="450px"
      // variant="solid"
    >
      {/* 111111111111------------ */}
      <Box h="45%">
        {" "}
        <Image src={elem?.image} alt="cardImage" borderRadius={"5px"} />
      </Box>
      {/* 2222222---------- */}

      <Box h="65%">
        <Box>
          <Text size={"mg"} variant="solid" color="teal" margin="5px 0">
            Package
          </Text>
        </Box>
        {/* 3333333333*/}
        <Box>
          <Text
            // variant="solid"
            margin={"2px 0"}
            fontSize={"20px"}
            padding="0px"
          >
            {elem?.description || ""}
          </Text>
        </Box>
        {/* 444444444444444*/}
        <Box>
          <Flex
            fontSize={"15px"}
            justifyContent="space-between"
            // border={"1px solid red"}
            h="40px"
            padding={"5px"}
            margin="5px 0"
          >
            {" "}
            <Flex margin={"0"}>
              <Box h="20px" w="15px">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTQ_CDpHaWoxmGTSpLbBy_GElYmSHCzCAYvQ&usqp=CAU"></Image>
              </Box>
              <Text color="teal">{elem?.place || ""}</Text>
            </Flex>
            <Box>
              {" "}
              <Tag
                size="lg"
                colorScheme="teal"
                variant="solid"
                borderRadius="full"
                color="white"
              >
                <TagLabel>{elem?.duration || "2D-3N"}</TagLabel>
              </Tag>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex margin="15px  5px" justifyContent={"space-between"}>
            <Box>
              <Flex margin=" 5px 5px 0 0 ">
                <Text margin="0 5px 0 0">{elem?.price || 2000}</Text>
                <Text color="gray">onwards</Text>
              </Flex>
            </Box>
            <Box spacing={5}>
              <Tag
                size={"lg"}
                variant="teal"
                border={"1px solid teal"}
                color="teal"
              >
                Get Quotes
              </Tag>
            </Box>
          </Flex>
        </Box>
        <Divider border={"1px solid black"} />

        <Flex margin={"10px 0"}>
          <Box w="20px" h="20px">
            <Image
              margin="5px"
              src="https://i.pinimg.com/736x/9b/13/b0/9b13b0a9206c8c046c55dca5edcb3ce8.jpg"
            ></Image>
          </Box>
          <Text color="black.500"> Tripoto Verification Partner</Text>
          <Box w="20px" h="20px">
            <Image
              margin="5px"
              src="https://i.pinimg.com/736x/9b/13/b0/9b13b0a9206c8c046c55dca5edcb3ce8.jpg"
            ></Image>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
