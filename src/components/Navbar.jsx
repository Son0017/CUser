import React from "react";

function Navbar({ data }) {
  return (
    <div className="navbar">
      <div className="navbar-container container">
        <h1 className="navbar-logo">CUser</h1>
        <h3 className="navbar-counter">You have: {data.length}</h3>
      </div>
    </div>
  );
}

export default Navbar;
