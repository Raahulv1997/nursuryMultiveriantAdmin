import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import CartItem from "./cart_item";
import { user_cart_api } from "../api/api";
import { useContext } from "react";
import CartContext from "../helper/cart/index";

const Cart = ({
  showCartProp,
  cart_list_hide,
  cart_count,
  cartapicall,
  setcartapicall,
}) => {
  const ContextValue = useContext(CartContext);

  const [apicall, setapicall] = useState(false);
  const navigate = useNavigate();
  const [cartdata, setCartdata] = useState();
  const user_token = localStorage.getItem("user_token");
  const [ProductqtyError, setProductQtyError] = useState(false);
  const updateQty = ContextValue.updateQty;

  async function call_cart_list() {
    let token_obj;
    if (user_token !== "" && user_token !== null && user_token !== undefined) {
      token_obj = { headers: { user_token: `${user_token}` } };
      let result = await user_cart_api(token_obj);
      // console.log(result);
      result.length > 9 ? cart_count("9+") : cart_count(result.length);

      setCartdata(result);
      setapicall(false);
    } else {
      // alert("please login your account");
    }
  }

  useEffect(() => {
    call_cart_list();
  }, [apicall, showCartProp]);

  const handleCallback = (childData) => {
    // setCartQty(childData);
    console.log("data from child---" + childData);
  };
  return (
    <div>
      <aside
        className={
          showCartProp
            ? "col-md-9 cart-sidebar active"
            : "col-md-9 cart-sidebar "
        }
      >
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
          {(cartdata || []).map((cart_item, cart_no) => {
            return (
              <CartItem
                cover_image={cart_item.cover_image}
                name={cart_item.name}
                product_id={cart_item.product_id}
                cart_product_quantity={cart_item.cart_product_quantity}
                price={cart_item.price}
                product_stock_quantity={cart_item.product_stock_quantity}
                // incrementDecrementCount={incrementDecrementCount_function}
                cart_no={cart_no}
                cartapicall={apicall}
                setcartapicall={setapicall}
                parentCallback={handleCallback}
                cartItemapicall={cartapicall}
                setcartItemapicall={setcartapicall}
              />
            );
          })}
          {ProductqtyError === "greter than" ? (
            <p className="text-danger text-center ">
              Cart quantity cannot greater than Stock quantity
            </p>
          ) : null}
        </ul>

        <div className="cart-footer">
          <button className="coupon-btn">Do you have a coupon code?</button>
          <form className="coupon-form">
            <input type="text" placeholder="Enter your coupon code" />
            <button type="submit">
              <span>apply</span>
            </button>
          </form>
          <Link to={"/checkout"} className="cart-checkout-btn">
            <span className="checkout-label" onClick={cart_list_hide}>
              Proceed to Checkout
            </span>
            <span className="checkout-price"></span>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default Cart;
