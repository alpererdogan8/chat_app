import { PencilLineIcon } from "lucide-react";
import { Cards } from "../core-component/Cards";
import { ChangeEvent, KeyboardEvent } from "react";
import { useMessage } from "@/context/chat/messages-provider";
import { useAuth } from "@/context/auth-provider";
import { useRooms } from "@/context/chat/rooms-provider";

export const RoomHeader = () => {
  const { messageData, setMessageData } = useMessage();
  const { profile } = useAuth();
  const { editNameToRoom } = useRooms();

  const handleContentChange = async (e: ChangeEvent<HTMLDivElement>) => {
    const newRoomName = await editNameToRoom(messageData?._id, e.target.textContent as string);
    setMessageData(newRoomName);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  // console.log(messageData?.admin?._id);
  // console.log(profile?.user?._id);

  return (
    <>
      <Cards className="flex flex-col">
        <div className="w-full  py-6 px-2.5 items-center h-[94px]">
          <Cards.Header className="font-semibold ml-3 gap-3 flex justify-center text-sm lg:text-base py-2.5 lg:py-2">
            <div
              className={`${
                profile?.user?._id === messageData?.admin?._id
                  ? "focus:bg-primary focus:text-primary-foreground hover:bg-secondary"
                  : ""
              } max-h-7  w-4/12 max-w-20: text-center  min-w-20 overflow-y-auto`}
              suppressContentEditableWarning
              contentEditable={profile?.user?._id === messageData?.admin?._id}
              onKeyDown={handleKeyDown}
              onBlur={handleContentChange}>
              {messageData._id ? messageData.name : "Select a Room"}
            </div>

            {profile?.user?._id === messageData?.admin?._id && (
              <div>
                <PencilLineIcon width={16} />
              </div>
            )}
          </Cards.Header>
        </div>

        <Cards.Stick className="w-full" />
      </Cards>
    </>
  );
};
