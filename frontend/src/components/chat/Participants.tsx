export const Participants = ({ isOnline, username }: { isOnline: boolean; username: string }) => {
  return (
    <div className="w-full border-b border-border hover:bg-secondary gap-3 flex items-center justify-center h-[95px] border-b-border ">
      <div className={`w-2.5 h-2.5 rounded-full ${isOnline ? "bg-green-500" : "bg-rose-500"}`}></div>
      <div className="  text-foreground ">{username}</div>
    </div>
  );
};
