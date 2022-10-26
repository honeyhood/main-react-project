import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CalcTotalPrice } from "../../utils/calcTotalPrice";
import { getCartFromLS } from "../../utils/getCartFromLS";
import { CartItemType, CartSliceState } from "./types";

const initialState: CartSliceState = getCartFromLS();

// const initialState: CartSliceState = {
//   totalPrice,
//   items,
// };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, { payload }: PayloadAction<CartItemType>) {
      const findItem = state.items.find((obj) => {
        return (
          obj.id === payload.id &&
          obj.size === payload.size &&
          obj.type === payload.type
        );
      });

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...payload, count: 1 });
      }

      state.totalPrice = CalcTotalPrice(state.items);
    },

    minusItem(state, { payload }: PayloadAction<CartItemType>) {
      const findItem = state.items.find((obj) => {
        return (
          obj.id === payload.id &&
          obj.size === payload.size &&
          obj.type === payload.type
        );
      });

      if (findItem) {
        findItem.count--;
        state.totalPrice -= findItem.price;
      }
    },

    removeItem(state, { payload }: PayloadAction<CartItemType>) {
      const findItem = state.items.find((obj) => {
        return (
          obj.id === payload.id &&
          obj.size === payload.size &&
          obj.type === payload.type
        );
      });
      if (findItem) {
        state.totalPrice -= findItem.price * findItem.count;
      }
      state.items = state.items.filter((obj) => {
        return (
          obj.id !== payload.id ||
          obj.size !== payload.size ||
          obj.type !== payload.type
        );
      });
    },

    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
