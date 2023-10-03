import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
export default function FilterForm() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="find-form">
        <div className="container">
          <form className="findfrom-wrapper">
            <div className="row">
              <div className="col-lg-3">
                <input type="text" name="whereto" placeholder="Where To..." />
              </div>
              <div className="col-lg-3">
                <div className="calendar-input">
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                  <i className="flaticon-calendar" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="">
                  <select>
                    <option value={0}>Travel Type</option>
                    <option value={1}>City Tours</option>
                    <option value={2}>Vacation Tours</option>
                    <option value={3}>Couple Tours </option>
                    <option value={4}>Adventure Tours</option>
                    <option value={5}>Group Tours</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="find-btn">
                  <a href="#" className="btn-second">
                    <i className="bx bx-search-alt" /> Find now
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
