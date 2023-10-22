"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../images/trees.svg";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, StarIcon } from "@chakra-ui/icons";

interface Props {
  children: React.ReactNode;
}

const Links = [
  { text: "Home", path: "/home" },
  { text: "Community Events", path: "/communityevents" },
  { text: "Weekly Tasks", path: "/weeklytasks" },
  { text: "Donations", path: "/donations" },
];

const NavLink = (props: Props) => {
  const { children } = props;
  return (
    <Box as="a" px={2} py={1} rounded={"md"} href={"#"}>
      {children}
    </Box>
  );
};

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue("#024636", "#FFFFFF")}
        fontWeight="bold"
        px={4}
        color={useColorModeValue("white", "white")}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link href="/">
              <Image src={logo} alt="Logo" />
            </Link>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <Link key={link.text} href={link.path}>
                  {link.text}
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="center">
            <Flex alignItems="center" mr={2}>
              <StarIcon boxSize={4} color="white" />
              <Text fontSize="sm" fontWeight="bold" ml={1}>
                42
              </Text>
            </Flex>
            <Avatar
              size="sm"
              src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link key={link.text} href={link.path}>
                  {link.text}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
