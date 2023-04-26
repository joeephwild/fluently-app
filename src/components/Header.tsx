import { Box, Button, Center, Flex, Input, Text } from "@chakra-ui/react"
import { FiArrowUpRight } from "react-icons/fi";

const Header = () => {
    return (
        <>
            <Flex p='2em' px='5.5em' w='full' align='center' justify='space-between'>
                <Flex w='95%' direction='column' justify='center' py='6em'>
                    <Text fontWeight={700} fontSize='3em'>
                        Connect with language partners and reach fluency faster
                    </Text>
                    <Text fontWeight={400} lineHeight={'30px'} mt='1em'>
                        With Fluently, you can easily connect with language partners who share your language learning goals and interests. Our video call feature makes it easy to have interactive and engaging conversations with your language partner, so you can practice speaking in a real-world setting.
                    </Text>
                    <Flex gap={3} mt='2em'>
                        <Input placeholder=" what language do you want to learn?"/>
                        <Button px='1.5em' bg='#FDD835' fontWeight={700} rightIcon={<FiArrowUpRight />}>
                            Start now
                        </Button>
                    </Flex>
                </Flex>
                <Flex w='full'>

                </Flex>
            </Flex>
        </>
    )
}

export default Header