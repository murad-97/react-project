import React, { useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
export default function Home2Banner() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
     <div className="main-banner-2">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="main-banner-content-2">
          <h2>Amazing Tour In <br />
            <span className="element">Hampshire</span> </h2>
          <h3>7 Days, 8 Night Tour</h3>
        </div>
      </div>
    </div>
    <div className="find-form-2">
      <form className="findfrom-wrapper">
        <div className="row">
          <div className="col-lg-3">
            <input type="text" placeholder="Where To..." />
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
              <a href="#" className="btn-second"><i className="bx bx-search-alt" /> Find now</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
   
    </>
  )
}
