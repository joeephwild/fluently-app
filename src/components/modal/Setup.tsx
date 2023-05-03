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
import Availability from "./component/Availability";
import Learn from "./component/Learn";
import Speak from "./component/Speak";
import Complete from "./component/Complete";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Setup: React.FC<Props> = ({ isOpen, onClose }) => {
  const [activeComponent, setActiveComponent] = useState<string>("learn");

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton _hover={{ bg: 'transparent', color: '#FDD835', border: '1px solid #FDD835'}} />
                <ModalHeader>
                    {/* <Image src='/icons/LOGO.svg' alt='logo' /> */}
                </ModalHeader>
                {activeComponent === 'learn' && <Learn setActiveComponent={setActiveComponent} />}
                {activeComponent === 'speak' && <Speak setActiveComponent={setActiveComponent} />}
                {activeComponent === 'available' && <Availability setActiveComponent={setActiveComponent} />}
                {activeComponent === 'complete' && <Complete setActiveComponent={setActiveComponent} onClose={onClose} />}
            </ModalContent>
        </Modal>
    )
}

export default Setup;
