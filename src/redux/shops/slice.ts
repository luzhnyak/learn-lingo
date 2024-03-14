import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllShopsThunk } from "./operations";
import { IShop } from "../../types";

export interface IShopsInitialState {
  items: IShop[];
  currentShop: IShop | null;
  isLoading: boolean;
  error: Error | any;
}

const shopsInitialState: IShopsInitialState = {
  items: [],
  currentShop: null,
  isLoading: false,
  error: null,
};

const handlePending = (state: IShopsInitialState): void => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (
  state: IShopsInitialState,
  action: PayloadAction<any>
): void => {
  state.isLoading = false;
  state.error = action.payload;
};

const shopsSlice = createSlice({
  name: "shops",
  initialState: shopsInitialState,
  reducers: {
    setCurrentShop(state: IShopsInitialState, action) {
      state.currentShop = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllShopsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addMatcher(isAnyOf(getAllShopsThunk.pending), handlePending)
      .addMatcher(isAnyOf(getAllShopsThunk.rejected), handleRejected)
      .addMatcher(isAnyOf(getAllShopsThunk.fulfilled), (state) => {
        state.isLoading = false;
        state.error = null;
      }),
});

export const { setCurrentShop } = shopsSlice.actions;
export const shopsReducer = shopsSlice.reducer;
