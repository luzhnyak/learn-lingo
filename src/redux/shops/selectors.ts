import { RootState } from "../store";

export const selectAllShops = (state: RootState) => state.shops.items;
export const selectcurrentShop = (state: RootState) => state.shops.currentShop;
