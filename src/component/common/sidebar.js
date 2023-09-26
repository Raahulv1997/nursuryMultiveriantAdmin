import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GrTransaction } from "react-icons/gr";
import { RiAdminLine } from "react-icons/ri";
import { BsShop } from "react-icons/bs";
import { GiPlantRoots } from "react-icons/gi";
import { FiUser, FiLogOut, FiMenu } from "react-icons/fi";
import { MdShoppingBag, MdOutlineRateReview } from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";
import Logo from "../../logo192.png";
import { GrDocumentUser } from "react-icons/gr";
const Sidebar = (props) => {
  const [onToggele, setOnToggle] = useState(false);
  const admin_token = localStorage.getItem("admin_token");
  const vendor_token = localStorage.getItem("vendor_token");
  let UserType = localStorage.getItem("user_type");
  const navigate = useNavigate();
  /*function for Vendor login */
  const OnLogoutClick = () => {
    if (admin_token) {
      // console.log("in admin token");
      localStorage.clear();
      navigate("/admin");
    } else if (vendor_token) {
      // console.log("in vendor token");
      localStorage.clear();
      navigate("/");
    } else {
      alert("not logout");
    }
  };

  const OnToggleClick = () => {
    setOnToggle(true);
    if (onToggele === true) {
      setOnToggle(false);
    }
  };
  return (
    <div>
      <span className="show_sidebar" onClick={OnToggleClick}>
        <FiMenu />
      </span>
      <div
        className={
          onToggele === true
            ? " banner-category  sidebar_show  "
            : "banner-category"
        }
      >
        <ul className="banner-category-list vh-100 pt-4">
          <li className="brand_logo">
            {" "}
            <img src={Logo} alt="logoImage" />
          </li>
          <li
            className={
              props.style.message === "product"
                ? "banner-category-item active"
                : "banner-category-item "
            }
          >
            <Link to="/home">
              <GiPlantRoots />
              <span>Product</span>
            </Link>
            {/* <div className="banner-category-dropdown">
              <h5>vegetables item</h5>
              <div className="banner-sub-category">
                <ul>
                  <li>
                    <Link to="#">carrot</Link>
                  </li>
                  <li>
                    <Link to="#">broccoli</Link>
                  </li>
                  <li>
                    <Link to="#">asparagus</Link>
                  </li>
                  <li>
                    <Link to="#">cauliflower</Link>
                  </li>
                  <li>
                    <Link to="#">cucumber</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="#">eggplant</Link>
                  </li>
                  <li>
                    <Link to="#">green pepper</Link>
                  </li>
                  <li>
                    <Link to="#">lettuce</Link>
                  </li>
                  <li>
                    <Link to="#">mushrooms</Link>
                  </li>
                  <li>
                    <Link to="#">onion</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="#">potato</Link>
                  </li>
                  <li>
                    <Link to="#">pumpkin</Link>
                  </li>
                  <li>
                    <Link to="#">tomato</Link>
                  </li>
                  <li>
                    <Link to="#">beetroot</Link>
                  </li>
                  <li>
                    <Link to="#">zucchini</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="#">radish</Link>
                  </li>
                  <li>
                    <Link to="#">artichoke</Link>
                  </li>
                  <li>
                    <Link to="#">cabbage</Link>
                  </li>
                  <li>
                    <Link to="#">celery</Link>
                  </li>
                  <li>
                    <Link to="#">parsley</Link>
                  </li>
                </ul>
              </div>
            </div> */}
          </li>
          <li
            className={
              props.style.message === "customerOrder"
                ? "banner-category-item active"
                : "banner-category-item "
            }
          >
            <Link to="/orderList">
              <MdShoppingBag />
              <span>Orders</span>
            </Link>
            {/* <div className="banner-category-dropdown">
              <h5>groceries item</h5>
              <div className="banner-sub-category">
                <ul>
                  <li>
                    <Link to="#">Butter</Link>
                  </li>
                  <li>
                    <Link to="#">Rice</Link>
                  </li>
                  <li>
                    <Link to="#">Bread</Link>
                  </li>
                  <li>
                    <Link to="#">Pasta</Link>
                  </li>
                  <li>
                    <Link to="#">Cooking oil</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="#">Cheese</Link>
                  </li>
                  <li>
                    <Link to="#">Yogurt</Link>
                  </li>
                  <li>
                    <Link to="#">Onions</Link>
                  </li>
                  <li>
                    <Link to="#">Garlic</Link>
                  </li>
                  <li>
                    <Link to="#">Pulses</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="#">Soup</Link>
                  </li>
                  <li>
                    <Link to="#">Salt</Link>
                  </li>
                  <li>
                    <Link to="#">Pepper</Link>
                  </li>
                  <li>
                    <Link to="#">Herbs</Link>
                  </li>
                  <li>
                    <Link to="#">Sugar</Link>
                  </li>
                </ul>
              </div>
            </div> */}
          </li>
          <li
            className={
              props.style.message === "users"
                ? "banner-category-item active"
                : "banner-category-item "
            }
          >
            <Link to="/userList">
              <FiUser />
              <span>Users</span>
            </Link>
            {/* <div className="banner-category-dropdown">
              <h5>fruits item</h5>
              <div className="banner-sub-category">
                <ul>
                  <li>
                    <Link to="#">Apple</Link>
                  </li>
                  <li>
                    <Link to="#">Orange</Link>
                  </li>
                  <li>
                    <Link to="#">Watermelon</Link>
                  </li>
                  <li>
                    <Link to="#">Pear</Link>
                  </li>
                  <li>
                    <Link to="#">Cherry</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="#">Strawberry</Link>
                  </li>
                  <li>
                    <Link to="#">Nectarine</Link>
                  </li>
                  <li>
                    <Link to="#">Grape</Link>
                  </li>
                  <li>
                    <Link to="#">Mango</Link>
                  </li>
                  <li>
                    <Link to="#">Blueberry</Link>
                  </li>
                </ul>
              </div>
            </div> */}
          </li>
          {UserType === "admin" ? (
            <>
              <li
                className={
                  props.style.message === "vendor"
                    ? "banner-category-item active"
                    : "banner-category-item "
                }
              >
                <Link to="/vendor">
                  <BsShop />
                  <span>Vendor</span>
                </Link>
                {/* <div className="banner-category-dropdown">
              <h5>dairy items</h5>
              <div className="banner-sub-category">
                <ul>
                  <li>
                    <Link to="#">Eggs</Link>
                  </li>
                  <li>
                    <Link to="#">milk</Link>
                  </li>
                  <li>
                    <Link to="#">Cheese</Link>
                  </li>
                  <li>
                    <Link to="#">Butter</Link>
                  </li>
                  <li>
                    <Link to="#">Shore</Link>
                  </li>
                </ul>
              </div>
            </div> */}
              </li>
              <li
                className={
                  props.style.message === "manageAdmin"
                    ? "banner-category-item active"
                    : "banner-category-item "
                }
              >
                <Link to="/manageAdmin">
                  <RiAdminLine />
                  <span>ManageAdmin</span>
                </Link>
                {/* <div className="banner-category-dropdown">
              <h5>dairy items</h5>
              <div className="banner-sub-category">
                <ul>
                  <li>
                    <Link to="#">Eggs</Link>
                  </li>
                  <li>
                    <Link to="#">milk</Link>
                  </li>
                  <li>
                    <Link to="#">Cheese</Link>
                  </li>
                  <li>
                    <Link to="#">Butter</Link>
                  </li>
                  <li>
                    <Link to="#">Shore</Link>
                  </li>
                </ul>
              </div>
            </div> */}
              </li>
            </>
          ) : null}

          {UserType === "vendor" ? (
            <>
              <li
                className={
                  props.style.message === "workingArea"
                    ? "banner-category-item active"
                    : "banner-category-item "
                }
              >
                <Link to="/workingarea">
                  <BsShop />
                  <span>Manage Working Area</span>
                </Link>
                {/* <div className="banner-category-dropdown">
              <h5>dairy items</h5>
              <div className="banner-sub-category">
                <ul>
                  <li>
                    <Link to="#">Eggs</Link>
                  </li>
                  <li>
                    <Link to="#">milk</Link>
                  </li>
                  <li>
                    <Link to="#">Cheese</Link>
                  </li>
                  <li>
                    <Link to="#">Butter</Link>
                  </li>
                  <li>
                    <Link to="#">Shore</Link>
                  </li>
                </ul>
              </div>
            </div> */}
              </li>
              <li
                className={
                  props.style.message === "manageAdmin"
                    ? "banner-category-item active"
                    : "banner-category-item "
                }
              >
                <Link to="/manageAdmin">
                  <RiAdminLine />
                  <span>ManageAdmin</span>
                </Link>
                {/* <div className="banner-category-dropdown">
              <h5>dairy items</h5>
              <div className="banner-sub-category">
                <ul>
                  <li>
                    <Link to="#">Eggs</Link>
                  </li>
                  <li>
                    <Link to="#">milk</Link>
                  </li>
                  <li>
                    <Link to="#">Cheese</Link>
                  </li>
                  <li>
                    <Link to="#">Butter</Link>
                  </li>
                  <li>
                    <Link to="#">Shore</Link>
                  </li>
                </ul>
              </div>
            </div> */}
              </li>
            </>
          ) : null}
          <li
            className={
              props.style.message === "category"
                ? "banner-category-item active"
                : "banner-category-item "
            }
          >
            <Link to="/category">
              <TbCategory2 />
              <span> Manage Category </span>
            </Link>
          </li>
          <li
            className={
              props.style.message === "review"
                ? "banner-category-item active"
                : "banner-category-item "
            }
          >
            <Link to="/reviews">
              <MdOutlineRateReview />
              <span> Manage Reviews </span>
            </Link>
          </li>
          <li
            className={
              props.style.message === "complaint"
                ? "banner-category-item active"
                : "banner-category-item "
            }
          >
            <Link to="/complain">
              <GrDocumentUser />
              <span> Manage complain </span>
            </Link>
          </li>
          <li
            className={
              props.style.message === "transaction"
                ? "banner-category-item active"
                : "banner-category-item "
            }
          >
            <Link to="/transactionList">
              <GrTransaction />
              <span>Transection </span>
            </Link>
            {/* <div className="banner-category-dropdown">
              <h5>dairy items</h5>
              <div className="banner-sub-category">
                <ul>
                  <li>
                    <Link to="#">Eggs</Link>
                  </li>
                  <li>
                    <Link to="#">milk</Link>
                  </li>
                  <li>
                    <Link to="#">Cheese</Link>
                  </li>
                  <li>
                    <Link to="#">Butter</Link>
                  </li>
                  <li>
                    <Link to="#">Shore</Link>
                  </li>
                </ul>
              </div>
            </div> */}
          </li>

          <li className="banner-category-item" style={{ cursor: "pointer" }}>
            <FiLogOut />
            <span onClick={OnLogoutClick}> Logout</span>
          </li>
          {/* <li className="banner-category-item">
            <Link to="#">
              <i className="flaticon-crab"></i>
              <span>sea foods</span>
            </Link>
            <div className="banner-category-dropdown">
              <h5>sea food items</h5>
              <div className="banner-sub-category">
                <ul>
                  <li>
                    <Link to="#">Lobster</Link>
                  </li>
                  <li>
                    <Link to="#">Octopus</Link>
                  </li>
                  <li>
                    <Link to="#">Shrimp</Link>
                  </li>
                  <li>
                    <Link to="#">Oyster</Link>
                  </li>
                  <li>
                    <Link to="#">Squid</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="banner-category-item">
            <Link to="#">
              <i className="flaticon-salad"></i>
              <span>diet foods</span>
            </Link>
            <div className="banner-category-dropdown">
              <h5>diet food items</h5>
              <div className="banner-sub-category">
                <ul>
                  <li>
                    <Link to="#">Peanuts</Link>
                  </li>
                  <li>
                    <Link to="#">Yogurt</Link>
                  </li>
                  <li>
                    <Link to="#">vinegar</Link>
                  </li>
                  <li>
                    <Link to="#">seeds</Link>
                  </li>
                  <li>
                    <Link to="#">Coconuts</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="banner-category-item">
            <Link to="#">
              <i className="flaticon-dried-fruit"></i>
              <span>dry foods</span>
            </Link>
            <div className="banner-category-dropdown">
              <h5>dry food items</h5>
              <div className="banner-sub-category">
                <ul>
                  <li>
                    <Link to="#">Almond</Link>
                  </li>
                  <li>
                    <Link to="#">Peanut</Link>
                  </li>
                  <li>
                    <Link to="#">Raisin</Link>
                  </li>
                  <li>
                    <Link to="#">Walnut</Link>
                  </li>
                  <li>
                    <Link to="#">Pistachio</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="banner-category-item">
            <Link to="#">
              <i className="flaticon-fast-food"></i>
              <span>fast foods</span>
            </Link>
            <div className="banner-category-dropdown">
              <h5>fast food items</h5>
              <div className="banner-sub-category">
                <ul>
                  <li>
                    <Link to="#">burgar</Link>
                  </li>
                  <li>
                    <Link to="#">pizza</Link>
                  </li>
                  <li>
                    <Link to="#">Fries</Link>
                  </li>
                  <li>
                    <Link to="#">chiken</Link>
                  </li>
                  <li>
                    <Link to="#">dessert</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="banner-category-item">
            <Link to="#">
              <i className="flaticon-cheers"></i>
              <span>drinks</span>
            </Link>
            <div className="banner-category-dropdown">
              <h5>drinks item</h5>
              <div className="banner-sub-category">
                <ul>
                  <li>
                    <Link to="#">Wine</Link>
                  </li>
                  <li>
                    <Link to="#">Coffee</Link>
                  </li>
                  <li>
                    <Link to="#">Lemonade</Link>
                  </li>
                  <li>
                    <Link to="#">chocolate</Link>
                  </li>
                  <li>
                    <Link to="#">Milkshake</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="banner-category-item">
            <Link to="#">
              <i className="flaticon-barbecue"></i>
              <span>meats</span>
            </Link>
            <div className="banner-category-dropdown">
              <h5>meats item</h5>
              <div className="banner-sub-category">
                <ul>
                  <li>
                    <Link to="#">Pork</Link>
                  </li>
                  <li>
                    <Link to="#">Beef</Link>
                  </li>
                  <li>
                    <Link to="#">Mutton</Link>
                  </li>
                  <li>
                    <Link to="#">Chicken</Link>
                  </li>
                  <li>
                    <Link to="#">Turkey</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="banner-category-item">
            <Link to="#">
              <i className="flaticon-fish"></i>
              <span>fishes</span>
            </Link>
            <div className="banner-category-dropdown">
              <h5>fishes item</h5>
              <div className="banner-sub-category">
                <ul>
                  <li>
                    <Link to="#">Blue Marlin</Link>
                  </li>
                  <li>
                    <Link to="#">Flounder</Link>
                  </li>
                  <li>
                    <Link to="#">Hogfish</Link>
                  </li>
                  <li>
                    <Link to="#">Mako Shark</Link>
                  </li>
                  <li>
                    <Link to="#">pompano</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
