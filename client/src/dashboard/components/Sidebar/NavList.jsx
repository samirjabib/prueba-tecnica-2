import { NavLink } from "react-router-dom";

import { MdSpaceDashboard } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { HiLogout } from "react-icons/hi";
import { getNavLinks } from "../../utils";

const navLinksData = [
  {
    id: 1,
    name: "Dashboard",
    icon: <MdSpaceDashboard />,
    path: "/",
  },
  {
    id: 2,
    name: "Admin",
    icon: <RiAdminFill />,
    path: "/",
  },
  {
    id: 3,
    name: "Logout",
    icon: <HiLogout />,
    path: "/",
  },
];

export const NavList = ({user}) => {

    const links = getNavLinks(user)

  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2">
        {navLinksData.map((route) => {
          return (
            <li key={route.id}>
              <NavLink
                to={route.path}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ">
                  {route.icon}
                </div>
                <span className="ml-3">{route.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
