import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../css-js/images/logo.png";

const register = () => {
  return (
    <div>
      {" "}
      <section className="user-form-part">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
              <div className="user-form-logo">
                <Link to="" >
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="user-form-card">
                <div className="user-form-title">
                  <h2>Join Now!</h2>
                  <p>Setup A New Account In A Minute</p>
                </div>
                <div className="user-form-group">
                  <ul className="user-form-social">
                    <li>
                      <Link to="" >
                        <i className="fab fa-facebook-f"></i>Join with facebook
                      </Link>
                    </li>
                    <li>
                      <Link to="" >
                        <i className="fab fa-twitter"></i>Join with twitter
                      </Link>
                    </li>
                    <li>
                      <Link to="" >
                        <i className="fab fa-google"></i>Join with google
                      </Link>
                    </li>
                    <li>
                      <Link to="" >
                        <i className="fab fa-instagram"></i>Join with instagram
                      </Link>
                    </li>
                  </ul>
                  <div className="user-form-divider">
                    <p>or</p>
                  </div>
                  <form className="user-form">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter repeat password"
                      />
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="check"
                      />
                      <label className="form-check-label" for="check">
                        Accept all the <Link to="" >Terms & Conditions</Link>
                      </label>
                    </div>
                    <div className="form-button">
                      <button type="submit">register</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="user-form-remind">
                <p>
                  Already Have An Account?<Link to="" >login here</Link>
                </p>
              </div>
              <div className="user-form-footer">
                <p>
                  Greeny | &COPY; Copyright by <Link to="" >Mironcoder</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default register;
