import React from "react";
import { FaTrash } from "react-icons/fa";

function LineItem({ item, handleCheck, handleDelete }) {
  return (
    <li className="list-group-item d-flex flex-row justify-content-between">
      <div className="p-1 d-flex flex-row">
        <div className="p-1">
          <input
            className="form-check-input me-1"
            type="checkbox"
            checked={item.checked}
            onChange={() => handleCheck(item.id)}
          />
        </div>
        <div className="p-1">
          <label
            className={`word-break form-check-label ${
              item.checked ? "task-done" : ""
            }`}
            onDoubleClick={() => handleCheck(item.id)}
          >
            {item.item}
          </label>
        </div>
      </div>

      <div className="p-1">
        <FaTrash
          role="button"
          tabIndex="0"
          aria-label={`Delete ${item.item}`}
          onClick={() => handleDelete(item.id)}
        />
      </div>
    </li>
  );
}

export default LineItem;
