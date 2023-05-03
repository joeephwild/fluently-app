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
} from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import Setup from "./modal/Setup";
import { motion } from "framer-motion";


const containerVariants = {
    hidden: { 
      opacity: 0, 
      x: '100vw' 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: 'spring', 
        delay: 0.5,
        stiffness: 28
      }
    },
}

const Dashboard = () => {
  const address = useAddress();
  const { isOpen, onOpen, onClose } = useDisclosure();

    function truncateEthAddress(address: any) {
        throw new Error("Function not implemented.");
    }

    return (
        <>
            <Setup isOpen={isOpen} onClose={onClose} />
            <Box>
                <Text color="#F0C400" fontWeight={500}>
                    Hey {address && `${truncateEthAddress(address)}`}
                </Text>
                <Text my=".5em" fontWeight={700}>
                    Your language partner is waiting for you.
                </Text>
                <Button 
                    mt='1em'
                    px='1.5em'
                    bg='#FDD835'
                    fontSize='.9em'
                    fontWeight={700}
                    _hover={{ bg: "#fbdb4f" }}
                    onClick={onOpen}
                >
                    Start Matching Now
                </Button>
                
                <motion.div
                    variants={containerVariants}
                    initial='hidden'
                    animate='visible'
                >
                    <Box mt='3em' bg='#FFFDF6' borderRadius={12} p='1em'>
                        <Text fontSize='1.5em' fontWeight={700} mb='1em'>Upcoming session</Text>
                        <TableContainer borderRadius={12}>
                            <Table>
                                <Thead bg='#FFF7D1'>
                                    <Tr>
                                        <Th>Date & Time scheduled</Th>
                                        <Th>Spoken language</Th>
                                        <Th>Language to learn </Th>
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                <Tbody fontSize='.9em'>
                                    <Tr>
                                        <Td>Thurs, 27th April, 4:00 PM</Td>
                                        <Td>Irish</Td>
                                        <Td>Pakistan</Td>
                                        <Td>
                                            <Flex gap={4}>
                                                <Button fontSize='.9em' bg='#FDD835' _hover={{ bg: "#fbdb4f" }}>Join Session</Button>
                                                <Button 
                                                    fontSize='.9em' 
                                                    color='#FDD835' 
                                                    border='1px solid #FDD835'
                                                    bg='transparent'
                                                    _hover={{ bg: "transparent" }}
                                                >
                                                    Reschedule
                                                </Button>
                                            </Flex>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Thurs, 27th April, 4:00 PM</Td>
                                        <Td>Irish</Td>
                                        <Td>Pakistan</Td>
                                        <Td>
                                            <Flex gap={4}>
                                                <Button fontSize='.9em' bg='#FDD835' _hover={{ bg: "#fbdb4f" }}>Join Session</Button>
                                                <Button 
                                                    fontSize='.9em' 
                                                    color='#FDD835' 
                                                    border='1px solid #FDD835'
                                                    bg='transparent'
                                                    _hover={{ bg: "transparent" }}
                                                >
                                                    Reschedule
                                                </Button>
                                            </Flex>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                </motion.div>
            </Box>
        </>
    )
}
//   return (
//     <>
//       <Setup isOpen={isOpen} onClose={onClose} />
//       <Box>
//         {/* <Text color="#F0C400" fontWeight={500}>
//           Hey {address && `${truncateEthAddress(address)}`}
//         </Text>
//         <Text my=".5em" fontWeight={700}>
//           Your language partner is waiting for you.
//         </Text> */}

//         <Button
//           mt="1em"
//           px="1.5em"
//           bg="#FDD835"
//           fontSize=".9em"
//           fontWeight={700}
//           _hover={{ bg: "#fbdb4f" }}
//           onClick={onOpen}
//         >
//           Start Matching Now
//         </Button>

//         <Box mt="3em" bg="#FFFDF6" borderRadius={12} p="1em">
//           <Text fontSize="1.5em" fontWeight={700} mb="1em">
//             Upcoming session
//           </Text>
//           <TableContainer borderRadius={12}>
//             <Table>
//               <Thead bg="#FFF7D1">
//                 <Tr>
//                   <Th>Date & Time scheduled</Th>
//                   <Th>Spoken language</Th>
//                   <Th>Language to learn </Th>
//                   <Th></Th>
//                 </Tr>
//               </Thead>
//               <Tbody fontSize=".9em">
//                 <Tr>
//                   <Td>Thurs, 27th April, 4:00 PM</Td>
//                   <Td>Irish</Td>
//                   <Td>Pakistan</Td>
//                   <Td>
//                     <Flex gap={4}>
//                       <Button fontSize=".9em" bg="#FDD835">
//                         Join Session
//                       </Button>
//                       <Button
//                         fontSize=".9em"
//                         color="#FDD835"
//                         border="1px solid #FDD835"
//                         bg="transparent"
//                       >
//                         Reschedule
//                       </Button>
//                     </Flex>
//                   </Td>
//                 </Tr>
//                 <Tr>
//                   <Td>Thurs, 27th April, 4:00 PM</Td>
//                   <Td>Irish</Td>
//                   <Td>Pakistan</Td>
//                   <Td>
//                     <Flex gap={4}>
//                       <Button fontSize=".9em" bg="#FDD835">
//                         Join Session
//                       </Button>
//                       <Button
//                         fontSize=".9em"
//                         color="#FDD835"
//                         border="1px solid #FDD835"
//                         bg="transparent"
//                       >
//                         Reschedule
//                       </Button>
//                     </Flex>
//                   </Td>
//                 </Tr>
//               </Tbody>
//             </Table>
//           </TableContainer>
//         </Box>
//       </Box>
//     </>
//   );
// };

export default Dashboard;
