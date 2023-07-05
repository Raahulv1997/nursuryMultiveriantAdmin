import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CartItem from "./cart_item";
import { fetchcartdata } from "../api/api";

import SweetAlert from "sweetalert-react";

import "sweetalert/dist/sweetalert.css";
const Cart = ({
  showCartProp,
  cart_list_hide,
  cart_count,
  cartapicall,
  setcartapicall,
}) => {
  const [checkoutAlert, setcheckoutAlert] = useState(false);
  const [apicall, setapicall] = useState(false);
  const navigate = useNavigate();
  const [cartdata, setCartdata] = useState([]);
  const user_token = localStorage.getItem("user_token");

  // const updateQty = ContextValue.updateQty;

  useEffect(() => {
    async function call_cart_list() {
      if (user_token !== null) {
        const result = await fetchcartdata();

        if (result) {
          result.length > 9 ? cart_count("9+") : cart_count(result.length);
        }

        setCartdata(result);
        setapicall(false);
      } else {
        setCartdata([]);
        cart_count("");
        // alert("please login your account");
      }
    }
    call_cart_list();
  }, [apicall, showCartProp, cart_count, user_token]);

  const handleCallback = (childData) => {
    // setCartQty(childData);
  };
  const onCheckoutClick = () => {
    if (cartdata.length === 0) {
      setcheckoutAlert(true);
    } else {
      navigate("/checkout");
    }
  };

  const checkoutAlertClose = () => {
    setcheckoutAlert(false);
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
              <React.Fragment key={cart_item.id}>
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
              </React.Fragment>
            );
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

          <button className="cart-checkout-btn  px-5">
            <span className="checkout-label" onClick={onCheckoutClick}>
              Proceed to Checkout
            </span>
            <span className="checkout-price"></span>
          </button>
          {/* <Link to={"/checkout"} className="cart-checkout-btn">
            <span className="checkout-label" onClick={cart_list_hide}>
              Proceed to Checkout
            </span>
            <span className="checkout-price"></span>
          </Link> */}
        </div>
        <SweetAlert
          show={checkoutAlert}
          title="Add Cart Alert"
          text={"Please Click Add to cart first"}
          onConfirm={checkoutAlertClose}
        />
      </aside>
    </div>
  );
};

export default Cart;
