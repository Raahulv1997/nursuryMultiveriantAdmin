import React from "react";
import Logo from "../css-js/images/logo.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login_api } from "../api/api";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";

const Login = () => {
  const navigate = useNavigate();
  let [sign_up_mail, setSign_up_mail] = useState("");
  let [sign_up_password, setSign_up_passwordl] = useState("");
  let [res_result, setRes_result] = useState("");
  const [ShowAlert, setShowAlert] = useState(false);

  async function sign_up_btn(event) {
    event.preventDefault();
    console.log("_____________________________log-in_________________________");
    console.log(sign_up_mail);
    console.log(sign_up_password);

    let result = await login_api({
      email: sign_up_mail,
      password: sign_up_password,
    });

    if (result.res_code === "001" || result.res_code === "002") {
      console.log("responxe---" + JSON.stringify(result));

      localStorage.setItem("user_token", result.token);
      setSign_up_mail("");
      setSign_up_passwordl("");
      setRes_result(result.response);
      setShowAlert(true);
      alert(result.response);
      navigate("/");
    } else {
      setRes_result(result.response);
      setShowAlert(true);
    }
  }

  return (
    <div>
      {" "}
      <SweetAlert
        show={ShowAlert}
        title="LogIn message"
        text={res_result}
        onConfirm={() => {
          setShowAlert(false);
        }}
      />
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
                  <h2>welcome!</h2>
                  <p>Use your credentials to access</p>
                </div>
                <div className="user-form-group">
                  <ul className="user-form-social">
                    <li>
                      <a href="#" className="facebook">
                        <i className="fab fa-facebook-f"></i>login with facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" className="twitter">
                        <i className="fab fa-twitter"></i>login with twitter
                      </a>
                    </li>
                    <li>
                      <a href="#" className="google">
                        <i className="fab fa-google"></i>login with google
                      </a>
                    </li>
                    <li>
                      <a href="#" className="instagram">
                        <i className="fab fa-instagram"></i>login with instagram
                      </a>
                    </li>
                  </ul>
                  <div className="user-form-divider">
                    <p>or</p>
                  </div>
                  <form className="user-form">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control user_input_class"
                        value={sign_up_mail}
                        placeholder="Enter your email"
                        onChange={(e) => {
                          setSign_up_mail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control user_input_class"
                        placeholder="Enter your password"
                        value={sign_up_password}
                        onChange={(e) => {
                          setSign_up_passwordl(e.target.value);
                        }}
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
                        Remember Me
                      </label>
                    </div>
                    <div className="form-button">
                      <button
                        onClick={(event) => {
                          sign_up_btn(event);
                        }}
                      >
                        login
                      </button>
                      <p>
                        Forgot your password?
                        <Link to={"/user_forgate_password"}>reset here</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              <div className="user-form-remind">
                <p>
                  Don't have any account?
                  <Link to={"/user_register"}>register here</Link>
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

export default Login;
