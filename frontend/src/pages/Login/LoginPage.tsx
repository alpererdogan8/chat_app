import { LoginFormPage } from "./LoginFormPage";
import { LoginImagePage } from "./LoginImagePage";

export const LoginPage = () => {
  return (
    <div className="w-full h-[100dvh] flex  items-center justify-between">
      <LoginImagePage />
      <LoginFormPage />
    </div>
  );
};
