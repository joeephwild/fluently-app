import { Box, Button, Center, Flex, Image, Input, Text } from "@chakra-ui/react"
import { FiArrowUpRight } from "react-icons/fi";

const Header = () => {
    return (
        <>
            <Flex p='2em' px='5.5em' w='full' align='center' justify='space-between' gap={40}>
                <Flex w='full' direction='column' justify='center' py='6em'>
                    <Text fontWeight={700} fontSize='2.8em'>
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
                <Flex w='full' bgImage='/images/ellipse.svg' bgRepeat='no-repeat' bgSize='cover'>
                    <Image src='/images/group.svg' w='100%' alt="group"/>
                </Flex>
            </Flex>
        </>
    )
}

export default Header