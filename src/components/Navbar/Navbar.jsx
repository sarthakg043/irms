import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function NavBarComponent({ className }) {
  const [active, setActive] = useState(null);
 
  return (
    <div className={cn("fixed top-2 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <NavLink to="/" activeClassName="active">
          <div className="flex items-center">
            <img src="/images/logo2.png" alt="" className="h-14 w-16" />
            <span className="text-[#2C2C2C] font-semibold hidden sm:block">
              AL WAHDANIA
            </span>
          </div>
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          {/* Display "About" on small screens */}
          <span className="sm:hidden">About</span>
          {/* Display "About Us" on larger screens */}
          <span className="hidden sm:inline">About Us</span>
        </NavLink>
        <NavLink to="/service" activeClassName="active">Services</NavLink>
        <NavLink to="/contact" activeClassName="active">Book</NavLink>
        <NavLink to="/faq" activeClassName="active">FAQ</NavLink>
      </Menu>
    </div>
  );
}
