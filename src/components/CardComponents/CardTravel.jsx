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

export const CardTravel = () => {
  return (
    <Box
      padding={"12px"}
      border="1px solid red"
      w="350px"
      h="450px"
      font-family="circularairpro-bold, Helvetica, Arial, sans-serif"
      line-height="25.7143px"
      vertical-align="baseline"
      letter-spacing="normal"
      word-spacing="0px"
      Font
      being
      Rendered="circularairpro-bold 100.0%"
      // fontFamily={}
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
      <HStack>
        <Text size={"mg"} variant="solid" color="teal" margin="5px 0">
          Packages
        </Text>
      </HStack>

      <HStack>
        <Text
          variant="solid"
          margin={"2px 0"}
          textAlign="left"
          fontSize={"22px"}
          padding="0px"
        >
          North East Indian Tour Packagess
        </Text>
      </HStack>
      <Flex fontSize={"15px"} justifyContent={"space-between"}>
        <HStack>
          {" "}
          <Image
            w="20px"
            h="20px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTQ_CDpHaWoxmGTSpLbBy_GElYmSHCzCAYvQ&usqp=CAU"
          ></Image>
          <Text color="teal">NorthenEast Inbdian</Text>
        </HStack>

        <Tag
          size="lg"
          colorScheme="teal"
          variant="solid"
          borderRadius="full"
          color="white"
        >
          <TagLabel>6D-5N</TagLabel>
        </Tag>
      </Flex>
      <Flex margin="15px  5px" justifyContent={"space-between"}>
        <Flex margin=" 5px 5px 0 0 ">
          <Text margin="0 5px 0 0">2000</Text>
          <Text color="gray">onwards</Text>
        </Flex>
        <HStack spacing={5}>
          <Tag
            size={"lg"}
            variant="teal"
            border={"1px solid teal"}
            color="teal"
          >
            Get Quotes
          </Tag>
        </HStack>
      </Flex>
      <Divider color="gray" />
      <Flex>
        <Text color="blue ">Logo</Text>
        <Text color="black.500"> Tripoto Verification Partner</Text>
        <Image
          margin="5px"
          w="20px"
          h="20px"
          src="https://i.pinimg.com/736x/9b/13/b0/9b13b0a9206c8c046c55dca5edcb3ce8.jpg"
        ></Image>
      </Flex>
    </Box>
  );
};
