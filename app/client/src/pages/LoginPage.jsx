import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Box,
  Text,
  Heading,
  StackDivider,
  Flex,
  Input,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import background from "../assets/background.jpg";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <Flex
      bgImage={background}
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Card>
        <CardHeader>
          <Heading size="md">Login</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Username
              </Heading>
              <Input placeholder="Enter username" mt={1}></Input>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Password
              </Heading>
              <Input placeholder="Enter password" mt={1}></Input>
            </Box>
          </Stack>
          <Button
            bgColor="green"
            colorScheme="white"
            mt={3}
            onClick={handleLogin}
          >
            Login
          </Button>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default LoginPage;
