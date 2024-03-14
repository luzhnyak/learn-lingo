import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllShopProductsThunk } from "./operations";
import { IProduct } from "../../types";

export interface IProductsInitialState {
  items: IProduct[];
  isLoading: boolean;
  error: Error | any;
}

const productsInitialState: IProductsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state: IProductsInitialState): void => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (
  state: IProductsInitialState,
  action: PayloadAction<any>
): void => {
  state.isLoading = false;
  state.error = action.payload;
};

const productsSlice = createSlice({
  name: "products",
  initialState: productsInitialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getAllShopProductsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addMatcher(isAnyOf(getAllShopProductsThunk.pending), handlePending)
      .addMatcher(isAnyOf(getAllShopProductsThunk.rejected), handleRejected)
      .addMatcher(isAnyOf(getAllShopProductsThunk.fulfilled), (state) => {
        state.isLoading = false;
        state.error = null;
      }),
});

export const productsReducer = productsSlice.reducer;
