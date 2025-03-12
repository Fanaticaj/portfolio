"use client";
import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

export function FooterNav() {
  const location = useLocation(); // Get the current URL path

  return (
    <Navbar fluid rounded className="bg-gray-800 text-white z-50">
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active={location.pathname === "/"}>
          <Link to="/">Why</Link>
        </Navbar.Link>
        <Navbar.Link active={location.pathname === "/who"}>
          <Link to="/who">Who</Link>
        </Navbar.Link>
        <Navbar.Link active={location.pathname === "/what"}>
          <Link to="/what">What</Link>
        </Navbar.Link>
        <Navbar.Link active={location.pathname === "/where"}>
          <Link to="/where">Where</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default FooterNav;
