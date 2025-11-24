import React from "react";
import css from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.jpg";

const NavBar = () => {
  return (
    <div className={css.navBarContainer}>
      <img src={Logo} alt="TravelTrucks" className={css.Logo} />
      <div className={css.navBar}>
        <ul className={css.navBarList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? css.active : css.link)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/catalog"
              className={({ isActive }) => (isActive ? css.active : css.link)}
            >
              Catalog
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
