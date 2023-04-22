import axios from "axios";
import React from "react";
let user_token = localStorage.getItem("user_token");

export const updateCart = async (props, qty) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/cart_update/${props.id}`,
    {
      user_id: props.user_id,
      product_id: props.product_id,
      cart_product_quantity: qty,
    },
    {
      headers: {
        user_token,
      },
    }
  );
  return response.data;
};

export const fetchcartdata = async () => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/cart_list`,
    {
      user_id: "",
    },
    {
      headers: { user_token },
    }
  );
  return response.data;
};

export const deleteCart = async (id, user_id) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/cart_delete`,
    {
      user_id: user_id,
      id: id,
    },
    {
      headers: { user_token },
    }
  );
  return response.data;
};

export const userdetails = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASEURL_0}/user_details`,

    {
      headers: { user_token },
    }
  );
  return response.data;
};

export const allproduct = async (
  searchbox,
  price_from,
  price_to,
  showcategorydata,
  brand,
  currentPage,
  recordsPerPage
) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/search?page=0&per_page=400`,
    {
      price_from: price_from,
      price_to: price_to,
      search: searchbox,
      category: [],
      rating: showcategorydata,
      brand: brand,
      seo_tag: [],
      vendor_id: [],
      name: [],
    },
    {
      headers: { user_blank: true },
    }
  );
  return response.data;
};

export const fetchfilter = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASEURL_0}/filter_list`
  );
  return response.data;
};

export const AllproductData = async (
  id,
  search,
  category,
  price_from,
  price_to,
  rating,
  brand,
  seo_tag,
  vendor_id
) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/search?page=0&per_page=400`,
    {
      price_from: price_from,
      price_to: price_to,
      search: search,
      category: category,
      rating: [rating],
      brand: brand,
      seo_tag: [seo_tag],
      vendor_id: [vendor_id],
      name: [],
      id: [id],
      is_deleted: [0],
    },
    {
      headers: { admin_token: "admin_master_token=we2code_123456 " },
    }
  );
  return response.data;
};

export const AddProductData = async (props) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/addproduct`,
    props,

    {
      headers: { admin_token: "admin_master_token=we2code_123456 " },
    }
  );
  return response.data;
};

export const UpdateProductData = async (props) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/update_product`,
    props,

    {
      headers: { admin_token: "admin_master_token=we2code_123456 " },
    }
  );
  return response.data;
};

export const allOrder = async (searchdata) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/order_search?page=0&per_page=400`,
    {
      search: "",
      order_id: searchdata,
      vendor_id: "",
      category: "",
      brand: "",
      user_id: "",
    },

    {
      headers: { admin_token: "admin_master_token=we2code_123456 " },
    }
  );
  return response.data;
};

export const OrderStatusChange = async (stautsValue, orderID, userId) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/order_status_update`,
    {
      order_id: orderID,
      status_order: stautsValue,
      user_id: userId,
    },
    {
      headers: {
        admin_token: "admin_master_token=we2code_123456",
      },
    }
  );
  return response.data;
};

export const fetchUserData = async (searchData, id) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/user_search`,
    {
      search: searchData,
      id: id,
    },
    {
      headers: {
        admin_token: "admin_master_token=we2code_123456 ",
      },
    }
  );
  return response.data;
};

export const UpdateProductStatus = async (statusValue, id) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/update_product`,
    {
      id: id,
      status: statusValue,
    },

    {
      headers: { admin_token: "admin_master_token=we2code_123456 " },
    }
  );
  return response.data;
};

export const DeleteProductStatus = async (id) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/update_product`,
    {
      id: id,
      is_deleted: [1],
    },

    {
      headers: { admin_token: "admin_master_token=we2code_123456 " },
    }
  );
  return response.data;
};

export const GetProductImages = async (id) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/product_image`,
    {
      product_id: id,
      product_image_id: "",
    }
  );
  return response.data;
};

export const AddProductImage = async (imgobj) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/add_product_image`,
    imgobj,
    {
      headers: { admin_token: "admin_master_token=we2code_123456 " },
    }
  );
  return response.data;
};

export const DeleteProductImage = async (
  id,
  product_img_id,
  product_image_name
) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/product_image_delete`,
    {
      product_image_id: product_img_id,
      product_id: id,
      product_image_name: product_image_name,
    },
    {
      headers: { admin_token: "admin_master_token=we2code_123456 " },
    }
  );
  return response.data;
};

export const ProductCoverImageChange = async (id, product_img_id) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/add_remove_cover_image`,
    {
      product_image_id: product_img_id,
      product_id: id,
      image_position: "cover",
    },
    {
      headers: { admin_token: "admin_master_token=we2code_123456 " },
    }
  );
  return response.data;
};

export const sigup_api = async (req_body_obj) => {
  let response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/user_signup`,
    req_body_obj
  );
  return response.data;
};

export const otp_verify_api = async (req_body_obj) => {
  let response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/user_otp_verify`,
    req_body_obj
  );
  return response.data;
};

export const login_api = async (req_body_obj) => {
  let response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/user_login`,
    req_body_obj
  );
  return response.data;
};

export const forget_api = async (req_body_obj) => {
  let response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/user_forgate_password`,
    req_body_obj
  );
  return response.data;
};

export const change_password_api = async (req_body_obj) => {
  let response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/change_user_password`,
    req_body_obj
  );
  return response.data;
};

export const user_home_api = async (req_body_obj) => {
  let token = localStorage.getItem("user_token");
  let token_obj;
  console.log("user_token--------------------------");
  console.log(token);
  if (token !== "" && token !== null && token !== undefined) {
    token_obj = { headers: { user_token: `${token}` } };
  } else {
    token_obj = { headers: { user_blank: "true" } };
  }
  let response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/search?page=0&per_page=1000`,
    req_body_obj,
    token_obj
  );
  return response.data;
};

export const AdminLoginData = async (email, password) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/admin_login`,
    { email: email, password: password }
  );
  return response.data;
};
export const add_to_cart_api = async (req_body_obj) => {
  let response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/add_to_cart`,
    req_body_obj[0],
    req_body_obj[1]
  );
  return response.data;
};
export const update_to_cart_api = async (req_body_obj) => {
  let response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/cart_update`,
    req_body_obj[0],
    req_body_obj[1]
  );
  return response.data;
};
export const cart_delete_api = async (req_body_obj) => {
  let response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/cart_delete`,
    req_body_obj[0],
    req_body_obj[1]
  );
  return response.data;
};
export const user_cart_api = async (req_body_obj) => {
  let response = await axios.get(
    `${process.env.REACT_APP_BASEURL_0}/cart_list`,
    req_body_obj
  );
  return response.data;
};
