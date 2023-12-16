import { MessageBox } from "./MessageBox";

export const Chat = () => {
  return (
    <div className=" h-[68dvh] overflow-auto flex flex-col m-2 px-4 py-5 gap-2 ">
      <MessageBox postedBy={true} />
      <MessageBox postedBy={true} />
      <MessageBox postedBy={false} />
      <MessageBox postedBy={true} />
      <MessageBox postedBy={false} />
      <MessageBox postedBy={true} />
      
      <MessageBox postedBy={false} />
      <MessageBox postedBy={false} />
      <MessageBox postedBy={false} />
      <MessageBox postedBy={true} />
      <MessageBox postedBy={false} />
    </div>
  );
};
