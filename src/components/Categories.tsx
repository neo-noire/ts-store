import React, { useState } from "react";

const categories = [
  {
    name: "All",
  },
  {
    name: "Meat",
  },
  {
    name: "Vegan",
  },
  {
    name: "Grill",
  },
  {
    name: "Spicy",
  },
  {
    name: "Closed",
  },
];

export const Categories = () => {
  const [category, setCategory] = useState(categories[0].name);
  const categoriesHandler = (cat: string) => {
    setCategory(cat);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((el) => (
          <li
            onClick={() => categoriesHandler(el.name)}
            className={category === el.name ? "active" : ""}
          >
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
