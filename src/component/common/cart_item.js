// import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../helper/cart";
import { useContext } from "react";
import { cart_delete_api } from "../api/api";
// import { updateCart } from "../api/api";
// import "../../../src/component/css-js/fonts/icofont/icofont.min.css";
// src/component/css-js/fonts/icofont/icofont.min.css

const CartItem = ({
  cover_image,
  name,
  product_id,
  cart_product_quantity,
  price,
  incrementDecrementCount,
  product_stock_quantity,

  setcartapicall,

  setcartItemapicall,

  cart_no,
}) => {
  const [ProductqtyError, setProductQtyError] = useState(false);
  const navigate = useNavigate();

  const ContextValue = useContext(CartContext);
  const updateQty = ContextValue.updateQty;

  async function incrementDecrementCount_function(
    chk_p_m,
    cart_count,
    product_id,
    product_stock_quantity
  ) {
    let cart_product_quantity;
    let token = localStorage.getItem("user_token");
    if (chk_p_m === "1") {
      // localStorage.setItem("product_Quanity", true);
      cart_product_quantity = parseInt(cart_count) + 1;
      setcartItemapicall(true);

      if (cart_product_quantity >= product_stock_quantity) {
        setProductQtyError("greter than");
        // cart_product_quantity = product_stock_quantity;
      }
    }
    if (chk_p_m === "0") {
      setProductQtyError(false);
      // localStorage.setItem("product_Quanity", true);
      setcartItemapicall(true);
      cart_product_quantity = parseInt(cart_count) - 1;
    }

    if (token !== "" && token !== null && token !== undefined) {
      if (cart_product_quantity < 1) {
        let result = await cart_delete_api(product_id, cart_product_quantity);
        // console.log(result);
        if (result.success === true) {
          // parentCallback(reloadproduct);
          setcartItemapicall(true);
          setcartapicall(true);
        } else {
          alert(result.success);
        }
      } else {
        const result = updateQty(product_id, cart_product_quantity);

        // console.log("updfe result---" + JSON.stringify(result));

        if (result.success === true) {
          setcartapicall(true);
        } else {
          setcartapicall(true);
          // alert(result.success);
        }
      }
    } else {
      // alert("please login your account");
      navigate("/login");
    }
  }
  // useEffect(() => {
  //     update();
  // }, [Qty]);

  // const update = async () => {
  //     await updateCart(cartData, Qty);
  // };

  return (
    <>
      <li className="cart-item" key={product_id}>
        <div className="cart-media">
          <img
            src={cover_image}
            alt="product"
            style={{ height: "80px", borderRadius: "10px" }}
          />

          {/* <button
            className="cart-delete"
            onClick={cartdeletefunction(cdata.cdata.id, cdata.cdata.user_id)}
          >
            <i className="far fa-trash-alt"></i>
          </button> */}
        </div>
        <div className="cart-info-group">
          <div className="cart-info">
            <h6 className="text-truncate">{name}</h6>
            <p> Price - ₹ {price}</p>
          </div>
          <div className="cart-action-group">
            <div className="product-action">
              <button
                className="action-minus"
                title="Quantity Minus"
                onClick={() =>
                  incrementDecrementCount_function(
                    "0",
                    cart_product_quantity,
                    product_id,
                    product_stock_quantity
                  )
                }
              >
                <i className="icofont-minus"></i>
              </button>
              <input
                className="action-input"
                min={1}
                title="Quantity Number"
                type="number"
                name="cart_product_quantity"
                value={cart_product_quantity}
              />
              <button
                className="action-plus"
                title="Quantity Plus"
                disabled={ProductqtyError === "greter than" ? true : false}
                onClick={() =>
                  incrementDecrementCount_function(
                    "1",
                    cart_product_quantity,
                    product_id,
                    product_stock_quantity
                  )
                }
              >
                <i className="icofont-plus"></i>
              </button>
            </div>
            <h6> ₹ {Number(price * cart_product_quantity).toFixed(2)}</h6>
          </div>
          {ProductqtyError === "greter than" ? (
            <small className="text-danger text-center ">
              Cart quantity cannot greater than Stock quantity
            </small>
          ) : null}
        </div>
      </li>
    </>
  );
};

export default CartItem;
