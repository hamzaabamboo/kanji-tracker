"use client";

import { getPath } from "@/utils/getPath";
import { Heading, Link, Stack, Text } from "@chakra-ui/react";

export const HomeIntro = () => {
  return (
    <Stack>
      <Heading>
        <Link href={getPath("/")}>
          Kanji Tracker
        </Link>
      </Heading>
      <Text>
        Track kanjis you know
      </Text>
      <Text>How to use: Click the kanji you know, See how far you&apos;ve progressed.</Text>
    </Stack>
  );
};
