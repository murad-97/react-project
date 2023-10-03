import React, { useState } from 'react'
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
export default function AboutWrap() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="about-wrapper mt-120">
  <div className="container">
    <div className="row">
      <div className="col-lg-7 col-md-12">
        <div className="about-wrapper-left">
          <div className="about-img wow fadeInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms">
            <img src="assets/images/about-1.png" alt="" className="img-fluid" />
          </div>
          <div className="about-video wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms"> 
            <img src="assets/images/about-2.png" alt="" className="img-fluid" />
            <div className="video-icon" onClick={() => setOpen(true)}
                  style={{ cursor: "pointer" }}><i className="flaticon-play-button-arrowhead" />
            </div>
          </div>
         
        </div>
      </div>
      <div className="col-lg-5 col-md-12">
        <div className="about-wrapper-right section-head head-left">
          <h5>About TourX</h5>
          <h2>The Best Travel Agency 
            Company.</h2>
          <p>Fusce aliquam luctus est, eget tincidunt velit scelerisque 
            rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec, 
            mattis mauris. Nunc nec ornare nisi, vel elementum est. 
            Proin malesuada venenatis ex, eu fringilla justo scelerisque
            sit amet. Sed fringilla nec purus non venenatis. Aliquam 
            nec turpis pharetra, bibendum lorem in, sollicitudin nibh. 
            Nulla sit amet lacus diam.</p>
          <ul className="about-list">
            <li><i className="flaticon-double-checking" /> Donec viverra orci On a</li>
            <li><i className="flaticon-double-checking" /> Donec viverra orci On a</li>
            <li><i className="flaticon-double-checking" /> Donec viverra orci On a</li>
            <li><i className="flaticon-double-checking" /> Donec viverra orci On a</li>
            <li><i className="flaticon-double-checking" /> Donec viverra orci On a</li>
            <li><i className="flaticon-double-checking" /> Donec viverra orci On a</li>
          </ul>
          <div className="about-wrapper-btn">
            <a href="#" className="btn-common">Read More</a>
          </div>
        </div>
      </div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="TboWOSW7qCI"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </div>
  </div>
</div>

  )
}
