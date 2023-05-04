import { useFluentContext } from "@/context";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

type Props = {
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
};

const Availability: React.FC<Props> = ({ setActiveComponent }) => {
  const { time, setTime,createMeeting, getRoomId } = useFluentContext();
  const [complete, setComplete] = useState("");
  console.log(time);

  const meeting = async () => {
    try {
     const meetings = await getRoomId()
     const meeting = createMeeting(meetings);
     setActiveComponent("complete");
      console.log(meetings);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ModalBody m="2em" p="1em">
        <Text fontWeight={700} fontSize="1.2em">
          Select availabilty
        </Text>
        <Text fontSize=".8em" mt=".5em">
          Please select from the available time slots to increase the chances of
          finding a suitable language exchange partner.
        </Text>
        <Box mt="1em">
          <Flex align="center">
            <MdKeyboardArrowLeft color="#FDD835" />
            <Flex w="90%">
              <Box>
                <Text fontSize=".8em">Thurs</Text>
                <Text fontSize=".8em">April 27</Text>
              </Box>
            </Flex>
            <MdKeyboardArrowRight color="#FDD835" />
          </Flex>
          <Center w="95%" h="100px" bg="#F8F8F8" borderRadius={6}>
            <Wrap>
              <WrapItem
                px="1em"
                border="1px solid #FBCC00"
                borderRadius={3}
                cursor="pointer"
                onClick={() => setTime(440)}
              >
                04:00 PM
              </WrapItem>
            </Wrap>
          </Center>
        </Box>
      </ModalBody>
      <ModalFooter mt="2em" gap={4}>
        <Button
          bg="transparent"
          _hover={{ bg: "transparent", border: "1px solid #FBCC00" }}
          onClick={() => setActiveComponent("speak")}
        >
          Back
        </Button>
        <Button
          rightIcon={<FiArrowRight />}
          bg="#FDD835"
          _hover={{ bg: "#fbdb4f" }}
          onClick={() => meeting()}
        >
          Schedule
        </Button>
      </ModalFooter>
    </>
  );
};

export default Availability;
