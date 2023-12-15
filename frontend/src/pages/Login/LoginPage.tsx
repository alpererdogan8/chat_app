/* eslint-disable @typescript-eslint/no-unused-vars */

import { LoginFormPage } from "@/pages/login/LoginFormPage";
import { LoginImagePage } from "@/pages/login/LoginImagePage";

export const LoginPage = () => {
  return (
    <div className="w-full h-[100dvh] flex  items-center justify-between">
      <LoginImagePage />
      <LoginFormPage />
    </div>
  );
};
