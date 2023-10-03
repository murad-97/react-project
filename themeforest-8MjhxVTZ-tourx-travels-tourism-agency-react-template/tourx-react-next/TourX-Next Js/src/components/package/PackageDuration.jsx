import React from "react";

export default function PackageDuration() {
  return (
    <div className="sidebar-duration mt-40">
      <h5 className="categorie-head">Durations</h5>
      <div className="durations-option radio-box">
        <div className="single-option">
          <input type="radio" name="duration" id="duration1" />
          <label htmlFor="duration1">0 - 24 Hour</label>
        </div>
        <div className="single-option">
          <input type="radio" name="duration" id="duration2" />
          <label htmlFor="duration2">1 - 2 Days</label>
        </div>
        <div className="single-option">
          <input type="radio" name="duration" id="duration3" />
          <label htmlFor="duration3">2 - 3 Days</label>
        </div>
        <div className="single-option">
          <input type="radio" name="duration" id="duration4" />
          <label htmlFor="duration4">3 - 4 Days</label>
        </div>
        <div className="single-option">
          <input type="radio" name="duration" id="duration5" />
          <label htmlFor="duration5">5 - 6 Days</label>
        </div>
      </div>
    </div>
  );
}
