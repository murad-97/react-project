import React from "react";
import Link from "next/link";
import Breadcumb from "../components/common/Breadcumb";
import Layout from "../components/layout/Layout";

function CustomError() {
  return (
    <>
      <Layout>
        <Breadcumb pageName="404" pageTitle="404" />
        <div className="error-wrapper pt-120">
          <div className="row">
            <div className="col-lg-12">
              <h1>Oops!</h1>
              <div className="error-img">
                <img src="assets/images/404.png" alt="" className="img-fluid" />
              </div>
              <h2>That Page is Not Found.</h2>
              <div className="error-btn">
                <Link href="/">
                  <a>GO TO HOME</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default CustomError;
