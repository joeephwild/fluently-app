import connectWithContract from "@/constant";
import React, { useContext, createContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import { useHuddleStore } from "@huddle01/huddle01-client/store";
import { getHuddleClient } from "@huddle01/huddle01-client";
import { useAddress } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import axios from "axios";

type FluentProviderProps = {
  children: React.ReactNode;
};

interface PodcastContextProps {
  language: string;
  native: string;
  allMeeting: any[];
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  setNative: React.Dispatch<React.SetStateAction<string>>;
  setAllMeeting: React.Dispatch<React.SetStateAction<any[]>>;
  setTime: React.Dispatch<React.SetStateAction<number | undefined>>;
  time: number | undefined;
  createMeeting: (meetingLink: string) => Promise<void>;
  getAllMeeting: () => Promise<any[]>;
  getUserMeeting: () => void;
  getRoomId: () => Promise<string>;
}

const FluentContext = createContext<PodcastContextProps>({
  language: "",
  native: "",
  allMeeting: [],
  setAllMeeting: () => {},
  setLanguage: () => {},
  setNative: () => {},
  setTime: () => {},
  time: undefined,
  createMeeting: async (meetingLink: string) => {},
  getAllMeeting: async () => [],
  getUserMeeting: () => {},
  getRoomId: async () => "",
});

export const FluentProvider = ({ children }: FluentProviderProps) => {
  const roomId = useHuddleStore((state) => state.roomState.roomId);
  // const huddleClient = getHuddleClient("VwTZ4AGTxme9snANex9tep3NwvVMGfYd");
  // console.log(huddleClient)

  const API_KEY = "VwTZ4AGTxme9snANex9tep3NwvVMGfYd";

  const [meetingLink, setMeetingLink] = useState("");
  // console.log(meetingLink);
  const router = useRouter();

  const getRoomId = async () => {
    try {
      const { data } = await axios.post(
        "https://iriko.testing.huddle01.com/api/v1/create-iframe-room",
        {
          title: "Huddle01-Test",
          roomLocked: false,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY,
          },
        }
      );
      setMeetingLink(data.data.meetingLink);
      console.log(data);
      return data.data.meetingLink;
    } catch (error) {
      console.log(error);
      return "";
    }
  };

  useEffect(() => {
    if (address) {
      router.push("/welcome");
    }
  }, []);

  const address = useAddress();
  const [language, setLanguage] = useState("");
  const [native, setNative] = useState("");
  const [time, setTime] = useState<number>();
  const [allMeeting, setAllMeeting] = useState<any[]>([]);
  // const meetingLink = `https://iframe.huddle01.com/${roomId}`;

  const createMeeting = async (meetingLink: string) => {
    const meetingContract = await connectWithContract();
    const meeting = meetingContract.createMeeting(
      language,
      native,
      meetingLink,
      time
    );
    console.log(meeting);
  };

  const getAllMeeting = async () => {
    try {
      const meeetingContract = await connectWithContract();
      const meeting = await meeetingContract._allMeetings();
      //console.log(meeting)
      const parsedAccount = meeting.map((user: any, i: any) => ({
        user: user.user,
        language: user.language,
        native: user.nativeLanguage,
        status: user.matchStatus,
        pid: user.matchId.toNumber(),
        time: user.time.toNumber(),
        meeting: user.meetingLink,
        matched: user.userMatched,
      }));
      setAllMeeting(parsedAccount);
      return parsedAccount;
    } catch (error) {
      console.log(error);
    }
  };

  const getUserMeeting = async () => {
    const meeting = await getAllMeeting();
    console.log(meeting);
    const filterUserMeeting = meeting?.filter(
      (account: any) => account.user === address
    );
    console.log(filterUserMeeting);
  };

  useEffect(() => {
    getAllMeeting();
    getUserMeeting();
  }, []);

  const value = {
    language,
    setLanguage,
    setNative,
    native,
    time,
    setTime,
    createMeeting,
    getAllMeeting,
    allMeeting,
    setAllMeeting,
    getRoomId,
    getUserMeeting,
  };

  return (
    <FluentContext.Provider value={value}>{children}</FluentContext.Provider>
  );
};

export const useFluentContext = (): PodcastContextProps =>
  useContext(FluentContext);
