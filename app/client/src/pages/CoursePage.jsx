import { useState, useEffect } from "react";
import { Flex, Icon, Text, Button, useDisclosure } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import courseData from "../data/CourseData.json";
import Review from "../components/Review";

import ReviewForm from "../components/ReviewForm.jsx";

import Backend from "../utils/Backend.jsx";

export default function CoursePage() {
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [courseInfo, setCourseInfo] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setCourseInfo(courseData.courses[id]);
  }, []);

  const [reviewDataArr, setReviewDataArr] = useState([]);

  const getReviewData = async () => {
    const reviewData = await Backend.get("/api/review/getReviews");
    setReviewDataArr(reviewData.data.data);
    console.log(reviewData.data.data);
  };

  useEffect(() => {
    getReviewData();
  }, []);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  console.log(courseInfo);

  return (
    <Flex flexDir={"column"} backgroundColor={"#5386ad"}>
      <Navbar />
      <Flex flexDir={"column"} justify={"center"} align={"center"}>
        <Text color={"white"} as="b">This page is {courseInfo.name}</Text>
        {/* <Flex align={"center"} justify={"center"}>
          {[...Array(5)].map((_, index) => (
            <Icon
            key={index}
            as={FaStar}
            color={index < rating ? "yellow.500" : "gray.300"}
            onClick={() => handleClick(index)}
            cursor="pointer"
            />
            ))}
          </Flex> */}
          <Button colorScheme="blue" onClick={onOpen}>
            Add review
          </Button>
        {reviewDataArr.map((r) => {
          if (r.course_name.toLowerCase() == courseInfo.name.toLowerCase()) {
            return (
              <Review
                id={r.id}
                reviewer={r.reviewer}
                review={r.review}
                date={r.date}
                courseName={r.course_name}
              />
            );
          }
        })}
      </Flex>

      <ReviewForm isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}
