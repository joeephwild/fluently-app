import { Button, Flex, Input, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"

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
                        >
                            MetaMask
                        </Button>
                        
                        <Button
                            border='1px solid #FDD835'
                            bg='#FBFAF7'
                            w='full'
                            fontSize={14}
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
                    <Input 
                        border='1px solid #FFF7D1'
                        // w='full'
                        my='.8em'
                        placeholder="Enter verification code"
                        fontSize={14}
                    />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default SignupOption;