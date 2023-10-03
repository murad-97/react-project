import React, { useEffect, useState } from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import NewsLatter from "../components/common/NewsLatter";
import Preloader from "../components/common/Preloader";
import Home1Destination from "../components/home/Home1Destination";

import Home1package from "../components/home/Home1package";
import Home2Achivement from "../components/home/Home2Achivement";
import Home2Banner from "../components/home/Home2Banner";
import Home2Blog from "../components/home/Home2Blog";
import Home2Feature from "../components/home/Home2Feature";
import Home2Offer from "../components/home/Home2Offer";
import Review1 from "../components/home/Review1";

export default function Homepage2() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return (
    <>
      {!loading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Home2Banner />
          <Home2Offer />
          <Home1package />
          <Home2Achivement/>
          <Home1Destination />
          <Review1 />
          <Home2Feature />
          <Home2Blog/>
          <NewsLatter />
          <Footer />
        </>
      )}
    </>
  );
}
