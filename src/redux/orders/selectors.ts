import { RootState } from "../store";

export const selectAllOrders = (state: RootState) => state.orders.items;
export const selectOrderError = (state: RootState) => state.orders.error;
export const selectOrderIsLoading = (state: RootState) =>
  state.orders.isLoading;
