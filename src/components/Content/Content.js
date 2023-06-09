import React from "react";
import ItemList from "../ItemList/ItemList";

function Content({ items, handleCheck, handleDelete }) {
  return (
    <main className="mb-3">
      {items.length ? (
       <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
      ) : (
        <p style={{ marginTop: "2rem" }}>The To-Do list is empty</p>
      )}
    </main>
  );
}

export default Content;
