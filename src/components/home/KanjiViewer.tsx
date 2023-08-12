"use client";
import { useKnownKanji } from "@/context/KnownKanjiContext";
import {
    Box,
    Button,
    HStack,
    Stack,
    useToast
} from "@chakra-ui/react";
import { useMemo } from "react";
import { KanjiDisplay } from "../common/KanjiText";

export const KanjiViewer = (props: {
  data: string[];
}) => {
  const { data } = props;
  const toast = useToast();
  const { knownKanji , setKnownKanji, removeKnownKanji } = useKnownKanji();
  const know = useMemo(() => data.filter(d => knownKanji.includes(d)).join(""),[data, knownKanji]);
  const notKnow = useMemo(() => data.filter(d => !knownKanji.includes(d)).join(""),[data, knownKanji]);
  
  const copy = (toCopy: string) => {
    navigator.clipboard.writeText(toCopy)
    toast({
        status: "success",
        title: "Copied"
    })
  }

  return (
    <Stack>
        <HStack>
            <Button size="sm" onClick={() => copy(know)}>Copy known</Button> 
            {notKnow.length !== 0 && <Button size="sm" onClick={() => copy(notKnow)}>Copy not known</Button> }
            <Button colorScheme="red" size="sm" onClick={() => setKnownKanji(data.join(""))}>Select All</Button> 
            <Button colorScheme="red" size="sm" onClick={() => removeKnownKanji(data.join(""))}>Select None</Button>
        </HStack>
        <HStack spacing={2} mb={6} flexWrap="wrap">
            {data
                .map((d, idx) => {
                    const isSelected = knownKanji.includes(d);
                    return (
                        <Box 
                            key={d}
                            shadow={isSelected? "md": "none"}
                            boxSize={12}
                            p={2}
                            onClick={() => setKnownKanji(d)}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            bgColor={isSelected ? "white" : "gray.200" }
                        >
                            <KanjiDisplay fontWeight={isSelected ? "500" : "100"} data={{ kanji: d }} />
                        </Box>
                    )
                })}
            </HStack>
    </Stack>
  );
};
