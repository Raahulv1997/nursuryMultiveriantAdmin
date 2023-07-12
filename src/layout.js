import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./component/user";
import Checkout from "./component/user/checkout";

// import Product_detail from "./component/user/product_detail";
// import Profile from "./component/user/profile";
// import Wishlist from "./component/user/wishlist";
// import Shop from "./component/user/shop";
// import UserOrderlist from "./component/user/order_list";
// import Wallet from "./component/user/wallet";
import AddProduct from "./component/admin/Addproduct";
import OrderList from "./component/admin/orderList";
import OrderDetail from "./component/admin/Order_details";
import UserAdd from "./component/admin/UserAdd";
import ProductDetails from "./component/admin/ProductDetails";
// import Login from "./component/user/login";
// import Register from "./component/user/Register.js";
// import Otpverify from "./component/user/otpVerify.js";
// import Resetpassword from "./component/user/restPassword.js";
import AdminLogin from "./component/admin/AdminLogin";
// import AuthWrapper from "./AuthWrapper";
// import ShopPage from "./component/user/shoppage";
// import Order from "./component/user/order";
import Vendor from "./component/admin/Vendor";
import SellerRegister from "./component/vendor/SellerRegister.js";
import SellerLogin from "./component/vendor/SellerLogin";
import SellerForgetPassword from "./component/vendor/SellerForgetPassword";
import SellerSignUp from "./component/vendor/SellerSignUp";
import SellerOtpVerify from "./component/vendor/SellerOtpVerify";
import UpdateSellerForgetPassword from "./component/vendor/updateSellerForgetpassword";
import NotFound from "./component/common/notfound";
// import DriverSignUp from "./component/driver/DriverSignUp";
// import DriverLogin from "./component/driver/DriverLogin";
// import DriverOtpVerify from "./component/driver/DriverOtpVerify";
// import DriverForgetPassword from "./component/driver/DriverForgetPassword";
// import UpdateDriverForgetPassword from "./component/driver/UpdateDriverForgetPassword";
// import DriverRegister from "./component/driver/DriverRegister";
import ManageAdmin from "./component/admin/ManageAdmin";
// import UserProductDetails from "./component/user/userproductDetail.js";
// import AuthWrapper from "./AuthWrapper";
import ChangePassword from "./component/user/ChangePassword";
import TransactionList from "./component/admin/TransactionList";
// import Filters1 from "./component/user/Filters1";
import Category from "./component/admin/Category";
import Review from "./component/admin/Review";
import Complaint from "./component/admin/Complaint";

function Layout() {
  const adminLogged = localStorage.getItem("admin_token");
  const UserType = localStorage.getItem("user_type");
  const vendorLogged = localStorage.getItem("vendor_token");
  console.log(" admin login------" + UserType);

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path={"/"} element={<Index />} />
          <Route path="/orderDetails" element={<Order />} />
          <Route path="/product_detail" element={<UserProductDetails />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user_register" element={<Register />} />
          <Route path="/otp_verify" element={<Otpverify />} />
          <Route path="/user_forgate_password" element={<Resetpassword />} /> */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/" element={<SellerLogin />} />
          <Route path="/sellerRegister" element={<SellerRegister />} />
          <Route path="/sellerSignup" element={<SellerSignUp />} />
          <Route path="/sellerOtpVerify" element={<SellerOtpVerify />} />
          {/* <Route path="/changePassword" element={<ChangePassword />} /> */}
          {/* <Route path="/filter" element={<Filters1 />} /> */}
          <Route
            path="/sellerforgetpassword"
            element={<SellerForgetPassword />}
          />
          <Route
            path="/updatesellerforgetpassword"
            element={<UpdateSellerForgetPassword />}
          />

          {/* <Route path="/DriverSignup" element={<DriverSignUp />} />
          <Route path="/DriverRegister" element={<DriverRegister />} />
          <Route path="/DriverLogin" element={<DriverLogin />} />
          <Route path="/Driverotpverify" element={<DriverOtpVerify />} />
          <Route
            path="/Driverforgetpassword"
            element={<DriverForgetPassword />}
          />
          <Route
            path="/updateDriverForgetpassword"
            element={<UpdateDriverForgetPassword />}
          /> */}

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>

        {/* {console.log("admin token--" + adminLogged)} */}
        {adminLogged === null || vendorLogged === null ? (
          <Routes>
            {/* <Route element={<AuthWrapper />}> */}
            <Route path="/home" element={<AddProduct />} />
            <Route path="/category" element={<Category />} />
            <Route path="/orderList" element={<OrderList />} />
            <Route path="/orderDetails" element={<OrderDetail />} />
            <Route path="/userList" element={<UserAdd />} />
            <Route path="/reviews" element={<Review />} />
            <Route path="/complain" element={<Complaint />} />
            <Route path="/productDetails" element={<ProductDetails />} />
            <Route path="/transactionList"element={<TransactionList />}/>
           {UserType === "admin" ?
            <><Route path="/manageAdmin" element={<ManageAdmin />} />
            <Route path="/vendor" element={<Vendor />} /></>
            : null}
            <Route path="*" element={<NotFound />} />
            {/* </Route> */}
          </Routes>
        ) : (
          console.log("in admin else")
        )}

        {/* {userLogged ? (
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/order_list" element={<UserOrderlist />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/product_detail" element={<Product_detail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        ) : null} */}
      </Router>
    </>
  );
}

export default Layout;
