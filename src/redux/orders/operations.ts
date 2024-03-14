import { createAsyncThunk } from "@reduxjs/toolkit";

import { addOrder, getOrders } from "../../services/medecineApi";
import { IOrder } from "../../types";

export const addOrderThunk = createAsyncThunk(
  "orders/addOrder",
  async (order: IOrder, thunkApi) => {
    try {
      const response = await addOrder(order);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getOrdersThunk = createAsyncThunk(
  "orders/getOrders",
  async (email: string, thunkApi) => {
    try {
      const response = await getOrders(email);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
