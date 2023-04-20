import React from "react";
import { useState } from "react";
import Logo from "../css-js/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { otp_verify_api } from '../api/api'
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";

function Otp_verify() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("")
    let [res_result, setRes_result] = useState("")
    let [ShowAlert, setShowAlert] = useState(false);
    async function sign_up_btn(event) {
        let email_ = localStorage.getItem("sign_up_email");
        console.log("_________________________________test1____________________")
        console.log(email_)
        console.log(otp)
        console.log("_________________________________test2____________________")
        event.preventDefault();
        let result = await otp_verify_api({ email: email_, otp: otp })
        if (result.status === true) {
            console.log("ok")
            setOtp("")
            setRes_result(result.response)
            setShowAlert(true)

        } else {
            setRes_result(result.response)
            setShowAlert(true)
        }

        //    const redirect = ()=>{
        //     navigate("/login");
        //     }

    }
    return (
        <div>
            {" "}
            {res_result === "successfully created your account" ? navigate("/login") : <SweetAlert
                show={ShowAlert}
                title="LogIn message"
                text={res_result}
                onConfirm={() => { setShowAlert(false) }}
            // onCancel={() => { setShowAlert(false) }}
            />}

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
                                    <h2>Join Now!</h2>
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
                                    <form className="user-form">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter your name"
                                                style={{ "display": "none" }}
                                            />
                                        </div>
                                        {/* <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter your email"
                                                onChange={(e) => { setSignupmail(e.target.value) }}
                                                value={signupmail}
                                            />
                                        </div> */}
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Enter your password"
                                                onChange={(e) => { setOtp(e.target.value) }}
                                                value={otp}
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
                                                Accept all the <a href="#">Terms & Conditions</a>
                                            </label>
                                        </div> */}
                                        <div className="form-button">
                                            <button type="submit" onClick={(event) => { sign_up_btn(event) }}>otp verify</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="user-form-remind">
                                <p>
                                    Already Have An Account?<Link to={"/login"}>login here</Link>
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
    )
}
export default Otp_verify;
