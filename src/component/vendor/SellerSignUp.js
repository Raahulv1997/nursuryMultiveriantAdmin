import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { VendorSignUpFuntion } from "../api/api";
import Logo from "../css-js/images/logo.png";
import Spinner from "react-bootstrap/Spinner";
const SellerSignUp = () => {
  const [emailVal, setemailVal] = useState("");
  const [passval, setpassval] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [emailerror, setemailerror] = useState(false);
  const navigate = useNavigate();

  const onEmailChange = (e) => {
    setemailVal(e.target.value);
    setemailerror(false);
  };

  const onPasswordChange = (e) => {
    setpassval(e.target.value);
    setemailerror(false);
  };

  const SignUpVendor = async (e) => {
    e.preventDefault();
    setSpinner("spinner");

    const response = await VendorSignUpFuntion(emailVal, passval);
    console.log("response---" + JSON.stringify(response));
    // setSpinner(false);
    if (response.response === "brfore submit, please fill mail address") {
      setSpinner(false);
      setemailerror("credetialnotmatch");
    }
    if (response.response === "send otp on your mail") {
      setSpinner(false);
      navigate(`/sellerOtpVerify?email=${emailVal}`);
    }
    if (response.response === "email already exists, please use logIn way") {
      setSpinner(false);
      setemailerror("emailExist");
    }
  };
  return (
    <div>
      <section className="user-form-part">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
              <div className="user-form-logo">
                <a href="index.html">
                  <img src={Logo} alt="logo" />
                </a>
              </div>
              <div className="user-form-card">
                <div className="user-form-title">
                  <h2> Seller Join Now!</h2>
                  <p>Setup A New Account In A Minute</p>
                </div>
                <div className="user-form-group">
                  <ul className="user-form-social">
                    <li>
                      <a href="#" className="facebook">
                        <i className="fab fa-facebook-f"></i>Join with facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" className="twitter">
                        <i className="fab fa-twitter"></i>Join with twitter
                      </a>
                    </li>
                    <li>
                      <a href="#" className="google">
                        <i className="fab fa-google"></i>Join with google
                      </a>
                    </li>
                    <li>
                      <a href="#" className="instagram">
                        <i className="fab fa-instagram"></i>Join with instagram
                      </a>
                    </li>
                  </ul>
                  <div className="user-form-divider">
                    <p>or</p>
                  </div>
                  <form className="user-form" onSubmit={SignUpVendor}>
                    <div className="form-group">
                      <input
                        type="email"
                        required
                        className="form-control"
                        placeholder="Enter your email"
                        onChange={(e) => {
                          onEmailChange(e);
                        }}
                        //  value={signupmail}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        required
                        className="form-control"
                        placeholder="Enter your password"
                        onChange={(e) => onPasswordChange(e)}
                        // value={sign_up_password}
                      />
                      {emailerror === "credetialnotmatch" ? (
                        <p className="mt-1 ms-2 text-danger" type="invalid">
                          Credentials Not Match
                        </p>
                      ) : null}
                      {emailerror === "emailExist" ? (
                        <p className="mt-1 ms-2 text-danger" type="invalid">
                          Email Already exists...
                        </p>
                      ) : null}
                    </div>

                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="check"
                      />
                      <label className="form-check-label" for="check">
                        Accept all the <a href="#">Terms & Conditions</a>
                      </label>
                    </div>
                    <div className="form-button">
                      {spinner === "spinner" ? (
                        <button type="submit">
                          {" "}
                          <Spinner animation="border" role="status">
                            <span className="visually-hidden">Register</span>
                          </Spinner>
                        </button>
                      ) : (
                        <button type="submit">register</button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
              <div className="user-form-remind">
                <p>
                  Already Have An Account?
                  <Link to={"/sellerlogin"}>login here</Link>
                </p>
              </div>
              <div className="user-form-footer">
                <p>
                  Greeny | &COPY; Copyright by <a href="#">Mironcoder</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellerSignUp;
