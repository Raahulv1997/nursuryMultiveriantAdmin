import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchcartdata } from "../api/api";
import CartItem from "./cart_item";
import { user_cart_api } from '../api/api'


const Cart = ({ showCartProp, cart_list_hide }) => {

    const user_token = localStorage.getItem("user_token");
    const [cartdata, setCartdata] = useState();

    async function call_cart_list() {
        let token_obj;
        if (user_token !== "" && user_token !== null && user_token !== undefined) {
            token_obj = { headers: { user_token: `${user_token}` } }
            let result = await user_cart_api(token_obj)
            console.log(result)
            setCartdata(result)
        } else {
            alert("please login your account")
        }
    }

    useEffect(() => {
        call_cart_list()
    }, [])

    return (
        <div>
            <aside className={showCartProp ? "col-md-9 cart-sidebar active" : "col-md-9 cart-sidebar "} >
                <div className="cart-header ">
                    <div className="cart-total">
                        <i className="fas fa-shopping-basket"></i>
                        <span>cart</span>
                    </div>
                    <button onClick={cart_list_hide} className="cart-close">
                        {/* <Link to={"/"}> */}
                        <i className="icofont-close"></i>
                        {/* </Link> */}
                    </button>
                </div>
                <ul className="cart-list">
                    {(cartdata || []).map((cart_item) => {
                        return <CartItem cover_image={cart_item.cover_image} name={cart_item.name} product_id={cart_item.product_id} cart_product_quantity={cart_item.cart_product_quantity} price={cart_item.price} />;
                    })}
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
