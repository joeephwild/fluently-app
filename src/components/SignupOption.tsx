import { Button, Flex, Input, InputGroup, InputRightElement, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import { ConnectWallet, MetaMask } from "./ButtonIcon";
import { BsExclamation } from 'react-icons/bs'
import Link from "next/link";

const SignupOption = () => {
    return (
        <Tabs isFitted variant="unstyled">
            <TabList>
                <Tab>Wallet</Tab>
                <Tab>Email</Tab>
            </TabList>
            <TabIndicator 
                mt="-1.5px"
                height="2px"
                width='30px'
                bg="#000"
                borderRadius="1px"
            />
            <TabPanels>
                <TabPanel textAlign='left'>
                    <Text fontWeight={400} fontSize={14} ml={0}>Sign up by connecting with any of your wallets</Text>
                    <Flex align='center' gap='10' my='1em'>
                        <Button
                            border='1px solid #FDD835'
                            bg='#FBFAF7'
                            w='full'
                            fontSize={14}
                            rightIcon={<MetaMask />}  
                        >
                            MetaMask
                        </Button>
                        
                        <Button
                            border='1px solid #FDD835'
                            bg='#FBFAF7'
                            w='full'
                            fontSize={14}
                            rightIcon={<ConnectWallet />}
                        >
                            ConnectWallet
                        </Button>
                    </Flex>
                </TabPanel>
                <TabPanel>
                    <Text fontWeight={400} fontSize={14} ml={0}>Sign up with Email address</Text>
                    <Input 
                        border='1px solid #FFF7D1'
                        // w='full'
                        my='.8em'
                        placeholder="Enter email address"
                        fontSize={14}
                    />
                    <InputGroup>
                        <Input 
                            border='1px solid #FFF7D1'
                            // w='full'
                            my='.8em'
                            placeholder="Enter verification code"
                            fontSize={14}
                        />
                        <InputRightElement w='70px' mt='10px'>
                            <Link href=''>
                                <Text as='b' color='#FDD835' fontSize={'.8em'}>Get code</Text>
                            </Link>
                        </InputRightElement>
                    </InputGroup>
                    <Flex align='center'>
                        <BsExclamation color='#FDD835' />
                        <Text fontSize='.7em' color='#000'>Press ‘get code’ button to receive verification code sent to your email address</Text>
                    </Flex>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default SignupOption;