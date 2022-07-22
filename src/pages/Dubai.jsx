import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAPI } from "../Redux/DataReducer/action";
import BasicSlider from "../components/UsableSliders/BasicSlider";
import MediumSlider from "../components/UsableSliders/MediumSlider";
import AdvancedSlider from "../components/UsableSliders/AdvancedSlider";
import ButtonSlider from "../components/UsableSliders/ButtonSlider/ButtonSlider";
import {
  Box,
  Image,
  Text,
  Tag,
  HStack,
  TagLabel,
  Flex,
  Divider,
  Container,
  AspectRatio,
  Heading,
  Grid,
} from "@chakra-ui/react";
import AutoplayImageSlider from "../components/UsableSliders/AutoPlayImageSlider/AutoplayImageSlider";
const Dubai = () => {
  const dispatch = useDispatch();
  const { AuthReducer, DataReducer } = useSelector((state) => state);
  useEffect(() => {
    if (DataReducer.data.length === 0) {
      dispatch(getDataAPI());
    }
  }, []);

  useEffect(() => {
    console.log(DataReducer.data.dubai);
  }, [DataReducer]);

  const buttonArr = [
    "events",
    "articles",
    "quiz",
    "food",
    "explore",
    "reimagine",
  ];
  return (
    <Box>
      <Box mt="20px">
        <iframe
          width="100%"
          height="380"
          src="https://stream.mux.com/XdWcF8Xx02ekQt772XFZgIZXGNlr5BdXO/high.mp4"
          title="Girl with Binoculars Film_Reimagine Singapore through fresh lenses #SingapoReimagine"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          autoPlay="1"
          padding="0"
          margin="0"
        ></iframe>
      </Box>
      <Container maxW="90%" textAlign="left">
        <Heading textAlign="left" mt="30px" mb="30px">
          Explore Dubai with Tripoto
        </Heading>
        <ButtonSlider
          arr={buttonArr}
          bg="#C42B93"
          setNavigation={buttonArr.length < 5}
        />

        <Heading textAlign="left" mt="70px" mb="30px" fontSize="25px">
          Watch the Ultimate Dubai Challenge feat. Aisha Ahmed and Ayush Mehra{" "}
        </Heading>
        {/* <MediumSlider arr={DataReducer.data.dubai.watch_the_ultimate || []} /> */}
        <Flex justifyContent="space-between">
          {DataReducer?.data?.dubai?.watch_the_ultimate?.map((elem, i) => (
            <Image
              src={elem.image}
              key={i}
              w="32%"
              h="250px"
              cursor="pointer"
            />
          ))}
        </Flex>
        <Heading textAlign="left" mt="70px" mb="10px" fontSize="25px">
          What's Trending{" "}
        </Heading>
        <Text fontSize="18px" mb="10px">
          Dubai transforms with every season and we know that it can be
          challenging to keep up with all its new experiences and hidden gems!
          So we've done all the research for you. Here are our top
          recommendations for all of you who will be making your way to Dubai in
          2022.
        </Text>
        <BasicSlider
          arr={DataReducer?.data?.dubai?.trending || []}
          limit={3}
          setNavigation={true}
        />
        <Image
          mt="30px"
          src="https://cdn1.tripoto.com/media/filter/nxxl/img/1745358/Image/1644391843_quiz_2.jpg"
        />
        <Heading textAlign="left" mt="70px" mb="10px" fontSize="25px">
          Chasing Adventure in Dubai{" "}
        </Heading>
        <Text fontSize="18px" mb="10px">
          From skydiving over the Palm Jumeirah to swimming with sharks – find
          your fill of adventure in Dubai.
        </Text>
        <BasicSlider
          arr={DataReducer?.data?.dubai?.chasing_adventure || []}
          limit={4}
          setNavigation={true}
        />

        <Heading textAlign="left" mt="70px" mb="10px" fontSize="25px">
          Top Things to Do{" "}
        </Heading>
        <Text fontSize="18px" mb="10px">
          Read guides written by travellers like you so you know what to expect
          in Dubai..
        </Text>
        <BasicSlider
          arr={DataReducer?.data?.dubai?.things_to_do || []}
          limit={4}
          setNavigation={true}
        />

        <Heading textAlign="left" mt="70px" mb="10px" fontSize="25px">
          Culinary Experiences You Can’t Miss in Dubai{" "}
        </Heading>
        <Text fontSize="18px" mb="10px">
          Find out what it’s street vendors and Michelin-starred chefs are up to
          and carve your own food trail in Dubai!
        </Text>
        <BasicSlider
          arr={DataReducer?.data?.dubai?.culinary_exps || []}
          limit={3}
          setNavigation={true}
        />

        <Heading textAlign="left" mt="70px" mb="10px" fontSize="25px">
          Book A Dubai Package For A Special Trip{" "}
        </Heading>
        <AdvancedSlider
          arr={DataReducer?.data?.dubai?.book_a_dubai || []}
          limit={3}
          setNavigation={true}
        />
      </Container>
    </Box>
  );
};

export default Dubai;
