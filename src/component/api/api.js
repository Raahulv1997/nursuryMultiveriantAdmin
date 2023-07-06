import axios from "axios";
// import React from "react";
let user_token = localStorage.getItem("user_token");
let admin_token = localStorage.getItem("admin_token");
let vendor_token = localStorage.getItem("vendor_token");
let driver_token = localStorage.getItem("driver_token");
<<<<<<< Updated upstream

let ApnaOrganiceURl = "http://192.168.29.109:8000";
let transactionUrl = "http://192.168.29.108:9999";
=======
const ApnaOrganiceURl = "http://192.168.29.108:9999";
// let ApnaOrganiceURl = "http://192.168.29.109:8000";
>>>>>>> Stashed changes
let ApnaOrganicAdminToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc2MjYyNTIwfQ.9V53dJT7qqOHESsf4dr5vUoYUl_gh9VnQALf9dMpWmA";
export const updateCart = async (product_id, qty) => {
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

  return response.data;
};

export const fetchcartdata = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL_0}/cart_list`,

      { headers: { user_token: `${user_token}` } }
    );
    return response.data;
  } catch (err) {
    return [];
  }
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
  ratingg,
  name,
  price,
  update,
  showratingdata,
  brand,
  category,
  currentPage,
  recordsPerPage
) => {
  let token = localStorage.getItem("user_token");
  let token_obj;

  if (token !== "" && token !== null && token !== undefined) {
    token_obj = { headers: { user_token: `${token}` } };
  } else {
    token_obj = { headers: { user_blank: "true" } };
  }

  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/search?page=${currentPage}&per_page=${recordsPerPage}`,
    {
      price_from: price_from,
      price_to: price_to,
      price__: price,
      rating__: ratingg,
      name__: name,
      created_on__: update,
      search: searchbox,
      category: category,
      rating: showratingdata,
      brand: brand,
      seo_tag: [],
      vendor_id: [],
      is_deleted: ["0"],
    },

    token_obj
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
  vendor_id,
  product_stock_quantity
) => {
  let head;
  // let user_token = localStorage.getItem("user_token");
  let admin_token = localStorage.getItem("admin_token");
  let vendor_token = localStorage.getItem("vendor_token");

  if (
    vendor_token !== null &&
    vendor_token !== undefined &&
    vendor_token !== ""
  ) {
    head = { headers: { vendor_token: `${vendor_token}` } };
  } else if (
    admin_token !== null &&
    admin_token !== undefined &&
    admin_token !== ""
  ) {
    head = { headers: { admin_token: `${admin_token}` } };
  } else {
  }
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/search?page=0&per_page=1000`,
    {
      price_from: price_from,
      price_to: price_to,
      price__: "",
      rating__: "",
      name__: "",
      created_on__: "",
      search: search,
      category: category,
      rating: [rating],
      brand: brand,
      seo_tag: [seo_tag],
      vendor_id: [vendor_id],
      name: [],
      id: [id],
      is_deleted: [0],
      product_stock_quantity: [product_stock_quantity],
    },
    head
  );
  return response.data;
};

export const filterProductData = async (
  search,
  category,
  price_from,
  price_to,
  rating,
  brand,
  seo_tag,
  vendor_id,
  id
) => {
  let head;
  // let user_token = localStorage.getItem("user_token");
  let admin_token = localStorage.getItem("admin_token");
  let vendor_token = localStorage.getItem("vendor_token");

  if (
    vendor_token !== null &&
    vendor_token !== undefined &&
    vendor_token !== ""
  ) {
    head = { headers: { vendor_token: `${vendor_token}` } };
  } else if (
    admin_token !== null &&
    admin_token !== undefined &&
    admin_token !== ""
  ) {
    head = { headers: { admin_token: `${admin_token}` } };
  } else {
  }

  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/search?page=0&per_page=1000`,
    {
      price_from: price_from,
      price_to: price_to,
      price__: "",
      rating__: "",
      name__: "",
      created_on__: "",
      search: search,
      category: category,
      rating: [rating],
      brand: brand,
      seo_tag: [seo_tag],
      vendor_id: [vendor_id],

      id: [id],
      is_deleted: [0],
    },
    head
  );
  return response.data;
};

