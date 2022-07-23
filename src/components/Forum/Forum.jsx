import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
const Forum = () => {
  let buttons = [
    "Popular",
    "Ladakh",
    "Goa",
    "Kashmir",
    "Pondicherry",
    "September",
  ];
  return (
    <>
      <Box w="100%" h="69px" bg="#2F9BDB"></Box>
      <Container maxW="90%" h="1400px">
        <Flex maxW="100%">
          <Container maxW="68%" h="500px">
            <Flex w="100%" h="100px" mt="30px" alignItems="center">
              <Image
                h="70px"
                w="70px"
                src="https://sharkspotters.org.za/wp-content/uploads/2015/12/Outreach-Icon.png"
              />
              <Box textAlign="left">
                <Text fontSize="25px">Travel Forum</Text>
                <Text>
                  Get answers & discussion from real Tripoto travelers
                </Text>
              </Box>
            </Flex>
            <Box>
              <Input
                position="relative"
                type="text"
                placeholder="Post your Question..."
                h="100px"
                w="100%"
                fontSize="25px"
                color="black"
              />
              <Button
                bg="#2F9BDB"
                mt="45px"
                borderRadius="40px"
                position="absolute"
                ml="-80px"
                color="white"
              >
                Post
              </Button>
            </Box>
            <Flex justify="left" gap="10px" mt="30px">
              <Input placeholder="search here..." w="30%" />
              {buttons.map((x, i) => (
                <Button
                  borderRadius="20px"
                  key={i}
                  colorScheme="blue"
                  variant="outline"
                >
                  {x}
                </Button>
              ))}
            </Flex>
            <VStack w="100%" mt="50px">
              <Flex w="100%" justifyContent="spaceBetween">
                <Flex alignItems="center" w="80%">
                  <Image
                    h="50px"
                    w="50px"
                    borderRadius="50%"
                    src="https://cdn1.tripoto.com/media/filter/mss/img/109540/UserPhoto/1656231468_82af710a_526f_4390_8dcb_cd4d3b01fa61.jpeg"
                  />
                  <Text textAlign="left" fontSize="20px">
                    travelogy Blog
                  </Text>
                </Flex>
                <Text>Today 2:11 AM</Text>
              </Flex>
              <Text
                pl="30px"
                w="100%"
                fontSize="20px"
                fontWeight="500"
                textAlign="left"
              >
                The best 5 beaches in India?
              </Text>
              <Flex w="100%" justifyContent="space-between">
                <Flex maxW="100%" fontSize="15px" gap="10px">
                  <Text fontSize="20px" fontWeight="bold">
                    Answer
                  </Text>
                  <Text fontSize="20px" fontWeight="bold">
                    Wishlist
                  </Text>
                </Flex>
                <Flex>
                  <Image
                    w="100px"
                    h="50px"
                    src="https://png.pngitem.com/pimgs/s/461-4612891_social-media-etiquette-generally-advises-users-not-facebook.png"
                  />
                </Flex>
              </Flex>
            </VStack>
            <VStack w="100%" mt="50px">
              <Flex w="100%" justifyContent="spaceBetween">
                <Flex alignItems="center" w="80%">
                  <Image
                    h="50px"
                    w="50px"
                    borderRadius="50%"
                    src="https://cdn1.tripoto.com/media/filter/mss/img/2261558/UserPhoto/1658216687_1658216687129.jpg"
                  />
                  <Text textAlign="left" fontSize="20px">
                    travelogy Blog
                  </Text>
                </Flex>
                <Text>Today 2:11 AM</Text>
              </Flex>
              <Text
                pl="30px"
                w="100%"
                fontSize="20px"
                fontWeight="500"
                textAlign="left"
              >
                Best bike road circuit in uttrakhand within 500km ...,
              </Text>
              <Flex w="100%" justifyContent="space-between">
                <Flex maxW="100%" fontSize="15px" gap="10px">
                  <Text fontSize="20px" fontWeight="bold">
                    Answer
                  </Text>
                  <Text fontSize="20px" fontWeight="bold">
                    Wishlist
                  </Text>
                </Flex>
                <Flex>
                  <Image
                    w="100px"
                    h="50px"
                    src="https://png.pngitem.com/pimgs/s/461-4612891_social-media-etiquette-generally-advises-users-not-facebook.png"
                  />
                </Flex>
              </Flex>
            </VStack>
            <VStack w="100%" mt="50px">
              <Flex w="100%" justifyContent="spaceBetween">
                <Flex alignItems="center" w="80%">
                  <Image
                    h="50px"
                    w="50px"
                    borderRadius="50%"
                    src="https://cdn1.tripoto.com/media/filter/mss/img/1990544/UserPhoto/1591687019_1591686963213.jpg"
                  />
                  <Text textAlign="left" fontSize="20px">
                    travelogy Blog
                  </Text>
                </Flex>
                <Text>Today 2:11 AM</Text>
              </Flex>
              <Text
                pl="30px"
                w="100%"
                fontSize="20px"
                fontWeight="500"
                textAlign="left"
              >
                Can anyone suggest Best place to visit during monsoon in
                himachal Pradesh
              </Text>
              <Flex w="100%" justifyContent="space-between">
                <Flex maxW="100%" fontSize="15px" gap="10px">
                  <Text fontSize="20px" fontWeight="bold">
                    Answer
                  </Text>
                  <Text fontSize="20px" fontWeight="bold">
                    Wishlist
                  </Text>
                </Flex>
                <Flex>
                  <Image
                    w="100px"
                    h="50px"
                    src="https://png.pngitem.com/pimgs/s/461-4612891_social-media-etiquette-generally-advises-users-not-facebook.png"
                  />
                </Flex>
              </Flex>
            </VStack>
            <VStack w="100%" mt="50px">
              <Flex w="100%" justifyContent="spaceBetween">
                <Flex alignItems="center" w="80%">
                  <Image
                    h="50px"
                    w="50px"
                    borderRadius="50%"
                    src="https://cdn1.tripoto.com/media/filter/mss/img/713055/UserPhoto/1657695084_1657695083105.jpg"
                  />
                  <Text textAlign="left" fontSize="20px">
                    travelogy Blog
                  </Text>
                </Flex>
                <Text>Today 2:11 AM</Text>
              </Flex>
              <Text
                pl="30px"
                w="100%"
                fontSize="20px"
                fontWeight="500"
                textAlign="left"
              >
                Best place for a 3 day trip from Bangalore?
              </Text>
              <Flex w="100%" justifyContent="space-between">
                <Flex maxW="100%" fontSize="15px" gap="10px">
                  <Text fontSize="20px" fontWeight="bold">
                    Answer
                  </Text>
                  <Text fontSize="20px" fontWeight="bold">
                    Wishlist
                  </Text>
                </Flex>
                <Flex>
                  <Image
                    w="100px"
                    h="50px"
                    src="https://png.pngitem.com/pimgs/s/461-4612891_social-media-etiquette-generally-advises-users-not-facebook.png"
                  />
                </Flex>
              </Flex>
            </VStack>
            <VStack w="100%" mt="50px">
              <Flex w="100%" justifyContent="spaceBetween">
                <Flex alignItems="center" w="80%">
                  <Image
                    h="50px"
                    w="50px"
                    borderRadius="50%"
                    src="https://cdn1.tripoto.com/media/filter/mss/img/20061/UserPhoto/1584149411_1584149409263.jpg"
                  />
                  <Text textAlign="left" fontSize="20px">
                    travelogy Blog
                  </Text>
                </Flex>
                <Text>Today 2:11 AM</Text>
              </Flex>
              <Text
                pl="30px"
                w="100%"
                fontSize="20px"
                fontWeight="500"
                textAlign="left"
              >
                Is delhi can be visited in August??? must go place in India
                during monsoon in August? Any group???
              </Text>
              <Flex w="100%" justifyContent="space-between">
                <Flex maxW="100%" fontSize="15px" gap="10px">
                  <Text fontSize="20px" fontWeight="bold">
                    Answer
                  </Text>
                  <Text fontSize="20px" fontWeight="bold">
                    Wishlist
                  </Text>
                </Flex>
                <Flex>
                  <Image
                    w="100px"
                    h="50px"
                    src="https://png.pngitem.com/pimgs/s/461-4612891_social-media-etiquette-generally-advises-users-not-facebook.png"
                  />
                </Flex>
              </Flex>
            </VStack>
          </Container>
          <Container maxW="30%" h="500px">
            <Image
              borderRadius="15px"
              src="https://i.ibb.co/BcfLb2P/djsh.jpg"
              mt="30px"
            />
            <Image
              mt="30px"
              h="500px"
              src="https://i.ibb.co/k6Jbstw/fkjdnfkjs.jpg"
            />
          </Container>
        </Flex>
      </Container>
    </>
  );
};

export default Forum;
