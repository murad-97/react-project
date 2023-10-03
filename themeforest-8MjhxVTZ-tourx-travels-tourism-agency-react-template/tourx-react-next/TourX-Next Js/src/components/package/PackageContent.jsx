import React from 'react'

export default function PackageContent() {
  return (
    <>
    <div className="package-thumb">
            <img src="assets/images/package/pd-thumb.png" alt="" />
          </div>
          <div className="package-header">
            <div className="package-title">
              <h3>Western Express Northbound</h3>
              <strong><i className="flaticon-arrival" />&nbsp;
                Mount Dtna, Spain
              </strong>
            </div>
            <div className="pd-review">
              <p>Excellent</p>
              <ul>
                <li><i className="bx bxs-star" /></li>
                <li><i className="bx bxs-star" /></li>
                <li><i className="bx bxs-star" /></li>
                <li><i className="bx bxs-star" /></li>
                <li><i className="bx bx-star" /></li>
              </ul>
              <p>800 Review</p>
            </div>
          </div>
          <div className="p-short-info">
            <div className="single-info">
              <i className="flaticon-clock" />
              <div className="info-texts">
                <strong>Duration</strong>
                <p>Daily Tour</p>
              </div>
            </div>
            <div className="single-info">
              <i className="flaticon-footprints" />
              <div className="info-texts">
                <strong>Tour Type</strong>
                <p>4 Days</p>
              </div>
            </div>
            <div className="single-info">
              <i className="flaticon-traveller" />
              <div className="info-texts">
                <strong>Group Size</strong>
                <p>30 People</p>
              </div>
            </div>
            <div className="single-info">
              <i className="flaticon-translate" />
              <div className="info-texts">
                <strong>Languages</strong>
                <p>Any Language</p>
              </div>
            </div>
          </div>   
    </>
  )
}
