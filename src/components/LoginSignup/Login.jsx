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
  HStack,
  Spacer,
} from "@chakra-ui/react";
import react, { useState } from "react";
import { getDatafromLocalStorage } from "../../utils/localstorage";
import { useDispatch, useSelector } from "react-redux";
import { loginAPI } from "../../Redux/AuthReducer/action";
import SignupModal from "./Signup";

const LoginModal = ({ isOpen, onOpen, onClose }) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    let { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  const loginHandler = () => {
    dispatch(loginAPI(creds));
  };

  return (
    <>
      <Text cursor="pointer" onClick={onOpen}>
        Login
      </Text>

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
                w="90%"
                name="email"
                placeholder="EMAIL"
                onChange={changeHandler}
              />
              <Input
                w="90%"
                name="password"
                placeholder="PASSWORD"
                onChange={changeHandler}
              />
              <Flex w="90%" direction="row" justifyContent="space-between">
                <Box>
                  <Checkbox />
                  <label>Remember</label>
                </Box>
                <Link color="blue">Forgot Password ?</Link>
              </Flex>
              <Button onClick={loginHandler} w="90%" bg="crimson" color="white">
                Login
              </Button>
              <HStack display="flex" justifyContent="spaceBetween">
                <Text>Dont have account ?</Text>
                <SignupModal />
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default LoginModal;
