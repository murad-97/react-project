import React from 'react';

function Itinerary() {
  return (

<div className="tour_details_boxed">
<h3 className="heading_theme">Itinerary</h3>
<div className="tour_details_boxed_inner">
  <div className="accordion" id="accordionExample">
    <div className="accordion_flex_area">
      <div className="accordion_left_side">
        <h5>Day 1</h5>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Stet clita kasd gubergren, no sea takimata sanctus
            est
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div className="accordion_itinerary_list">
              <ul>
                <li>
                  <i className="fas fa-circle"></i>
                  There are many variations of passages of
                  Lorem Ipsum available, but the majority have
                  suffered alteration in some form
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  Contrary to popular belief, Lorem Ipsum is
                  not simply random
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  Many desktop publishing packages and web
                  page editors now use
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, to using
                  'Content here
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  The standard chunk of Lorem Ipsum used since
                  the 1500s is reproduced below for those
                  interested.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="accordion_flex_area">
      <div className="accordion_left_side">
        <h5>Day 2</h5>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Stet clita kasd gubergren, no sea takimata sanctus
            est
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div className="accordion_itinerary_list">
              <ul>
                <li>
                  <i className="fas fa-circle"></i>
                  There are many variations of passages of
                  Lorem Ipsum available, but the majority have
                  suffered alteration in some form
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, to using
                  'Content here
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  The standard chunk of Lorem Ipsum used since
                  the 1500s is reproduced below for those
                  interested.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="accordion_flex_area">
      <div className="accordion_left_side">
        <h5>Day 3</h5>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Stet clita kasd gubergren, no sea takimata sanctus
            est
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div className="accordion_itinerary_list">
              <ul>
                <li>
                  <i className="fas fa-circle"></i>
                  Contrary to popular belief, Lorem Ipsum is
                  not simply random
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  Many desktop publishing packages and web
                  page editors now use
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, to using
                  'Content here
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  The standard chunk of Lorem Ipsum used since
                  the 1500s is reproduced below for those
                  interested.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="accordion_flex_area">
      <div className="accordion_left_side">
        <h5>Day 4</h5>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFour">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            Stet clita kasd gubergren, no sea takimata sanctus
            est
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div className="accordion_itinerary_list">
              <ul>
                <li>
                  <i className="fas fa-circle"></i>
                  There are many variations of passages of
                  Lorem Ipsum available, but the majority have
                  suffered alteration in some form
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  Contrary to popular belief, Lorem Ipsum is
                  not simply random
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  Many desktop publishing packages and web
                  page editors now use
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  The standard chunk of Lorem Ipsum used since
                  the 1500s is reproduced below for those
                  interested.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  );
};

export default Itinerary;