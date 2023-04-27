import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductBox = ({
  id,
  name,

  mrp,
  price,
  unit,
  rating,
  discount,

  brand,

  value,

  product_stock_quantity,
  category,
  saleprice,
  // wishlistt,
  // wishlistid,
  clickProduct,
  cart_update_fun,
  incrementDecrementCount,
  //    AddToWishList,
  product_id,
  image,
  // cart,
  // is_featured,
  // is_special_offer,

  cart_count,
}) => {
  // let [count, setCount] = useState(1);
  let ratingbox = [1, 2, 3, 4, 5];
  const [totalqty, settotalqty] = useState(false);
  const navigate = useNavigate();
  // let ratingg = Number(rating);

  function product_full_detaile(product_id) {
    localStorage.setItem("productID", product_id);
    navigate("/product_detaile");
  }
  return (
    <>
      {/* <div className="row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4"> */}
      <div className="col-4 ">
        <div className="product-card">
          <div className="product-media">
            <div className="product-label">
              <label className="label-text new">{discount} %</label>
            </div>

            <button className="product-wish wish">
              <i className="fas fa-heart"></i>
            </button>
            <a
              onClick={product_full_detaile.bind(this, [product_id])}
              className="product-image"
            >
              <img src={image} alt="product" width={250} height={250} />
            </a>
            {/* <div className="product-widget">
                <a
                  title="Product Compare"
                  href="compare.html"
                  className="fas fa-random"
                ></a>
                <a
                  title="Product Video"
                  href="https://youtu.be/9xzcVxSBbG8"
                  className="venobox fas fa-play"
                  data-autoplay="true"
                  data-vbtype="video"
                ></a>
                <a
                  title="Product View"
                  href="#"
                  className="fas fa-eye"
                  data-bs-toggle="modal"
                  data-bs-target="#product-view"
                ></a>
              </div> */}
          </div>
          <div className="product-content">
            <div className="product-rating">
              {ratingbox.map((rat, i) => {
                return rating - rat >= 0 ? (
                  <>
                    <i className="active icofont-star"></i>
                  </>
                ) : (
                  <i className=" icofont-star"></i>
                );
              })}
              {/* <i className="active icofont-star"></i>
                <i className="active icofont-star"></i>
                <i className="active icofont-star"></i>
                <i className="active icofont-star"></i>
                <i className="icofont-star"></i> */}

              <a href="product-video.html">({rating})</a>
            </div>
            <h6 className="product-name">
              <a href="product-video.html">{name}</a>
            </h6>
            <h6 className="product-price">
              <del> ₹{mrp}</del>
              <span>
                ₹ {price}
                <small>/{unit}</small>
              </span>
            </h6>
            {/* {console.log(cart_count)} */}
            {cart_count !== null &&
            cart_count !== "" &&
            cart_count !== undefined ? (
              <div className="product-action">
                <button
                  className="action-minus"
                  title="Quantity Minus"
                  onClick={() =>
                    incrementDecrementCount("0", cart_count, product_id)
                  }
                >
                  <i className="icofont-minus"></i>
                </button>
                <input
                  className="action-input"
                  title="Quantity Number"
                  type="text"
                  name="quantity"
                  value={cart_count}
                />
                <button
                  className="action-plus"
                  title="Quantity Plus"
                  onClick={() =>
                    incrementDecrementCount("1", cart_count, product_id)
                  }
                >
                  <i className="icofont-plus"></i>
                </button>
              </div>
            ) : (
              <button
                className="product-add"
                title="Add to Cart"
                onClick={() => cart_update_fun(cart_count, product_id)}
              >
                <i className="fas fa-shopping-basket"></i>
                <span>add</span>
              </button>
            )}
          </div>

          {totalqty === true ? (
            <p className="mt-1 ms-2 text-danger" type="invalid">
              Cannot add more then quantity
            </p>
          ) : totalqty === "qty is less" ? (
            <p className="mt-1 ms-2 text-danger" type="invalid">
              Quantity cannot less than one
            </p>
          ) : totalqty === false ? null : null}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ProductBox;
