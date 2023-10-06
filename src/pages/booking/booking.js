import React, { useEffect, useState,useContext } from "react";
import { MyContext } from "../../layouts/master"; 

import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Booking() {
    const { isLoggedIn, handleLogout } = useContext(MyContext);

  const navigate = useNavigate();
  const { id } = useParams();
  const [bookData, setBookData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    addressDetails: "",
    City: "",
    State: "",
    Country: "",
    date: "",
    adult: "",
    children: "",
    infant: "",
    booking: [],
  });
  
  const [selectedTour, setselectedTour] = useState([]);
  const [categoryData, setData] = useState([]);
  const [isTourAlreadyBooked, setIsTourAlreadyBooked] = useState(false);// Declare isTourAlreadyBooked with useState

  const showAlert = (title, text, icon) => {
    Swal.fire({
      title,
      text,
      icon,
    });
  };

  useEffect(() => {
      if (!isLoggedIn) {
      navigate("/login")
  }
    fetchData();
  }, []);
  
  async function fetchData() {
    try {
      const response = await axios.get(
        `https://651a6344340309952f0d333a.mockapi.io/hasan/${sessionStorage.getItem(
          "userid"
        )}`
      );
      const data = response.data;
      console.log(data);
       if (data.booking === undefined ) {
      data.booking = [];
    }
      setBookData({
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        addressDetails: data.addressDetails,
        City: data.City,
        State: data.state,
        Country: data.Country,
        date: data.date,
        adult: data.adult,
        children: data.children,
        infant: data.infant,
        booking: data.booking,
      });
  
      const category = sessionStorage.getItem("category");
      const secondResponse = await axios.get(
        `https://651a6056340309952f0d2d66.mockapi.io/Category/${category}`
      );
      const selectedTour = secondResponse.data.tour.find((tour) => tour.id === id);
      setData(selectedTour);
      setselectedTour(selectedTour);
  console.log(data.booking);
      // Update the isTourAlreadyBooked state based on the booking data
      const isAlreadyBooked = bookData.booking?.some((booking) => booking.id === id);
      setIsTourAlreadyBooked(isAlreadyBooked);
      if (!isTourAlreadyBooked) {
        const updatedBookingArray = [...bookData.booking];
        updatedBookingArray.push(selectedTour);

        // Update the bookData object with the modified booking array
        setBookData({
          ...bookData,
          booking: updatedBookingArray,
        });}



    } catch (error) {
      // Handle any errors that might occur during the request
      console.error("Error fetching data:", error);
    }
  }










  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

      console.log(isTourAlreadyBooked);

    if (!isTourAlreadyBooked) {
        
    
      try {
        await axios.put(
          `https://651a6344340309952f0d333a.mockapi.io/hasan/${sessionStorage.getItem("userid")}`,
          bookData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        showAlert('Success!', 'Your info updated successfully!', 'success');
        console.log("Registration successful!");
        fetchData();
      } catch (error) {
        console.error("Error during registration:", error);
      
    }}else{
        showAlert('Sorry!', 'You have already booked this tour!', 'error');
    }
  };

    return (
        <>
            <section id="tour_booking_submission" className="section_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="tou_booking_form_Wrapper">

                                <div className="booking_tour_form">
                                    <h3 className="heading_theme">Booking submission</h3>
                                    <div className="tour_booking_form_box">
                                        <form onSubmit={handleSubmit}  id="tour_bookking_form_item">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input value={bookData.name}
                                                            onChange={handleInputChange}
                                                            name="name"
                                                            type="text" className="form-control bg_input"
                                                            placeholder="First name*" />
                                                    </div>
                                                </div>
                                                {/* <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input value={bookData.lastname}
                                                            onChange={handleInputChange}
                                                            name="lastname"
                                                            type="text" className="form-control bg_input"
                                                            placeholder="Last name*" />
                                                    </div>
                                                </div> */}
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input
                                                            value={bookData.email}
                                                            onChange={handleInputChange}
                                                            name="email"
                                                            type="text" className="form-control bg_input"
                                                            placeholder="Email address (Optional)" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input value={bookData.phone}
                                                            onChange={handleInputChange}
                                                            name="phone"
                                                            type="text" className="form-control bg_input"
                                                            placeholder="Mobile number*" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <input value={bookData.address}
                                                            name="address"
                                                            onChange={handleInputChange} type="text" className="form-control bg_input"
                                                            placeholder="Street address" />
                                                    </div>
                                                </div>
                                              
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input value={bookData.State}
                                                            name="State"
                                                            onChange={handleInputChange} type="text" className="form-control bg_input"
                                                            placeholder="State" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input value={bookData.Country}
                                                            name="Country"
                                                            onChange={handleInputChange} type="text" className="form-control bg_input"
                                                            placeholder="Country" />
                                                    </div>
                                                </div>

                                                {/* <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <select
                                                            onChange={handleInputChange}
                                                            name="City"
                                                            className="form-control form-select bg_input">
                                                            <option value={bookData.City} >Khulna</option>
                                                            <option value={bookData.City} >New York</option>
                                                            <option value={bookData.City} >Barisal</option>
                                                            <option value={bookData.City}  >Nator</option>
                                                            <option value={bookData.City} >Joybangla</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">

                                                        <select onChange={handleInputChange}
                                                            name="State"
                                                         className="form-control form-select bg_input">
                                                            <option value={bookData.State}  >State</option>
                                                            <option value={bookData.State} >New York</option>
                                                            <option value={bookData.State} >Barisal</option>
                                                            <option value={bookData.State} >Nator</option>
                                                            <option value={bookData.State}  >Joybangla</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <select onChange={handleInputChange}
                                                            name="Country"
                                                         className="form-control form-select bg_input">
                                                            <option value={bookData.Country} >Country</option>
                                                            <option value={bookData.Country} >New York</option>
                                                            <option value={bookData.Country} >Barisal</option>
                                                            <option value={bookData.Country} >Nator</option>
                                                            <option value={bookData.Country}  >Joybangla</option>
                                                        </select>
                                                    </div>
                                                </div> */}

                                            </div>
                                            {/* <label className="form-check-label" for="flexCheckDefaultf1">
                      <span className="main_spical_check">
                          <span>I read and accept all <a href="terms-service.html">Terms and
                              conditios</a></span>
                      </span>
                  </label> */}
                                            <button type="submit" href="booking-confirmation.html" className="btn btn_theme btn_md">Submit</button>
                                        </form>
                                    </div>
                                </div>
                                {/* <Comp3 /> */}
                            </div>
                        </div>
                        {/* <TourDetails
                            name={categoryData.name}
                            location={categoryData.location}
                            n_reviews={categoryData.n_reviews}
                            rating={categoryData.rating}
                            duration={categoryData.duration}
                            tour_type={categoryData.tour_type}
                            group_size={categoryData.group_size}
                        /> */}

                        {/* <OntheSide valid_from={categoryData.valid_from} valid_till={categoryData.valid_till} price={categoryData.price} overview={categoryData} /> */}
                        <div className="col-lg-4">
                            <div className="tour_details_right_sidebar_wrapper">
                                <div className="tour_detail_right_sidebar">
                                    <div className="tour_details_right_boxed">
                                        <div className="tour_details_right_box_heading">
                                            <h3>{selectedTour.name}</h3>
                                        </div>
                                        <div className="valid_date_area">
                                            <div className="valid_date_area_one">
                                                <h5>Valid from</h5>
                                                <p>01 Feb 2022</p>
                                            </div>
                                            <div className="valid_date_area_one">
                                                <h5>Valid till</h5>
                                                <p>15 Feb 2022</p>
                                            </div>
                                        </div>
                                        <div className="tour_package_details_bar_list">
                                            <h5>Package details</h5>
                                            <ul>
                                                {/* <OntheSide valid_from={categoryData.valid_from} valid_till={categoryData.valid_till} price={categoryData.price} overview={categoryData} /> */}

                                                {categoryData && categoryData.tour_details && categoryData.tour_details.map((detail, index) => (
                                                    <li key={index}>
                                                        <i className="fas fa-circle"></i> {detail.note}
                                                    </li>
                                                ))}

                                            </ul>
                                        </div>
                                        <div className="tour_package_details_bar_price">
                                            <h5>Price</h5>
                                            <div className="tour_package_bar_price">
                                                <h6><del>$ 35,500</del></h6>
                                                <h3>$ 30,500 <sub>/Per serson</sub> </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tour_detail_right_sidebar">
                                    <div className="tour_details_right_boxed">
                                        <div className="tour_details_right_box_heading">
                                            <h3>Travel date</h3>
                                        </div>
                                        <div className="edit_date_form">
                                            <div className="form-group">
                                                <label for="dates">Edit Date</label>
                                                <input value={bookData.date}
                                                    onChange={handleInputChange}
                                                    name="date" type="date" id="dates" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="tour_package_details_bar_list">
                                            <h5>Tourist</h5>
                                            <div className="select_person_item">
                                                <div className="select_person_left">
                                                    <h6>Adult</h6>
                                                
                                                    <p>12y+</p>
                                                </div>
                                                <div className="select_person_right">
                                                    {/* <h6>01</h6> */}
                                                    <input value={bookData.adult}
                                                        onChange={handleInputChange}
                                                        name="adult" type="number" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="select_person_item">
                                                <div className="select_person_left">
                                                    <h6>Children</h6>
                                                    <p>2 - 12 years</p>
                                                </div>
                                                <div className="select_person_right">
                                                    {/* <h6>01</h6> */}
                                                    <input value={bookData.children}
                                                        onChange={handleInputChange}
                                                        name="children" type="number" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="select_person_item">
                                                <div className="select_person_left">
                                                    <h6>Infant</h6>
                                                    <p>Below 2 years</p>
                                                </div>
                                                <div className="select_person_right">
                                                    {/* <h6>01</h6> */}
                                                    <input value={bookData.infant}
                                                        onChange={handleInputChange}
                                                        name="infant" type="number" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="edit_person">
                                            <p>Edit person</p>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="tour_detail_right_sidebar">
                                    <div className="tour_details_right_boxed">
                                        <div className="tour_details_right_box_heading">
                                            <h3>Coupon code</h3>
                                        </div>
                                        <div className="coupon_code_area_booking">
                                            <form action="#!">
                                                <div className="form-group">
                                                    <input type="text" className="form-control bg_input"
                                                        placeholder="Enter coupon code" />
                                                </div>
                                                <div className="coupon_code_submit">
                                                    <button className="btn btn_theme btn_md">Apply voucher</button>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                                <div className="tour_detail_right_sidebar">
                                    <div className="tour_details_right_boxed">
                                        <div className="tour_details_right_box_heading">
                                            <h3>Booking amount</h3>
                                        </div>

                                        <div className="tour_booking_amount_area">
                                            <ul>
                                                <li>Adult Price x 1 <span>$40,000.00</span></li>
                                                <li>Discount <span>-10%</span></li>
                                                <li>Tax<span>5%</span></li>
                                            </ul>
                                            <div className="tour_bokking_subtotal_area">
                                                <h6>Subtotal <span>$38,000.00</span></h6>
                                            </div>
                                            <div className="coupon_add_area">
                                                <h6><span className="remove_coupon_tour">Remove</span> Coupon code (OFF 5000)
                                                    <span>$5,000.00</span>
                                                </h6>
                                            </div>
                                            <div className="total_subtotal_booking">
                                                <h6>Total Amount <span>$33,000.00</span> </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <Comp4 /> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Booking
