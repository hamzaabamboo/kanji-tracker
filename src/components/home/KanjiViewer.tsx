"use client";
import { useKnownKanji } from "@/context/KnownKanjiContext";
import {
    Box,
    HStack,
    Stack,
    Text
} from "@chakra-ui/react";
import { useMemo } from "react";
import { KanjiDisplay } from "../common/KanjiText";

export const KanjiViewer = (props: {
  data: string[];
}) => {
  const { data } = props;
  const { knownKanji , setKnownKanji, removeKnownKanji } = useKnownKanji();
  const isAllSelected = useMemo(() => data.every(d => knownKanji.includes(d)),[data, knownKanji]);
  
  return (
    <Stack>
        {!isAllSelected ? <Text onClick={() => setKnownKanji(data.join(""))}>Select All</Text> : <Text onClick={() => removeKnownKanji(data.join(""))}>Select None</Text>}
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