export const AddProductData = async (props) => {
  let head;
  // let user_token = localStorage.getItem("user_token");
  let admin_token = localStorage.getItem("admin_token");
  let vendor_token = localStorage.getItem("vendor_token");

  if (
    vendor_token !== null &&
    vendor_token !== undefined &&
    vendor_token !== ""
  ) {
    head = { headers: { vendor_token: `${vendor_token}` } };
  } else if (
    admin_token !== null &&
    admin_token !== undefined &&
    admin_token !== ""
  ) {
    head = { headers: { admin_token: `${admin_token}` } };
  } else {
  }

  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/addproduct`,
    props,
    head
  );
  return response.data;
};

export const UpdateProductData = async (props) => {
  let head;
  // let user_token = localStorage.getItem("user_token");
  let admin_token = localStorage.getItem("admin_token");
  let vendor_token = localStorage.getItem("vendor_token");

  if (
    vendor_token !== null &&
    vendor_token !== undefined &&
    vendor_token !== ""
  ) {
    head = { headers: { vendor_token: `${vendor_token}` } };
  } else if (
    admin_token !== null &&
    admin_token !== undefined &&
    admin_token !== ""
  ) {
    head = { headers: { admin_token: `${admin_token}` } };
  } else {
  }

  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/update_product`,
    props,

    head
  );
  return response.data;
};

export const allOrder = async (searchdata) => {
  let head;
  // let user_token = localStorage.getItem("user_token");
  let admin_token = localStorage.getItem("admin_token");
  let vendor_token = localStorage.getItem("vendor_token");

  if (
    vendor_token !== null &&
    vendor_token !== undefined &&
    vendor_token !== ""
  ) {
    head = { headers: { vendor_token: `${vendor_token}` } };
  } else if (
    admin_token !== null &&
    admin_token !== undefined &&
    admin_token !== ""
  ) {
    head = { headers: { admin_token: `${admin_token}` } };
  } else {
  }

  if (searchdata === undefined) {
    searchdata = "";
  }
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

    head
  );
  return response.data;
};

export const OrderStatusChange = async (stautsValue, orderID, userId) => {
  let head;
  // let user_token = localStorage.getItem("user_token");
  let admin_token = localStorage.getItem("admin_token");
  let vendor_token = localStorage.getItem("vendor_token");

  if (
    vendor_token !== null &&
    vendor_token !== undefined &&
    vendor_token !== ""
  ) {
    head = { headers: { vendor_token: `${vendor_token}` } };
  } else if (
    admin_token !== null &&
    admin_token !== undefined &&
    admin_token !== ""
  ) {
    head = { headers: { admin_token: `${admin_token}` } };
  } else {
  }

  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/order_status_update`,
    {
      order_id: orderID,
      status_order: stautsValue,
      user_id: userId,
    },

    head
  );
  return response.data;
};

export const fetchUserData = async (searchData, id) => {
  let head;
  // let user_token = localStorage.getItem("user_token");
  let admin_token = localStorage.getItem("admin_token");
  let vendor_token = localStorage.getItem("vendor_token");

  if (
    vendor_token !== null &&
    vendor_token !== undefined &&
    vendor_token !== ""
  ) {
    head = { headers: { vendor_token: `${vendor_token}` } };
  } else if (
    admin_token !== null &&
    admin_token !== undefined &&
    admin_token !== ""
  ) {
    head = { headers: { admin_token: `${admin_token}` } };
  } else {
  }

  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/user_search`,
    {
      search: searchData,
      id: id,
    },
    head
  );
  return response.data;
};

