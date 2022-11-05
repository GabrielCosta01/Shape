import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { LandingPage } from "../pages/LadingPage";
import { NotFoundPage } from "../pages/NotFoundPage";

const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default RoutesMain;
