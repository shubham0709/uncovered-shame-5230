import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataAPI } from "../Redux/DataReducer/action";
import { Box } from "@chakra-ui/react";
import Slider from "../components/Slider/Slider";

const Homepage = () => {
  const dispatch = useDispatch();
  const { AuthReducer, DataReducer } = useSelector((state) => state);
  useEffect(() => {
    if (DataReducer.data.length == 0) {
      dispatch(getDataAPI());
    }
  }, []);

  useEffect(() => {
    console.log(DataReducer);
  }, [DataReducer.data.length]);

  return (
    <Box>
      <h1>HOME PAGE</h1>
    </Box>
  );
};

export default Homepage;
