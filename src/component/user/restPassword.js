import React from "react";
import Logo from "../../logo192.png";
import { useState } from "react";
import { forget_api } from "../api/api";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
const Rest_password = () => {
  const [spinner, setSpinner] = useState(false);
  const [emailVal, setemailVal] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();

  const onEmailChange = (e) => {
    setemailVal(e.target.value);
    setErrorMsg(false);
  };

  async function sub_btn(event) {
    event.preventDefault();
    setSpinner("spinner");
    let result = await forget_api({ email: emailVal });

    if (
      result.response ===
      "email already exist, check your mail or try after sometime"
    ) {
      setSpinner(false);
      setErrorMsg("email already exist, check your mail or try after sometime");
    } else if (result.response === "send otp on your mail") {
      setSpinner(false);
      setErrorMsg("send otp on your mail");
      localStorage.setItem("sign_up_email", emailVal);
      navigate("/otp_verify");
    }
  }
  return (
    <div>
      {" "}
      <section className="user-form-part">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
              <div className="user-form-logo">
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="user-form-card">
                <div className="user-form-title">
                  <h2>worried?</h2>
                  <p>No Problem! Just Follow The Simple Way</p>
                </div>
                <form className="user-form" onSubmit={sub_btn}>
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
                  {errorMsg === "send otp on your mail" ? (
                    <smail className="text-danger">
                      {" "}
                      Send OTP on your email
                    </smail>
                  ) : null}

                  {errorMsg ===
                  "email already exist, check your mail or try after sometime" ? (
                    <smail className="text-danger">
                      {" "}
                      Server busy!!!! Please try again after sometime
                    </smail>
                  ) : null}
                  <div className="form-button">
                    {spinner === "spinner" ? (
                      <button type="submit">
                        {" "}
                        <Spinner animation="border" role="status">
                          <span className="visually-hidden">
                            Get reset link
                          </span>
                        </Spinner>
                      </button>
                    ) : (
                      <button type="submit">Get reset link</button>
                    )}
                  </div>
                </form>
              </div>
              <div className="user-form-remind">
                <p>
                  Go Back To<Link to={"/login"}>login here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rest_password;
