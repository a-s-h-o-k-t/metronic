import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { MainLayout, Layout } from "../layouts";

const Dashboard = lazy(() => import("../screens/Dashboard/Dashboard"));

const SignupPersonalInfo = lazy(() =>
  import("../screens/Login/SignupPersonalInfo")
);
const SignupMultiSetup = lazy(() =>
  import("../screens/Login/SignupMultisetup")
);
const SubmitViolation = lazy(() => import("../screens/SubmitViolation"));

const MainRoutes = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to="signup-multiple-setup" replace />,
      },
      {
        path: "signup-multiple-setup",
        element: <SignupMultiSetup />,
      },
      {
        path: "signup-personal-info",
        element: <SignupPersonalInfo />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "submit-violations",
        element: <SubmitViolation />,
      },
    ],
  },
];

export default MainRoutes;
