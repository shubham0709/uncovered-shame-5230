import React from 'react'
import styles from "../../Styles/Footer.module.css"
import { ReactNode } from 'react';

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

const Logo = () => {
  return (
    <img style={{height:"50px"}} src="https://cdn1.tripoto.com/assets/2.9/img/logo/header-blue.svg" alt="" />
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack}   maxW={'12xl'}py={10}>
        <SimpleGrid 
      
          borderTop="1.5px solid grey"
          borderBottom="1.5px solid grey"
          padding="30px 0px" 
          templateColumns={{ sm: '1fr 1fr', md: '1.5fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={2}  width="250px" marginRight="-20px" paddingLeft="15px">
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'md'} borderBottom="2px solid grey" textAlign="left" pb="15px">
              India's Largest Travel Community
            </Text>
            <Flex gap="10px" marginTop="20px">
            <i style={{fontSize:"35px",cursor:"pointer"}} className="fa-brands fa-facebook-square"></i>
            <i style={{fontSize:"35px",cursor:"pointer"}} className="fa-brands fa-twitter-square"></i>
            <i style={{fontSize:"35px",cursor:"pointer"}} className="fa-brands fa-instagram"></i>
            <i style={{fontSize:"35px",cursor:"pointer"}} className="fa-brands fa-youtube"></i>
            <i style={{fontSize:"35px",cursor:"pointer"}} className="fa-brands fa-pinterest-square"></i>


            </Flex>
            <Box>
            <img 
               src="https://cdn1.tripoto.com/assets/2.9/img/logo/download-android-app.svg" alt="google store" 
               style={{margin:"10px",cursor:"pointer"}}   
            />
            </Box>
          </Stack>
          <Stack align={'flex-start'} >
            <ListHeader>About Tripoto</ListHeader>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>How it works</Link>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>FAQ's</Link>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Privacy Policy</Link>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Terms & Conditions</Link>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Careers</Link>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Contact Us</Link>
          </Stack>
          <Stack align={'flex-start'} >
            <ListHeader>Products</ListHeader>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Tour Packages</Link>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Travel Guides</Link>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Trips & Itineraries</Link>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Weekend Getaways</Link>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Places to Visit</Link>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Other Travel Categories</Link>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Tripoto Forum</Link>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Honeymoon Packages</Link>
          </Stack>
          <Stack align={'flex-start'} >
            <ListHeader>Important Travel Links</ListHeader>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Goa Tourism</Link>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Dubai Tourism</Link>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Singapore Tourism</Link>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Kerala Tourism</Link>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Manali Tourism</Link>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Bali Tourism</Link>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Sri Lanka Tourism</Link>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Honeymoon Destinations In India</Link>
          </Stack>
          <Stack align={'flex-start'} >
            <ListHeader>Partner Programs</ListHeader>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Buy Travel Leads</Link>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Partner With Us</Link>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Earn Credits</Link>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Get Paid To Travel</Link>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Import Blog To Itinerary</Link>
            <Link style={{textDecoration:"none"}} fontSize="md" textDecoration="none" fontWeight="semiBold" textAlign="left" href={'#'}>Tripoto Ai</Link>
          </Stack>
        </SimpleGrid>
        <Box  paddingBottom="90px" fontWeight="semiBold" fontSize="md">
        © All rights reserved.
        </Box>
      </Container>
    </Box>
  );
}