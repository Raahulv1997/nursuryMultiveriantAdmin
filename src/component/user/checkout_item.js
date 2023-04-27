import React, { useEffect, useState } from "react";

const CheckoutItem = (cdata) => {
  // console.log("id-----" + JSON.stringify(id));
  const [cartData, setCartData] = useState(cdata.cdata);
  const [totalqty, settotalqty] = useState(false);
  const [Qty, setQty] = useState(cartData.cart_product_quantity);

  // useEffect(() => {}, [Qty]);

  return (
    <>
      <tr>
        <td className="table-serial">
          <h6>{1}</h6>
        </td>
        <td className="table-image">
          <img
            src={cartData.cover_image}
            alt="product"
            style={{ height: "80px", borderRadius: "10px" }}
          />
        </td>
        <td className="table-name">
          <h6>{cartData.name}</h6>
        </td>

        <td className="table-price">
          <h6>₹ {cartData.price} </h6>
        </td>
        <td className="table-brand">
          <h6>{cartData.brand}</h6>
        </td>
        <td className="table-price">
          <h6> {Qty}</h6>
        </td>
        <td className="table-brand">
          <h6>{Qty * cartData.price}</h6>
        </td>
        <td className="table-action">
          <a
            className="view"
            href="#"
            title="Quick View"
            data-bs-toggle="modal"
            data-bs-target="#product-view"
          >
            <i className="fas fa-eye"></i>
          </a>
          <a className="trash" href="#" title="Remove Wishlist">
            <i className="icofont-trash"></i>
          </a>
        </td>
      </tr>
    </>
  );
};

export default CheckoutItem;
