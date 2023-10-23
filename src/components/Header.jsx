import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header-block">
        <h1 id="headerTitle">Daily Scoop</h1>

        <nav>
          <NavLink to="/topics" className="nav-link">
            {" "}
            Topics{" "}
          </NavLink>
          <NavLink to="/" className="nav-link">
            {" "}
            Home{" "}
          </NavLink>
          <NavLink to="/users" className="nav-link">
            {" "}
            Users{" "}
          </NavLink>
        </nav>
      </div>
    </>
  );
}
