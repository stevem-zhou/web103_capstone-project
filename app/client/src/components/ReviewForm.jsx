import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  Heading,
  Button,
} from "@chakra-ui/react";

import Backend from "../utils/Backend";

const ReviewForm = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
  const { handleSubmit, register } = useForm();

  const onSubmit = async (data) => {
    try {
        console.log("HSUFHUSF", data);
        await Backend.post('/api/review/addReviews', data);
        onClose();
    } catch (err) {
        console.log('Error', err)
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Review</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Heading size="xs" textTransform="uppercase">
              Name
            </Heading>
            <Input
              {...register("reviewer", { required: true })}
              placeholder="Enter name"
              mt={1}
            />

            <Heading size="xs" textTransform="uppercase" mt={3}>
              Course Title
            </Heading>
            <Input
              {...register("course_name", { required: true })}
              placeholder="Enter course title"
              mt={1}
            />

            <Heading size="xs" textTransform="uppercase" mt={3}>
              Review
            </Heading>
            <Input
              {...register("review", { required: true })}
              placeholder="Write your review"
              mt={1}
            />

            <Heading size="xs" textTransform="uppercase" mt={3}>
              Date
            </Heading>
            <Input
              {...register("date", { required: true })}
              placeholder="Enter today's date"
              mt={1}
            />

            <ModalFooter>
              <Button type="submit" variant="ghost" colorScheme="green">
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ReviewForm;
