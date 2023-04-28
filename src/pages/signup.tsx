import { Box, Button, Center, Container, Flex, Image, Text } from "@chakra-ui/react"
import Meta from "@/components/Meta"
import Link from "next/link"
import SignupOption from "@/components/SignupOption"

const Signup = () => {
    return (
        <Box py='1em' h='100vh'>
            <Meta page='Sign up'/>
            <Container maxW='container.xl'>
                <Link href='/'>
                    <Image src='/icons/LOGO.svg' />
                </Link>
                <Center h='85vh'>
                    <Flex gap='20'>
                        <Box>
                            <Image src='/images/bro.svg' />
                        </Box>
                        <Box 
                            border='1px solid #FFF7D1'
                            boxShadow='0px 23px 57px rgba(255, 247, 209, 0.5)'
                            borderRadius={12}
                            p='1.5em'
                        >
                            <Text color='#A5A1A1' fontSize={12}>Already signed up?<Text as='u' ml='1em' color='#FDD835'>Sign in</Text></Text>
                            <Text fontWeight={700} fontSize={30} my='.2em'>Get started</Text>
                            <Text fontWeight={400} fontSize={14}>Let's start your language learning journey today!</Text>
                            <Button 
                                my='1em' 
                                border='1px solid #FDD835'
                                bg='#FBFAF7'
                                w='full'
                                fontSize={14}
                            >
                                Sign up with Google
                            </Button>
                            <Flex align='center' gap='5'>
                                <Box borderBottom='0.5px solid #000' w='full' />
                                <Text>OR</Text>
                                <Box borderBottom='0.5px solid #000' w='full' />
                            </Flex>
                            <SignupOption />
                        </Box>
                    </Flex>
                </Center>
            </Container>
        </Box>
    )
}

export default Signup