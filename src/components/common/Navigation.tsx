"use client";

import { getPath } from "@/utils/getPath";
import { HamburgerIcon, InfoIcon, SettingsIcon } from "@chakra-ui/icons";
import { Box, HStack, Link } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();
  const all = pathname.split("/").slice(-1)[0] === "all";
  // const currentIndex = Number(pathname.split("/").slice(all ? -2 : -1)[0]);
  return (
    <HStack
      w="full"
      backgroundColor="white"
      position="sticky"
      top={0}
      py={2}
      zIndex={100}
    >
      <Link
        href={getPath(all ? "/all" : "/")}
        shadow="md"
        textAlign="center"
        py="2"
        w="full"
        fontSize="xl"
      >
        <Box>
          <HamburgerIcon aria-label="all" />
        </Box>
      </Link>
      <Link
          href={getPath(`/kanken`)}
          shadow="md"
          // bgColor={currentIndex === index ? "gray.100" : "white"}
          textAlign="center"
          py="2"
          w="full"
          fontSize="xl"
        >
          <Box>漢検</Box>
        </Link>
        <Link
          href={getPath(`/jlpt`)}
          shadow="md"
          // bgColor={currentIndex === index ? "gray.100" : "white"}
          textAlign="center"
          py="2"
          w="full"
          fontSize="xl"
        >
          <Box>JLPT</Box>
        </Link>
        <Link
          href={getPath(`/summary`)}
          shadow="md"
          // bgColor={currentIndex === index ? "gray.100" : "white"}
          textAlign="center"
          py="2"
          w="full"
          fontSize="xl"
        >
           <Box>
          <InfoIcon aria-label="all" />
        </Box>
        </Link>
        <Link
          href={getPath(`/settings`)}
          shadow="md"
          // bgColor={currentIndex === index ? "gray.100" : "white"}
          textAlign="center"
          py="2"
          w="full"
          fontSize="xl"
        >
           <Box>
          <SettingsIcon aria-label="all" />
        </Box>
        </Link>
    </HStack>
  );
};
