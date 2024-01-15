const { default: axios } = require("axios");

const url = "https://localhost:7093/api";

export const getProduct = async () => {
  return (await axios.get(url + "/products")).data;
};

export const verifyProduct = async (payload) => {
  return (await axios.post(url + "/verify", payload)).data;
};

export const updateProduct = async (payload) => {
  return await axios.put(url + "/products", payload);
};
