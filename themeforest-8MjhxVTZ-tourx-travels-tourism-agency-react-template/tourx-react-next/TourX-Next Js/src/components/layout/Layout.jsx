import Head from "next/head";
import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import NewsLatter from "../common/NewsLatter";
import Topbar from "../common/Topbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>TourX - Tours and Travel TextJs Template </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        
         <link rel="icon" href="assets/images/favicon.png" />
      </Head>
      <Topbar />
      <Header />
      {children}
      <NewsLatter />
      <Footer />
    </>
  );
}
