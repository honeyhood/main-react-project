import { nanoid } from "nanoid";
import React from "react";

export const Categories = ({ value, onChangeCategory }) => {
  const categories = ["Все", "Мясные", "Вегетарианская", "Острые", "Комбо"];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => {
          return (
            <li
              key={nanoid()}
              onClick={() => onChangeCategory(i)}
              className={value === i ? "active" : ""}
            >
              {categoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
