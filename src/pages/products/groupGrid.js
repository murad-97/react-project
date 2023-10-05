import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import {Link } from "react-router-dom";

export default function ProductGrid() {
  const [categoryData, setData] = useState([]);

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

  // Set the desired categoryId to filter the category
  const categoryId = "2"; // You can change this to the desired category ID

  // Use optional chaining and nullish coalescing to handle the case when category is not found
  const selectedCategory = categoryData.find((category) => category.id === categoryId);
  const tours = selectedCategory?.tour ?? [];
  sessionStorage.setItem("category",2);
  console.log(sessionStorage.getItem('category'));
  return (
    <div className="col-lg-9">
      <div className="row">
        {tours.map((tour) => (
          <div key={tour.name} className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="theme_common_box_two img_hover">
              <div className="theme_two_box_img">
              <Link
                  as={Link}
                  exact
                  to={`/single/${tour.id}`} // Include the tour id as a URL parameter
                >
                  <img src={tour.image1} alt="img" />
                </Link>
                
                <p>
                  <i className="fas fa-map-marker-alt"></i>
                  {tour.location}
                </p>
              </div>
              <div className="theme_two_box_content">
                <h4>
                  <Link as={Link}
                  exact
                  to={`/single/${tour.id}`}>{tour.name}</Link>
                </h4>
                <p>
                  <span className="review_rating">{tour.rating} Excellent</span>{" "}
                  <span className="review_count">({tour.n_reviews} reviews)</span>
                </p>
                <h3>
                  <span>Price starts from</span> ${tour.price}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="col-lg-12">
        <div className="pagination_area">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
