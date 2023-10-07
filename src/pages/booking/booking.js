import React, { useEffect, useState,useContext } from "react";
import { MyContext } from "../../layouts/master"; 
// import { saveCurrentUrl } from '../../common/utility';
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Booking() {


    const { isLoggedIn, handleLogout } = useContext(MyContext);

  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setdata] = useState({
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
        Swal.fire({
            title: 'You must log in',
            text: 'Please log in to continue.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Log In',
            cancelButtonText: 'Cancel',
          }).then((result) => {
            if (result.isConfirmed) {
              // Redirect the user to the login page here
              navigate("/login") // Change the URL as needed
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // If the user clicked "Cancel," go back to the previous page
                navigate(-1);
              }else if (result.dismiss === Swal.DismissReason.backdrop) {
                // If the user clicked outside the Swal border, go back to the previous page
                navigate(-1);
              }
          });
      
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
      setdata({
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
  console.log(data.name);
      // Update the isTourAlreadyBooked state based on the booking data
      const isAlreadyBooked = data.booking?.some((booking) => booking.id === id);
      setIsTourAlreadyBooked(isAlreadyBooked);
      
        const updatedBookingArray = [...data.booking];
        updatedBookingArray.push(selectedTour);

        // Update the data object with the modified booking array
        setdata({
          ...data,
          booking: updatedBookingArray,
        });



    } catch (error) {
      // Handle any errors that might occur during the request
      console.error("Error fetching data:", error);
    }
  }










  console.log(isTourAlreadyBooked);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!isTourAlreadyBooked) {
        
    
      try {
        await axios.put(
          `https://651a6344340309952f0d333a.mockapi.io/hasan/${sessionStorage.getItem("userid")}`,
          data,
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
                                    <h3 className="heading_theme">Booking submission</h3>
                            <div className="tou_booking_form_Wrapper">

                                <div className="booking_tour_form">
                                    <div className="tour_booking_form_box">
                                        <form onSubmit={handleSubmit}  id="tour_bookking_form_item">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input value={data.name}
                                                            onChange={handleInputChange}
                                                            name="name"
                                                            type="text" className="form-control bg_input"
                                                            placeholder="First name*" />
                                                    </div>
                                                </div>
                                                {/* <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input value={data.lastname}
                                                            onChange={handleInputChange}
                                                            name="lastname"
                                                            type="text" className="form-control bg_input"
                                                            placeholder="Last name*" />
                                                    </div>
                                                </div> */}
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input
                                                            value={data.email}
                                                            onChange={handleInputChange}
                                                            name="email"
                                                            type="text" className="form-control bg_input"
                                                            placeholder="Email address (Optional)" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input value={data.phone}
                                                            onChange={handleInputChange}
                                                            name="phone"
                                                            type="text" className="form-control bg_input"
                                                            placeholder="Mobile number*" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <input value={data.address}
                                                            name="address"
                                                            onChange={handleInputChange} type="text" className="form-control bg_input"
                                                            placeholder="Street address" />
                                                    </div>
                                                </div>
                                              
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input value={data.State}
                                                            name="State"
                                                            onChange={handleInputChange} type="text" className="form-control bg_input"
                                                            placeholder="State" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input value={data.Country}
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
                                                            <option value={data.City} >Khulna</option>
                                                            <option value={data.City} >New York</option>
                                                            <option value={data.City} >Barisal</option>
                                                            <option value={data.City}  >Nator</option>
                                                            <option value={data.City} >Joybangla</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">

                                                        <select onChange={handleInputChange}
                                                            name="State"
                                                         className="form-control form-select bg_input">
                                                            <option value={data.State}  >State</option>
                                                            <option value={data.State} >New York</option>
                                                            <option value={data.State} >Barisal</option>
                                                            <option value={data.State} >Nator</option>
                                                            <option value={data.State}  >Joybangla</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <select onChange={handleInputChange}
                                                            name="Country"
                                                         className="form-control form-select bg_input">
                                                            <option value={data.Country} >Country</option>
                                                            <option value={data.Country} >New York</option>
                                                            <option value={data.Country} >Barisal</option>
                                                            <option value={data.Country} >Nator</option>
                                                            <option value={data.Country}  >Joybangla</option>
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
                                                <p>{selectedTour.valid_from}</p>
                                            </div>
                                            <div className="valid_date_area_one">
                                                <h5>Valid till</h5>
                                                <p>{selectedTour.valid_till}</p>
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
                                                
                                                <h3>$ {selectedTour.price} <sub>/Per serson</sub> </h3>
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
