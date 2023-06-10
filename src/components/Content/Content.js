import React from "react";
import ItemList from "../ItemList/ItemList";
import EmptyList from "../EmptyList/EmptyList";

function Content({ items, search, handleCheck, handleDelete }) {
  return (
    <main className="mb-3">
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : search.length ? (
        <EmptyList message="No matches were found" />
      ) : (
        <EmptyList message="The To-Do list is empty" />
      )}
    </main>
  );
}

export default Content;
