import React, { useEffect, useState } from "react";
import { fetchcartdata, updateCart } from "../../api/api";

import CartContext from "./index";
const CartProvider = (props) => {
  const user_token = localStorage.getItem("user_token");

  const [apicall, setapicall] = useState(false);

  useEffect(() => {
    cartdatafucntion();
  }, []);

  const QuantityUpdate = async (product_id, cartQuantity) => {
    const respose = await updateCart(product_id, cartQuantity);

    setapicall(true);
    return respose.data;
  };

  const cartdatafucntion = async () => {
    if (user_token) {
      const userData = await fetchcartdata();

      return userData;
    } else {
    }
  };

  return (
    <>
      <CartContext.Provider
        value={{
          ...props,
          state: apicall,
          setapicall,
          updateQty: QuantityUpdate,
          cartData: cartdatafucntion,
        }}
      >
        {props.children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
