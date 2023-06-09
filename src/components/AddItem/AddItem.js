import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";

function AddItem({ newItem, setNewItem, handleSubmit }) {
  const inputRef = useRef();
  return (
    <form className="input-group" onSubmit={(e) => handleSubmit(e)}>
        <input
          autoFocus
          ref={inputRef}
          aria-label="Add new task"
          id="addTask"
          type="text"
          placeholder="Add task"
          required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="form-control"
        />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="submit"
          aria-label="Add new task"
          onClick={() => inputRef.current.focus()}
        >
          <FaPlus style={{ position: "relative", bottom: "2px" }} />
        </button>
      </div>
    </form>
  );
}

export default AddItem;
