import { createAsyncThunk } from "@reduxjs/toolkit";

import { getAllShopProducts } from "../../services/medecineApi";

export const getAllShopProductsThunk = createAsyncThunk(
  "products/getAllShopProducts",
  async (shopId: number, thunkApi) => {
    try {
      const response = await getAllShopProducts(shopId);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
