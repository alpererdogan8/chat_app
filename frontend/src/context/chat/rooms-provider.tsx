/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { api } from "@/assets/utils/axios/config";
import { FC, ReactNode, createContext, useContext, useState } from "react";

interface RoomsContextType {
  getRooms: () => Promise<any>;
  createRoom: (name: string) => Promise<any>;
  joinRoom: (roomId: string) => Promise<any>;
  leaveRoom: (roomId: string) => Promise<any>;
  deleteRoom: (roomId: string) => Promise<any>;
  editNameToRoom: (roomId: string, name: string) => Promise<any>;
  isLogin: boolean;
}

const RoomsContext = createContext<RoomsContextType>({
  getRooms: () => Promise.resolve(),
  createRoom: () => Promise.resolve(),
  joinRoom: () => Promise.resolve(),
  leaveRoom: () => Promise.resolve(),
  deleteRoom: () => Promise.resolve(),
  editNameToRoom: () => Promise.resolve(),
  isLogin: false,
});

export const RoomsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const getRooms = async () => {
    const data = await api.get("/room/all");
    return data;
  };
  const createRoom = async (name: string) => {
    const response = await api.post("/room/create", { name });
    setIsLogin(!isLogin);
    return response;
  };
  const joinRoom = async (roomId: string) => {
    try {
      const response = await api.post(`/room/${roomId}/join`);
      setIsLogin(!isLogin);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  const leaveRoom = async (roomId: string) => {
    try {
      const response = await api.post(`/room/${roomId}/leave`);
      setIsLogin(!isLogin);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  const deleteRoom = async (roomId: string) => {
    try {
      const response = await api.delete(`/room/${roomId}/delete`);
      setIsLogin(!isLogin);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  const editNameToRoom = async (roomId: string, name: string) => {
    const response = await api.patch(`/room/${roomId}/edit`, { name });
    return response.data;
  };

  const data = { getRooms, createRoom, joinRoom, leaveRoom, isLogin, deleteRoom, editNameToRoom };
  return <RoomsContext.Provider value={data}>{children}</RoomsContext.Provider>;
};

export const useRooms = () => {
  return useContext(RoomsContext);
};
