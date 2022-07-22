import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  VStack,
  useDisclosure,
  Button,
  Image,
  Text,
  Input,
  TagLabel,
  Flex,
  Box,
  Checkbox,
  Link,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getDatafromLocalStorage,
  saveDataToLocalStorage,
} from "../../utils/localstorage";
import { registerAPI } from "../../Redux/AuthReducer/action";

const SignupModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [creds, setCreds] = useState({
    name: "",
    email: "",
    password: "",
    countryCode: "",
  });
  const changeHandler = (e) => {
    let { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  const signupHandler = () => {
    dispatch(registerAPI(creds));
  };

  return (
    <>
      <Button mt="200px" onClick={onOpen}>
        Sign Up
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Button mt="30px" w="90%" bg="#334C8C" color="white">
                <Image
                  mr="10px"
                  w="30px"
                  h="30px"
                  src="https://cdn-icons.flaticon.com/png/512/4494/premium/4494475.png?token=exp=1658514446~hmac=f73d4a801d3aa9abadb1b9d2687d3cc4"
                />
                Login with facebook
              </Button>
              <Button w="90%" color="black">
                <Image
                  mr="10px"
                  w="20px"
                  h="20px"
                  src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                />
                Login with Google
              </Button>
              <Text>OR</Text>
              <Input
                value={creds.name}
                w="90%"
                name="name"
                placeholder="NAME"
                onChange={changeHandler}
              />
              <Input
                value={creds.email}
                w="90%"
                name="email"
                placeholder="EMAIL"
                onChange={changeHandler}
              />
              <Input
                value={creds.password}
                w="90%"
                name="password"
                placeholder="PASSWORD"
                onChange={changeHandler}
              />
              <Flex w="90%" direction="row" justifyContent="space-between">
                <Box>
                  <Checkbox>Remember</Checkbox>
                </Box>
                <Link color="blue">Forgot Password ?</Link>
              </Flex>
              <Select
                name="countryCode"
                w="90%"
                placeholder="India(+91)"
                onChange={changeHandler}
              >
                <option value="91">India (+91)</option>
                <option value="1">United States (+1)</option>
                <option value="971">United Arab Emirates (+971)</option>
                <option value="65">Singapore (+65)</option>
                <option value="1">Canada (+1)</option>
                <option value="975">Bhutan (+975)</option>
                <option value="49">Germany (+49)</option>
                <option value="977">Nepal (+977)</option>
              </Select>
              <Box w="90%" textAlign="left">
                <Checkbox>Subscribe to newsletter</Checkbox>
              </Box>
              <Flex
                w="90%"
                h="50px"
                bg="#c9c9c9"
                justifyContent="space-between"
              >
                <Checkbox ml="20px">I am not a Robot</Checkbox>
                <Image
                  w="50px"
                  h="50px"
                  src="https://as1.ftcdn.net/v2/jpg/03/74/83/28/1000_F_374832817_o1XM5iP8cKloqbNCMAQZjC2wijiNxcec.jpg"
                />
              </Flex>
              {/* continue */}
              <Button
                onClick={signupHandler}
                w="90%"
                bg="crimson"
                color="white"
              >
                SIGN UP
              </Button>
              <Text>
                Already Registered? <Link color="blue">Login</Link>
              </Text>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default SignupModal;
