
"use client";
import { Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';


export function FooterNav() {
  return (
    <Navbar fluid rounded className="bg-gray-800 text-white">
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link>
            <Link to="/">Why</Link>
        </Navbar.Link>
        <Navbar.Link>
            <Link to="/Who">Who</Link>
        </Navbar.Link>
        <Navbar.Link href="#">What</Navbar.Link>
        <Navbar.Link href="#">Where</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default FooterNav;
