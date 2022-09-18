import React from 'react';
import {
  IconButton,
  Flex,
  useColorModeValue,

  ButtonGroup,


  Button,
  chakra,
  Icon,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';

import {
    AiFillEdit, AiTwotoneLock,
    

} from 'react-icons/ai'
import {
BsFillTrashFill,
BsBoxArrowUpRight,
} from 'react-icons/bs'




function Datatable () {
        const data = [
          {
            name: "Daggy",
            created: "05-02-2022",
            subject:"Grievance on College trip"
          },
          {
            name: "Anubra",
            created: "07-04-2022",
            subject:"Projector complaint "
          },
          {
            name: "Josef",
            created: "07-04-2022",
            subject: "need revison in method"
          },
          {
            name: "Sage",
            created: "04-05-2022",
            subject: "Proper Sanitation"
          },
        ];
        const bg = useColorModeValue("white", "gray.800");
        const bg2 = useColorModeValue("white", "gray.800");
        const bg3 = useColorModeValue("gray.100", "gray.700");
        return (
          <Flex
            w={'full'}
            bg="#edf3f8"
            _dark={{
              bg: "#3e3e3e",
            }}
            p={50}
            alignItems="center"
            justifyContent="center"
            paddingLeft={300}
          >
            <Stack
              direction={{
                base: "column",
              }}
              w="full"
              bg={{
                md: bg,
              }}
              shadow="lg"
            >
              {data.map((token, tid) => {
                return (
                  <Flex
                    direction={{
                      base: "row",
                      md: "column",
                    }}
                    bg={bg2}
                    key={tid}
                  >
                    <SimpleGrid
                      spacingY={3}
                      columns={{
                        base: 1,
                        md: 5
                      }}
                      w={{
                        base: 120,
                        md: "full",
                      }}
                      textTransform="uppercase"
                      bg={bg3}
                      color={"gray.500"}
                      py={{
                        base: 1,
                        md: 5,
                      }}
                      px={{
                        base: 2,
                        md: 10,
                      }}
                      fontSize="md"
                      fontWeight="semibold"
                      fontFamily={'Zilla Slab'}
                    >
                      <span>Name</span>
                      <span>Created</span>
                      <span>Subject</span>
                      <span>Profile</span>
                      <chakra.span
                        textAlign={{
                          md: "right",
                        }}
                      >
                        Actions
                      </chakra.span>
                    </SimpleGrid>
                    <SimpleGrid
                      spacingY={3}
                      columns={{
                        base: 1,
                        md: 5,
                      }}
                      w="full"
                      py={2}
                      px={10}
                      fontWeight="normal"
                    >
                      <span>{token.name}</span>
                      <chakra.span
                        textOverflow="ellipsis"
                        overflow="hidden"
                        whiteSpace="nowrap"
                      >
                        {token.created}
                      </chakra.span>
                      <chakra.span
                        textOverflow="ellipsis"
                        overflow="hidden"
                        whiteSpace="nowrap"
                      >
                        {token.subject}
                      </chakra.span>
                      <Flex>
                        <Button
                          size="sm"
                          variant="solid"
                          leftIcon={<Icon as={AiTwotoneLock} />}
                          colorScheme="purple"
                        >
                          View Profile
                        </Button>
                      </Flex>
                      <Flex
                        justify={{
                          md: "end",
                        }}
                      >
                        <ButtonGroup variant="solid" size="sm" spacing={3}>
                          <IconButton
                            colorScheme="blue"
                            icon={<BsBoxArrowUpRight />}
                            aria-label="Up"
                          />
                          <IconButton
                            colorScheme="green"
                            icon={<AiFillEdit />}
                            aria-label="Edit"
                          />
                          <IconButton
                            colorScheme="red"
                            variant="outline"
                            icon={<BsFillTrashFill />}
                            aria-label="Delete"
                          />
                        </ButtonGroup>
                      </Flex>
                    </SimpleGrid>
                  </Flex>
                );
              })}
            </Stack>
          </Flex>
        );
      };

  export default Datatable;
