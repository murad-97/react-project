import React from "react";

export default function NewsLatter() {
  return (
    <div className="newsletter-area pt-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="newsletter-wrapper">
              <h2>Subscribe To Our Newsletter For Latest Update</h2>
              <form>
                <div className="input-group newsletter-input">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Email"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
