/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Chat } from "@/components/chat/Chat";
import { ContainerCard } from "@/components/chat/ContainerCards";
import { Participants } from "@/components/chat/Participants";
import { RoomHeader } from "@/components/chat/RoomHeader";
import { SendMessage } from "@/components/chat/SendMessage";
import { Profile } from "@/components/profile/Profile";
import { useAuth } from "@/context/auth-provider";
import { useMessage } from "@/context/chat/messages-provider";

import { useRooms } from "@/context/chat/rooms-provider";
import { useLayoutEffect, useState } from "react";

export const ChatPage = () => {
  const { getRooms, isLogin } = useRooms();
  const { messageData } = useMessage();
  const { profile } = useAuth();

  const [chatrooms, setChatrooms] = useState<any>();
  useLayoutEffect(() => {
    (async () => {
      const { data } = await getRooms();
      setChatrooms(data);
    })();
  }, [getRooms, isLogin, messageData?.name]);

  return (
    <div className="w-full grid bg-background grid-cols-12 h-[100dvh]">
      <div className="col-span-3 hidden  md:flex md:flex-col ">
        <Profile />
        <div className="w-full h-[84dvh] overflow-y-auto">
          {chatrooms &&
            chatrooms.data.map((room: any) => {
              const isRoomLogin = room.users.find((user: any) => user._id === profile?.user?._id);

              return (
                <ContainerCard
                  key={room._id}
                  roomId={room._id}
                  isFounder={profile?.user?._id === room.admin._id}
                  roomName={room.name}
                  isRoom={true}
                  isLogin={isRoomLogin}
                />
              );
            })}
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 flex flex-col justify-between border-x-[1px]">
        <RoomHeader />
        <Chat />
        <SendMessage />
      </div>
      <div className="w-full h-[100dvh] overflow-y-auto flex-col  col-span-3 hidden md:flex">
        {messageData?.users?.map((participant: any) => {
          return (
            <Participants key={participant?._id} isOnline={participant?.isOnline} username={participant?.username} />
          );
        })}
      </div>
    </div>
  );
};
