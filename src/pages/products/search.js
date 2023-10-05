import React from "react";

export default function search() {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="theme_search_form_area">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="tours"
                role="tabpanel"
                aria-labelledby="tours-tab"
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div className="tour_search_form">
                      <form action="#!">
                        <div className="row">
                          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="flight_Search_boxed">
                              <p>Destination</p>
                              <input
                                type="text"
                                placeholder="Where are you going?"
                              />
                              <span>Where are you going?</span>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="form_search_date">
                              <div className="flight_Search_boxed date_flex_area">
                                <div className="Journey_date">
                                  <p>Journey date</p>
                                  <input type="date" value="2022-05-03" />
                                  <span>Thursday</span>
                                </div>
                                <div className="Journey_date">
                                  <p>Return date</p>
                                  <input type="date" value="2022-05-05" />
                                  <span>Thursday</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                            <div className="flight_Search_boxed dropdown_passenger_area">
                              <p>Passenger, className </p>
                              <div className="dropdown">
                                <button
                                  className="dropdown-toggle final-count"
                                  data-toggle="dropdown"
                                  type="button"
                                  id="dropdownMenuButton1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  0 Passenger
                                </button>
                                <div
                                  className="dropdown-menu dropdown_passenger_info"
                                  aria-labelledby="dropdownMenuButton1"
                                >
                                  <div className="traveller-calulate-persons">
                                    <div className="passengers">
                                      <h6>Passengers</h6>
                                      <div className="passengers-types">
                                        <div className="passengers-type">
                                          <div className="text">
                                            <span className="count pcount">
                                              2
                                            </span>
                                            <div className="type-label">
                                              <p>Adult</p>
                                              <span>12+ yrs</span>
                                            </div>
                                          </div>
                                          <div className="button-set">
                                            <button
                                              type="button"
                                              className="btn-add"
                                            >
                                              <i className="fas fa-plus"></i>
                                            </button>
                                            <button
                                              type="button"
                                              className="btn-subtract"
                                            >
                                              <i className="fas fa-minus"></i>
                                            </button>
                                          </div>
                                        </div>
                                        <div className="passengers-type">
                                          <div className="text">
                                            <span className="count ccount">
                                              0
                                            </span>
                                            <div className="type-label">
                                              <p className="fz14 mb-xs-0">
                                                Children
                                              </p>
                                              <span>2 - Less than 12 yrs</span>
                                            </div>
                                          </div>
                                          <div className="button-set">
                                            <button
                                              type="button"
                                              className="btn-add-c"
                                            >
                                              <i className="fas fa-plus"></i>
                                            </button>
                                            <button
                                              type="button"
                                              className="btn-subtract-c"
                                            >
                                              <i className="fas fa-minus"></i>
                                            </button>
                                          </div>
                                        </div>
                                        <div className="passengers-type">
                                          <div className="text">
                                            <span className="count incount">
                                              0
                                            </span>
                                            <div className="type-label">
                                              <p className="fz14 mb-xs-0">
                                                Infant
                                              </p>
                                              <span>Less than 2 yrs</span>
                                            </div>
                                          </div>
                                          <div className="button-set">
                                            <button
                                              type="button"
                                              className="btn-add-in"
                                            >
                                              <i className="fas fa-plus"></i>
                                            </button>
                                            <button
                                              type="button"
                                              className="btn-subtract-in"
                                            >
                                              <i className="fas fa-minus"></i>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="cabin-selection">
                                      <h6>Cabin className</h6>
                                      <div className="cabin-list">
                                        <button
                                          type="button"
                                          className="label-select-btn"
                                        >
                                          <span className="muiButton-label">
                                            Economy
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="label-select-btn active"
                                        >
                                          <span className="muiButton-label">
                                            Business
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="label-select-btn"
                                        >
                                          <span className="MuiButton-label">
                                            First className{" "}
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <span>Business</span>
                            </div>
                          </div>
                          <div className="top_form_search_button">
                            <button className="btn btn_theme btn_md">
                              Search
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
