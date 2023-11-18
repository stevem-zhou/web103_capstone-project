import { Flex, Text, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export default function CourseItem({ courseName, rating, id }) {
  const navigate = useNavigate();

  return (
    <Flex
      h="5em"
      w="60%"
      backgroundColor={"#74a7c4"}
      borderRadius={15}
      justify={"space-between"}
      align={"center"}
      padding={"2em"}
    >
      <Flex
        flexDir={"column"}
        w={"30%"}
        justify={"center"}
        align={"center"}
        maxW={"30%"}
        height={"5em"}
        maxHeight={"5em"}
      >
        <Text fontSize={15} fontWeight={600} color={"#e8e34f"}>
          COURSE NAME
        </Text>
        <Text
          fontSize={18}
          fontWeight={700}
          textAlign={"center"}
          color={"white"}
        >
          {courseName}
        </Text>
      </Flex>
      <Flex
        flexDir={"column"}
        w={"30%"}
        justify={"center"}
        align={"center"}
        maxW={"30%"}
        height={"5em"}
        maxHeight={"5em"}
      >
        <Text fontSize={15} fontWeight={600} color={"#e8e34f"}>
          RATING
        </Text>
        <Text
          fontSize={18}
          fontWeight={700}
          textAlign={"center"}
          color={"white"}
        >
          {rating}
        </Text>
      </Flex>
      <Flex
        flexDir={"column"}
        w={"30%"}
        justify={"center"}
        align={"center"}
        maxW={"30%"}
        height={"5em"}
        maxHeight={"5em"}
      >
        <Text fontSize={15} fontWeight={600} color={"#e8e34f"}>
          CHECK REVIEWS
        </Text>
        <Button
          h={"1.8em"}
          rightIcon={<ArrowForwardIcon />}
          colorScheme="facebook"
          color={"white"}
          onClick={() => navigate(`/course/${id}`)}
        >
          Reviews
        </Button>
      </Flex>
    </Flex>
  );
}
