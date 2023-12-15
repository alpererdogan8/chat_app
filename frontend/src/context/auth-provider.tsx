/* eslint-disable react-refresh/only-export-components */
import { FC, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface AuthContextType {
  onToggle: () => boolean;
  authToggle: SetStateAction<boolean>;
}

const AuthContext = createContext<AuthContextType>({
  onToggle: () => false,
  authToggle: false,
});

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [authToggle, setAuthToggle] = useState<boolean>(false);

  const onToggle = () => {
    setAuthToggle(!authToggle);
    console.log(authToggle);
    return authToggle;
  };
  const Data = {
    onToggle,
    authToggle,
  };
  return <AuthContext.Provider value={Data}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
