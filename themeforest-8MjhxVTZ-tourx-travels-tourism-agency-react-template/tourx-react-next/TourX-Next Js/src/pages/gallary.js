import React, { useState } from 'react'
import Breadcumb from '../components/common/Breadcumb'
import Layout from '../components/layout/Layout'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
export default function Gallary() {
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  return (
    <Layout>
      <Breadcumb pageName="Gallary" pageTitle="Gallary"  />
      <div className="gallary-wrapper pt-120">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="gallary-colom-one">
          <div className="gallary-grid">
            <div className="img-sm-1 main-gallary" onClick={() =>setOpenimg({ openingState: true, openingIndex: 0 })}>
              <img src="assets/images/gallary/gl-1.png" alt="gallary-img" />
            </div>
            <div className="img-sm-2 main-gallary" onClick={() =>setOpenimg({ openingState: true, openingIndex: 1 })}>
              <img src="assets/images/gallary/gl-2.png" alt="gallary-img" />
            </div>
            <div className="img-xxl main-gallary" onClick={() =>setOpenimg({ openingState: true, openingIndex: 2 })}>
              <img src="assets/images/gallary/g-xxl-1.png" alt="gallary-img" />
            </div>
          </div>
          <div className="gallary-grid mt-24">
            <div className="img-sm-1 main-gallary" onClick={() =>setOpenimg({ openingState: true, openingIndex: 3 })}>
              <img src="assets/images/gallary/gl-3.png" alt="gallary-img" />
            </div>
            <div className="img-sm-2 main-gallary" onClick={() =>setOpenimg({ openingState: true, openingIndex: 4 })}>
              <img src="assets/images/gallary/gl-4.png" alt="gallary-img" />
            </div>
            <div className="img-xxl main-gallary" onClick={() =>setOpenimg({ openingState: true, openingIndex: 5 })}>
              <img src="assets/images/gallary/g-xxl-2.png" alt="gallary-img" />
            </div>
          </div>
          <div className="gallary-grid mt-24">
            <div className="img-sm-1 main-gallary" onClick={() =>setOpenimg({ openingState: true, openingIndex: 6 })}>
              <img src="assets/images/gallary/gl-5.png" alt="gallary-img" />
            </div>
            <div className="img-sm-2 main-gallary" onClick={() =>setOpenimg({ openingState: true, openingIndex: 7 })}>
              <img src="assets/images/gallary/gl-6.png" alt="gallary-img" />
            </div>
            <div className="img-xxl main-gallary" onClick={() =>setOpenimg({ openingState: true, openingIndex: 8 })}>
              <img src="assets/images/gallary/g-xxl-3.png" alt="gallary-img" />
            </div>
          </div>
          <div className="gallary-grid mt-24">
            <div className="img-sm-1 main-gallary" onClick={() =>setOpenimg({ openingState: true, openingIndex: 9 })}>
              <img src="assets/images/gallary/gl-10.png" alt="gallary-img" />
            </div>
            <div className="img-sm-2 main-gallary" onClick={() =>setOpenimg({ openingState: true, openingIndex: 10 })}>
              <img src="assets/images/gallary/gl-8.png" alt="gallary-img" />
            </div>
            <div className="img-xxl main-gallary" onClick={() =>setOpenimg({ openingState: true, openingIndex: 11 })}>
              <img src="assets/images/gallary/g-xxl-4.png" alt="gallary-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="grllary-colom-two">
          <div className="gallary-grid-2">
            <div className="img-xl main-gallary" style={{cursor:"pointer"}} onClick={() =>setOpenimg({ openingState: true, openingIndex: 12 })}>
              <img src="assets/images/gallary/g-xl-1.png" alt="" />
            </div>
            <div className="img-sm-3 main-gallary" style={{cursor:"pointer"}} onClick={() =>setOpenimg({ openingState: true, openingIndex: 13 })}>
              <img src="assets/images/gallary/gl-9.png" alt="" />
            </div>
            <div className="img-sm-4 main-gallary" style={{cursor:"pointer"}} onClick={() =>setOpenimg({ openingState: true, openingIndex: 14 })}>
              <img src="assets/images/gallary/gl-10.png" alt="" />
            </div>
          </div>
          <div className="gallary-grid-2 mt-24">
            <a className="img-xl main-gallary" style={{cursor:"pointer"}} onClick={() =>setOpenimg({ openingState: true, openingIndex: 15})}>
              <img src="assets/images/gallary/g-xl-2.png" alt="" />
            </a>
            <a className="img-sm-3 main-gallary" style={{cursor:"pointer"}} onClick={() =>setOpenimg({ openingState: true, openingIndex: 16})}>
              <img src="assets/images/gallary/gl-17.png" alt="" />
            </a>
            <a className="img-sm-4 main-gallary" style={{cursor:"pointer"}} onClick={() =>setOpenimg({ openingState: true, openingIndex: 17})}>
              <img src="assets/images/gallary/gl-16.png" alt="" />
            </a>
          </div>
          <div className="gallary-grid-2 mt-24">
            <a className="img-xl main-gallary" style={{cursor:"pointer"}} onClick={() =>setOpenimg({ openingState: true, openingIndex: 18})}>
              <img src="assets/images/gallary/g-xl-3.png" alt="" />
            </a>
            <a className="img-sm-3 main-gallary" style={{cursor:"pointer"}} onClick={() =>setOpenimg({ openingState: true, openingIndex: 19})}>
              <img src="assets/images/gallary/gl-15.png" alt="" />
            </a>
            <a className="img-sm-4 main-gallary" style={{cursor:"pointer"}} onClick={() =>setOpenimg({ openingState: true, openingIndex: 20})}>
              <img src="assets/images/gallary/gl-14.png" alt="" />
            </a>
          </div>
          <div className="gallary-grid-2 mt-24">
            <a className="img-xl main-gallary" style={{cursor:"pointer"}} onClick={() =>setOpenimg({ openingState: true, openingIndex: 21})}>
              <img src="assets/images/gallary/g-xl-4.png" alt="" />
            </a>
            <a className="img-sm-3 main-gallary" style={{cursor:"pointer"}} onClick={() =>setOpenimg({ openingState: true, openingIndex: 22})}>
              <img src="assets/images/gallary/gl-13.png" alt="" />
            </a>
            <a className="img-sm-4 main-gallary" style={{cursor:"pointer"}} onClick={() =>setOpenimg({ openingState: true, openingIndex: 23})}>
              <img src="assets/images/gallary/gl-12.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Lightbox
        className="img-fluid"
        open={isOpenimg.openingState}
        plugins={[Fullscreen]}
        index={isOpenimg.openingIndex}
        close={() => setOpenimg(false)}
        styles={{
          container: {
            backgroundColor: "rgba(0, 0, 0, .9)",
            cursor: "pointer",
          },
        }}
        slides={[
          // gird1
          { src: "assets/images/gallary/gl-1-full.png" },
          { src: "assets/images/gallary/gl-2-full.png" },
          { src: "assets/images/gallary/g-xxl-1-full.png" },
          // gird2
          { src: "assets/images/gallary/gl-3-full.png" },
          { src: "assets/images/gallary/gl-4-full.png" },
          { src: "assets/images/gallary/g-xxl-2-full.png" }, 
          // gird3
          { src: "assets/images/gallary/gl-5-full.png" },
          { src: "assets/images/gallary/gl-6-full.png" },
          { src: "assets/images/gallary/g-xxl-3-full.png" },
          // gird4
          { src: "assets/images/gallary/gl-10-full.png" },
          { src: "assets/images/gallary/gl-8-full.png" },
          { src: "assets/images/gallary/g-xxl-4-full.png"},
          // second row
          // gird5
          { src: "assets/images/gallary/g-xl-1-full.png"},
          { src: "assets/images/gallary/gl-9-full.png"},
          { src: "assets/images/gallary/gl-10-full.png"},
          // gird6
          { src: "assets/images/gallary/g-xl-2-full.png"},
          { src: "assets/images/gallary/gl-17-full.png"},
          { src: "assets/images/gallary/gl-16-full.png"},
          // gird7
          { src: "assets/images/gallary/g-xl-3-full.png"},
          { src: "assets/images/gallary/gl-15-full.png"},
          { src: "assets/images/gallary/gl-14-full.png"},
          // gird8
          { src: "assets/images/gallary/g-xl-4-full.png"},
          { src: "assets/images/gallary/gl-13-full.png"},
          { src: "assets/images/gallary/gl-12-full.png"},

        ]}
      />
</div>

    </Layout> 
  )
}
