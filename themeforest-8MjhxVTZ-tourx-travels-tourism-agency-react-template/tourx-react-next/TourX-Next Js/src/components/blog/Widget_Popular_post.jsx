import Link from "next/link";
import React from "react";

export default function Widget_Popular_post() {
  return (
    <div className="blog-popular mt-40">
      <h5 className="categorie-head">Popular Post</h5>
      <ul>
        <li className="blog-card-sm">
          <div className="blog-img-sm">
            <img src="assets/images/blog/b-sm1.png" alt="" />
          </div>
          <div className="blog-details-sm">
            <Link href="/blog-details">
              <a className="blog-title-sm">Lake Garda</a>
            </Link>
            <div className="blog-info">
              <a className="blog-writer" href="#">
                <i className="flaticon-user" />
                &nbsp;Dina Jems
              </a>
              <a href="#" className="blog-date">
                {" "}
                <i className="flaticon-calendar" /> 10 April, 2021
              </a>
            </div>
          </div>
        </li>
        <li className="blog-card-sm">
          <div className="blog-img-sm">
            <img src="assets/images/blog/b-sm2.png" alt="" />
          </div>
          <div className="blog-details-sm">
            <Link href="/blog-details">
              <a className="blog-title-sm">Parish Hill</a>
            </Link>
            <div className="blog-info">
              <Link href="#">
                <a className="blog-writer">
                  <i className="flaticon-user" />
                  &nbsp;Dina Jems
                </a>
              </Link>
              <Link href="#">
                <a className="blog-date">
                  {" "}
                  <i className="flaticon-calendar" /> 10 April, 2021
                </a>
              </Link>
            </div>
          </div>
        </li>
        <li className="blog-card-sm">
          <div className="blog-img-sm">
            <img src="assets/images/blog/b-sm3.png" alt="" />
          </div>
          <div className="blog-details-sm">
            <Link href="/blog-details">
              <a className="blog-title-sm">Mount Dtna</a>
            </Link>
            <div className="blog-info">
              <Link href="#">
                <a className="blog-writer">
                  <i className="flaticon-user" />
                  &nbsp;Dina Jems
                </a>
              </Link>
              <Link href="#">
                <a className="blog-date">
                  <i className="flaticon-calendar" /> 10 April, 2021
                </a>
              </Link>
            </div>
          </div>
        </li>
        <li className="blog-card-sm">
          <div className="blog-img-sm">
            <img src="assets/images/blog/b-sm4.png" alt="" />
          </div>
          <div className="blog-details-sm">
            <Link href="/blog-details">
              <a className="blog-title-sm">Lake Geneva</a>
            </Link>
            <div className="blog-info">
              <Link href="#">
                <a className="blog-writer">
                  <i className="flaticon-user" />
                  &nbsp;Dina Jems
                </a>
              </Link>
              <Link href="#">
                <a className="blog-date">
                  <i className="flaticon-calendar" /> 10 April, 2021
                </a>
              </Link>
            </div>
          </div>
        </li>
        <li className="blog-card-sm">
          <div className="blog-img-sm">
            <img src="assets/images/blog/b-sm5.png" alt="" />
          </div>
          <div className="blog-details-sm">
            <Link href="/blog-details">
              <a className="blog-title-sm">Franch Rivira</a>
            </Link>
            <div className="blog-info">
              <Link href="#">
                <a className="blog-writer">
                  <i className="flaticon-user" />
                  &nbsp;Dina Jems
                </a>
              </Link>
              <Link href="#">
                <a className="blog-date">
                  <i className="flaticon-calendar" /> 10 April, 2021
                </a>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
