import React from "react";
import {
  Box,
  Stack,
  Image,
  Heading,
  Text,
  Flex,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { INFORMATION } from "../app/constants";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack spacing={8} marginBottom={8}>
      <Stack marginBottom={4} spacing={2}>
        <Image
          src={INFORMATION.banner}
          height="100%"
          maxHeight={64}
          borderRadius="lg"
          objectFit="cover"
        />
        <Stack
          direction={{ base: "column", sm: "row" }}
          alignItems="center"
          spacing={{ base: 3, sm: 6 }}
        >
          <Box
            borderRadius="9999"
            padding={1}
            backgroundColor="white"
            marginTop={{ base: -12, sm: -16 }}
            minWidth={{ base: 24, sm: 32 }}
          >
            <Image
              width={{ base: 24, sm: 32 }}
              height={{ base: 24, sm: 32 }}
              borderRadius="9999"
              src={INFORMATION.avatar}
            />
          </Box>
          <Stack
            paddingTop={{ base: 0, sm: 2 }}
            spacing={2}
            textAlign={{ base: "center", sm: "left" }}
            alignItems={{
              base: "center",
              sm: "flex-start",
            }}
          >
            <Heading>{INFORMATION.title}</Heading>
            <Text color="gray.500" fontSize="md" fontWeight="500">
              {INFORMATION.description}
            </Text>
            <Stack direction="row" alignItems="center" gap={2}>
              {INFORMATION.social.map((social) => {
                return (
                  <Link key={social.name} isExternal href={social.url}>
                    <Flex
                      width={10}
                      height={10}
                      borderRadius={9999}
                      backgroundColor="#CE6857"
                      color="white"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={`https://icongr.am/fontawesome/${social.name}.svg?size=24&color=ffffff`}
                      />
                    </Flex>
                  </Link>
                );
              })}
              <Button onClick={onOpen} variant="link" color="#CE6857">
                Tabla de talles
              </Button>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Tabla de Talles</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <TableContainer>
                      <Table variant="simple">
                        <TableCaption>
                          Ante cualquier duda escribinos a nuestro WhatsApp
                        </TableCaption>
                        <Thead>
                          <Tr>
                            <Th>Talle</Th>
                            <Th>Pecho</Th>
                            <Th>Cadera</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>S</Td>
                            <Td>85-90</Td>
                            <Td>78-84</Td>
                          </Tr>
                          <Tr>
                            <Td>M</Td>
                            <Td>90-95</Td>
                            <Td>84-90</Td>
                          </Tr>
                          <Tr>
                            <Td>L</Td>
                            <Td>95-100</Td>
                            <Td>90-96</Td>
                          </Tr>
                          <Tr>
                            <Td>XL</Td>
                            <Td>100-105</Td>
                            <Td>97-103</Td>
                          </Tr>
                          <Tr>
                            <Td>XXL</Td>
                            <Td>105-110</Td>
                            <Td>103-109</Td>
                          </Tr>
                          <Tr>
                            <Td>3XL</Td>
                            <Td>112-120</Td>
                            <Td>109-115</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      bgColor="#CE6857"
                      color="white"
                      _hover={{ bgColor: "#CE6857", color: "white" }}
                      mr={3}
                      onClick={onClose}
                    >
                      Cerrar
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
