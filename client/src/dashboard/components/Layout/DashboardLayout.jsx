import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";

export const DashboardLayout = ({ user }) => {
  return (
    <div className="">
      <Sidebar user={user} />
      <div className="p-4 sm:ml-64 ">
        <Outlet />
      </div>
    </div>
  );
};
