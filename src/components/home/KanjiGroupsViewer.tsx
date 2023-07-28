"use client";
import { useKnownKanji } from "@/context/KnownKanjiContext";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Button,
  HStack,
  Heading,
  Progress,
  Stack,
  Text
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { KanjiViewer } from "./KanjiViewer";

export const KanjiGroupsViewer = (props: {
  groups: { title: string; kanjis: string[] }[];
}) => {
  const { groups } = props;
  const { knownKanji } = useKnownKanji();
  const knownList = useMemo(() => groups.map(({kanjis}) => kanjis.filter(d => knownKanji.includes(d))) , [groups, knownKanji] )
  const [index, setIndex] = useState(groups.map((_,idx) => idx));
  
  return (
    <Stack>
      <HStack><Button onClick={() => setIndex(groups.map((_,idx) => idx))}>Open All</Button><Button onClick={() => setIndex(groups.map((_,idx) => idx).filter(i => knownList[i].length !== groups[i].kanjis.length))}>Close Completed</Button></HStack>
      <Accordion allowMultiple reduceMotion index={index} onChange={(d) => setIndex(d as number[])}>
        {groups.map(({ title, kanjis }, idx) => {
          const known = knownList[idx]
          const isAllSelected = known.length === kanjis.length;
          const percent = known.length/kanjis.length * 100;
          return (
            <AccordionItem key={idx}  defaultChecked={!isAllSelected}>
              <AccordionButton>
                <HStack>
                  <Heading>{title}</Heading>
                  <Progress value={percent} />
                  <HStack><Text>{known.length}/{kanjis.length} ({Math.round(percent)}%) known</Text></HStack>
                </HStack>
              </AccordionButton>
              <AccordionPanel>
                <KanjiViewer data={kanjis} />
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Stack>
  );
};
