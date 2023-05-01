import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./component/common/header";
import Sidebar from "./component/common/sidebar";

import Index from "./component/user";
import Checkout from "./component/user/checkout";
import Nav from "./component/common/nav";
// import Product_detail from "./component/user/product_detail";
import Profile from "./component/user/profile";
import Wishlist from "./component/user/wishlist";
// import Shop from "./component/user/shop";
import Footer from "./component/common/footer";

import UserChangePassword from "./component/user/change_password";
import UserOrderlist from "./component/user/order_list";
import Wallet from "./component/user/wallet";
import AddProduct from "./component/admin/Addproduct";
import OrderList from "./component/admin/orderList";
import OrderDetail from "./component/admin/Order_details";
import UserAdd from "./component/admin/UserAdd";
import ProductDetails from "./component/admin/ProductDetails";
import Login from "./component/user/login";
import Register from "./component/user/Register.js";
import Otpverify from "./component/user/otpVerify.js";
import Resetpassword from "./component/user/restPassword.js";
import AdminLogin from "./component/admin/AdminLogin";
import AuthWrapper from "./AuthWrapper";
import Product_detail from "./component/user/product_detail.js";
import ShopPage from "./component/user/shoppage";
import Order from "./component/user/order";
import Vendor from "./component/admin/Vendor";
import SellerRegister from "./component/vendor/SellerRegister.js";
import SellerLogin from "./component/vendor/SellerLogin";
import SellerForgetPassword from "./component/vendor/SellerForgetPassword";
import SellerSignUp from "./component/vendor/SellerSignUp";
import SellerOtpVerify from "./component/vendor/SellerOtpVerify";
import UpdateSellerForgetPassword from "./component/vendor/updateSellerForgetpassword";
import NotFound from "./component/common/notfound";

function Layout() {
  let path = window.location.pathname;
  const adminLogged = localStorage.getItem("admin_token");
  const userLogged = localStorage.getItem("user_token");
  // console.log(" login------" + userLogged);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/orderDetails" element={<Order />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user_register" element={<Register />} />
          <Route path="/otp_verify" element={<Otpverify />} />
          <Route path="/user_forgate_password" element={<Resetpassword />} />
          <Route path="/admin" element={<AdminLogin />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        {adminLogged ? (
          <div className="row admin_row">
            <div className="col-lg-3 col-md-3 admin_sidebar">
              {adminLogged ? <Sidebar /> : null}
            </div>
            <div className="col-lg-9 col-md-9 admin_content_bar">
              <div className="main_content_div">
                <Routes>
                  <Route path="/admin/home" element={<AddProduct />} />
                  <Route path="/admin/orderList" element={<OrderList />} />
                  <Route path="/admin/orderDetails" element={<OrderDetail />} />
                  <Route path="/admin/userList" element={<UserAdd />} />
                  <Route path="/admin/vendor" element={<Vendor />} />
                  <Route
                    path="/admin/productDetails"
                    element={<ProductDetails />}
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </div>
        ) : null}

        {userLogged ? (
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/order_list" element={<UserOrderlist />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/product_detail" element={<Product_detail />} />
            <Route path="/change_password" element={<UserChangePassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        ) : null}
      </Router>
    </div>
  );
}

export default Layout;
