import { PlusIcon, Shield, Trash2Icon, X } from "lucide-react";
import { Button } from "../core-component/Button";
import { Cards } from "../core-component/Cards";
import { useRooms } from "@/context/chat/rooms-provider";
import { useMessage } from "@/context/chat/messages-provider";

type ContainerCardType = {
  requiredOnline?: boolean;
  isFounder?: boolean;
  isLogin?: boolean;
  isRoom?: boolean;
  newNotification?: number;
  roomName?: string;
  roomId?: string;
};

const Notification = ({ newNotification }: { newNotification: number }) => {
  return (
    <Button className="relative group bg-primary/90 text-primary-foreground rounded-full p-2 h-5 mr-2 ">
      {newNotification}
      <Cards
        bordered
        className="hidden focus:hidden group-hover:inline-flex group-active:hidden  rounded-md  transform translate-x-1/6  mt-24 z-40 bg-background text-foreground absolute px-4 py-1 text-sm">
        New Message
      </Cards>
    </Button>
  );
};

export const ContainerCard = ({
  requiredOnline,
  roomName,
  newNotification,
  isFounder,
  isRoom,
  isLogin,
  roomId,
}: ContainerCardType) => {
  const { joinRoom, leaveRoom, deleteRoom } = useRooms();
  const { getMessage } = useMessage();

  return (
    <Cards
      onClick={() => getMessage(roomId!)}
      className="w-full cursor-pointer  border-b border-border hover:bg-secondary px-4 py-4 flex items-center justify-between h-[90px] border-b-border ">
      <Cards.Header className="">{roomName}</Cards.Header>
      <Cards.Content className="flex justify-end gap-2">
        {isFounder && isRoom ? (
          <div className="relative flex items-center">
            {(newNotification as number) > 0 ? <Notification newNotification={newNotification as number} /> : null}
            <Button size="icon" className="relative group" variantType="text">
              <Shield />
              <Cards
                bordered
                className="hidden focus:hidden group-hover:inline-flex group-active:hidden  rounded-md     bg-background absolute z-40 px-4  py-1 text-sm top-full left-1/2 transform -translate-x-1/2">
                You're admin
              </Cards>
            </Button>
            <Button
              onClick={() => deleteRoom(roomId as string)}
              size="icon"
              className="relative group"
              variantType="outline">
              <Trash2Icon />
              <Cards
                bordered
                className="hidden focus:hidden group-hover:inline-flex group-active:hidden  rounded-md  top-full left-1/2 transform -translate-x-1/2 mt-1 z-40  bg-background absolute px-4 py-1 text-sm ">
                Remove Room
              </Cards>
            </Button>
          </div>
        ) : isFounder === false && isRoom ? (
          <>
            {isLogin ? (
              <div className=" relative flex justify-center items-center">
                {(newNotification as number) > 0 ? <Notification newNotification={newNotification as number} /> : null}
                <Button
                  onClick={() => leaveRoom(roomId as string)}
                  size="icon"
                  className="relative group"
                  variantType="outline">
                  <X />
                  <Cards
                    bordered
                    className="hidden focus:hidden group-hover:inline-flex group-active:hidden  rounded-md  transform translate-x-1/6  mt-24 z-40 bg-background absolute px-4 py-1 text-sm">
                    Leave Room
                  </Cards>
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => joinRoom(roomId as string)}
                size="icon"
                className="group relative"
                variantType="outline">
                <PlusIcon />

                <Cards
                  bordered
                  className="hidden focus:hidden group-hover:inline-flex group-active:hidden  rounded-md  transform translate-x-1/6  mt-24 z-40 bg-background absolute px-4 py-1 text-sm">
                  Add Room
                </Cards>
              </Button>
            )}
          </>
        ) : null}
      </Cards.Content>
      <Cards.Footer>
        {!isRoom && !isFounder && requiredOnline && <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>}
      </Cards.Footer>
    </Cards>
  );
};
