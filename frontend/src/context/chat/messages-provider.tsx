/* eslint-disable react-refresh/only-export-components */
import { api } from "@/assets/utils/axios/config";
import { Dispatch, FC, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

interface User {
  _id: string;
  admin: {
    _id: string;
  };
  sender: {
    _id: string;
    username: string;
    email: string;
    isOnline: boolean;
    timestamp: string;
  };
  name: string;
  users: Record<string, any>;
  messages: [];
  timestamp: string;
}
interface MessageType {
  getMessage: (roomId: string) => Promise<User[]>;
  sendMessage: (roomId: string, message: string) => Promise<any>;
  messageData: User;
  setMessageData: Dispatch<SetStateAction<User>>;
}

const MessageContext = createContext<MessageType>({
  getMessage: () => Promise.resolve([]),
  sendMessage: () => Promise.resolve(),
  messageData: {
    _id: "",
    admin: { _id: "" },
    sender: {
      _id: "",
      username: "",
      email: "",
      isOnline: false || true,
      timestamp: "",
    },
    name: "",
    users: [],
    messages: [],
    timestamp: "",
  },
  setMessageData: () => Promise.resolve(),
});

export const MessageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [messageData, setMessageData] = useState<User>({
    _id: "",
    admin: { _id: "" },
    sender: {
      _id: "",
      username: "",
      email: "",
      isOnline: false || true,
      timestamp: "",
    },
    name: "",
    users: [],
    messages: [],
    timestamp: "",
  });
  useEffect(() => {
    api.get(`/room/658031058e837bbe8a202eac`).then((item) => console.log(item.data.data));
  }, []);

  const getMessage = async (roomId: string): Promise<User[]> => {
    const { data } = (await api.get(`/room/${roomId}`)).data;

    const users: User = data;
    setMessageData(users);

    return data;
  };
  const sendMessage = async (roomId: string, message: string) => {
    try {
      const { data } = await api.post(`/message/${roomId}/send`, {
        message,
      });
      return data;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  };

  const data = {
    getMessage,
    sendMessage,
    messageData,
    setMessageData,
  };
  return <MessageContext.Provider value={data}>{children}</MessageContext.Provider>;
};

export const useMessage = () => {
  return useContext(MessageContext);
};
