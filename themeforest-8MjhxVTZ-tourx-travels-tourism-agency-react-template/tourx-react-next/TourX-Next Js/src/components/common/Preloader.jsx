import Head from "next/head";
import React from "react";

export default function Preloader() {
  return (
    <>
      <Head>
        <title>Loading...</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <link rel="icon" href="assets/images/favicon.png" />
      </Head>
      <div className="preloader">
        <div className="loader loader1">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="rocket"></div>
        </div>
      </div>
    </>
  );
}
