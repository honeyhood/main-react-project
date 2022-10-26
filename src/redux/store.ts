import { configureStore } from "@reduxjs/toolkit";
import filter from "./filter/filterSlice";
import cart from "./cart/cartSlice";
import pizza from "./pizza/pizzaSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
