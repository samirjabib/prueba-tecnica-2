import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";

export const DashboardLayout = ({ auth }) => {
  return (
    <div className="bg-[#111827]">
      <Sidebar />
      <div className="p-4 sm:ml-64 ">
        <Outlet />
      </div>
    </div>
  );
};
