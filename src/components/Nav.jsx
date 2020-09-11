import React, { useEffect, useState } from "react";
import Avatar from "../Images/avatar.svg";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://cdn.freebiesupply.com/logos/large/2x/netflix-2-logo-png-transparent.png?fbclid=IwAR1tVDfn7SlV4Di7Xix7j6PO_Hmw-hdu8bSsTOUZAcM5Sz__7lF9hqFIqig"
        alt="Netflix Logo"
      />
      <img className="nav_avatar" src={Avatar} alt="Netflix Avatar" />
    </div>
  );
}

export default Nav;
