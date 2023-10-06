import React from 'react'

function Comp1() {

    
  return (
      <div className="booking_tour_form">
          <h3 className="heading_theme">Booking submission</h3>
          <div className="tour_booking_form_box">
              <form onSubmit={handleSubmit}  action="!#" id="tour_bookking_form_item">
                  <div className="row">
                      <div className="col-lg-6">
                          <div className="form-group">
                              <input value={bookData.firstname}
                                  onChange={handleInputChange}
                                   type="text" className="form-control bg_input"
                                  placeholder="First name*"/>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="form-group">
                              <input value={bookData.lastname}
                                  onChange={handleInputChange}
                               type="text" className="form-control bg_input"
                                  placeholder="Last name*"/>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="form-group">
                              <input 
                                  value={bookData.email}
                                  onChange={handleInputChange} type="text" className="form-control bg_input"
                                  placeholder="Email address (Optional)"/>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="form-group">
                              <input value={bookData.number}
                                  onChange={handleInputChange} type="text" className="form-control bg_input"
                                  placeholder="Mobile number*"/>
                          </div>
                      </div>
                      <div className="col-lg-12">
                          <div className="form-group">
                              <input value={bookData.address}
                                  onChange={handleInputChange} type="text" className="form-control bg_input"
                                  placeholder="Street address"/>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="form-group">
                              <input value={bookData.addressDetails}
                                  onChange={handleInputChange} type="text" className="form-control bg_input"
                                  placeholder="Apartment, Suite, House no (optional)"/>
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
                              <select onChange={handleInputChange}  className="form-control form-select bg_input">
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
      








      
  )
}

export default Comp1