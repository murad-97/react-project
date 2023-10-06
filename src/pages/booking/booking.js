// import React from 'react'
import Comp1 from "./comp1";
// import Comp1 from "./Comp1";
// import Comp2 from "./Comp2";
// import Comp3 from "./Comp3";
import React, { useEffect, useState } from "react";
import axios from "axios";

// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import { useHistory } from 'react-router-dom';




function Booking() {

    // ========== old ====================================================================================================================
    const navigate = useNavigate();
    const [bookData, setBookData] = useState({
        userId: "", firstname: "", lastname: "", email: "", number: "", address: "", addressDetails: "", City: "", State: "",
        Country: ""
    });
    // const userId = 1;
    const userId = sessionStorage.getItem("userid");


    // const handleInputChange = (e) => {
    //     const { firstname, lastname, email, number, address, addressDetails, City, State, Country } = e.target;
    //     setBookData({ ...bookData, [name]: value });
    // };


    const handleInputChange = (e) => {
        const { name, value } = e.target; // Destructure name and value from e.target
        setBookData({ ...bookData, [name]: value }); // Update state with the new name and value
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://64b9313b79b7c9def6c0bc99.mockapi.io/CRUD", bookData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log("Registration successful!");
            navigate("/login");
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };
    // ========== old ======================================================================
    // const history = useHistory();
    // const [apiData, setApiData] = useState([]);
    // const [userData, setUserData] = useState([]);
    // const [doctorData, setDoctorData] = useState([]);
    // const [doctorAvailableDays, setDoctorAvailableDays] = useState([]);
    // const [selectedDay, setSelectedDay] = useState("");
    // const [doctorAvailableTimes, setDoctorAvailableTimes] = useState([]);
    // const [doctorName, setDoctorName] = useState("");
    // const [doctorPrice, setDoctorPrice] = useState("");


    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     phone: "",
    //     gender: "",
    //     bookingDay: "",
    //     bookingTime: "",
    //     date: "",
    //     notes: ""
    // });


    return (
        <>
            <section id="tour_booking_submission" className="section_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="tou_booking_form_Wrapper">
                                {/* <Comp1 /> */}
                                <div className="booking_tour_form">
                                    <h3 className="heading_theme">Booking submission</h3>
                                    <div className="tour_booking_form_box">
                                        <form onSubmit={handleSubmit} action="!#" id="tour_bookking_form_item">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input value={bookData.firstname}
                                                            onChange={handleInputChange}
                                                            name="firstname"
                                                            type="text" className="form-control bg_input"
                                                            placeholder="First name*" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input value={bookData.lastname}
                                                            onChange={handleInputChange}
                                                            name="lastname"
                                                            type="text" className="form-control bg_input"
                                                            placeholder="Last name*" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input
                                                            value={bookData.email}
                                                            onChange={handleInputChange} type="text" className="form-control bg_input"
                                                            placeholder="Email address (Optional)" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input value={bookData.number}
                                                            onChange={handleInputChange} type="text" className="form-control bg_input"
                                                            placeholder="Mobile number*" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <input value={bookData.address}
                                                            onChange={handleInputChange} type="text" className="form-control bg_input"
                                                            placeholder="Street address" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input value={bookData.addressDetails}
                                                            onChange={handleInputChange} type="text" className="form-control bg_input"
                                                            placeholder="Apartment, Suite, House no (optional)" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <select
                                                            onChange={handleInputChange}
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
                                                        <select onChange={handleInputChange} className="form-control form-select bg_input">
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
                                                        <select onChange={handleInputChange} className="form-control form-select bg_input">
                                                            <option value={bookData.Country} >Country</option>
                                                            <option value={bookData.Country} >New York</option>
                                                            <option value={bookData.Country} >Barisal</option>
                                                            <option value={bookData.Country} >Nator</option>
                                                            <option value={bookData.Country}  >Joybangla</option>
                                                        </select>
                                                    </div>
                                                </div>

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
                        {/* <Comp4 /> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Booking
