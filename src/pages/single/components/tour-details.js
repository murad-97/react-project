import React, { useEffect, useState } from "react";
import axios from "axios";

function TourDetails() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://651a6056340309952f0d2d66.mockapi.io/Category")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          {/* Tour Details */}
          <div className="tour_details_heading_wrapper">
            <div className="tour_details_top_heading">
              <h2>{item.name}</h2>
              <h5>
                <i className="fas fa-map-marker-alt"></i> {item.description}
              </h5>
            </div>
            <div className="tour_details_top_heading_right">
              <h4>Excellent</h4>
              <h6>4.8/5</h6>
              <p>(1214 reviews)</p>
            </div>
          </div>

          <div className="tour_details_top_bottom">
            <div className="tour_details_top_bottom_item">
              <div className="tour_details_top_bottom_icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="tour_details_top_bottom_text">
                <h5>Duration</h5>
                <p>10 days</p>
              </div>
            </div>

            <div className="tour_details_top_bottom_item">
              <div className="tour_details_top_bottom_icon">
                <i className="fas fa-paw"></i>
              </div>
              <div className="tour_details_top_bottom_text">
                <h5>Tour type</h5>
                <p>Group tour</p>
              </div>
            </div>
            <div className="tour_details_top_bottom_item">
              <div className="tour_details_top_bottom_icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="tour_details_top_bottom_text">
                <h5>Group size</h5>
                <p>50 people</p>
              </div>
            </div>
            <div className="tour_details_top_bottom_item">
              <div className="tour_details_top_bottom_icon">
                <i className="fas fa-map-marked"></i>
              </div>
              <div className="tour_details_top_bottom_text">
                <h5>Location</h5>
                <p>Amazon rain forest</p>
              </div>
            </div>
          </div>
          {/* End Of Tour Details */}
        </div>
      ))}
    </div>
  );
}

export default TourDetails;
