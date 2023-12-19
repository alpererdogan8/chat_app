import { useAuth } from "./context/auth-provider";
import { LoginPage } from "./pages/Login/LoginPage";
import { ChatPage } from "./pages/chat/ChatPage";

import { Navigate, Outlet, Route, RouteProps, Routes } from "react-router-dom";

const PrivateRoute: React.FC<RouteProps> = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace={true} />;
};

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route index element={<Navigate to="/chat" />} />
        <Route path="chat" element={<ChatPage />} />
      </Route>
      <Route path="login" element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />} />
    </Routes>
  );
}
export default App;
