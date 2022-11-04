import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/cadastro" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default RoutesMain;
