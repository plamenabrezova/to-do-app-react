import React from "react";

function Footer({ length }) {
  return (
    <footer className="text-dark-emphasis">
      <p>
        {length} {length === 1 ? "item" : "items"} in the list
      </p>
    </footer>
  );
}

export default Footer;
