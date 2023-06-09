import React from "react";
import LineItem from "../LineItem/LineItem";

function ItemList({ items, handleCheck, handleDelete }) {
  return (
    <ul className="list-group row m-0">
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default ItemList;
