import Layout from "@/components/layout/Layout";
import {
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import Meta from "@/components/Meta";
import DashboardPanel from "@/components/Dashboard";
import {
  useMetamask,
  useAddress,
  ConnectWallet as ConnectWeb3Wallet,
} from "@thirdweb-dev/react";
import truncateEthAddress from "truncate-eth-address";
import { useFluentContext } from "@/context";

const Dashboard = () => {
  const address = useAddress();
  const connect = useMetamask();
  const { allMeeting } = useFluentContext()
  //console.log(allMeeting)

  return (
    <Layout>
      <Meta page="Dashboard" />
      <Flex justify="space-between" align="center">
        <Image src="/icons/LOGO.svg" alt="Logo" />
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<IoIosArrowDown color="#FBCC00" />}
            bg="transparent"
            _hover={{ bg: "transparent", border: "1px solid #FBCC00" }}
          >
            {address && `${truncateEthAddress(address)}`}
          </MenuButton>
          <MenuList>
            <a href="./">
              <MenuItem _hover={{ bg: "#FFFDF6" }}>Logout</MenuItem>
            </a>
          </MenuList>
        </Menu>
      </Flex>
      <Tabs my="2em" variant="unstyled" w="">
        <TabList>
          <Tab color="#DCDBDB" _selected={{ color: "#000" }}>
            Dashboard
          </Tab>
          <Tab color="#DCDBDB" _selected={{ color: "#000" }}>
            Settings
          </Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          width="30px"
          bg="#000"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <DashboardPanel item={allMeeting} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default Dashboard;
