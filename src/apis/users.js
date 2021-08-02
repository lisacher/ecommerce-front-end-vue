import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  getUserCart() {
    return apiHelper.get(`/carts/user/2`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
};
