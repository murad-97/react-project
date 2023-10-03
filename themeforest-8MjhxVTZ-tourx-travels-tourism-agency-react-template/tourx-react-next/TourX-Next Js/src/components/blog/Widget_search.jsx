import React from "react";

export default function Widget_search() {
  return (
    <>
      <div className="sidebar-searchbox">
        <div className="input-group search-box">
          <input
            type="text"
            className="form-control"
            placeholder="Search Tour..."
            aria-label="Recipient's username"
          />
          <button className="btn btn-outline-secondary" type="button">
            <i className="bx bx-paper-plane"></i>
          </button>
        </div>
      </div>
    </>
  );
}
