import React from "react";

export default function BlogReplay() {
  return (
    <>
      <div className="blog-reply">
        <form>
          <h5>Leave A Reply</h5>
          <div className="row">
            <div className="col-lg-6">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="col-lg-6">
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="col-lg-12">
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="col-lg-12">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="col-lg-12">
              <textarea
                cols={30}
                rows={7}
                placeholder="Write Message"
                defaultValue={""}
              />
            </div>
            <div className="col-lg-12">
              <input type="submit" value="Submit Now" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
