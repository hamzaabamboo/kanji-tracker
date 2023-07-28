"use client";

import { ALL_JOYO } from "@/data/joyo";
import { createContext, useContext, useEffect, useState } from "react";

export const KnownKanjiContext = createContext<{
  knownKanji: string;
  setKnownKanji: (string: string) => void;
  removeKnownKanji: (string: string) => void;
  addAllJoyo: () => void;
  removeAllKanji: () => void;
}>({
  knownKanji: "",
  setKnownKanji: () => {},
  removeKnownKanji: () => {},
  addAllJoyo: () => {},
  removeAllKanji: () => {},
});

export const KnownKanjiProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [knownKanji, _setKnownKanji] = useState("");

  useEffect(() => {
    const k = localStorage.getItem("knownKanji") ?? "";
    _setKnownKanji(k);
  }, []);

  const setKnownKanji = (string: string) => {
    let r =
      string.length === 1 && knownKanji.includes(string)
        ? knownKanji
            .split("")
            .filter((k) => k !== string)
            .join("")
        : knownKanji +
          string
            .split("")
            .filter((r) => !knownKanji.includes(r))
            .join("");
    localStorage.setItem("knownKanji", r);
    _setKnownKanji(r);
  };

  const removeKnownKanji = (string: string) => {
    let r = knownKanji
      .split("")
      .filter((k) => !string.includes(k))
      .join("");
    localStorage.setItem("knownKanji", r);
    _setKnownKanji(r);
  };

  return (
    <KnownKanjiContext.Provider
      value={{
        knownKanji,
        setKnownKanji,
        removeKnownKanji,
        addAllJoyo: () => {
          localStorage.setItem("knownKanji", ALL_JOYO);
          _setKnownKanji(ALL_JOYO);
        },
        removeAllKanji: () => {
          localStorage.setItem("knownKanji", "");
          _setKnownKanji("");
        },
      }}
    >
      {children}
    </KnownKanjiContext.Provider>
  );
};

export const useKnownKanji = () => useContext(KnownKanjiContext);
