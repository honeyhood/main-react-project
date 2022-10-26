import { CartItemType } from "../redux/cart/types";

export const CalcTotalPrice = (items: CartItemType[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
