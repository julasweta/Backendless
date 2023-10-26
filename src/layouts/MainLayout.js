import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "../App.css";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Download</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export { MainLayout };
