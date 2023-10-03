import React from "react";

export default function BlogComments() {
  return (
    <>
      <div className="blog-comments">
        <h5>3 Comments</h5>
        <ul>
          <li>
            <div className="commentor">
              <div className="commentotor-img">
                <img src="assets/images/blog/c-1.png" alt="" />
              </div>
              <div className="commentor-id">
                <strong>Jonson Hur</strong>
                <p>
                  <span>2 April, 2021 </span>
                  <span>10.00PM</span>
                </p>
              </div>
            </div>
            <p className="comment">
              Morbi dictum pulvinar velit, id mollis lorem faucibus acUt sed
              lacinia ipsum. Suspendisse massa augue lorem faucibus acUt sed
              lacinia ipsum. Suspendisse{" "}
            </p>
            <span className="reply-icon">
              <i className="bx bx-reply" /> reply
            </span>
          </li>
          <li>
            <div className="commentor">
              <div className="commentotor-img">
                <img src="assets/images/blog/c-2.png" alt="" />
              </div>
              <div className="commentor-id">
                <strong>Jonson Hur</strong>
                <p>
                  <span>2 April, 2021 </span>
                  <span>10.00PM</span>
                </p>
              </div>
            </div>
            <p className="comment">
              Morbi dictum pulvinar velit, id mollis lorem faucibus acUt sed
              lacinia ipsum. Suspendisse massa augue lorem faucibus acUt sed
              lacinia ipsum. Suspendisse{" "}
            </p>
            <span className="reply-icon">
              <i className="bx bx-reply" /> reply
            </span>
          </li>
          <li>
            <div className="commentor">
              <div className="commentotor-img">
                <img src="assets/images/blog/c-3.png" alt="" />
              </div>
              <div className="commentor-id">
                <strong>Jonson Hur</strong>
                <p>
                  <span>2 April, 2021 </span>
                  <span>10.00PM</span>
                </p>
              </div>
            </div>
            <p className="comment">
              Morbi dictum pulvinar velit, id mollis lorem faucibus acUt sed
              lacinia ipsum. Suspendisse massa augue lorem faucibus acUt sed
              lacinia ipsum. Suspendisse{" "}
            </p>
            <span className="reply-icon">
              <i className="bx bx-reply" /> reply
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
