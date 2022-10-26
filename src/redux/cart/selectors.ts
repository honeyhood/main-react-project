import { RootState } from "../store";

export const cartSelector = (state: RootState) => state.cart;
export const cartItemsByIdSelector = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);
