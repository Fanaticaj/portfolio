"use client";
import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

export function FooterNav() {
  const location = useLocation();

  return (
    <Navbar fluid rounded className="z-50 bg-gray-900 text-gray-500">
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active={location.pathname === "/"}>
          <Link to="/" className="text-white">
            Why
          </Link>
        </Navbar.Link>
        <Navbar.Link active={location.pathname === "/who"}>
          <Link to="/who" className="text-white">
            Who
          </Link>
        </Navbar.Link>
        <Navbar.Link active={location.pathname === "/what"}>
          <Link to="/what" className="text-white">
            What
          </Link>
        </Navbar.Link>
        <Navbar.Link active={location.pathname === "/where"}>
          <Link to="/where" className="text-white">
            Where
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default FooterNav;
