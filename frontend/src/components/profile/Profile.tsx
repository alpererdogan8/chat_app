import { MoonIcon, Settings, SunIcon } from "lucide-react";
import { Button } from "../core-component/Button";
import { Cards } from "../core-component/Cards";
import { CreateRoom } from "../create-room/CreateRoom";
import { useTheme } from "@/context/theme-provider";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import useOnClickOutside from "@/hooks/useOnClickOutside";

export const Profile = () => {
  const { theme, setTheme } = useTheme();
  const [dropdown, setDropdown] = useState<boolean>(true);
  const refDropdown = useRef<HTMLDivElement>(null);
  const refDropdownForButton = useRef<HTMLButtonElement>(null);
  useOnClickOutside(refDropdown, refDropdownForButton, () => setDropdown(true));

  return (
    <Cards className="flex flex-col">
      <div className="w-full py-6 px-2.5   flex justify-between items-center">
        <Cards.Header className="font-semibold text-sm lg:text-base">Alper Erdoğan</Cards.Header>
        <Cards.Content className="flex gap-2 w-full justify-end">
          <CreateRoom />
          <Button
            ref={refDropdownForButton}
            type="button"
            onClick={() => setDropdown(!dropdown)}
            size="icon"
            variantType="outline"
            className="group w-10 rounded-full active:bg-primary-foreground">
            <Settings width={16} />
            <Cards
              bordered
              className="hidden focus:hidden group-hover:inline-flex group-active:hidden  rounded-md mt-20 mr-8   bg-background absolute px-4 py-1 z-40 text-sm">
              Logout
            </Cards>
          </Button>
          {!dropdown && (
            <div ref={refDropdown} className="absolute z-40 -mr-2 mt-[48px]">
              <Cards.Content
                className={cn(
                  { hidden: dropdown },
                  "border-border flex-col border rounded-sm  bg-background  w-40 h-auto",
                )}>
                <Button
                  variantType="outline"
                  className="border-x-0 border-y-0 rounded-none w-full flex justify-center items-center  "
                  size="sm">
                  Logout
                </Button>
                <Button
                  variantType="outline"
                  className="w-full border-x-0 border-b-0 rounded-none flex justify-center items-center "
                  size="sm"
                  type="submit"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                  {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                </Button>
              </Cards.Content>
            </div>
          )}
        </Cards.Content>
      </div>
      <Cards.Stick className="w-full" />
    </Cards>
  );
};
