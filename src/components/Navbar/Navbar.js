import React from 'react';
import "./Navbar.scss";
import logo from "../../logo.png";

export default function Navbar() {
    return (
      <nav className="navbar">
        <img src={logo} alt="apartment-rent" />

        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              home
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              about
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Toronto apartments
            </a>
          </li>
        </ul>
      </nav>
    );
}
