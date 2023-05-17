const axios = require("axios");
let tt =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsImlhdCI6MTY4MTI3Mjg0OH0.kFvkS35xXu6KK-IkrBl35fnH8mYIPTfg-mJA1OsTGVE";
const user_cart_api = async () => {
  try {
    let response = await axios.get(`192.168/cart_list`, {
      headers: { user_token: `${tt}` },
    });
    // console.log(response.data);
  } catch (e) {
    // console.log(e);
  }
};
user_cart_api();
