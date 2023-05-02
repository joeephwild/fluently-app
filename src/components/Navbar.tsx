import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex w="full" align="center" justify="space-between" fontWeight={600}>
      <Flex align="center" justify="space-evenly" w="full">
        <Image src="/icons/LOGO.svg" alt="logo" />
        <Text>All features</Text>
        <Text>Languages</Text>
        <Text>FAQs</Text>
      </Flex>
      <Flex align="center" justify="space-evenly" w="full">
        <Text>
          Site Language:{" "}
          <Text as="b" color="#FDD835">
            English
          </Text>
        </Text>
        <a href="/signup">
          <Button
            px="1.5em"
            bg="#FDD835"
            fontWeight={700}
            rightIcon={<FiArrowUpRight />}
            _hover={{ bg: "#fbdb4f" }}
          >
            Get started, it`s free
          </Button>
        </a>
      </Flex>
    </Flex>
  );
};

export default Navbar;
