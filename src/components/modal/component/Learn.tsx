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
import {
  BsQuestionCircleFill,
  BsSearch,
  BsSearchHeartFill,
  BsStar,
} from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

type Props = {
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
};

const Learn: React.FC<Props> = ({ setActiveComponent }) => {
  const { language, setLanguage } = useFluentContext();
  console.log(language)

  return (
    <>
      <ModalBody m="2em" p="1em">
        <Text fontWeight={700} fontSize="1.2em">
          Set up languagues preferences
        </Text>
        <Text fontSize=".8em" mt=".5em">
          Please select the language you want to learn and your proficiency
          level in that language.
        </Text>
        <Box>
          <FormControl mt="1em">
            <FormLabel mb=".5em" fontSize=".9em">
              Select language
            </FormLabel>
            <Select title="Select language" placeholder='Select option' onChange={(e) => setLanguage(e.target.value)}>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="Germany">Germany</option>
              <option value="Korean">Korean</option>
            </Select>
          </FormControl>
          <FormControl mt="1.25em">
            <FormLabel mb=".5em" fontSize=".9em">
              Select your proficiency level
            </FormLabel>
            <Flex align="center" justifyContent="space-between">
              <Flex gap={4}>
                <BsStar />
                <BsStar />
                <BsStar />
              </Flex>
              <BsQuestionCircleFill color="#FDD835" />
            </Flex>
          </FormControl>
        </Box>
      </ModalBody>
      <ModalFooter mt="2em">
        <Button
          rightIcon={<FiArrowRight />}
          bg="#FDD835"
          _hover={{ bg: "#fbdb4f" }}
          onClick={() => setActiveComponent("speak")}
        >
          Next
        </Button>
      </ModalFooter>
    </>
  );
};

export default Learn;
