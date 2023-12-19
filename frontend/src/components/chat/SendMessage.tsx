import { SendHorizontal } from "lucide-react";
import { Button } from "../core-component/Button";
import React, { useRef } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { useMessage } from "@/context/chat/messages-provider";

export const SendMessage = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { sendMessage, messageData } = useMessage();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message: unknown = inputRef.current?.value;
    if (typeof message === "string") {
      await sendMessage(messageData?._id, message);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <div className="border-t gap-2 px-3.5 flex justify-between items-center h-[80px]">
      <form
        className=" w-full border-t gap-2 px-3.5 flex justify-between items-center h-[80px]"
        onSubmit={handleSubmit}>
        <ReactTextareaAutosize
          disabled={messageData._id === undefined}
          ref={inputRef}
          minRows={1}
          maxRows={2}
          style={{ resize: "none" }}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black"
          placeholder="Type a message"
        />
        <Button
          type="submit"
          size="sm"
          disabled={messageData._id === undefined}
          variantType={messageData._id === undefined ? "disable" : "primary"}>
          <SendHorizontal />
        </Button>
      </form>
    </div>
  );
};
