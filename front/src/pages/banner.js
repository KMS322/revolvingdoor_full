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
  const [delayedChange, setDelayedChange] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!delayedChange) {
        setCurrentImg((prevImg) => (prevImg + 1) % imgSrc.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [delayedChange]);

  const handleDotClick = (index) => {
    setDelayedChange(true);
    setCurrentImg(index);

    setTimeout(() => {
      setDelayedChange(false);
    }, 4000);
  };
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
                  handleDotClick(index);
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
