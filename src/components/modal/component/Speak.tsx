import { useFluentContext } from "@/context";
import {
  Box,
  Button,
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
} from "@chakra-ui/react";
import { useState } from "react";
import {
  BsQuestionCircleFill,
  BsSearch,
  BsSearchHeartFill,
  BsStar,
  BsStarFill,
} from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

type Props = {
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
};

const Speak: React.FC<Props> = ({ setActiveComponent }) => {
  const { native, setNative } = useFluentContext();
  console.log(native);
  const [beginner, setBeginner] = useState(false);
  const [intermediate, setIntermediate] = useState(false);
  const [natives, setNatives] = useState(false);
  return (
    <>
      <ModalBody m="2em" p="1em">
        <Text fontWeight={700} fontSize="1.2em">
          Choose spoken language
        </Text>
        <Text fontSize=".8em" mt=".5em">
          Please select the language you can speak to help us find the best
          language exchange partner for you.
        </Text>
        <Box>
          <FormControl mt="1em">
            <FormLabel mb=".5em" fontSize=".9em">
              Select language
            </FormLabel>
            <Select
              title="Select Spoken Language"
              placeholder="Select option"
              onChange={(e) => setNative(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Korean">Korean</option>
              <option value="Chinese">Chinese</option>
              <option value="Estonian">Estonian</option>
              <option value="Haitian Creole">Haitian Creole</option>
              <option value="Japanese">Japanese</option>
              <option value="Hindi">Hindi</option>
            </Select>
          </FormControl>
          <FormControl mt="1.25em">
            <FormLabel mb=".5em" fontSize=".9em">
              Select your proficiency level
            </FormLabel>
            <Flex align="center" justifyContent="space-between">
            <Flex gap={4} color="#FDD835">
                <Box onClick={() => setBeginner((prev) => !prev)}>
                  {beginner ? <BsStarFill size={24} /> : <BsStar size={24} />}
                </Box>
                <Box
                  onClick={() => {
                    setBeginner(true);
                    !natives && setIntermediate((prev) => !prev);
                  }}
                >
                  {intermediate ? (
                    <BsStarFill size={24} />
                  ) : (
                    <BsStar size={24} />
                  )}
                </Box>
                <Box
                  onClick={() => {
                    setBeginner(true);
                    setIntermediate(true);
                    setNatives((prev) => !prev);
                  }}
                >
                  {natives ? <BsStarFill size={24} /> : <BsStar size={24} />}
                </Box>
              </Flex>
              <BsQuestionCircleFill color="#FDD835" />
            </Flex>
          </FormControl>
        </Box>
      </ModalBody>
      <ModalFooter mt="2em" gap={4}>
        <Button
          bg="transparent"
          _hover={{ bg: "transparent", border: "1px solid #FBCC00" }}
          onClick={() => setActiveComponent("learn")}
        >
          Back
        </Button>
        <Button
          rightIcon={<FiArrowRight />}
          bg="#FDD835"
          _hover={{ bg: "#fbdb4f" }}
          onClick={() => setActiveComponent("available")}
        >
          Next
        </Button>
      </ModalFooter>
    </>
  );
};

export default Speak;
