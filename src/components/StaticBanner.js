import React, { useEffect } from "react";

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
import bannerStyles from "../styles/StaticBanner.module.css";
import Image from "next/image";
const img = "/static/banner4.png"

const StaticBanner = () => {
  return (
    <>
      <div className={bannerStyles.container}>
        <img layout="fill" className={bannerStyles.image} src={img} alt="" />
      </div>
    </>
  );
};

export default StaticBanner;
