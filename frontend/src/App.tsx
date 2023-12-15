import { ChatPage } from "./pages/Chat/ChatPage";
import { LoginPage } from "./pages/Login/LoginPage";
import { Navigate, Outlet, Route, RouteProps, Routes } from "react-router-dom";

const isAuthenticated = () => {
  return true;
};
const PrivateRoute: React.FC<RouteProps> = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace={true} />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route index element={<Navigate to="/chat" />} />
        <Route path="chat" element={<ChatPage />} />
      </Route>
      <Route path="login" element={isAuthenticated() ? <Navigate to="/" /> : <LoginPage />} />
    </Routes>
  );
}
export default App;
