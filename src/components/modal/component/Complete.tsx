import { Box, Button, Flex, FormControl, FormLabel, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text } from "@chakra-ui/react"
import { BsQuestionCircleFill, BsSearch, BsSearchHeartFill, BsStar, BsCheck } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

type Props = {
    onClose: () => void;
};

const Complete: React.FC<Props> = ({ onClose }) => {

    return (
        <>
            <ModalBody m='2em' p='1em'>
                <Flex align='center' direction='column' gap={3}>
                    <Image src='/icons/thumbs.svg' alt='icon' boxSize={32} />
                    <Text color='#FDD835' fontWeight={500} fontSize='1.5em'>Congratulations</Text>
                    <Text fontSize='.9em'>You`ve been matched successfully!</Text>

                    <Box p='1em' bg='#FFFBEC'>
                        <Text fontSize='.8em' textAlign='center' fontWeight={500}>
                            Check your email for the session link a few minutes before start time. You can reschedule or cancel anytime, but make sure to arrive on time for a productive session!
                        </Text>
                    </Box>
                </Flex>
            </ModalBody>
            <ModalFooter mt='2em' gap={4}>
                <Button 
                    rightIcon={<BsCheck />}
                    bg='#FDD835'
                    _hover={{ bg: "#fbdb4f" }}
                    onClick={onClose}
                >
                    Okay, got it
                </Button>
            </ModalFooter>
        </>
    )
}

export default Complete;