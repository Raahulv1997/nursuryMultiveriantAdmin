import { useState, React } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../css-js/images/logo.png";
import { change_password_api } from '../api/api'
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
const Change_password = () => {
  const [old_password, setOld_password] = useState("")
  const [current_password, setCurrent_password] = useState("")
  const [reapet_password, setReapet_password] = useState("")
  let [res_result, setRes_result] = useState("")
  let [ShowAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  async function submit_btn(event) {
    event.preventDefault();
    let email_ = localStorage.getItem("sign_up_email");
    console.log(old_password + "__" + current_password + "__" + reapet_password + "__" + email_)
    if (old_password !== "" && current_password !== "" && reapet_password !== "" && email_ !== "") {
      if (reapet_password === current_password) {
        let result = await change_password_api({ old_password: old_password, new_password: current_password, email: email_ })
        if (result.success === true) {
          setOld_password("")
          setCurrent_password("")
          setReapet_password("")
          navigate("/login");
        } else {
          setShowAlert(true)
          setRes_result(result.response)
        }
      } else {
        setShowAlert(true)
        setRes_result("reapet password not match")
      }
    } else {
      setShowAlert(true)
      setRes_result("please fill all fields")
    }

  }

  return (
    <div>
      {" "}
      <SweetAlert
        show={ShowAlert}
        title="LogIn message"
        text={res_result}
        onConfirm={() => { setRes_result("please fill all fields"); setShowAlert(false); }}
      />
      <section className="user-form-part">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
              <div className="user-form-logo">
                <Link to="" >
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="user-form-card">
                <div className="user-form-title">
                  <h2>any issue?</h2>
                  <p>Make sure your current password is strong</p>
                </div>
                <form className="user-form">
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Old password"
                      onChange={(e) => { setOld_password(e.target.value) }}
                      value={old_password}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Current password"
                      onChange={(e) => { setCurrent_password(e.target.value) }}
                      value={current_password}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="reapet password"
                      onChange={(e) => { setReapet_password(e.target.value) }}
                      value={reapet_password}
                    />
                  </div>
                  <div className="form-button">
                    <button type="submit" onClick={(event) => { submit_btn(event) }}>change password</button>
                  </div>
                </form>
              </div>
              <div className="user-form-remind">
                <p>
                  Go Back To<Link to="" >login here</Link>
                </p>
              </div>
              <div className="user-form-footer">
                <p>
                  Greeny | &COPY; Copyright by <Link to="" >Mironcoder</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Change_password;
