import React from "react";
import { useState } from "react";
import Logo from "../../logo192.png";

import { Link, useNavigate } from "react-router-dom";
import { sigup_api } from "../api/api";

import Spinner from "react-bootstrap/Spinner";

const Register = () => {
  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(false);
  const [emailVal, setemailVal] = useState("");
  const [passval, setpassval] = useState("");

  const [errorMsg, setErrorMsg] = useState(false);

  const onEmailChange = (e) => {
    setemailVal(e.target.value);
    setErrorMsg(false);
  };

  const onPasswordChange = (e) => {
    setpassval(e.target.value);
    setErrorMsg(false);
  };

  async function sign_up_btn(event) {
    event.preventDefault();
    setSpinner("spinner");
    var result = await sigup_api({
      email: emailVal,
      password: passval,
      name: "",
    });

    console.log("result--" + JSON.stringify(result));
    if (result.res_code === "002") {
      setSpinner(false);
      setErrorMsg(result.response);
    } else if (result.response === " brfore submit, please fill mail address") {
      setSpinner(false);
      setErrorMsg(" brfore submit, please fill mail address");
      //   // alert(result.response)
      //   setRes_result(result.response);
      //   setShowAlert(true);
      // }
    } else if (
      result.response ===
      "email already exist, check your mail or try after sometime"
    ) {
      setSpinner(false);
      setErrorMsg("email already exist, check your mail or try after sometime");
    } else if (result.res_code === "001") {
      localStorage.setItem("sign_up_email", emailVal);
      setSpinner(false);
      setErrorMsg(result.response);
      navigate("/otp_verify");
    }
  }
  return (
    <div>
      {" "}
      <section className="user-form-part">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
              <div className="user-form-logo">
                <Link to="/">
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
                      <Link to="#" className="facebook">
                        <i className="fab fa-facebook-f"></i>Join with facebook
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="twitter">
                        <i className="fab fa-twitter"></i>Join with twitter
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="google">
                        <i className="fab fa-google"></i>Join with google
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="instagram">
                        <i className="fab fa-instagram"></i>Join with instagram
                      </Link>
                    </li>
                  </ul>
                  <div className="user-form-divider">
                    <p>or</p>
                  </div>
                  <form className="user-form" onSubmit={sign_up_btn}>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        onChange={(e) => {
                          onEmailChange(e);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        onChange={(e) => onPasswordChange(e)}
                      />
                    </div>

                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="check"
                        required
                      />
                      <label className="form-check-label" htmlFor="check">
                        Accept all the <Link to="#">Terms & Conditions</Link>
                      </label>
                    </div>
                    {errorMsg ===
                    "email already exists, please use logIn way" ? (
                      <smail className="text-danger">
                        {" "}
                        Email already Exist Please try another email
                      </smail>
                    ) : null}

                    {errorMsg ===
                    "email already exist, check your mail or try after sometime" ? (
                      <smail className="text-danger">
                        {" "}
                        Server busy!!!! Please try again after sometime
                      </smail>
                    ) : null}
                    {errorMsg === " brfore submit, please fill mail address" ? (
                      <smail className="text-danger">
                        {" "}
                        Please fill Credentials
                      </smail>
                    ) : null}

                    {errorMsg === "send otp on your mail" ? (
                      <smail className="text-danger">
                        {" "}
                        Otp send your email Please check your email
                      </smail>
                    ) : null}

                    <div className="form-button">
                      {spinner === "spinner" ? (
                        <button type="submit">
                          {" "}
                          <Spinner animation="border" role="status">
                            <span className="visually-hidden">Register</span>
                          </Spinner>
                        </button>
                      ) : (
                        <button type="submit">Register</button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
              <div className="user-form-remind">
                <p>
                  Already Have An Account?<Link to={"/login"}>login here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Register;
