import { useState } from "react";
import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import gif from "../assets/web103-capstone-navbar.gif"

export default function CoursePage() {
  const { id } = useParams();
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  return (
    <>
      <Navbar />
      <Flex flexDir={"column"} justify={"center"} align={"center"}>
        <Text>This page is {id}</Text>
        <Flex align={"center"} justify={"center"}>
          {[...Array(5)].map((_, index) => (
            <Icon
              key={index}
              as={FaStar}
              color={index < rating ? "yellow.500" : "gray.300"}
              onClick={() => handleClick(index)}
              cursor="pointer"
            />
          ))}
        </Flex>
      </Flex>
    </>
  );
}
