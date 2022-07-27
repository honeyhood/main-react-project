import React from "react";
import { Link } from "react-router-dom";
import cartEmptyImg from "../assets/img/empty-cart.png";

const CartEmpty = () => {
  return (
    <div class="cart cart--empty">
      <h2>
        Корзина пустая <icon>😕</icon>
      </h2>
      <p>Для того чтобы заказать пиццу, перейдите на главную страницу.</p>
      <img src={cartEmptyImg} alt="Empty cart" />
      <Link class="button button--black" to="/">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
