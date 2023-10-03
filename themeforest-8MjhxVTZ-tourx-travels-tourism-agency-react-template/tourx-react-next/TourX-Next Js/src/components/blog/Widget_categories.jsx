import React from "react";

export default function Widget_categories() {
  return (
    <div className="col-lg-12 col-md-12">
      <div className="blog-categorie mt-40">
        <h5 className="categorie-head">Categories</h5>
        <ul>
          <li>
            <a href="#">
              <i className="bx bxs-chevrons-right" /> Adventure Tour
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-chevrons-right" /> City Tour
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-chevrons-right" /> Group Tour
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-chevrons-right" /> Couple Tour
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-chevrons-right" /> Village Tour
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
