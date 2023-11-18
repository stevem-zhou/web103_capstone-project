import { Button, Flex, Image, Input, Text, Select } from "@chakra-ui/react";
import AvatarPFP from "../assets/Avatar.png";
import courseData from "../data/CourseData.json";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [courseList, setCourseList] = useState([]);
  const [searchedCourseOptions, setSearchedCourseOptions] = useState([]);
  const [selectOption, setSelectOption] = useState([]);
  const [inputCourse, setInputCourse] = useState("");
  const [isSearchable, setIsSearchable] = useState(false);

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
    // console.log(searchedCourseOptions);

    if (isSearchable) {
      navigate(`/course/${selectOption}`);
    } else {
      setIsSearchable(true);
    }
  }

  function handleReset() {
    setSearchedCourseOptions([]);
    setIsSearchable(false);
    setSelectOption([]);
  }

  return (
    <Flex
      w={"100vw"}
      h={"10vh"}
      backgroundColor={"#0064a4"}
      justify={"center"}
      align={"center"}
    >
      <Flex w={"30%"} gap="1em">
        <Button
          colorScheme={"twitter"}
          onClick={() => navigate("/home")}
        >
          HOME
        </Button>

        {searchedCourseOptions.length == 0 ? (
          <Input
            placeholder="Search for course..."
            background={"white"}
            onChange={(e) => setInputCourse(e.target.value)}
            onSubmit={() => console.log(inputCourse)}
          />
        ) : (
          <Select
            placeholder="Select option"
            background={"white"}
            onChange={(e) => setSelectOption(e.target.value)}
          >
            {searchedCourseOptions}
          </Select>
        )}

        <Button
          colorScheme={searchedCourseOptions.length > 0 ? "green" : "yellow"}
          onClick={handleSearch}
          isDisabled = {selectOption.length == 0 && searchedCourseOptions.length > 0 ? true : false}
        >
          Search!
        </Button>

        {searchedCourseOptions.length != 0 ? (
          <Button colorScheme="red" onClick={handleReset}>
            Reset
          </Button>
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
