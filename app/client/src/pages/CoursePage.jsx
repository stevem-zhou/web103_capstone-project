import { useState } from "react";
import { Flex, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export default function CoursePage() {
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  return (
    <>
      <Flex w={"100vw"} h={"100vh"} align={"center"} justify={"center"}>
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
    </>
  );
}
