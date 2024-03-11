import React, { useEffect, useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }

      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="logo" src="../assets/logo.png" alt="Logo" />
      <img className="nav__avatar" src="../assets/user1.svg" alt="" />
    </div>
  );
};

export default Navbar;
