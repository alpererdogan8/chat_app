import { SendHorizonal } from "lucide-react";
import { Button } from "../core-component/Button";
import ReactTextareaAutosize from "react-textarea-autosize";

export const SendMessage = () => {
  return (
    <div className="border-t gap-2 px-3.5 flex justify-between items-center h-[80px]">
      <ReactTextareaAutosize
        minRows={1}
        maxRows={2}
        style={{ resize: "none" }}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black"
        placeholder="Type a message"
      />{" "}
      {/* <Input   /> */}
      <Button size="sm">
        <SendHorizonal />
      </Button>
    </div>
  );
};
