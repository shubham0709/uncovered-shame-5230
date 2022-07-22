import Login from "./Login";
import Signup from "./Signup";
import React from "react";
import { Box } from "@chakra-ui/react";

const AuthComponent = () => {
  return (
    <Box>
      <Login />
      <Signup />
    </Box>
  );
};

export default AuthComponent;
