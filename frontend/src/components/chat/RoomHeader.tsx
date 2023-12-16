import { PencilLineIcon } from "lucide-react";
import { Cards } from "../core-component/Cards";

export const RoomHeader = ({ isFounder }: { isFounder: boolean }) => {
  return (
    <>
      <Cards className="flex flex-col">
        <div className="w-full  py-6 px-2.5 items-center h-[94px]">
          <Cards.Header className="font-semibold ml-3 gap-3 flex justify-center text-sm lg:text-base py-2.5 lg:py-2">
            <div contentEditable={isFounder}> Alper Erdoğan</div>{" "}
            {isFounder && (
              <div>
                <PencilLineIcon width={16} />
              </div>
            )}
          </Cards.Header>
          {/* <Cards.Content className="flex w-full"></Cards.Content> */}
        </div>
        <Cards.Stick className="w-full" />
      </Cards>
    </>
  );
};
