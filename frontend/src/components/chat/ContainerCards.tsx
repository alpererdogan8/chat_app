import { PlusIcon, Shield, Trash2Icon, X } from "lucide-react";
import { Button } from "../core-component/Button";
import { Cards } from "../core-component/Cards";

type ContainerCardType = { requiredOnline?: boolean; isFounder?: boolean; isRoom?: boolean };

export const ContainerCard = ({ requiredOnline, isFounder, isRoom }: ContainerCardType) => {
  return (
    <Cards className="w-full cursor-pointer  border-b border-border hover:bg-secondary px-4 py-4 flex items-center justify-between h-[90px] border-b-border ">
      <Cards.Header className="">Oda 1</Cards.Header>
      <Cards.Content className="flex justify-end gap-2">
        {isFounder && isRoom ? (
          <>
            <Button size="icon" className="group" variantType="text">
              <Shield />
              <Cards
                bordered
                className="hidden focus:hidden group-hover:inline-flex group-active:hidden  rounded-md  mt-20   bg-background absolute px-4 py-1 text-sm">
                You're the admin of this room.
              </Cards>
            </Button>
            <Button size="icon" className="group" variantType="outline">
              <Trash2Icon />
              <Cards
                bordered
                className="hidden focus:hidden group-hover:inline-flex group-active:hidden  rounded-md  mt-20   bg-background absolute px-4 py-1 text-sm">
                Remove Room
              </Cards>
            </Button>
          </>
        ) : isFounder === false && isRoom ? (
          <>
            <Button size="icon" className="group" variantType="outline">
              <X />
              <Cards
                bordered
                className="hidden focus:hidden group-hover:inline-flex group-active:hidden  rounded-md  mt-20   bg-background absolute px-4 py-1 text-sm">
                Leave Room
              </Cards>
            </Button>
          </>
        ) : !isFounder && !isRoom ? null : requiredOnline ? null : (
          <Button size="icon" className="group" variantType="outline">
            <PlusIcon />

            <Cards
              bordered
              className="hidden focus:hidden group-hover:inline-flex group-active:hidden  rounded-md ml-20 mt-20   bg-background absolute px-4 py-1 text-sm">
              Add Room
            </Cards>
          </Button>
        )}
      </Cards.Content>
      <Cards.Footer>
        {!isRoom && !isFounder && requiredOnline && <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>}
      </Cards.Footer>
    </Cards>
  );
};
<Button size="icon" className="group" variantType="outline">
  <PlusIcon />
  <Cards
    bordered
    className="hidden focus:hidden group-hover:inline-flex group-active:hidden  rounded-md ml-20 mt-20   bg-background absolute px-4 py-1 text-sm">
    Add Room
  </Cards>
</Button>;
