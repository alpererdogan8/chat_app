import { Chatting, Dialogs } from "@/assets/dist";

export const LoginImagePage = () => {
  return (
    <div
      className="hidden md:flex drop-shadow-2xl w-5/12 lg:w-6/12 h-[100dvh] 
        dark:bg-gradient-to-r dark:from-violet-500 dark:to-purple-500 flex-col justify-evenly items-center
       bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400
      ">
      <Dialogs className="w-[280px] lg:w-[340px] hidden md:flex lg:ml-12 ml-2 drop-shadow-xl lg:self-start self-center" />
      <Chatting className="w-[280px] lg:w-[340px] hidden md:flex lg:mr-12 mr-14  drop-shadow-xl lg:self-end self-center" />
    </div>
  );
};
