import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Shop1 from "./component/user/Shop1";
import Order from "./component/user/order";
import Vendor from "./component/admin/Vendor";

function Layout() {
  let path = window.location.pathname;
  console.log("path  " + path);
  const aa = path.includes("/admin");
  const bb = path.includes("/");
  console.log("aa  " + aa);
  console.log("-bb--" + bb);
  const adminLogged = localStorage.getItem("admin_token");
  const userLogged = localStorage.getItem("user_token");
  console.log(" login------" + userLogged);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/change_password" element={<UserChangePassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user_register" element={<Register />} />
          <Route path="/otp_verify" element={<Otpverify />} />
          <Route path="/user_forgate_password" element={<Resetpassword />} />
          <Route path="/admin" element={<AdminLogin />} />
        </Routes>

        {aa === true ? (
          <div className="container-fluid p-0">
            <Header />

            <div className="row">
              <div className="col-lg-3">
                <Sidebar />
              </div>
              <div className="col-lg-9">
                <div className="main_content_div">
                  <Routes>
                    <Route element={<AuthWrapper />}>
                      <Route path="/admin/Home" element={<AddProduct />} />

                      <Route path="/admin/orderList" element={<OrderList />} />
                      <Route
                        path="/admin/orderDetails"
                        element={<OrderDetail />}
                      />
                      <Route path="/admin/userList" element={<UserAdd />} />
                      <Route path="/admin/vendor" element={<Vendor />} />
                      <Route
                        path="/admin/productDetails"
                        element={<ProductDetails />}
                      />
                    </Route>
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        ) : (
          console.log("check -- --else---___" + aa + "_&&_ " + adminLogged + "")
        )}

        {bb === true ? (
          <div className="container-fluid p-0">
            <Header />

            <div className="userpage">
              <Nav></Nav>
              <div className="col-lg-12">
                <div className="main_content_div">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/shop1" element={<Shop1 />} />
                    <Route path="/order_list" element={<UserOrderlist />} />
                    <Route path="/orderDetails" element={<Order />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route
                      path="/product_detaile"
                      element={<Product_detail />}
                    />
                  </Routes>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        ) : null}
      </Router>
    </div>
  );
}

export default Layout;