export const UpdateProductStatus = async (statusValue, id) => {
  let head;
  // let user_token = localStorage.getItem("user_token");
  let admin_token = localStorage.getItem("admin_token");
  let vendor_token = localStorage.getItem("vendor_token");

  if (
    vendor_token !== null &&
    vendor_token !== undefined &&
    vendor_token !== ""
  ) {
    head = { headers: { vendor_token: `${vendor_token}` } };
  } else if (
    admin_token !== null &&
    admin_token !== undefined &&
    admin_token !== ""
  ) {
    head = { headers: { admin_token: `${admin_token}` } };
  } else {
  }

  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/update_product`,
    {
      id: id,
      status: statusValue,
    },

    head
  );
  return response.data;
};

export const DeleteProductStatus = async (id) => {
  let head;
  // let user_token = localStorage.getItem("user_token");
  let admin_token = localStorage.getItem("admin_token");
  let vendor_token = localStorage.getItem("vendor_token");

  if (
    vendor_token !== null &&
    vendor_token !== undefined &&
    vendor_token !== ""
  ) {
    head = { headers: { vendor_token: `${vendor_token}` } };
  } else if (
    admin_token !== null &&
    admin_token !== undefined &&
    admin_token !== ""
  ) {
    head = { headers: { admin_token: `${admin_token}` } };
  } else {
  }

  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/update_product`,
    {
      id: id,
      is_deleted: [1],
    },
    head
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
  let head;
  // let user_token = localStorage.getItem("user_token");
  let admin_token = localStorage.getItem("admin_token");
  let vendor_token = localStorage.getItem("vendor_token");

  if (
    vendor_token !== null &&
    vendor_token !== undefined &&
    vendor_token !== ""
  ) {
    head = { headers: { vendor_token: `${vendor_token}` } };
  } else if (
    admin_token !== null &&
    admin_token !== undefined &&
    admin_token !== ""
  ) {
    head = { headers: { admin_token: `${admin_token}` } };
  } else {
  }

  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/add_product_image`,
    imgobj,
    head
  );
  return response.data;
};

export const DeleteProductImage = async (
  id,
  product_img_id,
  product_image_name
) => {
  let head;
  // let user_token = localStorage.getItem("user_token");
  let admin_token = localStorage.getItem("admin_token");
  let vendor_token = localStorage.getItem("vendor_token");

  if (
    vendor_token !== null &&
    vendor_token !== undefined &&
    vendor_token !== ""
  ) {
    head = { headers: { vendor_token: `${vendor_token}` } };
  } else if (
    admin_token !== null &&
    admin_token !== undefined &&
    admin_token !== ""
  ) {
    head = { headers: { admin_token: `${admin_token}` } };
  } else {
  }

  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/product_image_delete`,
    {
      product_image_id: product_img_id,
      product_id: id,
      product_image_name: product_image_name,
    },
    head
  );
  return response.data;
};

export const ProductCoverImageChange = async (id, product_img_id) => {
  let head;
  // let user_token = localStorage.getItem("user_token");
  let admin_token = localStorage.getItem("admin_token");
  let vendor_token = localStorage.getItem("vendor_token");

  if (
    vendor_token !== null &&
    vendor_token !== undefined &&
    vendor_token !== ""
  ) {
    head = { headers: { vendor_token: `${vendor_token}` } };
  } else if (
    admin_token !== null &&
    admin_token !== undefined &&
    admin_token !== ""
  ) {
    head = { headers: { admin_token: `${admin_token}` } };
  } else {
  }

  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/add_remove_cover_image`,
    {
      product_image_id: product_img_id,
      product_id: id,
      image_position: "cover",
    },
    head
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

export const change_password_api = async (password) => {
  let response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/user_forgate_password_update`,
    {
      password: password,
    },
    {
      headers: { user_token: user_token },
    }
  );
  return response.data;
};

export const user_home_api = async (req_body_obj, perpage) => {
  let token = localStorage.getItem("user_token");
  let token_obj;

  if (token !== "" && token !== null && token !== undefined) {
    token_obj = { headers: { user_token: `${token}` } };
  } else {
    token_obj = { headers: { user_blank: "true" } };
  }
  let response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/search?page=0&per_page=${perpage}`,
    req_body_obj,
    token_obj
  );
  return response.data;
};

export const AdminLoginData = async (email, password) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/admin_login`,
    { admin_email: email, admin_password: password }
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

export const call_product_detaile_api = async (req_body_obj) => {
  let response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/search?page=0&per_page=12`,
    {
      price_from: "",
      price_to: "",
      price__: "",
      rating__: "",
      name__: "",
      created_on__: "",
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

export const AlternateAddressUpdateFunction = async (alternateAddress) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/update_user_address`,
    {
      alternate_address: alternateAddress,
    },
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

  let head;
  // let user_token = localStorage.getItem("user_token");
  let admin_token = localStorage.getItem("admin_token");
  let vendor_token = localStorage.getItem("vendor_token");

  if (
    vendor_token !== null &&
    vendor_token !== undefined &&
    vendor_token !== ""
  ) {
    head = { headers: { vendor_token: `${vendor_token}` } };
  } else if (
    admin_token !== null &&
    admin_token !== undefined &&
    admin_token !== ""
  ) {
    head = { headers: { admin_token: `${admin_token}` } };
  } else {
  }

  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/admin_add_vendor`,
    formData,
    head
  );
  return response.data;
};

export const VendorListFunction = async (search, shopname) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/vendor_list`,
    {
      search: search,
      shop_name: shopname,
      is_active: "1",
    }
  );
  return response.data;
};

