import React, { useState, useEffect, useRef } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/movie-logo.png";
const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];
const Header = () => {
  const { pathname } = useLocation();
  const active = headerNav.findIndex((item) => item.path === pathname);
  const headerRef = useRef(null);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);
  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <Link to="/" className="logo">
          <img src={logo} alt="" />
          <div>LTMovie</div>
        </Link>
        <ul className="header__nav">
          {headerNav.map((item, index) => (
            <li key={index} className={`${index === active ? "active" : ""}`}>
              <Link to={item.path}>{item.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
