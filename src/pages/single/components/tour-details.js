import React, { useEffect, useState } from "react";
import axios from "axios";

function TourDetails() {
  const [categoryData, setData] = useState([]);
  const [tourIdFromSession, setTourIdFromSession] = useState(null); // Assuming tour ID is stored in session

  useEffect(() => {
    // Replace "your_session_variable_name" with the actual session variable name
    const tourId = sessionStorage.getItem("your_session_variable_name");

    if (tourId) {
      setTourIdFromSession(tourId);

      axios
        .get(`https://651a6056340309952f0d2d66.mockapi.io/Category/${tourId}`)
        .then((response) => {
          setData([response.data]); // Wrap the response in an array for mapping
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  if (!tourIdFromSession) {
    // Handle the case where the tour ID is not found in the session
    return <div>Tour ID not found in the session</div>;
  }

  if (!categoryData.length) {
    // Data is not yet fetched
    return <div>Loading...</div>;
  }

  return (
    <div>
      {categoryData.map((category) => (
        category.tour.map((tour) => (
          <div key={tour.id}>
            {/* Tour Details */}
            <div className="tour_details_heading_wrapper">
              <div className="tour_details_top_heading">
                <h2>{tour.name}</h2>
                <h5>
                  <i className="fas fa-map-marker-alt"></i> {tour.location}
                </h5>
              </div>
              <div className="tour_details_top_heading_right">
                <h4>Excellent</h4>
                <h6>{tour.rating}/5</h6>
                <p>({tour.n_reviews} reviews)</p>
              </div>
            </div>

            <div className="tour_details_top_bottom">
              <div className="tour_details_top_bottom_item">
                <div className="tour_details_top_bottom_icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="tour_details_top_bottom_text">
                  <h5>Duration</h5>
                  <p>{tour.duration}</p>
                </div>
              </div>

              <div className="tour_details_top_bottom_item">
                <div className="tour_details_top_bottom_icon">
                  <i className="fas fa-paw"></i>
                </div>
                <div className="tour_details_top_bottom_text">
                  <h5>Tour type</h5>
                  <p>{tour.tour_type}</p>
                </div>
              </div>
              <div className="tour_details_top_bottom_item">
                <div className="tour_details_top_bottom_icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="tour_details_top_bottom_text">
                  <h5>Group size</h5>
                  <p>{tour.group_size}</p>
                </div>
              </div>
              <div className="tour_details_top_bottom_item">
                <div className="tour_details_top_bottom_icon">
                  <i className="fas fa-map-marked"></i>
                </div>
                <div className="tour_details_top_bottom_text">
                  <h5>Location</h5>
                  <p>{tour.location}</p>
                </div>
              </div>
            </div>
            {/* End Of Tour Details */}
          </div>
        ))
      ))}
    </div>
  );
}

export default TourDetails;
