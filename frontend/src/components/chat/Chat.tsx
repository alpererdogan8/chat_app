import { useMessage } from "@/context/chat/messages-provider";
import { MessageBox } from "./MessageBox";
import { useEffect } from "react";
import { useAuth } from "@/context/auth-provider";

interface Message {
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
  message: string;
  timestamp: string;
  wasItSentByHimself: boolean;
}

export const Chat = () => {
  const { messageData } = useMessage();
  const { profile } = useAuth();
  useEffect(() => {
    console.log(messageData.sender?.username);
  }, [messageData]);

  return (
    <div className=" h-[68dvh] overflow-auto flex flex-col m-2 px-4 py-5 gap-2 ">
      {messageData._id ? (
        messageData?.messages.map((message: Message) => {
          return (
            <>
              <MessageBox
                key={message._id}
                message={message.message}
                timestamp={message.timestamp}
                sender={message.sender.username}
                wasItSentByHimself={message?.sender._id === profile.user?._id}
              />
            </>
          );
        })
      ) : (
        <div className="w-full h-[100dvh] flex justify-center items-center text-5xl"> ⬅️ Enter the Rooms</div>
      )}
    </div>
  );
};
