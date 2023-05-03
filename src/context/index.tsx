import connectWithContract from "@/constant";
import React, { useContext, createContext, useState, useEffect } from "react";

type FluentlyProps ={
    language: string
    native: string
    setLanguage: React.Dispatch<React.SetStateAction<string>>
    setNative: React.Dispatch<React.SetStateAction<string>>
    setTime: React.Dispatch<React.SetStateAction<number>>
    time: number
    createMeeting: () => {}
}

const PodcastContext = createContext<FluentlyProps>();

export const PodcastProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState("");
  const [native, setNative] = useState("");
  const [time, setTime] = useState<number>(430);

  const createMeeting = async() => {
    const meeetingContract = await connectWithContract()
  }


  return (
    <PodcastContext.Provider
      value={{
      language,
      setLanguage,
      setNative,
      native,
      time,
      setTime,
      createMeeting
      }}
    >
      {children}
    </PodcastContext.Provider>
  );
};

export const usePodcastContext = (): PodcastContextProps =>
  useContext(PodcastContext);