import React from 'react'
import TabGallary from './TabGallary'
export default function PackageTab() {
  return (
    <>
     <div className="package-tab">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i className="flaticon-info" />
                  Information</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i className="flaticon-clipboard" />
                  Travel Plan</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"> <i className="flaticon-gallery" />
                  Our Gallary</button>
              </li>
            </ul>
            <div className="tab-content p-tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="tab-content-1">
                      <div className="p-overview">
                        <h5>Overview</h5>
                        <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla. Duis aliquet varius mauris eget rutrum. Nullam sit amet justo consequat, bibendum orci in, convallis enim. Proin convallis neque viverra finibus cursus. Mauris lacinia lacinia erat in finibus. In non enim libero.Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                      </div>
                      <div className="p-highlight">
                        <h5>Highlight</h5>
                        <ul>
                          <li><i className="bx bx-circle" /> <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p></li>
                          <li><i className="bx bx-circle" /> <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p></li>
                          <li><i className="bx bx-circle" /> <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p></li>
                          <li><i className="bx bx-circle" /> <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p></li>
                          <li><i className="bx bx-circle" /> <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p></li>
                          <li><i className="bx bx-circle" /> <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p></li>
                        </ul>
                      </div>
                      <div className="p-details-table">
                        <table className="table caption-top">
                          <tbody>
                            <tr>
                              <td>Destination</td>
                              <td>New York City</td>
                            </tr>
                            <tr>
                              <td>Depature</td>
                              <td>Yes Required</td>
                            </tr>
                            <tr>
                              <td>Departure Time</td>
                              <td>01 April, 2021   10.00AM</td>
                            </tr>
                            <tr>
                              <td>Return Time</td>
                              <td>08 April, 2021   10.00AM</td>
                            </tr>
                            <tr>
                              <td>Included</td>
                              <td>
                                <ul className="table-list-allow">
                                  <li><i className="bx bx-check" /> Specilaized Bilingual Guide</li>
                                  <li> <i className="bx bx-check" /> Private Transport</li>
                                  <li><i className="bx bx-check" /> Entrance Fees</li>
                                  <li><i className="bx bx-check" /> Box Lunch,Water,Dinner and Snacks</li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td>Excluded</td>
                              <td>
                                <ul className="table-list-disallow">
                                  <li> <i className="bx bx-x" /> Additional Services</li>
                                  <li><i className="bx bx-x" /> Insurance</li>
                                  <li><i className="bx bx-x" /> Drink</li>
                                  <li><i className="bx bx-x" /> Tickets</li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2} className="table-bottom"><i className="flaticon-public-transport" />
                                Travel With Bus</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="p-rationg">
                        <h5>Rating</h5>
                        <div className="rating-card">
                          <div className="r-card-avarag">
                            <h2>4.9</h2>
                            <h5>Excellent</h5>
                          </div>
                          <div className="r-card-info">
                            <ul>
                              <li>
                                <strong>Accommodation</strong>
                                <ul className="r-rating">
                                  <li> 
                                    <i className="bx bxs-star" /> 
                                    <i className="bx bxs-star" /> 
                                    <i className="bx bxs-star" /> 
                                    <i className="bx bxs-star" /> 
                                    <i className="bx bxs-star" /> 
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <strong>Transport</strong>
                                <ul className="r-rating">
                                  <li> 
                                    <i className="bx bxs-star" /> 
                                    <i className="bx bxs-star" /> 
                                    <i className="bx bxs-star" /> 
                                    <i className="bx bx-star" />
                                    <i className="bx bx-star" />
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <strong>Comfort</strong>
                                <ul className="r-rating">
                                  <li> 
                                    <i className="bx bxs-star" /> 
                                    <i className="bx bxs-star" /> 
                                    <i className="bx bxs-star" /> 
                                    <i className="bx bxs-star" /> 
                                    <i className="bx bx-star" /> 
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <strong>Hospitality</strong>
                                <ul className="r-rating">
                                  <li> 
                                    <i className="bx bxs-star" /> 
                                    <i className="bx bxs-star" /> 
                                    <i className="bx bxs-star" /> 
                                    <i className="bx bxs-star" /> 
                                    <i className="bx bx-star" />
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <strong>Food</strong>
                                <ul className="r-rating">
                                  <li> 
                                    <i className="bx bxs-star" /> 
                                    <i className="bx bxs-star" /> 
                                    <i className="bx bx-star" />
                                    <i className="bx bx-star" />
                                    <i className="bx bx-star" /> 
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="p-review">
                        <ul>
                          <li className="p-review-card">
                            <div className="p-review-info">
                              <div className="p-reviewr-img">
                                <img src="assets/images/package/pr-1.png" alt="" />
                              </div>
                              <div className="p-reviewer-info">
                                <strong>Bertram Bil</strong>
                                <p>2 April, 2021 10.00PM</p>
                                <ul className="review-star">
                                  <li> <i className="bx bxs-star" /> </li>
                                  <li> <i className="bx bxs-star" /> </li>
                                  <li> <i className="bx bxs-star" /> </li>
                                  <li> <i className="bx bxs-star" /> </li>
                                  <li> <i className="bx bxs-star" /> </li>
                                </ul>
                              </div>
                            </div>
                            <div className="p-review-texts">
                              <p>Morbi dictum pulvinar velit, id mollis lorem faucibus acUt sed
                                lacinia ipsum. Suspendisse massa augue lorem faucibus acUt
                                sed lacinia ipsum. Suspendisse </p>
                            </div>
                            <a href="#" className="r-reply-btn"><i className="bx bx-reply" /> Reply</a>
                          </li>
                          <li className="p-review-card">
                            <div className="p-review-info">
                              <div className="p-reviewr-img">
                                <img src="assets/images/package/pr-1.png" alt="" />
                              </div>
                              <div className="p-reviewer-info">
                                <strong>Bertram Bil</strong>
                                <p>2 April, 2021 10.00PM</p>
                                <ul className="review-star">
                                  <li> <i className="bx bxs-star" /> </li>
                                  <li> <i className="bx bxs-star" /> </li>
                                  <li> <i className="bx bxs-star" /> </li>
                                  <li> <i className="bx bxs-star" /> </li>
                                  <li> <i className="bx bxs-star" /> </li>
                                </ul>
                              </div>
                            </div>
                            <div className="p-review-texts">
                              <p>Morbi dictum pulvinar velit, id mollis lorem faucibus acUt sed
                                lacinia ipsum. Suspendisse massa augue lorem faucibus acUt
                                sed lacinia ipsum. Suspendisse </p>
                            </div>
                            <a href="#" className="r-reply-btn"><i className="bx bx-reply" /> Reply</a>
                          </li>
                          <li className="p-review-card">
                            <div className="p-review-info">
                              <div className="p-reviewr-img">
                                <img src="assets/images/package/pr-1.png" alt="" />
                              </div>
                              <div className="p-reviewer-info">
                                <strong>Bertram Bil</strong>
                                <p>2 April, 2021 10.00PM</p>
                                <ul className="review-star">
                                  <li> <i className="bx bxs-star" /> </li>
                                  <li> <i className="bx bxs-star" /> </li>
                                  <li> <i className="bx bxs-star" /> </li>
                                  <li> <i className="bx bxs-star" /> </li>
                                  <li> <i className="bx bxs-star" /> </li>
                                </ul>
                              </div>
                            </div>
                            <div className="p-review-texts">
                              <p>Morbi dictum pulvinar velit, id mollis lorem faucibus acUt sed
                                lacinia ipsum. Suspendisse massa augue lorem faucibus acUt
                                sed lacinia ipsum. Suspendisse </p>
                            </div>
                            <a href="#" className="r-reply-btn"><i className="bx bx-reply" /> Reply</a>
                          </li>
                        </ul>
                      </div>
                      <div className="p-review-input">
                        <form>
                          <h5>Leave Your Comment</h5>
                          <div className="row">
                            <div className="col-lg-6">
                              <input type="text" placeholder="Your Full Name" />
                            </div>
                            <div className="col-lg-6">
                              <input type="text" placeholder="Your Email" />
                            </div>
                            <div className="col-lg-12">
                              <input type="text" placeholder="Tour Type" />
                            </div>
                            <div className="col-lg-12">
                              <textarea cols={30} rows={7} placeholder="Write Message" defaultValue={""} />
                            </div>
                            <div className="col-lg-12">
                              <ul className="input-rating">
                                <li><i className="bx bx-star" /></li>
                                <li><i className="bx bx-star" /></li>
                                <li><i className="bx bx-star" /></li>
                                <li><i className="bx bx-star" /></li>
                                <li><i className="bx bx-star" /></li>
                              </ul>
                              <input type="submit" value="Submit Now" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="tab-content-2">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="p-timeline-overview">
                        <h5>Overview</h5>
                        <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla. Duis aliquet varius mauris eget rutrum. Nullam sit amet justo consequat, bibendum orci in, convallis enim. Proin convallis neque viverra finibus cursus. Mauris lacinia lacinia erat in finibus.</p>
                      </div>
                      <ul className="p-timeline">
                        <li>
                          <div className="timeline-index">
                            <div className="index-circle">
                              <h5>01</h5>
                            </div>
                          </div>
                          <div className="timeline-content">
                            <h5>DAY 1 : Departure And Small Tour</h5>
                            <strong>10.00 AM to 10.00 PM</strong>
                            <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.</p>
                            <ul>
                              <li /><li><i className="bx bx-check" />Specilaized Bilingual Guide</li>
                              <li /><li><i className="bx bx-check" />Private Transport</li>
                              <li /><li><i className="bx bx-check" />Entrance Fees</li>
                              <li /><li><i className="bx bx-check" />Box Lunch,Water,Dinner and Snacks</li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-index">
                            <div className="index-circle">
                              <h5>02</h5>
                            </div>
                          </div>
                          <div className="timeline-content">
                            <h5>DAY 2 : Departure And Small Tour</h5>
                            <strong>10.00 AM to 10.00 PM</strong>
                            <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.</p>
                            <ul>
                              <li /><li><i className="bx bx-check" />Specilaized Bilingual Guide</li>
                              <li /><li><i className="bx bx-check" />Private Transport</li>
                              <li /><li><i className="bx bx-check" />Entrance Fees</li>
                              <li /><li><i className="bx bx-check" />Box Lunch,Water,Dinner and Snacks</li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-index">
                            <div className="index-circle">
                              <h5>03</h5>
                            </div>
                          </div>
                          <div className="timeline-content">
                            <h5>DAY 3 : Departure And Small Tour</h5>
                            <strong>10.00 AM to 10.00 PM</strong>
                            <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.</p>
                            <ul>
                              <li /><li><i className="bx bx-check" />Specilaized Bilingual Guide</li>
                              <li /><li><i className="bx bx-check" />Private Transport</li>
                              <li /><li><i className="bx bx-check" />Entrance Fees</li>
                              <li /><li><i className="bx bx-check" />Box Lunch,Water,Dinner and Snacks</li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-index">
                            <div className="index-circle">
                              <h5>04</h5>
                            </div>
                          </div>
                          <div className="timeline-content">
                            <h5>DAY 4 : Departure And Small Tour</h5>
                            <strong>10.00 AM to 10.00 PM</strong>
                            <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.</p>
                            <ul>
                              <li /><li><i className="bx bx-check" />Specilaized Bilingual Guide</li>
                              <li /><li><i className="bx bx-check" />Private Transport</li>
                              <li /><li><i className="bx bx-check" />Entrance Fees</li>
                              <li /><li><i className="bx bx-check" />Box Lunch,Water,Dinner and Snacks</li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-index">
                            <div className="index-circle">
                              <h5>05</h5>
                            </div>
                          </div>
                          <div className="timeline-content">
                            <h5>DAY 5 : Departure And Small Tour</h5>
                            <strong>10.00 AM to 10.00 PM</strong>
                            <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.</p>
                            <ul>
                              <li /><li><i className="bx bx-check" />Specilaized Bilingual Guide</li>
                              <li /><li><i className="bx bx-check" />Private Transport</li>
                              <li /><li><i className="bx bx-check" />Entrance Fees</li>
                              <li /><li><i className="bx bx-check" />Box Lunch,Water,Dinner and Snacks</li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <TabGallary/>
              </div>
            </div>
          </div>   
    </>
  )
}
