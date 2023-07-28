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
      <Text>How to use: Search by Kanji/Reading, Browse ; Some glyph may not be properly displayed. Bugs are expected</Text>
    </Stack>
  );
};
