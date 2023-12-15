import { Button } from "@/components/core-component/Button";
import { useTheme } from "@/context/theme-provider";
import { MoonIcon, SunIcon } from "lucide-react";
import { Login } from "@/components/login/Login";
import { useAuth } from "@/context/auth-provider";
import { Register } from "@/components/register/Register";

export const LoginFormPage = () => {
  const { setTheme, theme } = useTheme();
  const { authToggle } = useAuth();
  return (
    //  w-5/12 md:6/12
    <div className="w-full md:w-12/12 lg:w-6/12 h-[100dvh] flex justify-center items-center">
      <div className="w-full gap-4 md:gap-5 h-min inline-flex justify-center md:justify-end items-center">
        {!authToggle ? <Login /> : <Register />}
        <div className=" self-start -mr-8 md:mr-5 ">
          <Button
            size="icon"
            variantType="outline"
            type="submit"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </div>
      </div>
    </div>
  );
};
