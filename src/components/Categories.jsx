import React, { useState } from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = useState();

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => {
          return (
            <li
              key={value}
              onClick={() => setActiveIndex(i)}
              className={activeIndex === i ? "active" : ""}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
