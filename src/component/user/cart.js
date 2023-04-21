import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchcartdata } from "../api/api";
// import CartItem from "./cart_item";

const Cart = () => {
    const user_token = localStorage.getItem("user_token");
    const [cartData, setCartData] = useState([]);

    //   const [allCartdata, setAllcartData] = useState([]);
    const [apicall, setapicall] = useState(false);

    useEffect(() => {
        cartdatafucntion();
    }, [apicall]);
    //   console.log("qty--" + cartQty);
    const cartdatafucntion = async () => {
        const userData = await fetchcartdata();
        setCartData(userData);
        // setAllcartData(userData[0]);
    };

    return (
        <div>
            <aside className="col-md-9 cart-sidebar active ">
                <div className="cart-header ">
                    <div className="cart-total">
                        <i className="fas fa-shopping-basket"></i>
                        <span>cart</span>
                    </div>
                    <button className="cart-close">
                        <Link to={"/"}>
                            <i className="icofont-close"></i>
                        </Link>
                    </button>
                </div>
                <ul className="cart-list">
                    {/* {cartData.map((cdata, id) => {
                        return <CartItem cdata={cdata} />;
                    })} */}
                </ul>
                <div className="cart-footer">
                    <button className="coupon-btn">Do you have a coupon code?</button>
                    <form className="coupon-form">
                        <input type="text" placeholder="Enter your coupon code" />
                        <button type="submit">
                            <span>apply</span>
                        </button>
                    </form>
                    <Link to={"/user/checkout"} className="cart-checkout-btn">
                        <span className="checkout-label">Proceed to Checkout</span>
                        <span className="checkout-price"></span>
                    </Link>
                </div>
            </aside>
        </div>
    );
};

export default Cart;
