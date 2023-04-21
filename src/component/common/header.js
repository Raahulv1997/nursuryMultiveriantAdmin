import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../css-js/images/logo.png";
import Profile from "../css-js/images/user.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const admin_token = localStorage.getItem("admin_token");
  const user_token = localStorage.getItem("user_token");

  const OnLogoutClick = () => {
    if (admin_token !== null) {
      localStorage.removeItem("admin_token");
      navigate("/admin");
    }

    if (user_token) {
      localStorage.removeItem("user_token");
      navigate("/");
    }
  };
  return (
    <Fragment>
      <header className="header-part">
        <div className="container">
          <div className="header-content">
            <div className="header-media-group">
              <button className="header-user">
                <img src={Profile} alt="user" />
              </button>
              <Link to="">
                <img src={Logo} alt="logo" />
              </Link>
              <button className="header-src">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <Link to="">
              <img src={Logo} alt="logo" />
            </Link>
            <img src={Profile} alt="user" />

            <form className="header-form">
              <input type="text" placeholder="Search anything..." />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </form>
            <div className="header-widget-group">
              <Link to="" className="header-widget" title="Compare List">
                <i className="fas fa-random"></i>
                <sup>0</sup>
              </Link>
              <Link to="" className="header-widget" title="Wishlist">
                <i className="fas fa-heart"></i>
                <sup>0</sup>
              </Link>

              <button className="header-widget header-cart" title="Cartlist">
                <i className="fas fa-shopping-basket"></i>
                <sup>9+</sup>
                <span>
                  total price<small>$345.00</small>
                </span>
              </button>
              <Link to="/login" className="header-widget" title="Wishlist">
                <i className="fas fa-login"></i>
                <span>Login</span>
              </Link>
              <Link className="header-widget" title="Wishlist">
                <i className="fas fa-login"></i>
                <span onClick={OnLogoutClick}>Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-menu">
        <Link to="">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </Link>
        <button className="cate-btn" title="Category List">
          <i className="fas fa-list"></i>
          <span>category</span>
        </button>
        <button className="cart-btn" title="Cartlist">
          <i className="fas fa-shopping-basket"></i>
          <span>cartlist</span>
          <sup>9+</sup>
        </button>
        <Link to="">
          <i className="fas fa-heart"></i>
          <span>wishlist</span>
          <sup>0</sup>
        </Link>
        <Link to="">
          <i className="fas fa-random"></i>
          <span>compare</span>
          <sup>0</sup>
        </Link>
      </div>
    </Fragment>
  );
};

export default Header;
