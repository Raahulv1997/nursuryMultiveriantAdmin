import axios from "axios";
// import React from "react";
let user_token = localStorage.getItem("user_token");
let admin_token = "admin_master_token=we2code_123456";

export const updateCart = async (product_id, qty) => {
  console.log("in update cart fucntion==" + product_id);
  console.log("qty==" + qty);
  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/cart_update`,
    {
      product_id: product_id,
      cart_product_quantity: qty,
    },
    {
      headers: {
        user_token: user_token,
      },
    }
  );
  console.log("in update cart fucntion==" + JSON.stringify(response));

  return response.data;
};

export const fetchcartdata = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASEURL_0}/cart_list`,

    { headers: { user_token: `${user_token}` } }
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
// const brandArrrry = [];
export const allproduct = async (
  searchbox,
  price_from,
  price_to,
  showratingdata,
  brand,
  category,
  currentPage,
  recordsPerPage
) => {
  console.log("user toekn--" + user_token);
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/search?page=${currentPage}&per_page=${recordsPerPage}`,
    {
      price_from: price_from,
      price_to: price_to,
      search: searchbox,
      category: category,
      rating: showratingdata,
      brand: brand,
      seo_tag: [],
      vendor_id: [],
      name: [],
    },

    user_token !== null && user_token !== undefined
      ? { headers: { user_token: user_token } }
      : { headers: { user_blank: true } }
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
      // id: [],
      is_deleted: [0],
    },
    {
      headers: { admin_token: admin_token },
    }
  );
  return response.data;
};

export const AddProductData = async (props) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/addproduct`,
    props,

    {
      headers: { admin_token: admin_token },
    }
  );
  return response.data;
};

export const UpdateProductData = async (props) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/update_product`,
    props,

    {
      headers: { admin_token: admin_token },
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
      headers: { admin_token: admin_token },
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
        admin_token: admin_token,
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
        admin_token: admin_token,
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
      headers: { admin_token: admin_token },
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
      headers: { admin_token: admin_token },
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
      headers: { admin_token: admin_token },
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
      headers: { admin_token: admin_token },
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
      headers: { admin_token: admin_token },
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
export const cart_delete_api = async (productID, qty) => {
  let response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/cart_delete`,
    {
      product_id: productID,
      cart_product_quantity: qty,
    },
    {
      headers: { user_token: user_token },
    }
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

export const call_product_detaile_api = async (req_body_obj) => {
  let response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/search?page=0&per_page=400`,
    {
      price_from: "",
      price_to: "",
      search: "",
      id: [req_body_obj[0]],
      is_deleted: [0],
    },
    req_body_obj[1]
  );
  return response.data;
};

export const UserSideDeleteProduct = async (id) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/update_product`,
    {
      id: id,
      is_deleted: [1],
    },

    {
      headers: { user_token: user_token },
    }
  );
  return response.data;
};

export const AddUserOrder = async (props) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/add_order`,
    props,
    {
      headers: { user_token: user_token },
    }
  );
  return response.data;
};

export const userOrder = async (orderID) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/order_search?page=0&per_page=400`,
    {
      search: "",
      order_id: orderID,
      vendor_id: "",
      category: "",
      brand: "",
      user_id: "",
    },

    {
      headers: { user_token: user_token },
    }
  );
  return response.data;
};

export const OrderByNo = async (orderID) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASEURL_0}/order_details?id=${orderID}`,

    {
      headers: { user_token: user_token },
    }
  );
  return response.data;
};

export const UserUpdatefunction = async (props, file, filename) => {
  const formData = new FormData();
  formData.append("first_name", props.first_name);
  formData.append("last_name", props.last_name);
  formData.append("email", props.email);
  formData.append("password", props.password);
  formData.append("phone_no", props.phone_no);
  formData.append("pincode", props.pincode);
  formData.append("image", file);
  formData.append("filename", filename);
  formData.append("city", props.city);
  formData.append("address", props.address);
  formData.append("alternate_address", props.alternate_address);

  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/update_user`,
    formData,
    {
      headers: { user_token: user_token },
    }
  );
  return response.data;
};

export const AddVendorfunction = async (props, file, filename) => {
  const formData = new FormData();

  formData.append("owner_name", props.owner_name);
  formData.append("shop_name", props.shop_name);
  formData.append("email", props.email);
  formData.append("mobile", props.mobile);
  formData.append("shop_address", props.shop_address);
  formData.append("gstn", props.gstn);
  formData.append("image", file);
  formData.append("filename", filename);
  formData.append("geolocation", props.geolocation);
  formData.append("availability", props.availability);

  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/admin_add_vendor`,
    formData,
    {
      headers: { admin_token: admin_token },
    }
  );
  return response.data;
};

export const VendorListFunction = async (search, shopname) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/vendor_list`,
    {
      search: search,
      shop_name: shopname,
    }
  );
  return response.data;
};
