import "../css/banner.css";
import React, { useState, useEffect } from "react";

const Banner = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const imgSrc = [
    "/images/banner_img1.jpg",
    "/images/banner_img2.jpg",
    "/images/banner_img3.jpg",
    "/images/banner_img4.jpg",
  ];
  const [currentImg, setCurrentImg] = useState(0);
  // useEffect(() => {
  //   function handleResize() {
  //     setWindowWidth(window.innerWidth);
  //   }

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (windowWidth <= 500) {
  //     setImgSrc("/images/mobile_banner.jpg");
  //   } else {
  //     setImgSrc("/images/banner1.jpg");
  //   }
  // }, [windowWidth]);
  return (
    <div className="banner">
      <img src={imgSrc[currentImg]} alt="" />
      <div className="dot_box">
        {imgSrc.map((img, index) => {
          if (index === currentImg) {
            return <img src="/images/dot_img1.png" alt="" key={index} />;
          } else {
            return (
              <img
                src="/images/dot_img2.png"
                alt=""
                onClick={() => {
                  setCurrentImg(index);
                }}
                key={index}
              />
            );
          }
        })}
        {/* <img src="/images/dot_img1.png" alt="" />
        <img src="/images/dot_img2.png" alt="" />
        <img src="/images/dot_img2.png" alt="" /> */}
      </div>
    </div>
  );
};

export default Banner;
