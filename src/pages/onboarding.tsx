import Layout from "@/components/layout/Layout"
import Meta from "@/components/Meta"
import { Box, Card, CardBody, Center, Flex, Image, Stack, Text } from "@chakra-ui/react"
import { FiArrowRight } from "react-icons/fi"

const onboarding = () => {
    return (
        <Layout>
            <Meta page='Setup' />
            <Center>  
                <Image src="/icons/LOGO.svg" alt="logo" />   
            </Center>
            {/* <Box borderBottom='8px solid #FBFAF7' w='80vw' my='2em' /> */}
            <Box px='4em'>
                <Text fontWeight={700} mb='4em'>Select your language objectives</Text>
                <Flex justify='center' gap={20}>
                    <Flex bg='#FDD835' p='2em' direction='column' borderRadius={12} align='center' justify='space-evenly'>
                        <Center p={1} bg='#fff' borderRadius={20} w='fit-content' mb='1em'>
                            <Image src="/icons/learn.svg" alt="learn" />
                        </Center>
                        <Stack spacing='3' textAlign='center'>
                            <Text fontWeight={700} fontSize='1.25em'>I want to learn</Text>
                            <Text fontSize='0.85em'>Connect with a native <br />speaker</Text>
                            <Center>
                                <FiArrowRight />
                            </Center>
                        </Stack>
                    </Flex>

                    <Flex bg='#FDD835' p='2em' direction='column' borderRadius={12} align='center' justify='space-evenly'>
                        <Center p={1} bg='#fff' borderRadius={20} w='fit-content' mb='1em'>
                            <Image src="/icons/learn.svg" alt="learn" />
                        </Center>
                        <Stack spacing='3' textAlign='center'>
                            <Text fontWeight={700} fontSize='1.25em'>I want to teach</Text>
                            <Text fontSize='0.85em'>Teach the world your <br />language</Text>
                            <Center>
                                <FiArrowRight />
                            </Center>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </Layout>
    )
}

export default onboarding