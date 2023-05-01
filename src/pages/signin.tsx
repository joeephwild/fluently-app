import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import Meta from "@/components/Meta";
import Link from "next/link";
import SignupOption from "@/components/SignupOption";
import Layout from "@/components/layout/Layout";
import { Google } from "@/components/ButtonIcon";
import SigninOption from "@/components/SigninOption";

const Signin = () => {
  return (
    <Layout>
      <Meta page="Sign in" />
      <a href="./">
        <Image src="/icons/LOGO.svg" alt="signin" />
      </a>
      <Box>
        <Center h="85vh">
          <Flex gap="20">
            <Box>
              <Image src="/images/bro.svg" alt="signin" />
            </Box>
            <Box
              border="1px solid #FFF7D1"
              boxShadow="0px 23px 57px rgba(255, 247, 209, 0.5)"
              borderRadius={12}
              p="1.5em"
              minW="550px"
              minH="450px"
            >
              <Text color="#A5A1A1" fontSize={12}>
                Not signed up?{" "}
                <a href="./signup">
                  <Text as="u" ml="1em" color="#FDD835">
                    Sign up
                  </Text>
                </a>
              </Text>
              <Text fontWeight={700} fontSize={30} my=".2em">
                Welcome back
              </Text>
              <Text fontWeight={400} fontSize={14}>
                Let`s pick up where you left off!
              </Text>
              <Button
                my="1em"
                border="1px solid #FDD835"
                bg="#FBFAF7"
                w="full"
                fontSize={14}
                leftIcon={<Google />}
                _hover={{ bg: "transparent" }}
              >
                Sign in with Google
              </Button>
              <Flex align="center" gap="5">
                <Box borderBottom="0.5px solid #000" w="full" />
                <Text>OR</Text>
                <Box borderBottom="0.5px solid #000" w="full" />
              </Flex>
              <SigninOption />
            </Box>
          </Flex>
        </Center>
      </Box>
    </Layout>
  );
};

export default Signin;
