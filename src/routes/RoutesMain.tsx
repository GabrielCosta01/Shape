import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";

const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </>
  );
};

export default RoutesMain;
