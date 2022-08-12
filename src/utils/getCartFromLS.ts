import { CartItemType } from "../redux/slices/cart/types";
import { CalcTotalPrice } from "./calcTotalPrice";

export const getCartFromLS = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = CalcTotalPrice(items);

  return {
    items: items as CartItemType[],
    totalPrice,
  };
};
