import { cn } from "@/lib/utils";
import { Cards } from "../core-component/Cards";

type MessageBoxType = {
  wasItSentByHimself: boolean;
  message: string;
  timestamp: string;
  sender: string;
};

export const MessageBox = ({ wasItSentByHimself, message, timestamp, sender }: MessageBoxType) => {
  const dateObject = new Date(timestamp);

  const hours = dateObject.getHours().toString().padStart(2, "0");
  const minutes = dateObject.getMinutes().toString().padStart(2, "0");
  const clock = `${hours}:${minutes}`;

  return (
    <div className={cn({ "justify-end": wasItSentByHimself }, "w-full  flex gap-10  ")}>
      <Cards
        bordered
        className={cn(
          { "bg-slate-400/10": !wasItSentByHimself },
          "w-6/12 flex  flex-col gap-4 border-[2px] shadow-sm px-3 py-2",
        )}>
        {!wasItSentByHimself && <Cards.Header className="text-md font-semibold">{sender}</Cards.Header>}
        <Cards.Content className="text-md font-medium whitespace-pre-wrap break-all">{message}</Cards.Content>
        <Cards.Footer className="self-end text-sm">{clock}</Cards.Footer>
      </Cards>
    </div>
  );
};
