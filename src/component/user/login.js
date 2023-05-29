import React from "react";
import Logo from "../../logo192.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login_api } from "../api/api";
import SweetAlert from "sweetalert-react";
import Loader from "../common/loader";
import "sweetalert/dist/sweetalert.css";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [emailerror, setemailerror] = useState(false);
  const [emailVal, setemailVal] = useState("");
  const [passval, setpassval] = useState("");

  const [ShowAlert, setShowAlert] = useState(false);
  const [ShowErrorAlert, setShowErrorAlert] = useState(false);

  const onEmailChange = (e) => {
    setemailVal(e.target.value);
    setemailerror(false);
  };

  const onPasswordChange = (e) => {
    setpassval(e.target.value);
    setemailerror(false);
  };

  async function sign_up_btn(event) {
    event.preventDefault();
    setLoading(true);
    let result = await login_api({
      email: emailVal,
      password: passval,
    });

    console.log("responxe---" + JSON.stringify(result));
    setLoading(false);
    const { user_detaile } = result;

    if (result.res_code === "001" || result.res_code === "002") {
      localStorage.setItem("user_token", result.token);
      localStorage.setItem("user_type", user_detaile.user_type);
      localStorage.setItem("user_fname", user_detaile.first_name);

      setShowAlert(true);
    } else if (
      result.response === "creadintial not match" &&
      result.status === false
    ) {
      setemailerror(result.response);
    } else if (
      result.res_code === "003" &&
      result.response === "please fill all inputs"
    ) {
      setemailerror(result.response);
    }
  }

  const onCloseAlert = () => {
    return Promise.resolve(setShowAlert(false));
  };

  return (
    <div>
      {" "}
      <SweetAlert
        show={ShowAlert}
        title="Login Message"
        text={"Login successfully"}
        onConfirm={() =>
          onCloseAlert().then(() => {
            navigate("/");
          })
        }
      />
      <SweetAlert
        show={ShowErrorAlert}
        title="Login Message"
        text={"Not login Please try again"}
        onConfirm={() => setShowErrorAlert(false)}
      />
      <section className="user-form-part">
        {loading === true ? <Loader /> : null}
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
                  <h2>welcome!</h2>
                  <p>Use your credentials to access</p>
                </div>
                <div className="user-form-group">
                  <ul className="user-form-social">
                    <li>
                      <Link to="#" className="facebook">
                        <i className="fab fa-facebook-f"></i>login with facebook
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="twitter">
                        <i className="fab fa-twitter"></i>login with twitter
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="google">
                        <i className="fab fa-google"></i>login with google
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="instagram">
                        <i className="fab fa-instagram"></i>login with instagram
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
                        className="form-control user_input_class"
                        placeholder="Enter your email"
                        onChange={(e) => {
                          onEmailChange(e);
                        }}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control user_input_class"
                        placeholder="Enter your password"
                        onChange={(e) => onPasswordChange(e)}
                        required
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
                        Remember Me
                      </label>
                    </div>
                    {emailerror === "creadintial not match" ? (
                      <small className=" text-danger">
                        Credentials Not Match
                      </small>
                    ) : null}
                    {emailerror === "please fill all inputs" ? (
                      <small className=" text-danger">
                        Please fill creadintials
                      </small>
                    ) : null}

                    <div className="form-button">
                      <button type="submit">login</button>
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
              {/* <div className="user-form-footer">
                <p>
                  Greeny | &COPY; Copyright by <Link to="#">Mironcoder</Link>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
