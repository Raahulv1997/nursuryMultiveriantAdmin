import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../logo192.png";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import { VendorLoginFuntion } from "../api/api";
import { Button } from "react-bootstrap";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
const SellerLogin = () => {
  const [emailVal, setemailVal] = useState("");
  const [passval, setpassval] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [emailerror, setemailerror] = useState(false);
  const [showmodel, setShowmodel] = useState(false);
  let [facebook, setFacebook] = useState(false);
  const navigate = useNavigate();

  const onEmailChange = (e) => {
    setemailVal(e.target.value);
    setemailerror(false);
  };

  const onPasswordChange = (e) => {
    setpassval(e.target.value);
    setemailerror(false);
  };

  const LoginVendor = async (e) => {
    e.preventDefault();
    setSpinner("spinner");
    const response = await VendorLoginFuntion(emailVal, passval);
    const { vendor_detaile } = response;
    if (response.complete_profile === false) {
      setSpinner(false);
      setemailerror("incomplete");

      localStorage.setItem("vendor_token", response.token);
    }
    if (response.response === "email formate no match") {
      setSpinner(false);
      setemailerror("formate Not Match");
    }
    if (response.response === "please fill all inputs") {
      setSpinner(false);
      setemailerror("fillinput");
    }
    if (response.response === "creadintial not match") {
      setSpinner(false);
      setemailerror("credetialnotmatch");
    }
    if (
      response.response === "successfully login" &&
      vendor_detaile.status === "pending"
    ) {
      localStorage.setItem("vendor_token", response.token);
      setSpinner(false);
      setShowmodel(true);
    }
    if (
      response.response === "successfully login" &&
      vendor_detaile.status === "approved"
    ) {
      setSpinner(false);
      localStorage.removeItem("admin_token");
      localStorage.setItem("vendor_token", response.token);
      localStorage.setItem("user_type", "vendor");
      localStorage.setItem("vendor_id", response.vendor_detaile.vendor_id);
      navigate("/home");
      // setShowmodel(true);
    }
  };

  const onProfileClick = () => {
    navigate("/sellerRegister");
  };

  const handleClose = () => {
    setShowmodel(false);
    navigate("/");
    window.location.reload();
  };

  const responseFacebook = async (response) => {
    setFacebook(false);
    // if(response.graphDomain === "facebook"){
    //   let data = await SocialLogin(response.userID,response.email,response.name,response.picture.data.url,"Facebook");
    //     localStorage.setItem("token", data.token);
    //     localStorage.setItem("userType", "user");
    //     localStorage.setItem("employee_id", data.employee_id);
    //     localStorage.setItem("profile_photo", data.profile_photo);
    //     toast.success("Logged In Successfully", {
    //       position: toast.POSITION.TOP_RIGHT,
    //       autoClose: 1000,
    //     });
    //     props.close();
    //     navigate("/");
    //     window.location.reload();
    //   }
  };
  const GoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        let data = await axios(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        //  if(data.data.email_verified === true){
        //   let res = await SocialLogin(data.data.sub,data.data.email,data.data.name,data.data.picture,"Google");
        //   console.log(res,);
        //   localStorage.setItem("token", res.token);
        //   localStorage.setItem("userType", "user");
        //   localStorage.setItem("employee_id", res.employee_id);
        //   localStorage.setItem("profile_photo", res.profile_photo);
        //   toast.success("Logged In Successfully", {
        //     position: toast.POSITION.TOP_RIGHT,
        //     autoClose: 1000,
        //   });
        //   props.close();
        //   navigate("/");
        //   window.location.reload();
        // }
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <div>
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
                  <h2>welcome Seller!</h2>
                  <p>Use your credentials to access</p>
                </div>
                <div className="user-form-group">
                  <ul className="user-form-social">
                    <li>
                      <Link
                        className="facebook"
                        onClick={() => setFacebook(true)}
                      >
                        <i className="fab fa-facebook-f"></i>login with Facebook
                      </Link>
                      {facebook ? (
                        <FacebookLogin
                          appId="276709614913655"
                          autoLoad
                          callback={responseFacebook}
                          fields="name,email,picture"
                          scope="public_profile,user_friends,email,user_actions.books"
                          className="font-size-4 font-weight-semibold position-relative text-white bg-marino h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                          render={(renderProps) => (
                            <button
                              onClick={renderProps.onClick}
                              className="d-none"
                            ></button>
                          )}
                        />
                      ) : null}
                    </li>
                    {/* <li>
                      <Link to="#" className="twitter">
                        <i className="fab fa-twitter"></i>login with twitter
                      </Link>
                    </li> */}
                    <li>
                      <Link to="#" className="google" onClick={GoogleLogin}>
                        <i className="fab fa-google"></i>login with google
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="#" className="instagram">
                        <i className="fab fa-instagram"></i>login with instagram
                      </Link>
                    </li> */}
                  </ul>
                  <div className="user-form-divider">
                    <p>or</p>
                  </div>
                  <form className="user-form" onSubmit={LoginVendor}>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control user_input_class"
                        // value={sign_up_mail}
                        placeholder="Enter your email"
                        onChange={(e) => {
                          onEmailChange(e);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control user_input_class"
                        placeholder="Enter your password"
                        // value={sign_up_password}
                        onChange={(e) => onPasswordChange(e)}
                      />

                      {emailerror === "formate Not Match" ? (
                        <smail className="mt-1 ms-2 text-danger" type="invalid">
                          Email Formate not Match
                        </smail>
                      ) : null}
                      {emailerror === "credetialnotmatch" ? (
                        <smail className="mt-1 ms-2 text-danger" type="invalid">
                          Credentials Not Match
                        </smail>
                      ) : null}
                      {emailerror === "fillinput" ? (
                        <smail className="mt-1 ms-2 text-danger" type="invalid">
                          Please fill all field...
                        </smail>
                      ) : null}
                      {emailerror === "incomplete" ? (
                        <small className="mt-1 ms-2 text-danger" type="invalid">
                          Profile Incomplete ....!!!! please Update your profile
                        </small>
                      ) : null}
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="check"
                      />
                      <label className="form-check-label" htmlFor="check">
                        Remember Me
                      </label>
                    </div>
                    <div className="form-button">
                      {spinner === "spinner" ? (
                        <button type="submit">
                          {" "}
                          <Spinner animation="border" role="status">
                            <span className="visually-hidden">Login</span>
                          </Spinner>
                        </button>
                      ) : emailerror === "incomplete" ? (
                        <button onClick={onProfileClick}>Update Profile</button>
                      ) : (
                        <button type="submit">Login</button>
                      )}

                      <p>
                        Forgot your password?
                        <Link to={"/sellerforgetpassword"}>reset here</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              <div className="user-form-remind">
                <p>
                  Don't have any account?
                  <Link to={"/sellerSignup"}>register here</Link>
                </p>
                <p>
                  Admin login
                  <Link to={"/admin"}>Admin</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal show={showmodel} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message for Seller</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your Request is pending wait for approvel</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SellerLogin;
