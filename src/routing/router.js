import { lazy } from "react";
import { MainLayout } from "../layouts/MainLayout";
import { AppRoutes } from "./AppRoutes";
import { createHashRouter } from "react-router-dom";
const DummyTable = lazy(() => import("../pages/DummyTable.js"));
const DummyList = lazy(() => import("../pages/DummyList.js"));
const DummyChart = lazy(() => import("../pages/DummyChart.js"));

export const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: AppRoutes.DummyTable,
        element: <DummyTable />,
      },
      {
        path: AppRoutes.DummyChart,
        element: <DummyChart />,
      },
      {
        index: true,
        path: AppRoutes.DummyList,
        element: <DummyList />,
      },
    ],
  },
]);
