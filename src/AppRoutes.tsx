import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import UserProfile from "./pages/UserProfile";
import AuthCallbackPage from "./pages/AuthCallbackPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout>{<Home />}</Layout>} />
      <Route
        path="/user-profile"
        element={<Layout>{<UserProfile />}</Layout>}
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
