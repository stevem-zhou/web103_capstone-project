import { Flex, Image, Input, Text } from "@chakra-ui/react";
import AvatarPFP from "../assets/Avatar.png";

export default function Navbar() {
  return (
    <Flex>
      <Flex
        w={"100vw"}
        h={"10vh"}
        backgroundColor={"#0064a4"}
        justify={"center"}
        align={"center"}
      >
        <Flex w={"30%"}>
          <Input placeholder="Search for course..." background={"white"} />
        </Flex>

        <Flex w={"30%"}></Flex>
        <Flex w={"30%"} align={"center"} justify={"flex-end"} gap={"2%"}>
          <Text as="b" color={"white"}>
            Welcome, Joe Biden
          </Text>
          <Image src={AvatarPFP} />
        </Flex>
      </Flex>
    </Flex>
  );
}
