import React from "react";
import AboutWrap from "../components/about/AboutWrap";

import GuideArea from "../components/about/GuideArea";
import Breadcumb from "../components/common/Breadcumb";
import Home1AchiveMent from "../components/home/Home1AchiveMent";
import Home1Blog from "../components/home/Home1Blog";

import Review1 from "../components/home/Review1";
import Layout from "../components/layout/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <Breadcumb pageName="About Us" pageTitle="About Us" />
    <AboutWrap/>
      <GuideArea />
      <Home1AchiveMent />
      <Review1 />
      <Home1Blog />
    </Layout>
  );
}
