import React from 'react'

export default function category() {
  return (
    <>
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="news_card_four_wrapper">
                <div className="news_card_four_img">
                  <a href="news-details.html">
                    <img
                      src="https://andit.co/projects/html/and-tour/demo/assets/img/news/news-3.png"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="news_card_four_heading text-center">
                  <h3>
                    <a href="news-details.html">HoneyMoon Tour</a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="news_card_four_wrapper">
                <div className="news_card_four_img">
                  <a href="news-details.html">
                    <img
                      src="https://andit.co/projects/html/and-tour/demo/assets/img/news/news-1.png"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="news_card_four_heading text-center">
                  <h3>
                    <a href="news-details.html">Group Tour</a>
                  </h3>
                  {/* <ul>
                                <li>24th January <i className="fas fa-circle"></i></li>
                                <li>5min read</li>
                            </ul> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="news_card_four_wrapper">
                <div className="news_card_four_img">
                  <a href="news-details.html">
                    <img
                      src="https://andit.co/projects/html/and-tour/demo/assets/img/news/news-2.png"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="news_card_four_heading text-center">
                  <h3>
                    <a href="news-details.html">Individual Tour</a>
                  </h3>
                  {/* <ul>
                                <li>24th January <i className="fas fa-circle"></i></li>
                                <li>5min read</li>
                            </ul> */}
                </div>
              </div>
            </div>
    </>
  )
}
