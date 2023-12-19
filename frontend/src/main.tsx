import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./context/theme-provider.tsx";
import { AuthProvider } from "./context/auth-provider.tsx";
import { RoomsProvider } from "./context/chat/rooms-provider.tsx";
import { BrowserRouter } from "react-router-dom";
import { MessageProvider } from "./context/chat/messages-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RoomsProvider>
          <MessageProvider>
            <ThemeProvider defaultTheme="light" storageKey="theme">
              <App />
            </ThemeProvider>
          </MessageProvider>
        </RoomsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
