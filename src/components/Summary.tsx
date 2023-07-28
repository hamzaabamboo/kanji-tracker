"use client";
import { useKnownKanji } from "@/context/KnownKanjiContext";
import { JLPT_GROUPS } from "@/data/jlpt";
import { KANKEN_GROUPS } from "@/data/joyo";
import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Divider,
    HStack,
    Heading,
    Progress,
    Stack,
    Text,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import { sumBy } from "lodash";
import { useMemo } from "react";

const data = [
  {
    title: "漢検",
    groups: KANKEN_GROUPS,
  },
  {
    title: "JLPT",
    groups: JLPT_GROUPS,
  },
];

export const Summary = (props: {}) => {
  const toast = useToast();
  const { knownKanji } = useKnownKanji();
  const stats = useMemo(() => {
    return data.map((d) => {
      const groups = d.groups.map((d) => ({
        title: d.title,
        total: d.kanjis.length,
        progress: d.kanjis.filter((k) => knownKanji.includes(k)).length,
      }));
      return {
        title: d.title,
        total: sumBy(groups, "total"),
        progress: sumBy(groups, "progress"),
        groups,
      };
    });
  }, [knownKanji]);
  return (
    <Stack>
      <Heading variant="h2">Summary</Heading>
      <Text>
        <Text fontSize="4xl" as="span">
          {knownKanji.length}
        </Text>{" "}
        known Kanji !!!
      </Text>
      <Accordion allowMultiple>
        {stats.map((s) => (
          <AccordionItem key={s.title}>
            <AccordionButton w="full">
              <Stack w="full" alignItems={"flex-start"}>
                <Heading>{s.title}</Heading>
                <Text>
                  {s.progress}/{s.total} (
                  {Math.round((s.progress / s.total) * 100)})
                </Text>
                <Progress w="full" value={(s.progress / s.total) * 100} />
              </Stack>
            </AccordionButton>
            <AccordionPanel>
              <Stack>
                {s.groups.map((i, idx) => (
                  <Box key={idx}>
                    <HStack>
                      <Stack>
                        <Text fontWeight="bold">{i.title}</Text>
                        <Text>
                          {i.progress}/{i.total} (
                          {Math.round((i.progress / i.total) * 100)})
                        </Text>
                      </Stack>
                      <Progress
                        width="full"
                        value={(i.progress / i.total) * 100}
                      />
                    </HStack>
                    <Divider />
                  </Box>
                ))}
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <Heading>All Kanji</Heading>
      <Textarea value={knownKanji} />
      <Box>
      <Button onClick={() => {
            navigator.clipboard.writeText(knownKanji)
            toast({ title: "Kanji Copied"})
        }}>
          Copy
        </Button>
      </Box>
    </Stack>
  );
};
