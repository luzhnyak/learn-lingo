import axios from "axios";
import { IOrder } from "../types";

axios.defaults.baseURL = "https://luzhnyak-aws.pp.ua:83/api";

export const getAllShops = async () => {
  const { data } = await axios.get(`/shops`);
  return data;
};

export const getAllShopProducts = async (shopId: number) => {
  const { data } = await axios.get(`/products?shop_id=${shopId}`);
  return data;
};

export const getOrders = async (email: string) => {
  const { data } = await axios(`/orders?email=${email}`);
  return data;
};

export const addOrder = async (order: IOrder) => {
  const { data } = await axios.post(`/orders`, order);
  return data;
};
