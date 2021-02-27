import React, { useEffect, useState } from "react";
import LogoPng from "./netflix_logo.png";
import AvatarPng from "./netflix_avatar.png";
import "./Nav.css";
import { useHistory } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () =>
    window.scrollY > 100 ? handleShow(true) : handleShow(false);

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src={LogoPng}
        alt="Netflix Logo"
        onClick={() => history.push("/")}
      />
      <img
        className="nav_avatar"
        src={AvatarPng}
        alt="Profile"
        onClick={() => history.push("/profile")}
      />
    </div>
  );
}

export default Nav;
