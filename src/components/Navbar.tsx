import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
    return (   
        <Flex p='1em' w='full' align='center' justify='space-between' fontWeight={600}>
            <Flex align='center' justify='space-evenly' w='full'>
                <Image src='/icons/LOGO.svg' />
                <Text>All features</Text>
                <Text>Languages</Text>
                <Text>FAQs</Text>
            </Flex>
            <Flex align='center' justify='space-evenly' w='full'>
                <Text>Site Language: <Text as='b' color='#FDD835'>English</Text></Text>
                <Button px='1.5em' bg='#FDD835' fontWeight={700} rightIcon={<FiArrowUpRight />}>
                    Get started, it's free
                </Button>
            </Flex>
        </Flex>
    )
}

export default Navbar;