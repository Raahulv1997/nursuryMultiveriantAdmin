import React from "react";
import { useState } from "react";
import Logo from "../../logo192.png";
import { Link, useNavigate } from "react-router-dom";
import { otp_verify_api } from "../api/api";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
import Spinner from "react-bootstrap/Spinner";
function Otp_verify() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  let [ShowAlert, setShowAlert] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const onOtpChange = (e) => {
    setOtp(e.target.value);
    setErrorMsg(false);
  };

  async function sign_up_btn(event) {
    let email_ = localStorage.getItem("sign_up_email");
    setSpinner("spinner");
    event.preventDefault();
    let result = await otp_verify_api({ email: email_, otp: otp });
    console.log("Result------" + JSON.stringify(result));

    if (result.response === "not matched, credential issue") {
      setSpinner(false);
      setErrorMsg(result.response);
    } else if (
      result.response === "successfully created your account" &&
      result.status === true
    ) {
      setSpinner(false);
      setShowAlert(true);
    } else if (result.success === true || result.token) {
      setSpinner(false);
      localStorage.setItem("user_token", result.token);
      navigate("/ChangePassword");
    }
  }
  const onCloseAlert = () => {
    return Promise.resolve(setShowAlert(false));
  };
  return (
    <div>
      <SweetAlert
        show={ShowAlert}
        title="Sign Up successfully"
        text={"Successfully created your account please login"}
        onConfirm={() =>
          onCloseAlert().then(() => {
            navigate("/login");
          })
        }
      />

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
                        type="password"
                        className="form-control"
                        placeholder="Enter One time password"
                        onChange={(e) => {
                          onOtpChange(e);
                        }}
                      />
                    </div>
                    {/* <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Enter repeat password"
                                                style={{ "display": "none" }}
                                            />
                                        </div> */}
                    {/* <div className="form-check mb-3">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="check"
                                            />
                                            <label className="form-check-label" for="check">
                                                Accept all the <Link to="#">Terms & Conditions</Link>
                                            </label>
                                        </div> */}
                    {errorMsg === "not matched, credential issue" ? (
                      <smail className="text-danger"> Otp not Matched</smail>
                    ) : null}
                    <div className="form-button">
                      {spinner === "spinner" ? (
                        <button type="submit">
                          {" "}
                          <Spinner animation="border" role="status">
                            <span className="visually-hidden">Otp Verify</span>
                          </Spinner>
                        </button>
                      ) : (
                        <button type="submit">Otp Verify</button>
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
}
export default Otp_verify;
