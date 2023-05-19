import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../../logo192.png";
// import Payment1 from "../css-js/images/payment/jpg/01.jpg";
// import Payment2 from "../css-js/images/payment/jpg/02.jpg";
// import Payment3 from "../css-js/images/payment/jpg/03.jpg";
// import Payment4 from "../css-js/images/payment/jpg/04.jpg";
// import Google from "../css-js/images/google-store.png";
// import Apple from "../css-js/images/app-store.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container-fluid p-0">
          {/* <div className="row">
            <div className="col-sm-6 col-xl-3">
              <div className="footer-widget">
                <Link className="footer-logo" to="">
                  <img src={Logo} alt="logo" />
                </Link>
                <p className="footer-desc">
                  Nursery is a place where planting material, such as seedlings,
                  saplings, cuttings, etc., are raised, propagated and
                  multiplied under favourable conditions for transplanting in
                  prepared beds.
                </p>
                <ul className="footer-social">
                  <li>
                    <Link className="icofont-facebook" to=""></Link>
                  </li>
                  <li>
                    <Link className="icofont-twitter" to=""></Link>
                  </li>
                  <li>
                    <Link className="icofont-linkedin" to=""></Link>
                  </li>
                  <li>
                    <Link className="icofont-instagram" to=""></Link>
                  </li>
                  <li>
                    <Link className="icofont-pinterest" to=""></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="footer-widget contact">
                <h3 className="footer-title">contact us</h3>
                <ul className="footer-contact">
                  <li>
                    <i className="icofont-ui-email"></i>
                    <p>
                      <span>contact@we2code.com</span>
                      <span>www.we2code.com</span>
                    </p>
                  </li>
                  <li>
                    <i className="icofont-ui-touch-phone"></i>
                    <p>
                      <span>+91-96850-13001</span>
                    </p>
                  </li>
                  <li>
                    <i className="icofont-location-pin"></i>
                    <p>
                      45, Universal Tower Scheme 54, PU4, Indore, MP (452001)
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="footer-widget">
                <h3 className="footer-title">quick Links</h3>
                <div className="footer-links">
                  
                </div>
              </div>
            </div>
           
          </div> */}
          <div className="row">
            <div className="col-12">
              <div className="footer-bottom">
                <p className="footer-copytext">
                  &copy; All Copyrights Reserved by WE2CODE
                </p>
                <ul className="footer-social">
                  <li>
                    <Link className="icofont-facebook" to=""></Link>
                  </li>
                  <li>
                    <Link className="icofont-twitter" to=""></Link>
                  </li>
                  <li>
                    <Link className="icofont-linkedin" to=""></Link>
                  </li>
                  <li>
                    <Link className="icofont-instagram" to=""></Link>
                  </li>
                  <li>
                    <Link className="icofont-pinterest" to=""></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
