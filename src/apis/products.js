import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  getProducts() {
    return apiHelper.get(`/products`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getProductsByCount() {
    return apiHelper.get(`products?limit=12`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getCategory() {
    return apiHelper.get(`/products/category/jewelery`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
};
