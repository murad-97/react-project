import React from 'react'

export default function productsidebar() {
  return (
    <>
        <div className="col-lg-3">
                    <div className="left_side_search_area">
                        <div className="left_side_search_boxed">
                            <div className="item_searc_map_area">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.6962663570607!2d89.56355961427838!3d22.813715829827952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff901efac79b59%3A0x5be01a1bc0dc7eba!2sAnd+IT!5e0!3m2!1sen!2sbd!4v1557901943656!5m2!1sen!2sbd"></iframe>
                            </div>
                        </div>
                        <div className="left_side_search_boxed">
                            <div className="left_side_search_heading">
                                <h5>Search by name</h5>
                            </div>
                            <div className="name_search_form">
                                <input type="text" className="form-control" placeholder="e.g Deluxe bus"/>
                                <i className="fas fa-search"></i>
                            </div>
                        </div>
                        <div className="left_side_search_boxed">
                            <div className="left_side_search_heading">
                                <h5>Filter by price</h5>
                            </div>
                            <div className="filter-price">
                                <div id="price-slider"></div>
                            </div>
                            <button className="apply" type="button">Apply</button>
                        </div>
                        <div className="left_side_search_boxed">
                            <div className="left_side_search_heading">
                                <h5>Filter by Review</h5>
                            </div>
                            <div className="filter_review">
                                <form className="review_star">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" for="flexCheckDefault">
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_theme"></i>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                                        <label className="form-check-label" for="flexCheckDefault1">
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_asse"></i>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
                                        <label className="form-check-label" for="flexCheckDefault2">
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_asse"></i>
                                            <i className="fas fa-star color_asse"></i>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
                                        <label className="form-check-label" for="flexCheckDefault3">
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_asse"></i>
                                            <i className="fas fa-star color_asse"></i>
                                            <i className="fas fa-star color_asse"></i>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5"/>
                                        <label className="form-check-label" for="flexCheckDefault5">
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_asse"></i>
                                            <i className="fas fa-star color_asse"></i>
                                            <i className="fas fa-star color_asse"></i>
                                            <i className="fas fa-star color_asse"></i>
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="left_side_search_boxed">
                            <div className="left_side_search_heading">
                                <h5>Filter by hotel star</h5>
                            </div>
                            <div className="filter_review">
                                <form className="review_star">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaulta"/>
                                        <label className="form-check-label" for="flexCheckDefaulta">
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_theme"></i>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="flexCheckDefaulf21"/>
                                        <label className="form-check-label" for="flexCheckDefaulf21">
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_asse"></i>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="flexCheckDefaultf3"/>
                                        <label className="form-check-label" for="flexCheckDefaultf3">
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_asse"></i>
                                            <i className="fas fa-star color_asse"></i>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="flexCheckDefaultf4"/>
                                        <label className="form-check-label" for="flexCheckDefaultf4">
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_asse"></i>
                                            <i className="fas fa-star color_asse"></i>
                                            <i className="fas fa-star color_asse"></i>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="flexCheckDefaultf5"/>
                                        <label className="form-check-label" for="flexCheckDefaultf5">
                                            <i className="fas fa-star color_theme"></i>
                                            <i className="fas fa-star color_asse"></i>
                                            <i className="fas fa-star color_asse"></i>
                                            <i className="fas fa-star color_asse"></i>
                                            <i className="fas fa-star color_asse"></i>
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="left_side_search_boxed">
                            <div className="left_side_search_heading">
                                <h5>Facilities</h5>
                            </div>
                            <div className="tour_search_type">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultf1"/>
                                    <label className="form-check-label" for="flexCheckDefaultf1">
                                        <span className="area_flex_one">
                                            <span>Wake-up call</span>
                                            <span>20</span>
                                        </span>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultf2"/>
                                    <label className="form-check-label" for="flexCheckDefaultf2">
                                        <span className="area_flex_one">
                                            <span>Flat TV</span>
                                            <span>14</span>
                                        </span>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultaf3"/>
                                    <label className="form-check-label" for="flexCheckDefaultaf3">
                                        <span className="area_flex_one">
                                            <span>Vehicle service</span>
                                            <span>30</span>
                                        </span>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultaf4"/>
                                    <label className="form-check-label" for="flexCheckDefaultaf4">
                                        <span className="area_flex_one">
                                            <span>Guide service</span>
                                            <span>22</span>
                                        </span>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultaf5"/>
                                    <label className="form-check-label" for="flexCheckDefaultaf5">
                                        <span className="area_flex_one">
                                            <span>Internet, Wi-fi</span>
                                            <span>41</span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="left_side_search_boxed">
                            <div className="left_side_search_heading">
                                <h5>Hotel service</h5>
                            </div>
                            <div className="tour_search_type">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultt1"/>
                                    <label className="form-check-label" for="flexCheckDefaultt1">
                                        <span className="area_flex_one">
                                            <span>Gymnasium</span>
                                            <span>20</span>
                                        </span>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultt2"/>
                                    <label className="form-check-label" for="flexCheckDefaultt2">
                                        <span className="area_flex_one">
                                            <span>Mountain Bike</span>
                                            <span>14</span>
                                        </span>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultt3"/>
                                    <label className="form-check-label" for="flexCheckDefaultt3">
                                        <span className="area_flex_one">
                                            <span>Wifi</span>
                                            <span>62</span>
                                        </span>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultt4"/>
                                    <label className="form-check-label" for="flexCheckDefaultt4">
                                        <span className="area_flex_one">
                                            <span>Aerobics Room</span>
                                            <span>08</span>
                                        </span>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultt5"/>
                                    <label className="form-check-label" for="flexCheckDefaultt5">
                                        <span className="area_flex_one">
                                            <span>Golf Cages</span>
                                            <span>12</span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}
