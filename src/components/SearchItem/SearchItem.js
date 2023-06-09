import React from "react";

function SearchItem({ search, setSearch }) {
  return (
    <form className="input-group" onSubmit={(e) => e.preventDefault()}>
      <input
        id="search"
        type="text"
        role="searchbox"
        aria-label="Search for a task"
        placeholder="Search for a task"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-control"
      />
    </form>
  );
}

export default SearchItem;
