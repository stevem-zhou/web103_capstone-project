import { useState, useEffect } from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import courseData from "../data/CourseData.json";


export default function CoursePage() {
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [courseInfo, setCourseInfo] = useState([]);

  useEffect(() => {
    setCourseInfo(courseData.courses[id]);
  }, []);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  console.log(courseInfo)

  return (
    <>
      <Navbar />
      <Flex flexDir={"column"} justify={"center"} align={"center"}>
        <Text>This page is {courseInfo.name}</Text>
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
