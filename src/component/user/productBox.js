import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  add_to_cart_api,
  cart_delete_api,
  update_to_cart_api,
} from "../api/api";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
const ProductBox = ({
  name,
  image,
  discount,
  mrp,
  price,
  unit,
  rating,
  product_stock_quantity,
  cart_count,

  setproductapicall,
  parentCallback,
  keyprop,
  brand,

  value,

  category,
  saleprice,
  // wishlistt,
  // wishlistid,
  clickProduct,

  //    AddToWishList,
  product_id,

  // cart,
  // is_featured,
  // is_special_offer,
}) => {
  // let [count, setCount] = useState(1);
  let ratingbox = [1, 2, 3, 4, 5];
  const [ShowAlert, setShowAlert] = useState(false);
  const [ProductqtyError, setProductQtyError] = useState(false);
  const [qtystate, setQtystate] = useState(true);
  const navigate = useNavigate();
  // let ratingg = Number(rating);

  function product_full_detaile(product_id) {
    localStorage.setItem("productID", product_id);
    navigate("/product_detail");
  }

  async function cart_update_function(cart_count, product_id) {
    let token = localStorage.getItem("user_token");

    setQtystate(false);
    parentCallback(qtystate);
    if (token !== "" && token !== null && token !== undefined) {
      let cart_product_quantity = 1;
      let result = await add_to_cart_api([
        { product_id, cart_product_quantity },
        { headers: { user_token: `${token}` } },
      ]);

      if (result.success === true) {
        setproductapicall(true);
      } else {
      }
    } else {
      setShowAlert(true);
    }
  }

  async function incrementDecrementCount_function(
    chk_p_m,
    cart_count,
    product_id,
    product_stock_quantity
  ) {
    let cart_product_quantity;
    let token = localStorage.getItem("user_token");

    if (chk_p_m === "1") {
      cart_product_quantity = parseInt(cart_count) + 1;
      if (cart_product_quantity >= product_stock_quantity) {
        setProductQtyError("greter than");
      }
    }
    if (chk_p_m === "0") {
      setProductQtyError(false);
      cart_product_quantity = parseInt(cart_count) - 1;
    }

    if (token !== "" && token !== null && token !== undefined) {
      if (cart_product_quantity < 1) {
        let result = await cart_delete_api(product_id, cart_product_quantity);

        if (result.success === true) {
          setproductapicall(true);
        } else {
          // alert(result.success);
        }
      } else {
        let result = await update_to_cart_api([
          { product_id, cart_product_quantity },
          { headers: { user_token: `${token}` } },
        ]);

        if (result.success === true) {
          setproductapicall(true);
        } else {
          // alert(result.success);
        }
      }
    } else {
      setShowAlert(true);
      // alert("please login your account");
      // navigate("/login");
    }
  }

  const onCloseAlert = () => {
    return Promise.resolve(setShowAlert(false));
  };

  return (
    <>
      {/* <div className="row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4"> */}
      <div className="col-lg-4 col-sm-6" key={keyprop}>
        <div
          className={
            product_stock_quantity <= "0"
              ? "product-card product-disable"
              : "product-card p-0"
          }
        >
          <div className="product-media">
            {discount ? (
              <div className="product-label ">
                <label className="label-text new bg-danger">{discount} %</label>
              </div>
            ) : null}
            <span
              onClick={product_full_detaile.bind(this, [product_id])}
              className="product-image"
            >
              <img src={image} alt="product" width={"100%"} />
            </span>
          </div>
          <div className="product-content p-3">
            <div className="product-rating">
              {ratingbox.map((rat, i) => {
                return rating - rat >= 0 ? (
                  <>
                    <i key={i} className="active icofont-star"></i>
                  </>
                ) : (
                  <i className=" icofont-star"></i>
                );
              })}
              {rating ? <Link to="/">({rating})</Link> : null}
            </div>

            <div onClick={product_full_detaile.bind(this, [product_id])}>
              <h6 className="product-name text-truncate">{name}</h6>
              <h6 className="product-price">
                {mrp === price ? null : <del> ₹{mrp}</del>}
                <span className="font-s selling_price">
                  ₹ {price}
                  <small>/-{unit}</small>
                </span>
              </h6>
            </div>

            {/* {console.log(cart_count)} */}
            {cart_count !== null &&
            cart_count !== "" &&
            cart_count !== undefined ? (
              <div className="product-action">
                <button
                  className="action-minus"
                  title="Quantity Minus"
                  onClick={() =>
                    incrementDecrementCount_function(
                      "0",
                      cart_count,
                      product_id,
                      product_stock_quantity
                    )
                  }
                >
                  <i className="icofont-minus"></i>
                </button>
                <input
                  className="action-input"
                  title="Quantity Number"
                  type="text"
                  name="quantity"
                  disabled
                  value={cart_count}
                />
                <button
                  className="action-plus"
                  title="Quantity Plus"
                  disabled={ProductqtyError === "greter than" ? true : false}
                  onClick={() =>
                    incrementDecrementCount_function(
                      "1",
                      cart_count,
                      product_id,
                      product_stock_quantity
                    )
                  }
                >
                  <i className="icofont-plus"></i>
                </button>
              </div>
            ) : (
              <button
                className="product-add"
                title="Add to Cart"
                onClick={() => cart_update_function(cart_count, product_id)}
              >
                <i className="fas fa-shopping-basket"></i>
                <span>add</span>
              </button>
            )}
          </div>
          {ProductqtyError === "greter than" ? (
            <small className="text-danger text-center ">
              Cart quantity cannot greater than Stock quantity
            </small>
          ) : null}
        </div>
        <SweetAlert
          show={ShowAlert}
          title="Login Message"
          text={"Please login Your account"}
          onConfirm={() =>
            onCloseAlert().then(() => {
              navigate("/login");
            })
          }
        />
      </div>
      {/* </div> */}
    </>
  );
};

export default ProductBox;
