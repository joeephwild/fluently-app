import Layout from "@/components/layout/Layout"
import { Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { IoIosArrowDown } from "react-icons/io"
import Meta from "@/components/Meta"
import DashboardPanel from "@/components/Dashboard"
import Link from "next/link"

const Dashboard = () => {
    return (
        <Layout>
            <Meta page='Dashboard' />
            <Flex justify='space-between' align='center'>
                <Image src='/icons/LOGO.svg' alt="Logo" />
                <Menu>
                    <MenuButton 
                        as={Button} 
                        rightIcon={<IoIosArrowDown color="#FBCC00" />} 
                        bg='transparent'
                        _hover={{ bg: 'transparent', border: '1px solid #FBCC00'}}
                    >
                        Johnson
                    </MenuButton>
                    <MenuList>
                        <Link href='/'>
                            <MenuItem _hover={{ bg: '#FFFDF6' }}>Logout</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Flex>
            <Tabs my='2em' variant="unstyled" w=''>
                <TabList>
                    <Tab color='#DCDBDB' _selected={{ color: '#000'}}>Dashboard</Tab>
                    <Tab color='#DCDBDB' _selected={{ color: '#000'}}>Settings</Tab>
                </TabList>
                <TabIndicator 
                    mt="-1.5px"
                    height="2px"
                    width='30px'
                    bg="#000"
                    borderRadius="1px"
                />
                <TabPanels>
                    <TabPanel>
                        <DashboardPanel />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Layout>
    )
}

export default Dashboard