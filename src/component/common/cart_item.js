// import axios from "axios";
import React from "react";
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
  cart_no,
}) => {
  // useEffect(() => {
  //     update();
  // }, [Qty]);

  // const update = async () => {
  //     await updateCart(cartData, Qty);
  // };

  return (
    <>
      <li className="cart-item">
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
                  incrementDecrementCount(
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
                onClick={() =>
                  incrementDecrementCount(
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
          {/* {totalqty === true ? (
            <p className="mt-1 ms-2 text-danger" type="invalid">
              Cannot add more then quantity
            </p>
          ) : totalqty === "qty is less" ? (
            <p className="mt-1 ms-2 text-danger" type="invalid">
              Quantity cannot less than one
            </p>
          ) : totalqty === false ? null : null} */}
        </div>
      </li>
    </>
  );
};

export default CartItem;
