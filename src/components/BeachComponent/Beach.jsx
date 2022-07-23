import React from "react";
import { Box } from "@chakra-ui/react";
import "../BeachComponent/beach.css";
import {ImageCard} from "./ImageCard";
import { moreDetail, packages, properties, vlogs } from "./data";
import BasicSlider from "../UsableSliders/BasicSlider";
import AdvancedSlider from "../UsableSliders/AdvancedSlider";
import DetailsSlider from "../UsableSliders/DetailsSlider";
const Beach = () => {
console.log("moreDetail",moreDetail);

  return (
    <div className="main-container">
      <div className="top-cont">
        <h1 className="beach">Beaches</h1>
        <p className="beach para">
          The crunch of white sand beneath your feet and the thundering ocean
          beckoning you into its cool waters. Explore all you need to know about
          taking a trip to the beach!
        </p>
      </div>
      <div className="top-beach">
        <h1 className="beach beach-head">
          Tripoto's Top Beach Picks for January, February, March 2022
        </h1>
        <ImageCard />
      </div>
      <Box>
        <h1 className="beach beach-head">
          Top Beach Properties You Need to Experience This Year
        </h1>
        <BasicSlider arr={properties || []} />
      </Box>
      <Box>
      <h1 className="beach beach-head">Packages</h1>
      <AdvancedSlider
            arr={packages || []}
            limit={4}
          />
      </Box>
     <Box>
      <h1 className="beach beach-head">Explore Our Comprehensive Guides for More Details</h1>
      <DetailsSlider arr={moreDetail || []}/>
     </Box>
     <Box>
     <h1 className="beach beach-head">Top Tripoto Vlogs for Beaches This Week</h1>
     <BasicSlider arr={vlogs || []}  />
     </Box>
    </div>
  );
};

export default Beach;
