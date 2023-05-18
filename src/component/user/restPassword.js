import React from "react";
import Logo from "../css-js/images/logo.png";
import { useState } from "react";
import { forget_api } from "../api/api";
import { Link, useNavigate } from "react-router-dom";

const Rest_password = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  async function sub_btn(event) {
    event.preventDefault();
    let result = await forget_api({ email: email });
    // console.log(result)
    if (result.status === true) {
      setEmail("");
      navigate("/otp_verify");
      alert(result.response);
    } else {
      alert(result.response);
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
                <Link to="index.html">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="user-form-card">
                <div className="user-form-title">
                  <h2>worried?</h2>
                  <p>No Problem! Just Follow The Simple Way</p>
                </div>
                <form className="user-form">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-button">
                    <button
                      type="submit"
                      onClick={(event) => {
                        sub_btn(event);
                      }}
                    >
                      get reset link
                    </button>
                  </div>
                </form>
              </div>
              <div className="user-form-remind">
                <p>
                  Go Back To<Link to={"/login"}>login here</Link>
                </p>
              </div>
              <div className="user-form-footer">
                <p>
                  Greeny | &COPY; Copyright by <Link to={""}>Mironcoder</Link>
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
