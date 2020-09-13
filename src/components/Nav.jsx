import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../Images/avatar.svg";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {};
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <Link to="/">
        <img
          className="nav_logo"
          src="https://cdn.freebiesupply.com/logos/large/2x/netflix-2-logo-png-transparent.png?fbclid=IwAR1tVDfn7SlV4Di7Xix7j6PO_Hmw-hdu8bSsTOUZAcM5Sz__7lF9hqFIqig"
          alt="Netflix Logo"
        />
      </Link>
      <img className="nav_avatar" src={Avatar} alt="Netflix Avatar" />
    </div>
  );
}

export default Nav;
