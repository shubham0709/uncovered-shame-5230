import React from 'react'
import { CardList } from '../components/CardComponents/CardList'
import {Box,Image ,Flex} from "@chakra-ui/react";

export const LandingPage = () => {
  return (
    <Box>
      <Box w="80%" margin={"auto"}>
       <Flex justifyContent={"space-around"}>
       <Image w="25%" src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png"></Image>
        <Image w="25%" src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192307_cc.png"></Image>
        <Image w="25%" src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192273_bb.png"></Image>
        <Image w="25%" src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192344_dd.png"></Image>
       </Flex>
      </Box>
    </Box>
  )
}
