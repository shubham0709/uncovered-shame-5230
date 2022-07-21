import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataAPI } from "../Redux/DataReducer/action";
import { Box } from "@chakra-ui/react";
import Slider from "../components/Slider/Slider";
import Navbar from "../components/Navbar/Navbar";
import styles from "../Styles/HomePage.module.css";
import { Search2Icon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/react";

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
    <div className={styles.HomePageWrapper}>
      <Navbar />
      <div>
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
      <div style={{ height: "5000px", backgroundColor: "teal" }}></div>
    </div>
  );
};

export default Homepage;
