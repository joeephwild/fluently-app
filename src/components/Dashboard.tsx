import {
  Box,
  Button,
  Heading,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Td,
  Th,
  Tr,
  Text,
  Flex,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import Setup from "./modal/Setup";
import truncateEthAddress from "truncate-eth-address";

type Props = {
  item: any[]; // I assumed this prop is an array of objects with the structure that the `getAllMeeting` function returns
};

const Dashboard = ({ item }: Props) => {
  console.log(item);
  const address = useAddress();
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const userMeetings = item.filter((meeting) => meeting.user === address && meeting.matched === true);

  return (
    <>
      <Setup isOpen={isOpen} onClose={onClose} />

      <Box>
        <Text color="#F0C400" fontWeight={500}>
          Hey {address ? truncateEthAddress(address) : ""}
        </Text>
        <Text my=".5em" fontWeight={700}>
          Your language partner is waiting for you.
        </Text>

        <Button
          mt="1em"
          px="1.5em"
          bg="#FDD835"
          fontSize=".9em"
          fontWeight={700}
          _hover={{ bg: "#fbdb4f" }}
          onClick={onOpen}
        >
          Create Meeting session
        </Button>

        <Box mt="3em" bg="#FFFDF6" borderRadius={12} p="1em">
          <Text fontSize="1.5em" fontWeight={700} mb="1em">
            Upcoming session
          </Text>
          <TableContainer borderRadius={12}>
            <Table>
              <Thead bg="#FFF7D1">
                <Tr>
                  <Th>Date & Time scheduled</Th>
                  <Th>Spoken language</Th>
                  <Th>Language to learn </Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody fontSize=".9em">
                {userMeetings.map((detail, i) => (
                  <Tr key={i}>
                    <Td>Thurs, 27th April, 4:00 PM</Td> {/* TODO: Use `detail.time` to render the actual date */}
                    <Td>{detail.native}</Td>
                    <Td>{detail.language}</Td>
                    <Td>
                      <Flex gap={4}>
                        <Link href={detail.meeting}>
                          <Button fontSize=".9em" bg="#FDD835">
                            Join Session
                          </Button>
                        </Link>
                        <Button
                          fontSize=".9em"
                          color="#FDD835"
                          border="1px solid #FDD835"
                          bg="transparent"
                        >
                          Reschedule
                        </Button>
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;