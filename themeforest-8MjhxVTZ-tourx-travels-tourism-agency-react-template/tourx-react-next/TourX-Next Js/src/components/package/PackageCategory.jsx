import React from "react";

export default function PackageCategory() {
  return (
    <div className="sidebar-categorie mt-40">
      <h5 className="categorie-head">Categories</h5>
      <div className="durations-option radio-box">
        <div className="single-option">
          <input type="radio" name="categorie" id="categorie1" />
          <label htmlFor="categorie1">Adventure Tour</label>
        </div>
        <div className="single-option">
          <input type="radio" name="categorie" id="categorie2" />
          <label htmlFor="categorie2">City Tour</label>
        </div>
        <div className="single-option">
          <input type="radio" name="categorie" id="categorie3" />
          <label htmlFor="categorie3">Group Tour</label>
        </div>
        <div className="single-option">
          <input type="radio" name="categorie" id="categorie4" />
          <label htmlFor="categorie4">Couple Tour</label>
        </div>
        <div className="single-option">
          <input type="radio" name="categorie" id="categorie5" />
          <label htmlFor="categorie5">Village Tour</label>
        </div>
      </div>
    </div>
  );
}
