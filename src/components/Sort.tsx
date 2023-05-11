import React, { useState } from "react";
import arrow from "../assets/arrow-top.svg";

const sortingOptions = ["popularity", "price", "alphabet"];

export const Sort = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [sortBy, setSortBy] = useState("popularity");

  const changeSortBy = (sortingEl: string) => {
    setSortBy(sortingEl);
    setOpenDropdown(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <img src={arrow} className={openDropdown ? "open" : ""} />
        <b>Сортировка по:</b>
        <span onClick={() => setOpenDropdown((prev) => !prev)}>{sortBy}</span>
      </div>
      <div className={openDropdown ? "sort__popup open" : "sort__popup"}>
        <ul>
          {sortingOptions.map((el) => (
            <li
              onClick={() => changeSortBy(el)}
              key={el}
              className={sortBy === el ? "active" : ""}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
