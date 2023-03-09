import { useState } from "react";
import { SidebarMobile  } from "./SidebarMovil";
import Hamburger from "hamburger-react";
import { SidebarWeb  } from "./SidebarWeb";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleNavbar = () => {
    setOpen(!open);
    console.log("click");
  };

  const body = document.getElementsByTagName("body")[0];

  if (open) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }

  return (
    <div className="">
      <div className={`absolute z-[999] right-0 block md:hidden ${open ? "hidden" : "block"}`}>
        <Hamburger toggled={open} onToggle={handleNavbar} />
      </div>
      <SidebarMobile open={open} setOpen={setOpen} />
      <SidebarWeb/>
      <div
        className={`w-full h-screen fixed scroll- -z-30 right-0 top-0 bg-black/70 border-2 border-black ${
          open ? "block" : "hidden"
        }`}
      ></div>
    </div>
  );
};
