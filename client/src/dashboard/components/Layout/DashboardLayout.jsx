import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";

export const DashboardLayout = ({ auth }) => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};
