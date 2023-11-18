import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import courseData from "../data/CourseData.json";
import Navbar from "../components/Navbar";
import CourseItem from "../components/CourseItem";

export default function HomePage() {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    setCourse(courseData.courses);
  }, []);

  const courseList = course.map((course) => (
    <CourseItem
      courseName={course.name}
      rating={course.rating}
      id={course.id}
    />
  ));

  return (
    <Flex
      flexDirection={"column"}
      background={"#5386ad"}
      // h={"100vh"}
      overflow={"hidden"}
    >
      <Navbar />
      <Flex
        padding={"2em"}
        flexDir={"column"}
        align={"center"}
        gap={"2em"}
      >
        {courseList}
      </Flex>
    </Flex>
  );
}
