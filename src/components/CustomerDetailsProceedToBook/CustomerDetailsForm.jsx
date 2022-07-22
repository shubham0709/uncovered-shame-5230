import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";
import {
  saveDataToLocalStorage,
} from "../../utils/localstorage";
import React, { useState } from "react";

export default function CustoemrDetailForm() {
  const [countOfPeople, setCountOfPeople] = React.useState(1);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [departureCity, setDepartureCity] = useState("");
  const [date, setDate] = useState("");
  const [typeOfRoom, setTypeOfRoom] = useState("");
  let priceStr = JSON.parse(localStorage.getItem("bookingAmount")).price;

  let arr = ["1", "2", "3", "4", "5", "6", "7", "9", "0"];
  let ans = "";
  for (let i = 0; i < priceStr.length; i++) {
    if (arr.indexOf(priceStr[i]) !== -1) {
      ans += priceStr[i];
    }
  }

  let price = Number(ans) || 10000;
  price = Number(price);

  const proceedToNext = () => {
    const userDetails = {
      email: email,
      amount: price * countOfPeople,
      username: username,
      contact: contact,
      departureCity: departureCity,
      date: date,
      typeOfRoom: typeOfRoom,
    };
    saveDataToLocalStorage("userDetails", userDetails);
  };
  return (
    <>
      <Box height="69px" width="100%" backgroundColor="#2f9bdb"></Box>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex>
          <div
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              margin: "auto",
              height: "100vh",
            }}
          >
            <Flex p={8} flex={1} align={"center"} justify={"center"}>
              <Stack spacing={4} w={"full"} maxW={"md"}>
                <Heading fontSize={"2xl"}>
                  Enter Your Details and Proceed To Book
                </Heading>
                <FormControl id="email">
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Email"
                  />
                </FormControl>
                <FormControl id="fullName">
                  <Input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    type="text"
                    placeholder="Full Name"
                  />
                </FormControl>
                <FormControl id="contactNumber">
                  <Input
                    onChange={(e) => setContact(e.target.value)}
                    value={contact}
                    type="tel"
                    placeholder="Contact Number"
                  />
                </FormControl>
                <FormControl id="departureCity">
                  <Input
                    onChange={(e) => setDepartureCity(e.target.value)}
                    value={departureCity}
                    type="text"
                    placeholder="Departure City"
                  />
                </FormControl>
                <FormControl id="numberOfPeople">
                  <Flex justifyContent="space-between">
                    <Box>
                      <Text margin="7px 0px 0px 5px">Number of People</Text>
                    </Box>
                    <Flex>
                      <Button
                        disabled={countOfPeople < 2}
                        border="1.5px solid grey"
                        onClick={() => setCountOfPeople(countOfPeople - 1)}
                      >
                        {" "}
                        -{" "}
                      </Button>
                      <Text margin="10px">{countOfPeople}</Text>
                      <Button
                        border="1.5px solid grey"
                        onClick={() => setCountOfPeople(countOfPeople + 1)}
                      >
                        {" "}
                        +{" "}
                      </Button>
                    </Flex>
                  </Flex>
                </FormControl>
                <FormControl id="Calender">
                  <Input
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    type="date"
                  />
                </FormControl>
                <FormControl id="bedRoomOccupancy">
                  <Text>Type Of room</Text>
                  <Input value={"twin"} type="radio" />
                </FormControl>
                <FormControl id="whatsAppUpdate">
                  <Input type="checkBox" />
                  <Text>Send me updates for this booking on WhatsApp</Text>
                  <Text>Type Of room</Text>
                </FormControl>
                <Box>
                  <Flex>
                    <Text>Amount : </Text>
                    <Text>{price * countOfPeople}</Text>
                  </Flex>
                </Box>
                <Box>
                  <Text>Taxes and discounts are calculated at checkout.</Text>
                </Box>
                <Stack spacing={6}>
                  <Button
                    colorScheme={"blue"}
                    onClick={() => proceedToNext()}
                    variant={"solid"}
                  >
                    {" "}
                    Next{" "}
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </div>
        </Flex>
      </Stack>
    </>
  );
}
