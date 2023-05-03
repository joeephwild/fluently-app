import { Box, Button, Flex, FormControl, FormLabel, Image, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text } from "@chakra-ui/react"
import { useState } from "react";
import { BsQuestionCircleFill, BsSearch, BsSearchHeartFill, BsStarFill, BsStar } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

type Props = {
    setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
};

const Speak: React.FC<Props> = ({ setActiveComponent }) => {
    const [beginner, setBeginner] = useState(false)
    const [intermediate, setIntermediate] = useState(false)
    const [native, setNative] = useState(false)

    return (
        <>
            <ModalBody m='2em' p='1em'>
                <Text fontWeight={700} fontSize='1.2em'>Choose spoken language</Text>
                <Text fontSize='.8em' mt='.5em'>Please select the language you can speak to help us find the best language exchange partner for you.</Text>
                <Box>
                    <FormControl mt='1em'>
                        <FormLabel mb='.5em' fontSize='.9em'>Select language</FormLabel>
                        <Select as={Button} leftIcon={<BsSearch />}>

                        </Select>
                    </FormControl>
                    <FormControl mt='1.25em'>
                        <FormLabel mb='.5em' fontSize='.9em'>Select your proficiency level</FormLabel>
                        <Flex align='center' justifyContent='space-between'>
                            <Flex gap={4} color='#FDD835'>
                                <Box onClick={() => setBeginner(prev => !prev)}>
                                    {beginner ? <BsStarFill size={24} /> : <BsStar size={24} />}
                                </Box>
                                <Box 
                                    onClick={() => {
                                        setBeginner(prev => !prev)
                                        setIntermediate(prev => !prev)
                                    }}
                                >
                                   {intermediate ? <BsStarFill size={24} /> : <BsStar size={24} />}
                                </Box>
                                <Box
                                    onClick={() => {
                                        setBeginner(prev => !prev)
                                        setIntermediate(prev => !prev)
                                        setNative(prev => !prev)
                                    }}
                                >
                                   {native ? <BsStarFill size={24} /> : <BsStar size={24} />}
                                </Box>
                            </Flex>
                            <Menu>
                                <MenuButton>
                                    <BsQuestionCircleFill color='#FDD835' size={16} />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem p='2em' bg='transparent' _hover={{ bg: 'transparent' }}>
                                        <Flex direction='column' gap={4}>
                                            <Flex gap={8}>
                                                <Image src='/images/beginner.svg' alt='beginner' w='25%' />
                                                <Box>
                                                    <Text fontWeight={700} fontSize='.8em'>Beginner</Text>
                                                    <Text fontSize='.7em'>I have a basic understanding of the language.</Text>
                                                </Box>
                                            </Flex>
                                            <Flex gap={8}>
                                                <Image src='/images/intermediate.svg' alt='intermediate' w='25%' />
                                                <Box textAlign='left' alignSelf='start'>
                                                    <Text fontWeight={700} fontSize='.8em'>Intermediate</Text>
                                                    <Text fontSize='.7em'>I can communicate effectively.</Text>
                                                </Box>
                                            </Flex>
                                            <Flex gap={8}>
                                                <Image src='/images/native.svg' alt='native' w='25%' />
                                                <Box textAlign='left' alignSelf='start'>
                                                    <Text fontWeight={700} fontSize='.8em'>Native speaker</Text>
                                                    <Text fontSize='.7em'>Native speaker seeking fluency in another language.</Text>
                                                </Box>
                                            </Flex>
                                        </Flex>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Flex>
                    </FormControl>
                </Box>
            </ModalBody>
            <ModalFooter mt='2em' gap={4}>
                <Button 
                    bg='transparent'
                    _hover={{ bg: 'transparent', border: '1px solid #FBCC00'}}
                    onClick={() => setActiveComponent('learn')}
                >
                    Back
                </Button>
                <Button 
                    rightIcon={<FiArrowRight />}
                    bg='#FDD835'
                    _hover={{ bg: "#fbdb4f" }}
                    onClick={() => setActiveComponent('available')}
                >
                    Next
                </Button>
            </ModalFooter>
        </>
    )
}

export default Speak;