import React from 'react';

function CustomerReviews() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="write_your_review_wrapper">
          <h3 className="heading_theme">Write your review</h3>
          <div className="write_review_inner_boxed">
            <form>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control bg_input"
                      placeholder="Enter full name"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control bg_input"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea
                      rows="6"
                      placeholder="Write your comments"
                      className="form-control bg_input"
                    ></textarea>
                  </div>
                  <div className="comment_form_submit">
                    <button className="btn btn_theme btn_md">
                      Post comment
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="all_review_wrapper">
          <h3 className="heading_theme">All review</h3>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="all_review_box">
          <div className="all_review_date_area">
            <div className="all_review_date">
              <h5>08 Dec, 2021</h5>
            </div>
            <div className="all_review_star">
              <h5>Excellent</h5>
              <div className="review_star_all">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>

          <div className="all_review_text">
            <img src="assets/img/review/review1.png" alt="img" />
            <h4>Manresh Chandra</h4>
            <p>
              "Loved the overall tour for all 6 days covering Jaipur,
              Jodhpur, and Jaisalmer. Worth your money for sure. Thanks.
              The driver was very good and polite, and safe driving for
              all 6 days. On-time pickup and drop overall. Thanks for it."
            </p>
          </div>
          <div className="all_review_small_img">
            <div className="all_review_small_img_item">
              <img src="assets/img/review/review-small1.png" alt="img" />
            </div>
            <div className="all_review_small_img_item">
              <img src="assets/img/review/review-small2.png" alt="img" />
            </div>
            <div className="all_review_small_img_item">
              <img src="assets/img/review/review-small3.png" alt="img" />
            </div>
            <div className="all_review_small_img_item">
              <img src="assets/img/review/review-small4.png" alt="img" />
            </div>
            <div className="all_review_small_img_item">
              <img src="assets/img/review/review-small5.png" alt="img" />
            </div>
            <div className="all_review_small_img_item">
              <h5>+5</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="all_review_box">
          <div className="all_review_date_area">
            <div className="all_review_date">
              <h5>08 Dec, 2021</h5>
            </div>
            <div className="all_review_star">
              <h5>Excellent</h5>
              <div className="review_star_all">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
          <div className="all_review_text">
            <img src="assets/img/review/review2.png" alt="img" />
            <h4>Michel Falak</h4>
            <p>
              "Loved the overall tour for all 6 days covering Jaipur,
              Jodhpur, and Jaisalmer. It's worth your money for sure.
              Thanks. The driver was very good and polite, ensuring safe
              driving for all 6 days. On-time pickup and drop overall.
              Thanks for it."
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="all_review_box">
          <div className="all_review_date_area">
            <div className="all_review_date">
              <h5>08 Dec, 2021</h5>
            </div>
            <div className="all_review_star">
              <h5>Excellent</h5>
              <div className="review_star_all">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
          <div className="all_review_text">
            <img src="assets/img/review/review3.png" alt="img" />
            <h4>Chester dals</h4>
            <p>
              " Loved the overall tour for all 6 days covering jaipur
              jodhpur and jaisalmer. worth ur money for sure. thanks.
              Driver was very good and polite and safe driving for all 6
              days. on time pickup and drop overall. Thanks for it. "
            </p>
          </div>
          <div className="all_review_small_img">
            <div className="all_review_small_img_item">
              <img src="assets/img/review/review-small1.png" alt="img" />
            </div>
            <div className="all_review_small_img_item">
              <img src="assets/img/review/review-small2.png" alt="img" />
            </div>
            <div className="all_review_small_img_item">
              <img src="assets/img/review/review-small5.png" alt="img" />
            </div>
            <div className="all_review_small_img_item">
              <h5>+15</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="all_review_box">
          <div className="all_review_date_area">
            <div className="all_review_date">
              <h5>08 Dec, 2021</h5>
            </div>
            <div className="all_review_star">
              <h5>Excellent</h5>
              <div className="review_star_all">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
          <div className="all_review_text">
            <img src="assets/img/review/review4.png" alt="img" />
            <h4>Casper mike</h4>
            <p>
              " Loved the overall tour for all 6 days covering jaipur
              jodhpur and jaisalmer. worth ur money for sure. thanks.
              Driver was very good and polite and safe driving for all 6
              days. on time pickup and drop overall. Thanks for it. "
            </p>
          </div>
          <div className="all_review_small_img">
            <div className="all_review_small_img_item">
              <img src="assets/img/review/review-small4.png" alt="img" />
            </div>
            <div className="all_review_small_img_item">
              <img src="assets/img/review/review-small5.png" alt="img" />
            </div>
            <div className="all_review_small_img_item">
              <h5>+19</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="all_review_box">
          <div className="all_review_date_area">
            <div className="all_review_date">
              <h5>08 Dec, 2021</h5>
            </div>
            <div className="all_review_star">
              <h5>Excellent</h5>
              <div className="review_star_all">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
          <div className="all_review_text">
            <img src="assets/img/review/review5.png" alt="img" />
            <h4>Jason bruno</h4>
            <p>
              " Loved the overall tour for all 6 days covering jaipur
              jodhpur and jaisalmer. worth ur money for sure. thanks.
              Driver was very good and polite and safe driving for all 6
              days. on time pickup and drop overall. Thanks for it. "
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default CustomerReviews;
