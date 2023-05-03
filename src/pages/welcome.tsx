import Layout from "@/components/layout/Layout";
import Meta from "@/components/Meta";
import { Box, Button, Center, Flex, Image, Link, Text } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

const Welcome = () => {
    return (
        <Flex w='100vw' h='100vh' align='center' justify='center'>
            <Meta page='Welcome' />
            <Flex
                boxShadow='0px 23px 57px rgba(255, 247, 209, 0.5)'
                borderRadius={12}
                p='6em'
                direction='column'
                align='center'
            >
                <Image src='/images/welcome.svg' w='130px' alt="welcome"/>
                <Text my='1.5em' fontSize='1.7em' fontWeight={500}>Welcome to <Text as='b' color='#FDD835' fontFamily='Frijole'>Fluently</Text></Text>
                <Text textAlign='center' fontWeight={400} color='#000'>
                    Ready to embark on a language adventure? With video calls and <br />interactive exercises, mastering a new language has never been <br />more fun. 
                </Text>
                <Link href="/dashboard">
                    <Button
                        rightIcon={<FiArrowRight />}
                        mt='2em'
                        px='1.5em'
                        bg='#FDD835'
                        fontWeight={700}
                        _hover={{ bg: "#fbdb4f" }}
                    >
                        Proceed to Dashboard
                    </Button>
                </Link>
            </Flex>
        </Flex>
    )
}

export default Welcome;