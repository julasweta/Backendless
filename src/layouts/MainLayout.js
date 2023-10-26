import {Suspense} from "react";
import {Outlet} from "react-router-dom";
import "../App.css";
import Header from "../components/Header";

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

export {MainLayout};

