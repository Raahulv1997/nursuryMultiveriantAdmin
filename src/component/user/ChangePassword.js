import { useState, React } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../logo192.png";
import { change_password_api } from "../api/api";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
import Spinner from "react-bootstrap/Spinner";

const ChangePassword = () => {
  const [passval, setpassval] = useState("");
  const [spinner, setSpinner] = useState(false);

  let [ShowAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const onPasswordChange = (e) => {
    setpassval(e.target.value);
  };
  async function submit_btn(event) {
    event.preventDefault();
    setSpinner("spinner");

    const result = await change_password_api(passval);

    if (
      result.response === "update your password successfully" &&
      result.success === true
    ) {
      localStorage.removeItem("user_token");
      setSpinner(false);
      setShowAlert(true);
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
        title="Password Update"
        text={"Password Update successfully"}
        onConfirm={() =>
          onCloseAlert().then(() => {
            navigate("/login");
          })
        }
      />
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
                  <h2>any issue?</h2>
                  <p>Make sure your current password is strong</p>
                </div>
                <form className="user-form" onSubmit={submit_btn}>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="create your new password"
                      onChange={(e) => onPasswordChange(e)}
                    />
                  </div>

                  <div className="form-button">
                    {spinner === "spinner" ? (
                      <button type="submit">
                        {" "}
                        <Spinner animation="border" role="status">
                          <span className="visually-hidden">
                            Change Password
                          </span>
                        </Spinner>
                      </button>
                    ) : (
                      <button type="submit">Change Password</button>
                    )}
                  </div>
                </form>
              </div>
              <div className="user-form-remind">
                <p>
                  Go Back To<Link to="/login">login here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChangePassword;
