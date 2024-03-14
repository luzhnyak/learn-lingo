import { RootState } from "../store";

export const selectAllShopProducts = (state: RootState) => state.products.items;
