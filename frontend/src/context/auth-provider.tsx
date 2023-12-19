/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { api } from "@/assets/utils/axios/config";
import { FC, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  onToggle: () => boolean;
  authToggle: SetStateAction<boolean>;
  isAuthenticated: SetStateAction<boolean>;
  profile: any;
  login: (user: Record<"username" | "password", string>) => Promise<any>;
  logout: () => Promise<any>;
  register: (user: Record<"username" | "email" | "password", string>) => Promise<any>;
}

const AuthContext = createContext<AuthContextType>({
  onToggle: () => false,
  authToggle: false,
  isAuthenticated: false,
  profile: [],
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
});

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [authToggle, setAuthToggle] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [profile, setProfile] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const response = await api.get("/auth/user-profile");

      if (response.data) {
        setProfile(response.data);

        setIsAuthenticated(true);
      }
    })();
  }, []);

  const register = async (user: Record<"username" | "email" | "password", string>) => {
    try {
      const response = await api.post("/auth/signup", {
        username: user.username,
        email: user.email,
        password: user.password,
      });
      setIsAuthenticated(response.status === 200);
      return response.status;
    } catch (error) {
      console.log(error);
      setIsAuthenticated(false);
      return error;
    }
  };

  const login = async (user: Record<"username" | "password", string>) => {
    try {
      const response = await api.post("/auth/login", {
        username: user.username,
        password: user.password,
      });

      setIsAuthenticated(response.status === 200);
      return response.status;
    } catch (error) {
      console.log(error);
      setIsAuthenticated(false);
      return error;
    }
  };

  const logout = async () => {
    try {
      const response = await api.post("/auth/logout");
      setIsAuthenticated(false);
      return response.status;
    } catch (error) {
      console.log(error);
      setIsAuthenticated(true);
      return error;
    }
  };

  const onToggle = () => {
    setAuthToggle(!authToggle);
    return authToggle;
  };
  const data = {
    onToggle,
    authToggle,
    login,
    logout,
    isAuthenticated,
    register,
    profile,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