export const VendorDetailsById = async (id) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/vendor_list`,
    {
      search: "",
      shop_name: "",
      vendor_id: id,
    }
  );
  return response.data;
};

export const AdminVendorStatusChange = async (status, id) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/admin_change_vendor_status`,
    {
      vendor_id: id,
      status: status,
    }
  );
  return response.data;
};

export const UpdateVendorfunction = async (props, file, filename, id) => {
  const formData = new FormData();
  formData.append("vendor_id", id);
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

  let head;
  // let user_token = localStorage.getItem("user_token");
  let admin_token = localStorage.getItem("admin_token");
  let vendor_token = localStorage.getItem("vendor_token");

  if (
    vendor_token !== null &&
    vendor_token !== undefined &&
    vendor_token !== ""
  ) {
    head = { headers: { vendor_token: `${vendor_token}` } };
  } else if (
    admin_token !== null &&
    admin_token !== undefined &&
    admin_token !== ""
  ) {
    head = { headers: { admin_token: `${admin_token}` } };
  } else {
  }

  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/update_vendor_profile`,
    formData,
    head
  );
  return response.data;
};

export const AdminVendorDelete = async (id) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/admin_change_vendor_status`,
    {
      vendor_id: id,
      is_active: "0",
    }
  );
  return response.data;
};

export const VendorSignUpFuntion = async (email, password) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/vendor_signup`,
    {
      email: email,
      password: password,
    }
  );
  return response.data;
};

export const VendorOtpVerifyFuntion = async (email, otp) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/vendor_otp_verify`,
    {
      email: email,
      otp: otp,
    }
  );
  return response.data;
};

export const VendorLoginFuntion = async (email, password) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/vendor_login`,
    {
      email: email,
      password: password,
    }
  );
  return response.data;
};

export const VendorDetailsBytoken = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASEURL_0}/vendor_details`,
    {
      headers: { vendor_token: vendor_token },
    }
  );
  return response.data;
};

export const UpdateVendorByToken = async (props, file, filename) => {
  const formData = new FormData();
  // formData.append("vendor_id", id);
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
    `${process.env.REACT_APP_BASEURL_0}/update_vendor_profile`,
    formData,
    {
      headers: { vendor_token: vendor_token },
    }
  );
  return response.data;
};

export const Vendorotp = async (email, otp) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/vendor_otp_verify`,
    {
      email: email,
      otp: otp,
    }
  );
  return response.data;
};

export const getForgetOtpVendor = async (email) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/vendor_forgate_password`,
    {
      email: email,
    }
  );
  return response.data;
};

export const getForgetpasswordUpdate = async (password) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/vendor_forgate_password_update`,
    {
      password: password,
    },
    {
      headers: {
        vendor_token: vendor_token,
      },
    }
  );
  return response.data;
};

export const DriverSignUpFuntion = async (email, password) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/sign_by_driver`,
    {
      email: email,
      password: password,
    }
  );
  return response.data;
};

export const DriverOtpVerifyFuntion = async (email, otp) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/driver_otp_verify`,
    {
      email: email,
      otp: otp,
    }
  );
  return response.data;
};

export const DriverLoginFuntion = async (email, password) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/driver_login`,
    {
      email: email,
      password: password,
    }
  );
  return response.data;
};

export const getForgetOtpDriver = async (email) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/driver_forgate_password`,
    {
      email: email,
    }
  );
  return response.data;
};

export const ForgetpasswordDriverUpdate = async (password) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/driver_forgate_password_update`,
    {
      password: password,
    },
    {
      headers: {
        driver_token: driver_token,
      },
    }
  );
  return response.data;
};

