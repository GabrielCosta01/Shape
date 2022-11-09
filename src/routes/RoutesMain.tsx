import { LoginPage } from "../pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LadingPage";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { RegisterPage } from "../pages/RegisterPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { DashboardPage } from "../pages/DashboardPage";

export const RoutesMain = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};