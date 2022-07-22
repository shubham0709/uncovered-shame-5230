import React from "react";
import {
  Box,
  Image,
  Text,
  Tag,
  TagLabel,
  Flex,
  Divider,
} from "@chakra-ui/react";
export const CardTravel = ({ elem }) => {
  return (
    <Box
    // border={"1px solid red"}
      adding={"12px"}
      fontFamily="circularairpro-bold, Helvetica, -apple-system,Arial, sans-serif"
      lineHeight="25.7143px"
      verticalAlign="baseline"
      letterSpacing="normal"
      wordSpacing="1px"
      Font
      being
      Rendered="circularairpro-bold 100.0%"
      textAlign={"left"}
      fontWeight="550"
      h="450px"
      w="470px"
      cursor={"pointer"}
    >
      <Box h="40%">
        {" "}
        <Image src={elem?.image} alt="cardImage" borderRadius={"5px"} />
      </Box>
      <Box h="55%">
        <Box>
          <Text size={"mg"} variant="solid" color="teal" margin="5px 0">
            Package
          </Text>
        </Box>
        <Box>
          <Text
            variant="solid"
            margin={"2px 0"}
            fontSize={"18px"}
            padding="0px"
            fontWeight="600"
            color={"gray.800"}
          >
            {elem?.description || ""}
          </Text>
        </Box>
        <Box margin={"8px 0"}>
          <Flex
            fontSize={"13px"}
            justifyContent="space-between"
            h="40px"
            padding={"5px"}
            margin="5px 0"
          >
            {" "}
            <Flex>
              <Box h="20px" w="20px" margin={"5px 5px 0 0 "}>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTQ_CDpHaWoxmGTSpLbBy_GElYmSHCzCAYvQ&usqp=CAU"></Image>
              </Box>
              <Text color="teal" fontSize={"18px"}>
                {elem?.place || "Nanital"}
              </Text>
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
          <Flex margin="10px  5px" justifyContent={"space-between"}>
            <Box>
              <Flex margin=" 5px 5px 0 0 ">
                <Text margin="0 5px 0 0" fontSize={"18px"}>
                  {elem?.price || 2000}
                </Text>
                <Text fontSize={"15px"} color="gray.400">
                  onwards
                </Text>
              </Flex>
            </Box>
            <Box spacing={5}>
              <Tag
                size={"xl"}
                px={4}
                h={8}
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
      <Flex margin={"5px 0"}>
          <Box w="30px" h="30px">
            <Image
              margin="5px"
              src="https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg"
              borderRadius={"50%"}
            ></Image>
          </Box>
          <Text color="black.500" fontSize={"15px"} margin={"8px"} fontWeight="500">
            {" "}
            Tripoto Verification Partner
          </Text>
          <Box w="20px" h="20px">
            <Image
              margin="12px 5px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvePwnAsjmMK75nfDSjeYBvAIGwxUAsUTNrzl3c0s4M9ILsTtOlmC2OOzel9Wwmxmg7Y8&usqp=CAU"
            ></Image>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
