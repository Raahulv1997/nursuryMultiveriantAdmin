import React, { useEffect, useState } from "react";
import { updateCart } from "../api/api";

const CheckoutItem = (cdata) => {
  // console.log("id-----" + JSON.stringify(id));
  const [cartData, setCartData] = useState(cdata.cdata);
  const [totalqty, settotalqty] = useState(false);
  const [Qty, setQty] = useState(cartData.cart_product_quantity);
  var [Itemprice, setItemprice] = useState(cartData.price * Qty);

  // useEffect(() => {}, [Qty]);

  let total_gst = (Itemprice * Number(cartData.gst)) / 100;
  let total_sgst = (Itemprice * Number(cartData.sgst)) / 100;
  let total_cgst = (Itemprice * Number(cartData.cgst)) / 100;
  let countAllText =
    Number(cartData.cgst) + Number(cartData.sgst) + Number(cartData.gst);

  let Tax = (Itemprice * countAllText) / 100;
  let discount = (Number(Itemprice) * Number(cartData.discount)) / 100;

  const sendData = {
    Quantity: Qty,
    price: Itemprice,
    totalTax: Tax,
    totalDiscount: discount,
    total_gst: total_gst,
    total_cgst: total_cgst,
    total_sgst: total_sgst,
    product_id: cartData.product_id,
  };

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
