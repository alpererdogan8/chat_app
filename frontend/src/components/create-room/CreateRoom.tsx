import { Plus } from "lucide-react";
import { Button } from "../core-component/Button";
import { Cards } from "../core-component/Cards";
import { createPortal } from "react-dom";
import { FC, FormEvent, ForwardedRef, HTMLAttributes, useState } from "react";
import { Input } from "../core-component/Input";
import { useRooms } from "@/context/chat/rooms-provider";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  ref?: ForwardedRef<HTMLDivElement>;
}

export const CreateRoom = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const Modal: FC<ModalProps> = ({ ...props }) => {
    const { createRoom } = useRooms();

    const [roomName, setRoomName] = useState<string>("");
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      createRoom(roomName);
      closeModal();
    };
    const handleCreateRoomName = (e: FormEvent<HTMLInputElement> & { target: { name: string; value: string } }) => {
      setRoomName(e.target.value);
    };
    return (
      <div className="bg-background/40 z-10 absolute flex items-center justify-center top-0 bottom-0 left-0 right-0">
        <div {...props} className="z-20 absolute top-0 bottom-0 left-0 right-0"></div>
        <Cards
          bordered
          className="bg-background py-4 px-5 flex flex-col justify-evenly items-center w-[300px] h-[300px] absolute z-30">
          <Cards.Header className="text-center text-xl">Create a Room</Cards.Header>
          <Cards.Footer className="w-full flex gap-2">
            <form className="flex gap-2 w-full" action="" onSubmit={handleSubmit}>
              <Input placeholder="Room Name" className="w-full" onChange={handleCreateRoomName} value={roomName} />
              <Button type="submit">
                <Plus />
              </Button>
            </form>
          </Cards.Footer>
        </Cards>
      </div>
    );
  };

  return (
    <>
      <Button onClick={openModal} size="icon" variantType="outline" className="group w-10 rounded-full">
        <Plus width={16} />
        <Cards
          bordered
          className="hidden group-hover:inline-flex  rounded-md mt-20 z-40  bg-background absolute px-4 py-1 text-sm">
          Create Room
        </Cards>
      </Button>
      {isOpen ? createPortal(<Modal onClick={closeModal} />, document.body) : null}
    </>
  );
};
