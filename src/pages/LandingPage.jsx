import React, { useEffect } from "react";
import { Box, Image, Flex, Text, Heading, SimpleGrid } from "@chakra-ui/react";
import BasicSlider from "../components/UsableSliders/BasicSlider";
import MediumSlider from "../components/UsableSliders/MediumSlider";
import AdvancedSlider from "../components/UsableSliders/AdvancedSlider";
import ImageSlider from "../components/UsableSliders/ImageSlider";
import { useSelector, useDispatch } from "react-redux";
import { getDataAPI } from "../Redux/DataReducer/action";
import styles from "../Styles/HomePage.module.css";
import { Search2Icon } from "@chakra-ui/icons";

export const LandingPage = () => {
  const dispatch = useDispatch();
  const { AuthReducer, DataReducer } = useSelector((state) => state);
  useEffect(() => {
    if (DataReducer.data.length === 0) {
      dispatch(getDataAPI());
    }
  }, []);

  useEffect(() => {
    // console.log(DataReducer.data.landing);
  }, [DataReducer.data.length]);

  return (
    <Box>
      <div className={styles.HomePageWrapper}>
        <div border="1px solid red">
          <img
            className={styles.TopImageWithInput}
            src="https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg"
            alt=""
          />
          <div className={styles.SearchMainDiv}>
            <h1 className={styles.SearchBarHead}>
              India's Largest Community of Travellers
            </h1>
            <div className={styles.InputDiv}>
              <input
                className={styles.SearchInputbar}
                placeholder="Search for Itineraries, destinations, hotels or activities"
              />
              <div className={styles.SearchIconDiv}>
                <Search2Icon w={5} h={5} color="grey" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Middle Part... */}
      <Box w="85%" margin={" 0 auto"}>
        <Box margin="30px 0">
          <Flex justifyContent={"space-between"}>
            <Image
              w="24%"
              src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png"
            />
            <Image
              w="24%"
              src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192307_cc.png"
            />
            <Image
              w="24%"
              src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192273_bb.png"
            />
            <Image
              w="24%"
              src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192344_dd.png"
            />
          </Flex>
        </Box>
        <Box
          textAlign="left"
          fontFamily="circularairpro-bold, Helvetica, Arial, sans-serif"
          lineHeight="30.8px"
          color="RGB(51, 51, 51)"
        >
          <Heading as="h2" size="xl" margin={"55px 0 25px 0"}>
            In the Spotlight : Partnerships
          </Heading>
          <MediumSlider arr={DataReducer?.data?.landing?.spotlight || []} />
          <Box margin={"30px 0"}>
            <Image
              borderRadius="5px"
              src="https://cdn1.tripoto.com/media/transfer/img/2224454/Image/1656479622_header_web2.gif"
            />
          </Box>
          <Heading as="h2" size="xl" margin={"55px 0 25px 0"}>
            Find Best Places to Visit in India in July & August
          </Heading>
          <BasicSlider
            arr={DataReducer?.data?.landing?.find_best_places || []}
          />
          <Heading as="h2" size="xl" margin={"55px 0 25px 0"}>
            Plan International Trips for July & August
          </Heading>
          <BasicSlider arr={DataReducer?.data?.landing?.checkout_best || []} />
          <Heading as="h2" size="xl" margin={"55px 0 25px 0"}>
            Check Out Best Hotels and Properties for Every Type of Traveller
          </Heading>
          <AdvancedSlider
            arr={DataReducer?.data?.landing?.travel_learn || []}
          />

          <Heading as="h2" size="xl" margin={"55px 0 25px 0"}>
            Travel and Learn with Tripoto's Mindful Retreats
          </Heading>
          <AdvancedSlider
            arr={DataReducer?.data?.landing?.attend_online || []}
          />
          <Heading as="h2" size="xl" margin={"55px 0 25px 0"}>
            Book Budget Tour Packages Curated For You
          </Heading>

          <AdvancedSlider
            arr={DataReducer?.data?.landing?.book_budget || []}
            limit={4}
          />
          <Heading as="h2" size="xl" margin={"15px 0"}>
            In the Spotlight: Tripoto Creators of the Month
          </Heading>
          <Text color="black.500" margin={"8px"} fontSize="24px" fontWeight="500"
          fontFamily="circularairpro-bold, Helvetica, -apple-system,Arial, sans-serif"
      verticalAlign="baseline"
      wordSpacing="0px"
      lineHeight="35.7143px"
      letterSpacing="1"
          >
            Tripoto Family is a community of travel content creators who create
            stunning photo blogs, engaging reels and videos as well as
            informative articles. Here are the most promising creators of the
            month who took us on a beautiful journey across India and the world
            through their content. Kudos to Tripoto's best creators for May
            2022!
          </Text>
{/* <SimpleGrid columns={2} spacingX='200px' spacingY='200px'> */}
          <Flex
            h="600px"
            justifyContent={"space-between"}
            w="100%"
          >
            <Image
              w="480px"
              borderRadius={"5px"}
              src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1657797228_9.jpg"
            />
            <Image
              w="480px"
              borderRadius={"5px"}
              src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1657797266_8.jpg"
            />
            <Image
              w="480px"
              borderRadius={"5px"}
              src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1657797979_10_1.jpg"
            />
          </Flex>
          {/* </SimpleGrid> */}
          <Heading as="h2" size="xl" margin={"55px 0 25px 0"}>
            Plan Your Next Trip Using Tripoto's Complete Destination Guides
          </Heading>
          <ImageSlider arr={DataReducer?.data?.landing?.plan_your_next || []} />
      
          <Heading as="h2" size="xl" margin={"55px 0 25px 0"}>
            Watch Tripoto's Top Travel Vlogs of the Week
          </Heading>
          <BasicSlider arr={DataReducer?.data?.landing?.watch_tripotos || []} />
    
        </Box>
      </Box>
    </Box>
  );
};
