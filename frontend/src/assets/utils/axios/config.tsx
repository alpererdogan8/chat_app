import axios from "axios";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_HOSTNAME}/api/v1`,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  withCredentials: true,
});
