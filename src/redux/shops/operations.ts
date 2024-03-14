import { createAsyncThunk } from "@reduxjs/toolkit";

import { getAllShops } from "../../services/medecineApi";

export const getAllShopsThunk = createAsyncThunk(
  "shops/getAllShops",
  async (_, thunkApi) => {
    try {
      const response = await getAllShops();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
