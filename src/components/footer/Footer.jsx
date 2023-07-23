import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import bg from "../../assets/listmovie.jpg";
import logo from "../../assets/movie-logo.png";
const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__wrap container">
        <div className="footer__logo">
          <Link className="logo">
            <img src={logo} alt="" />
            <div>LTMovie</div>
          </Link>
        </div>
        <div className="footer__content">
          <div className="footer__content__menu">
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>Contact us</Link>
            <Link to={"/"}>Term of services</Link>
          </div>
          <div className="footer__content__menu">
            <Link to={"/"}>About us</Link>
            <Link to={"/"}>FAQ</Link>
            <Link to={"/"}>Premium</Link>
          </div>
          <div className="footer__content__menu">
            <Link to={"/"}>Privacy policy</Link>
            <Link to={"/"}>Top IMDB</Link>
            <Link to={"/"}>Live</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
