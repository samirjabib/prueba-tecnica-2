import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";

export const DashboardLayout = ({ user, onLogout }) => {
  return (
    <div className="">
      <Sidebar user={user} onLogout={onLogout} />
      <div className="p-4 sm:ml-64 ">
        <Outlet />
      </div>
    </div>
  );
};
