import React, { useState, useEffect } from "react";
import "../css/banner.css";

const Banner = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 500) {
      setImgSrc("/images/mobile_banner.jpg");
    } else {
      setImgSrc("/images/banner1.jpg");
    }
  }, [windowWidth]);
  return (
    <div className="banner">
      <img src={imgSrc} alt="" />
    </div>
  );
};

export default Banner;
