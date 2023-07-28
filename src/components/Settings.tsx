"use client";
import { useKnownKanji } from "@/context/KnownKanjiContext";
import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

const NOT_KANJI_REGEX = /[^\u4e00-\u9faf\u3400-\u4dbf]/g;

export const Settings = (props: {}) => {
    const toast = useToast();
  const {
    knownKanji,
    setKnownKanji,
    removeKnownKanji,
    addAllJoyo,
    removeAllKanji,
  } = useKnownKanji();
  const [words, setWords] = useState<string>("");

  return (
    <Stack>
      <Heading>Settings</Heading>
      <Text>{knownKanji.length} kanji recorded</Text>
      <Divider />
      <Heading>Bulk Add words</Heading>
      <Textarea
        w="full"
        value={words}
        onChange={(e) =>
          setWords(e.target.value.replaceAll(NOT_KANJI_REGEX, ""))
        }
      />
      <HStack>
        <Button colorScheme="green" disabled={words.length === 0} onClick={() => {
            setKnownKanji(words)
            toast({ title: "Added"})
        }}>
          Add
        </Button>
        <Button colorScheme="red" disabled={words.length === 0} onClick={() => {
            removeKnownKanji(words)
            toast({ title: "Removed"})
        }}>
          Remove
        </Button>
      </HStack>
      <Heading>All Kanji Known</Heading>
      <Textarea w="full" value={knownKanji} />
      <Box>
        <Button onClick={() => {
            navigator.clipboard.writeText(knownKanji)
            toast({ title: "Kanji Copied"})
        }}>
          Copy
        </Button>
      </Box>
      <Divider />
      <Heading>Danger Zone</Heading>
      <HStack>
        <Button colorScheme="red" onClick={() => {
            addAllJoyo()
            toast({ title: "All Joyo Added"})
        }}>
          Add All Joyo Kanji
        </Button>
        <Button colorScheme="red" onClick={() => {
           removeAllKanji()
           toast({ title: "All Joyo Removed"})
        }}>
          Remove All
        </Button>
      </HStack>
    </Stack>
  );
};
