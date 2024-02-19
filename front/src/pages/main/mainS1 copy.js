import React, { useState, useEffect } from "react";
import "../../css/main.css";
import "../../css/main_mobile.css";
const MainS1 = () => {
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
      setImgSrc("/images/mobile_main_s1_img.png");
    } else {
      setImgSrc("/images/main_s1_img.png");
    }
  }, [windowWidth]);
  return (
    <div className="main_s1">
      <div className="img_box">
        <img src={imgSrc} alt="" />
      </div>
      <div className="text_box pc">
        <p>안녕하십니까? 회계전문인력 매칭 플랫폼 회전문(會專門)입니다.</p>
        <p>
          <br />
          <span>회전문(會專門)</span>은<br />
          회계인력의 긴급한 필요와 경력단절 회계전문인을 연결하는 플랫폼입니다.
          <br />
          <br />
          갑작스럽게 회계인력을 필요로 하는 사업자(구인자)와
          <br />
          과거 회계·세무·총무 분야에 종사하다가 여러 가지 이유로 직장을 떠나{" "}
          <br />
          현재는 취업하고 있지 않지만, 짧은 시간 ( 일, 주, 월 등)
          <br />
          근로를 제공할 수 있는 인력을 연결하고자 합니다.
          <br />
          <br />
          일정기간 동안 임시직으로 복귀하였다가 사정이 허락하면
          <br />
          본격적으로 직장으로 복귀할 수 있는 준비가 될 수도 있습니다.
          <br />
          <br />
          회계일을 그만둔 지 시간이 많이 지난경우, 개정된 기업회계기준과 세법
          내용을
          <br />본 플랫폼에 등록되어 있는 동영상을 통해 알 수 있습니다.
        </p>
      </div>
      <div className="text_box mobile">
        <p>안녕하십니까? 회계전문인력 매칭 플랫폼 회전문(會專門)입니다.</p>
        <p>
          <br />
          <span>회전문(會專門)</span>은<br />
          회계인력의 긴급한 필요와
          <br />
          경력단절 회계전문인을 연결하는 플랫폼입니다.
          <br />
          <br />
          갑작스럽게 회계인력을 필요로 하는 사업자(구인자)와
          <br />
          현재는 취업하고 있지 않지만, 짧은 시간 (일, 주, 월 등)
          <br />
          근로를 제공할 수 있는 인력을 연결하고자 합니다.
        </p>
      </div>
    </div>
  );
};

export default MainS1;
