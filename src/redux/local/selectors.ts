import { RootState } from "../store";

export const selectAllFavProducts = (state: RootState) => state.local.favItems;
export const selectAllCartProducts = (state: RootState) =>
  state.local.cartItems;
export const selectName = (state: RootState) => state.local.name;
export const selectEmail = (state: RootState) => state.local.email;
export const selectPhone = (state: RootState) => state.local.phone;
export const selectAddress = (state: RootState) => state.local.address;
export const selectSort = (state: RootState) => state.local.sort;
