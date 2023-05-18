import React from "react";
import { Link } from "react-router-dom";
const user_token = localStorage.getItem("user_token");
// console.log("toekn in nav" + user_token);

const nav = () => {
  return (
    <nav className="navbar-part">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="navbar-content">
              <ul className="navbar-list">
                <li className="navbar-item dropdown">
                  <Link className="navbar-link dropdown-arrow" to="/">
                    home
                  </Link>
                  {/* <ul className="dropdown-position-list">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <Link to="/checkout">Checkout</Link>
                    </li>
                    <li>
                      <Link to="/product_detail">Product Detail</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Signup</Link>
                    </li>
                    <li>
                      <Link to="/forgot_password">Product Detail</Link>
                    </li>
                  </ul> */}
                </li>
                <li className="navbar-item dropdown-megamenu">
                  <Link className="navbar-link dropdown-arrow" to="/shop">
                    shop
                  </Link>
                  {/* <div className="megamenu">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="megamenu-wrap">
                            <h5 className="megamenu-title">shop pages</h5>
                            <ul className="megamenu-list">
                              <li>
                                <Link to="">shop 5 column</Link>
                              </li>
                              <li>
                                <Link to="">shop 4 column</Link>
                              </li>
                              <li>
                                <Link to="">shop 3 column</Link>
                              </li>
                              <li>
                                <Link to="">shop 2 column</Link>
                              </li>
                              <li>
                                <Link to="">shop 1 column</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="megamenu-wrap">
                            <h5 className="megamenu-title">product pages</h5>
                            <ul className="megamenu-list">
                              <li>
                                <Link to="">product single tab</Link>
                              </li>
                              <li>
                                <Link to="">product single grid</Link>
                              </li>
                              <li>
                                <Link to="">product single video</Link>
                              </li>
                              <li>
                                <Link to="">product single simple</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="megamenu-wrap">
                            <h5 className="megamenu-title">user action</h5>
                            <ul className="megamenu-list">
                              <li>
                                <Link to="">wishlist</Link>
                              </li>
                              <li>
                                <Link to="">compare</Link>
                              </li>
                              <li>
                                <Link to="">checkout</Link>
                              </li>
                              <li>
                                <Link to="">order history</Link>
                              </li>
                              <li>
                                <Link to="">order invoice</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="megamenu-wrap">
                            <h5 className="megamenu-title">other pages</h5>
                            <ul className="megamenu-list">
                              <li>
                                <Link to="">all Category</Link>
                              </li>
                              <li>
                                <Link to="">brand list</Link>
                              </li>
                              <li>
                                <Link to="">brand single</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </li>
                {/* <li className="navbar-item dropdown-megamenu">
                  <Link className="navbar-link dropdown-arrow" to="">
                    category
                  </Link>
                  <div className="megamenu">
                    <div className="container">
                      <div className="row row-cols-5">
                        <div className="col">
                          <div className="megamenu-wrap">
                            <h5 className="megamenu-title">vegetables</h5>
                            <ul className="megamenu-list">
                              <li>
                                <Link to="">carrot</Link>
                              </li>
                              <li>
                                <Link to="">broccoli</Link>
                              </li>
                              <li>
                                <Link to="">asparagus</Link>
                              </li>
                              <li>
                                <Link to="">cauliflower</Link>
                              </li>
                              <li>
                                <Link to="">eggplant</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col">
                          <div className="megamenu-wrap">
                            <h5 className="megamenu-title">fruits</h5>
                            <ul className="megamenu-list">
                              <li>
                                <Link to="">Apple</Link>
                              </li>
                              <li>
                                <Link to="">orange</Link>
                              </li>
                              <li>
                                <Link to="">banana</Link>
                              </li>
                              <li>
                                <Link to="">strawberrie</Link>
                              </li>
                              <li>
                                <Link to="">watermelon</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col">
                          <div className="megamenu-wrap">
                            <h5 className="megamenu-title">dairy farms</h5>
                            <ul className="megamenu-list">
                              <li>
                                <Link to="">Butter</Link>
                              </li>
                              <li>
                                <Link to="">Cheese</Link>
                              </li>
                              <li>
                                <Link to="">Milk</Link>
                              </li>
                              <li>
                                <Link to="">Eggs</Link>
                              </li>
                              <li>
                                <Link to="">cream</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col">
                          <div className="megamenu-wrap">
                            <h5 className="megamenu-title">seafoods</h5>
                            <ul className="megamenu-list">
                              <li>
                                <Link to="">Lobster</Link>
                              </li>
                              <li>
                                <Link to="">Octopus</Link>
                              </li>
                              <li>
                                <Link to="">Shrimp</Link>
                              </li>
                              <li>
                                <Link to="">Halabos</Link>
                              </li>
                              <li>
                                <Link to="">Maeuntang</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col">
                          <div className="megamenu-wrap">
                            <h5 className="megamenu-title">diet foods</h5>
                            <ul className="megamenu-list">
                              <li>
                                <Link to="">Salmon</Link>
                              </li>
                              <li>
                                <Link to="">Avocados</Link>
                              </li>
                              <li>
                                <Link to="">Leafy Greens</Link>
                              </li>
                              <li>
                                <Link to="">Boiled Potatoes</Link>
                              </li>
                              <li>
                                <Link to="">Cottage Cheese</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col">
                          <div className="megamenu-wrap">
                            <h5 className="megamenu-title">fast foods</h5>
                            <ul className="megamenu-list">
                              <li>
                                <Link to="">burger</Link>
                              </li>
                              <li>
                                <Link to="">milkshake</Link>
                              </li>
                              <li>
                                <Link to="">sandwich</Link>
                              </li>
                              <li>
                                <Link to="">doughnut</Link>
                              </li>
                              <li>
                                <Link to="">pizza</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col">
                          <div className="megamenu-wrap">
                            <h5 className="megamenu-title">drinks</h5>
                            <ul className="megamenu-list">
                              <li>
                                <Link to="">cocktail</Link>
                              </li>
                              <li>
                                <Link to="">hard soda</Link>
                              </li>
                              <li>
                                <Link to="">shampain</Link>
                              </li>
                              <li>
                                <Link to="">Wine</Link>
                              </li>
                              <li>
                                <Link to="">barley</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col">
                          <div className="megamenu-wrap">
                            <h5 className="megamenu-title">meats</h5>
                            <ul className="megamenu-list">
                              <li>
                                <Link to="">Meatball</Link>
                              </li>
                              <li>
                                <Link to="">Sausage</Link>
                              </li>
                              <li>
                                <Link to="">Poultry</Link>
                              </li>
                              <li>
                                <Link to="">chicken</Link>
                              </li>
                              <li>
                                <Link to="">Cows</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col">
                          <div className="megamenu-wrap">
                            <h5 className="megamenu-title">fishes</h5>
                            <ul className="megamenu-list">
                              <li>
                                <Link to="">scads</Link>
                              </li>
                              <li>
                                <Link to="">pomfret</Link>
                              </li>
                              <li>
                                <Link to="">groupers</Link>
                              </li>
                              <li>
                                <Link to="">anchovy</Link>
                              </li>
                              <li>
                                <Link to="">mackerel</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col">
                          <div className="megamenu-wrap">
                            <h5 className="megamenu-title">dry foods</h5>
                            <ul className="megamenu-list">
                              <li>
                                <Link to="">noodles</Link>
                              </li>
                              <li>
                                <Link to="">Powdered milk</Link>
                              </li>
                              <li>
                                <Link to="">nut &amp; yeast</Link>
                              </li>
                              <li>
                                <Link to="">almonds</Link>
                              </li>
                              <li>
                                <Link to="">pumpkin</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li> */}
                {/* <li className="navbar-item dropdown">
                  <Link className="navbar-link dropdown-arrow" to="">
                    pages
                  </Link>
                  <ul className="dropdown-position-list">
                    <li>
                      <Link to="">faqs</Link>
                    </li>
                    <li>
                      <Link to="">offers</Link>
                    </li>
                    <li>
                      <Link to="">my profile</Link>
                    </li>
                    <li>
                      <Link to="">my wallet</Link>
                    </li>
                    <li>
                      <Link to="">about us</Link>
                    </li>
                    <li>
                      <Link to="">contact us</Link>
                    </li>
                    <li>
                      <Link to="">privacy policy</Link>
                    </li>
                    <li>
                      <Link to="">coming soon</Link>
                    </li>
                    <li>
                      <Link to="">blank page</Link>
                    </li>
                    <li>
                      <Link to="">404 Error</Link>
                    </li>
                    <li>
                      <Link to="">email template</Link>
                    </li>
                  </ul>
                </li> */}
                {/* {user_token === null ? null : (
                  <li className="navbar-item dropdown">
                    <Link className="navbar-link dropdown-arrow" to="">
                      My Account
                    </Link>
                    <ul className="dropdown-position-list">
                      <li>
                        <Link to="/profile">My profile</Link>
                      </li>
                    </ul>
                  </li>
                )} */}
                {/* <li className="navbar-item dropdown">
                  <Link className="navbar-link dropdown-arrow" to="">
                    authentic
                  </Link>
                  <ul className="dropdown-position-list">
                    <li>
                      <Link to="">login</Link>
                    </li>
                    <li>
                      <Link to="">register</Link>
                    </li>
                    <li>
                      <Link to="">reset password</Link>
                    </li>
                    <li>
                      <Link to="">change password</Link>
                    </li>
                  </ul>
                </li> */}
                {/* <li className="navbar-item dropdown">
                  <Link className="navbar-link dropdown-arrow" to="">
                    blogs
                  </Link>
                  <ul className="dropdown-position-list">
                    <li>
                      <Link to="">blog grid</Link>
                    </li>
                    <li>
                      <Link to="">blog standard</Link>
                    </li>
                    <li>
                      <Link to="">blog details</Link>
                    </li>
                    <li>
                      <Link to="">blog author</Link>
                    </li>
                  </ul>
                </li> */}
              </ul>
              <div className="navbar-info-group">
                <div className="navbar-info">
                  <i className="icofont-ui-touch-phone"></i>
                  <p>
                    <small>call us</small>
                    <span>(+91) 96850-13001</span>
                  </p>
                </div>
                <div className="navbar-info">
                  <i className="icofont-ui-email"></i>
                  <p>
                    <small>email us</small>
                    <span>contact@we2code.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default nav;
