import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getDataCard_1 } from "../Redux/AppReducer/action";
import { Card1 } from "./Card1";
import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import { CardTravel } from "./CardTravel";
import { Card_3 } from "./CardBasic";
import { getDataCard_1 } from "../../Redux/AppReducer/action";
export const CardList = () => {
  const dispatch = useDispatch();
  const card_1 = useSelector((state) => state.AppReducer.cards);
  // const card_2 = useSelector((state) => state.AppReducer.cards);
  const [ndata, setNdata] = useState([]);

  const getHandleCard_1 = useCallback(() => {
    dispatch(getDataCard_1());
    for (let i = 0; i < 2; i++) {
      setNdata([...ndata], card_1[i]);
    }
  }, [dispatch, ndata, setNdata]);

  useEffect(() => {
    if (card_1.length === 0) {
      getHandleCard_1();
    }
  }, [getHandleCard_1, card_1.length]);

  // const getHandleCard_2 = useCallback(() => {
  //   dispatch(getDataCard_2());
  // }, [dispatch]);
  // useEffect(() => {
  //   if (card_2.length === 0) {
  //     getHandleCard_2();
  //   }
  // }, [getHandleCard_2, card_2.length]);

  return (
    <>
      {/* <Box textAlign={"left"}>
        <Text
          marginLeft={"100px"}
          fontSize="28px"
          font-family="circularairpro-bold, Helvetica, Arial, sans-serif"
          line-height="30.8px"
          font-weight="900"
        >
          In the Spotlight: Partnerships
        </Text>
        <SimpleGrid
          columns={[2, null, 4]}
          w="85%"
          border="1px solid black"
          margin="auto"
          color="#333333"
        >
          {card_1.length > 0 &&
            card_1.map((el) => {
              return <Card1 cardData={el} />;
            })}
        </SimpleGrid>
      </Box> */}
      <Flex>
        {" "}
        <Card1 />
        <CardTravel />
        <Card_3 />
      </Flex>
    </>
  );
};
