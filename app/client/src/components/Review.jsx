import React, { useState, useEffect } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Box,
  Text,
  StackDivider,
  Button
} from "@chakra-ui/react";

import Backend from "../utils/Backend";

const Review = ({ id, reviewer, review, date, courseName }) => {
    const handleDelete = () => {
        Backend.delete(`/api/review/delete/${id}`)
    };

  return (
    <Card mb={5}>
      <CardHeader>
        <Heading size="md">{courseName}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Reviewed by {reviewer} on {date}
            </Heading>
            <Text pt="2" fontSize="sm">
              {review}
            </Text>
          </Box>
        </Stack>
      </CardBody>
      <Button colorScheme="red" onClick={handleDelete}>Delete</Button>
    </Card>
  );
};

export default Review;
