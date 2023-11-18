import { Button, Flex, Image, Input, Text, Select } from "@chakra-ui/react";
import AvatarPFP from "../assets/Avatar.png";
import courseData from "../data/CourseData.json";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [courseList, setCourseList] = useState([]);
  const [searchedCourseOptions, setSearchedCourseOptions] = useState([]);
  const [inputCourse, setInputCourse] = useState("");
  let isSearchablle = false;

  const navigate = useNavigate();

  useEffect(() => {
    setCourseList(courseData.courses);
  }, []);

  function handleSearch() {
    let tempCourseList = courseList.filter((course) =>
      course.name.toLowerCase().includes(inputCourse)
    );

    setSearchedCourseOptions(
      tempCourseList.map((course) => (
        <option key={course.id} value={course.id}>
          {course.name}
        </option>
      ))
    );
    console.log(searchedCourseOptions);

    
    // navigate(`/course/${courseList.id}`);
  }

  function handleReset(){
    setSearchedCourseOptions([]);
  }

  return (
    <Flex
      w={"100vw"}
      h={"10vh"}
      backgroundColor={"#0064a4"}
      justify={"center"}
      align={"center"}
    >
      <Flex w={"30%"}>
        {searchedCourseOptions.length == 0 ? (
          <Input
            placeholder="Search for course..."
            background={"white"}
            onChange={(e) => setInputCourse(e.target.value)}
            onSubmit={() => console.log(inputCourse)}
          />
        ) : (
          <Select placeholder="Select option" background={"white"}>
            {searchedCourseOptions}
          </Select>
        )}
        <Button onClick={handleSearch}>Search!</Button>

        {searchedCourseOptions.length != 0 ? (
          <Button onClick={handleReset}>Reset</Button>
        ) : null}
      </Flex>

      <Flex w={"30%"}></Flex>
      <Flex w={"30%"} align={"center"} justify={"flex-end"} gap={"2%"}>
        <Text as="b" color={"white"}>
          Welcome, Joe Biden
        </Text>
        <Image src={AvatarPFP} />
      </Flex>
    </Flex>
  );
}
