import { useEffect } from "react";
import "../../public/assets/css/animate.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/swiper-bundle.css";
import "../../public/assets/font/flaticon.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/responsive.css";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../../public/assets/js/bootstrap.bundle.min");
  }, []);
  return (
  
  <>
  <Component {...pageProps} />
  <Script id="wow" src="/js/wow.min.js"></Script>
  <Script id="initWow" strategy="lazyOnload">{`new WOW().init();`}</Script>
  </>
  );
}
export default MyApp;
