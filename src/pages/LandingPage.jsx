import React from "react";
import { Box, Image, Flex, Divider } from "@chakra-ui/react";
import BasicSlider from "../components/UsableSliders/BasicSlider";
import MediumSlider from "../components/UsableSliders/MediumSlider";
import AdvancedSlider from "../components/UsableSliders/AdvancedSlider";
import { useSelector, useDispatch } from "react-redux";
import { getDataAPI } from "../Redux/DataReducer/action";
import Slider from "../components/Slider/Slider";
import Navbar from "../components/Navbar/Navbar"
import styles from "../Styles/HomePage.module.css"
import {Search2Icon} from "@chakra-ui/icons"
import { Input } from "@chakra-ui/react";


export const LandingPage = () => {
  return (
    <Box>
        <div className={styles.HomePageWrapper} >
     <Navbar />
     <div border="1px solid red">
        <img 
            className={styles.TopImageWithInput} src="https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg" 
            alt="" 
        />
        <div className={styles.SearchMainDiv}>
            <h1 className={styles.SearchBarHead}>India's Largest Community of Travellers</h1>
             <div className={styles.InputDiv}>
                <input
                   className={styles.SearchInputbar} 
                   placeholder="Search for Itineraries, destinations, hotels or activities" 
                />
                <div className={styles.SearchIconDiv}><Search2Icon w={5} h={5} color="grey"/></div>
             </div>
        </div>
    </div>
    </div>;
    {/* Middle Part... */}
     <Box w="85%" margin={" 0 auto"}>
     <Box margin="30px 0">
        <Flex justifyContent={"space-between"} >
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
      <Box>
        <BasicSlider></BasicSlider>
        <Box margin={"30px 0"} >
        <Image borderRadius="5px" src="https://cdn1.tripoto.com/media/transfer/img/2224454/Image/1656479622_header_web2.gif"/>
      </Box>
        <MediumSlider></MediumSlider>
        <AdvancedSlider></AdvancedSlider>
      </Box>
     </Box>
    </Box>
  );
};