export const getDriverDetails = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASEURL_0}/driver_details`,

    {
      headers: {
        driver_token: driver_token,
      },
    }
  );
  return response.data;
};

export const UpdateDriverByToken = async (props, file, filename) => {
  const formData = new FormData();

  formData.append("driver_name", props.driver_name);
  formData.append("driver_last_name", props.driver_last_name);
  formData.append("date_of_birth", props.date_of_birth);
  formData.append("current_address", props.current_address);
  formData.append("gender", props.gender);
  formData.append("age", props.age);
  formData.append("image", file);
  formData.append("filename", filename);
  formData.append("contect_no", props.contect_no);
  formData.append("aadhar_no", props.aadhar_no);
  formData.append("licence_no", props.licence_no);
  formData.append("licence_issue_date", props.licence_issue_date);
  formData.append("licence_validity_date", props.licence_validity_date);
  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/update_driver`,
    formData,
    {
      headers: {
        driver_token: driver_token,
      },
    }
  );
  return response.data;
};

export const addAdminFunction = async (props) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/add_admin`,
    {
      admin_email: props.admin_email,
      admin_name: props.admin_name,
      admin_phone: props.admin_phone,
      admin_type: props.admin_type,
      admin_password: props.admin_password,
    },
    { headers: { admin_token: `${admin_token}` } }
  );
  return response.data;
};

export const getAdminList = async () => {
  let head;
  // let user_token = localStorage.getItem("user_token");
  let admin_token = localStorage.getItem("admin_token");
  let vendor_token = localStorage.getItem("vendor_token");
  if (
    vendor_token !== null &&
    vendor_token !== undefined &&
    vendor_token !== ""
  ) {
    head = { headers: { vendor_token: `${vendor_token}` } };
  } else if (
    admin_token !== null &&
    admin_token !== undefined &&
    admin_token !== ""
  ) {
    head = { headers: { admin_token: `${admin_token}` } };
  } else {
  }
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/admin_search`,
    {
      admin_name: "",
      admin_type: "",
    },
    head
  );
  return response.data;
};

export const UpdateAdminFunction = async (props) => {
  // console.log("props data--" + JSON.stringify(props));
  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL_0}/update_admin`,
    {
      id: props.id,
      admin_email: props.admin_email,
      admin_name: props.admin_name,
      admin_phone: props.admin_phone,
      admin_type: props.admin_type,
      admin_password: props.admin_password,
    },
    { headers: { admin_token: admin_token } }
  );
  return response.data;
};

export const getAdminfilter = async (name, type) => {
  let head;
  // let user_token = localStorage.getItem("user_token");
  let admin_token = localStorage.getItem("admin_token");
  let vendor_token = localStorage.getItem("vendor_token");
  if (
    vendor_token !== null &&
    vendor_token !== undefined &&
    vendor_token !== ""
  ) {
    head = { headers: { vendor_token: `${vendor_token}` } };
  } else if (
    admin_token !== null &&
    admin_token !== undefined &&
    admin_token !== ""
  ) {
    head = { headers: { admin_token: `${admin_token}` } };
  } else {
  }
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/admin_search`,
    {
      admin_name: name,
      admin_type: type,
    },
    head
  );
  return response.data;
};

export const orderAssignByAdmin = async (
  orderID,
  payment,
  payment_method,
  order_delivery_confirm_code
) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/order_asign`,
    {
      order_id: orderID,

      order_asign_by: "admin",
      payment: payment,
      payment_method: payment_method,
      order_delivery_confirm_code: order_delivery_confirm_code,
    },
    { headers: { admin_token: `${admin_token}` } }
  );
  return response.data;
};

export const GetALLTransactionListByAdmin = async () => {
  const response = await axios.get(`${transactionUrl}/transaction_list`);
  return response.data;
};

export const CreateTransaction = async (
  user_id,
  order_id,
  Grand_Total,
  paymentMetod
) => {
  const response = await axios.post(`${transactionUrl}/payment`, {
    user_id: user_id,
    order_id: order_id,
    amount: Grand_Total,
    payment_method: paymentMetod,
    transection_id: "212123777",
    is_payment_done: "ok-done",
  });
  return response.data;
};
