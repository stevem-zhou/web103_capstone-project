import { Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import AvatarPFP from "../assets/Avatar.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [course, setCourse] = useState("");
  const navigate = useNavigate();

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
          <Input
            placeholder="Search for course..."
            background={"white"}
            onChange={(e) => setCourse(e.target.value)}
            onSubmit={() => console.log(course)}
          />
          <Button onClick={() => navigate(`/course/${course}`)}>Search!</Button>
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
