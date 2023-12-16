import { cn } from "@/lib/utils";
import { Cards } from "../core-component/Cards";

export const MessageBox = ({ postedBy }: { postedBy: boolean }) => {
  return (
    <div className={cn({ "justify-end": postedBy }, "w-full  flex gap-10  ")}>
      <Cards
        bordered
        className={cn({ "bg-slate-400/10": !postedBy }, "w-6/12 flex  flex-col gap-4 border-[2px] shadow-sm px-3 py-2")}>
        {!postedBy && <Cards.Header className="text-md font-semibold">Alper Erdoğan</Cards.Header>}
        <Cards.Content className="text-md font-medium whitespace-pre-wrap">
          Naber ne yapıyorsun sdşkngsdşkngsd dsg sd gdsgds gds gsd g sggds gdss dg sdşkngsdşkngsdgds gsd gds g dsggds
          gdsgdsgdssssss gds g dsggds gds
        </Cards.Content>
        <Cards.Footer className="self-end text-sm">05:34</Cards.Footer>
      </Cards>
    </div>
  );
};
