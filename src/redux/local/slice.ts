import { createSlice } from "@reduxjs/toolkit";
import { ICartProduct, IProduct } from "../../types";

interface ILocalInitialState {
  favItems: IProduct[];
  cartItems: ICartProduct[];
  name: string;
  email: string;
  phone: string;
  address: string;
  sort: string;
}

const localInitialState: ILocalInitialState = {
  favItems: [],
  cartItems: [],
  name: "",
  email: "",
  phone: "",
  address: "",
  sort: "no_sorted",
};

const localSlice = createSlice({
  name: "local",
  initialState: localInitialState,
  reducers: {
    addItemToCart(state: ILocalInitialState, action) {
      const idx = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );

      if (idx < 0) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      } else {
        state.cartItems[idx].quantity = state.cartItems[idx].quantity + 1;
      }
    },
    updateItemInCart(state: ILocalInitialState, action) {
      const idx = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );

      state.cartItems[idx] = action.payload;
    },
    deleteItemFromCart(state: ILocalInitialState, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    addItemToFav(state: ILocalInitialState, action) {
      state.favItems.push(action.payload);
    },
    deleteItemFromFav(state: ILocalInitialState, action) {
      state.favItems = state.favItems.filter(
        (item) => item.id !== action.payload
      );
    },
    setName(state: ILocalInitialState, action) {
      state.name = action.payload;
    },
    setEmail(state: ILocalInitialState, action) {
      state.email = action.payload;
    },
    setPhone(state: ILocalInitialState, action) {
      state.phone = action.payload;
    },
    setAddress(state: ILocalInitialState, action) {
      state.address = action.payload;
    },
    setSort(state: ILocalInitialState, action) {
      state.sort = action.payload;
    },
    clearCart(state: ILocalInitialState) {
      state.cartItems = [];
      state.name = "";
      state.email = "";
      state.phone = "";
      state.address = "";
    },
  },
});

export const {
  addItemToFav,
  deleteItemFromFav,
  updateItemInCart,
  addItemToCart,
  deleteItemFromCart,
  setName,
  setEmail,
  setPhone,
  setAddress,
  setSort,
  clearCart,
} = localSlice.actions;
export const localReducer = localSlice.reducer;
