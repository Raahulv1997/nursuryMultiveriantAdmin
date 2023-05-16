import React from "react";
import { useState } from "react";
import Logo from "../css-js/images/logo.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { sigup_api } from "../api/api";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";

function Register() {
  const navigate = useNavigate();
  const [signupmail, setSignupmail] = useState("");
  const [sign_up_password, setSign_up_password] = useState("");
  let [res_result, setRes_result] = useState("");
  let [ShowAlert, setShowAlert] = useState(false);
  async function sign_up_btn(event) {
    event.preventDefault();

    var result = await sigup_api({
      email: signupmail,
      password: sign_up_password,
    });

    if (result.res_code === "001" || result.res_code === "002") {
      localStorage.setItem("sign_up_email", signupmail);

      setSignupmail("");
      setSign_up_password("");
      navigate("/otp_verify");
    } else {
      // alert(result.response)
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
                        style={{ display: "none" }}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        onChange={(e) => {
                          setSignupmail(e.target.value);
                        }}
                        value={signupmail}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        onChange={(e) => {
                          setSign_up_password(e.target.value);
                        }}
                        value={sign_up_password}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter repeat password"
                        style={{ display: "none" }}
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
                        Accept all the <a href="#">Terms & Conditions</a>
                      </label>
                    </div>
                    <div className="form-button">
                      <button
                        type="submit"
                        onClick={(event) => {
                          sign_up_btn(event);
                        }}
                      >
                        register
                      </button>
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
  );
}
export default Register;

// const register = () => {

//     function sign_up_btn(event) {

//         const [signupmail, setSignupmail] = useState("")
//         const [sign_up_password, setSign_up_passwordl] = useState("")
//         event.preventDefault();
//         console.log(signupmail)
//         console.log(sign_up_password)
//         axios.post('http://192.168.29.108:8888/user_login', {
//             email: signupmail,
//             password: sign_up_password
//         }).then(function (response) {
//             let result = response.data
//             console.log(result.res_code);
//             if (result.res_code === "001" || result.res_code === "002") {
//                 console.log("ok")
//                 setSignupmail("")
//                 setSign_up_passwordl("")
//                 alert(result.response)
//                 // reset_input()
//                 // document.getElementsByClassName("user_input_class").value=""
//                 // event.preventDefault = false;
//             } else {
//                 alert(result.response)
//             }
//             console.log(signupmail)
//             console.log(sign_up_password)

//         })
//             .catch(function (error) {
//                 console.log(error);
//                 alert(error)
//             });

//     }

//     return (
//         <div>
//             {" "}
//             <section className="user-form-part">
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
//                             <div className="user-form-logo">
//                                 <a href="index.html">
//                                     <img src={Logo} alt="logo" />
//                                 </a>
//                             </div>
//                             <div className="user-form-card">
//                                 <div className="user-form-title">
//                                     <h2>Join Now!</h2>
//                                     <p>Setup A New Account In A Minute</p>
//                                 </div>
//                                 <div className="user-form-group">
//                                     <ul className="user-form-social">
//                                         <li>
//                                             <a href="#" className="facebook">
//                                                 <i className="fab fa-facebook-f"></i>Join with facebook
//                                             </a>
//                                         </li>
//                                         <li>
//                                             <a href="#" className="twitter">
//                                                 <i className="fab fa-twitter"></i>Join with twitter
//                                             </a>
//                                         </li>
//                                         <li>
//                                             <a href="#" className="google">
//                                                 <i className="fab fa-google"></i>Join with google
//                                             </a>
//                                         </li>
//                                         <li>
//                                             <a href="#" className="instagram">
//                                                 <i className="fab fa-instagram"></i>Join with instagram
//                                             </a>
//                                         </li>
//                                     </ul>
//                                     <div className="user-form-divider">
//                                         <p>or</p>
//                                     </div>
//                                     <form className="user-form">
//                                         <div className="form-group">
//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 placeholder="Enter your name"
//                                                 style={{ "display": "none" }}
//                                             />
//                                         </div>
//                                         <div className="form-group">
//                                             <input
//                                                 type="email"
//                                                 className="form-control"
//                                                 placeholder="Enter your email"
//                                                 onChange={(e) => { setSignupmail(e.target.value) }}
//                                                 value={signupmail}
//                                             />
//                                         </div>
//                                         <div className="form-group">
//                                             <input
//                                                 type="password"
//                                                 className="form-control"
//                                                 placeholder="Enter your password"
//                                                 onChange={(e) => { setSign_up_passwordl(e.target.value) }}
//                                                 value={sign_up_password}
//                                             />
//                                         </div>
//                                         <div className="form-group">
//                                             <input
//                                                 type="password"
//                                                 className="form-control"
//                                                 placeholder="Enter repeat password"
//                                                 style={{ "display": "none" }}
//                                             />
//                                         </div>
//                                         <div className="form-check mb-3">
//                                             <input
//                                                 className="form-check-input"
//                                                 type="checkbox"
//                                                 value=""
//                                                 id="check"
//                                             />
//                                             <label className="form-check-label" for="check">
//                                                 Accept all the <a href="#">Terms & Conditions</a>
//                                             </label>
//                                         </div>
//                                         <div className="form-button">
//                                             <button type="submit" onClick={(event) => { sign_up_btn(event) }}>register</button>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                             <div className="user-form-remind">
//                                 <p>
//                                     Already Have An Account?<a href="login.html">login here</a>
//                                 </p>
//                             </div>
//                             <div className="user-form-footer">
//                                 <p>
//                                     Greeny | &COPY; Copyright by <a href="#">Mironcoder</a>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default register;
