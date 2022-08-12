import { nanoid } from "nanoid";
import { memo } from "react";

type CategoriesProps = {
  value: number;
  onChangeCategory: (i: number) => void;
};

export const Categories: React.FC<CategoriesProps> = memo(
  ({ value, onChangeCategory }) => {
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
  }
);
