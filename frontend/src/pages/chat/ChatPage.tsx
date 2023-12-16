import { Chat } from "@/components/chat/Chat";
import { ContainerCard } from "@/components/chat/ContainerCards";
import { RoomHeader } from "@/components/chat/RoomHeader";
import { SendMessage } from "@/components/chat/SendMessage";
import { Profile } from "@/components/profile/Profile";

// type UserType = {
//   userName: string;
//   userId: string;
//   userMessageData: string[];
//   userRooms: RoomType;
//   userIsOnline: boolean;
// };

// type RoomType = {
//   roomAdmin: Pick<UserType, "userId">;
//   roomName: string;
//   roomId: string;
//   roomMessageData: MessageType[];
//   roomUsers: UserType;
// };

// type MessageType = {
//   message: string;
//   messageTime: string;
//   messageSender: string;
// };

// const data: RoomType = [
//   { roomAdmin: { userId: "1" }, roomName: "Room1", roomId: "1", roomMessageData: [], roomUsers: [] },
// ];

export const ChatPage = () => {
  return (
    <div className="w-full grid bg-background grid-cols-12 border-x-[1px] h-[100dvh]">
      <div className="col-span-3 hidden  md:flex md:flex-col ">
        <Profile />
        <div className="w-full h-[84dvh] overflow-y-auto">
          <ContainerCard newNotification={10} isLogin={true} isRoom={true} isFounder={true} />
          <ContainerCard newNotification={10} isLogin={false} isRoom={true} isFounder={false} />
          <ContainerCard newNotification={3} isLogin={true} isRoom={true} isFounder={true} />
          <ContainerCard isLogin={false} isRoom={true} isFounder={false} />
          <ContainerCard newNotification={8} isLogin={true} isRoom={true} isFounder={true} />
          <ContainerCard newNotification={1} isLogin={false} isRoom={true} isFounder={false} />
          <ContainerCard newNotification={2} isLogin isRoom={true} isFounder={false} />
          <ContainerCard newNotification={5} isLogin={true} isRoom={true} isFounder={true} />
          <ContainerCard newNotification={100} isLogin isRoom={true} isFounder={false} />
          <ContainerCard newNotification={6} isLogin={false} isRoom={true} isFounder={true} />
          <ContainerCard isLogin isRoom={true} isFounder={false} />
          <ContainerCard isLogin isRoom={true} isFounder={false} />
          <ContainerCard isLogin={false} isRoom={true} isFounder={true} />
          <ContainerCard newNotification={1000} isLogin={false} isRoom={true} isFounder={false} />
          <ContainerCard newNotification={1} isLogin isRoom={true} isFounder={true} />
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 flex flex-col justify-between border-x-[1px]">
        <RoomHeader isFounder={true} />
        <Chat />
        <SendMessage />
      </div>
      <div className="w-full h-[100dvh] overflow-y-auto flex-col  col-span-3 hidden md:flex">
        <ContainerCard requiredOnline />
        <ContainerCard requiredOnline />
        <ContainerCard requiredOnline />
        <ContainerCard requiredOnline />
        <ContainerCard requiredOnline />
        <ContainerCard requiredOnline />
        <ContainerCard requiredOnline />
        <ContainerCard requiredOnline />
        <ContainerCard requiredOnline />
        <ContainerCard requiredOnline />
        <ContainerCard requiredOnline />
        <ContainerCard requiredOnline />
      </div>
    </div>
  );
};
