import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card1 } from "../components/CardComponents/Card1";
import { CardBasic } from "../components/CardComponents/CardBasic";
import { getDataAPI } from "../Redux/DataReducer/action";
import BasicSlider from "../components/UsableSliders/BasicSlider";
import MediumSlider from "../components/UsableSliders/MediumSlider";
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
const Singapore = () => {
  const buttonArr = [
    "SHOP",
    "SG WEB-SERIES",
    "EVENTS",
    "WHATS NEW IN SG",
    "SG FOR FOODIES",
    "SG STREET ART",
    "VIDEOS",
    "ARTICLES",
  ];
  const imgArr = [
    "https://cdn1.tripoto.com/media/filter/nxxl/img/1745358/Image/1657185311_baby_shark_banner_web.jpeg",
    "https://cdn1.tripoto.com/media/filter/nxxl/img/1745358/Image/1644217023_sg_banners_event_01.jpg",
    "https://cdn1.tripoto.com/media/filter/nxxl/img/1745358/Image/1643970383_sg_banners_04.jpg",
    "https://cdn1.tripoto.com/media/filter/nxxl/img/1745358/Image/1643971062_sg_banners_07_1.jpg",
  ];

  const dispatch = useDispatch();
  const { AuthReducer, DataReducer } = useSelector((state) => state);
  useEffect(() => {
    if (DataReducer.data.length === 0) {
      dispatch(getDataAPI());
    }
  }, []);

  useEffect(() => {
    console.log(DataReducer.data.singapore);
  }, [DataReducer]);

  return (
    <Box>
      <Box>
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
          Reimagine Singapore With Tripoto
        </Heading>
        <ButtonSlider arr={buttonArr} bg="#F73341" />
        <Box mt="15px"></Box>
        <Box mb="30px"></Box>
        <AutoplayImageSlider
          arr={DataReducer?.data?.singapore?.corousal || imgArr}
        />
        <Heading fontSize="30px" margin={"55px 0 8px 0"}>
          Shop, Book and Bring Home A Part of Singapore
        </Heading>
        <Text fontSize="18px" mb="10px">
          Everything that comes with the Singapore tag is made with passion. New
          collaborations with Airbnb and Krisshop in India are testament to
          that. Bring the luxurious Singapore shopping experience at home by
          browsing through clothing, food and home decor products. Click on what
          you like and start shopping!
        </Text>
        <MediumSlider
          arr={DataReducer?.data?.singapore?.Shop_Book || []}
          limit={3}
          setNavigation={DataReducer?.data?.singapore?.Shop_Book.length < 3}
        />
        <Heading fontSize="30px" margin={"55px 0 8px 0"}>
          What Are You Excited To Reserve in Singapore?
        </Heading>
        <Text fontSize="18px" mb="12px">
          From the bustling neighbourhoods and shopping districts to quieter
          heartlands and secluded islands, every corner in Singapore has
          something fun waiting in store. What are you excited to reserve in
          Singapore on your next trip to the Lion City? Explore what awaits you
          and share your reserve list with fellow travellers!
        </Text>
        <Image
          src="https://cdn1.tripoto.com/media/filter/nxxl/img/1745358/Image/1643970247_sg_banners_08.jpg"
          borderRadius={"10px"}
        />

        <Heading fontSize="30px" margin={"55px 0 8px 0"}>
          Watch Chhota Bheem's Adventures In Singapore
        </Heading>
        <Text fontSize="18px" mb="12px">
          Gather your tiny tots because their favourite character, Chhota Bheem
          is travelling to Singapore with all his friends! Watch your children’s
          faces gleam with delight as they follow the adventures of Chhota Bheem
          in the fine city.
        </Text>
        <MediumSlider
          arr={DataReducer?.data?.singapore?.chhota_bheem || []}
          limit={3}
          setPagination={false}
        />

        <Heading fontSize="30px" margin={"55px 0 8px 0"}>
          Festivals You Can't Miss in Singapore
        </Heading>
        <Text fontSize="18px" mb="12px">
          Whether it’s the festive celebration of Chinese New Year or the roar
          of Formula 1 cars, there’s always a party going on somewhere on the
          island. These are some of the top annual festivals and events in
          Singapore from January to December that should be on your travel
          calendar.
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap="auto" templateRows="rows">
          {DataReducer?.data?.singapore?.image_grid.map((elem, i) => (
            <Image src={elem.image} />
          ))}
        </Grid>

        <Heading fontSize="30px" margin={"55px 0 8px 0"}>
          What’s New and Marvellous in Singapore{" "}
        </Heading>
        <Text fontSize="18px" mb="12px">
          Singapore is so much more than its skyscrapers. Explore Singapore’s
          most marvellous attractions that will add delight to your travel
          experience.
        </Text>
        <MediumSlider
          arr={DataReducer?.data?.singapore?.whats_new || []}
          setNavigation={false}
        />

        <Heading fontSize="30px" margin={"55px 0 8px 0"}>
          Singapore For Foodies: All You Need To Know
        </Heading>
        <Text fontSize="18px" mb="12px">
          From the uber-lux kitchens of Michelin-star restaurants to the hawker
          centres frequented by locals, find out about the best of Singapore’s
          food scene here.
        </Text>
        <MediumSlider
          arr={DataReducer?.data?.singapore?.for_foodies || []}
          setNavigation={false}
        />

        <Heading fontSize="30px" margin={"55px 0 8px 0"}>
          Take a Look Back at The Most 'Singapore-Ful' Moments of 2021
        </Heading>
        <Text fontSize="18px" mb="12px">
          A look back on a wonderful year of meaningful and exciting events
          where despite travel restrictions, we brought the flavors and spirit
          of Singapore to you, dear travellers, who we missed so much!
        </Text>
        <MediumSlider
          arr={DataReducer?.data?.singapore?.take_a_look || []}
          setNavigation={false}
        />

        <Heading fontSize="30px" margin={"55px 0 8px 0"}>
          Head out and explore Singapore’s Street Art{" "}
        </Heading>
        <Text fontSize="18px" mb="12px">
          The streets of Singapore have a way of coming alive! Read on to find
          out the most aesthetic neighbourhoods that will leave you inspired.
        </Text>
        <MediumSlider
          arr={DataReducer?.data?.singapore?.head_out || []}
          setNavigation={true}
        />

        <Heading fontSize="30px" margin={"55px 0 8px 0"}>
          Find Your Passion, Find Your Tribe{" "}
        </Heading>
        <Text fontSize="18px" mb="12px">
          What do you seek when you travel? Striking collectibles, flavours to
          make your taste buds sing or a drink that can be your best pal for the
          night? In Singapore, you can find your passion and your tribe no
          matter where you go.
        </Text>
        <AutoplayImageSlider
          arr={DataReducer?.data?.singapore?.find_your_passion || []}
          borderRad={"20px"}
        />
      </Container>
    </Box>
  );
};

export default Singapore;
