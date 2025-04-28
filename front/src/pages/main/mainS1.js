import React, { useState, useEffect } from "react";

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
          갑작스럽게 구인수요가 생긴 회계·세무법인 및 사무소에
          <br /> 회계전문인력을 긴급하게 임시직(Gig Work)으로 매칭해 주는
          플랫폼입니다.
          <br />
          회전문은 앱스피가 운영하는 플랫폼 이름입니다.
        </p>
        <div className="p_box">
          <p>구직자</p>
          <p>
            결혼, 출산, 육아 등 이유로 경력 단절된 종전 회계전문직 종사자들의
            기간제 근무,
            <br /> 단기간 회계·세무 전문 인적용역을 공급하고자 하는
            공인회계사·세무사
          </p>
        </div>
        <div className="p_box">
          <p>구인업체</p>
          <p>
            <span>①</span>&nbsp;회계법인 <span>&nbsp;②</span>&nbsp;세무법인{" "}
            <span>&nbsp;③</span>&nbsp; 공인회계사 사무실 <span>&nbsp;④</span>
            &nbsp;세무사 사무실 <span>&nbsp;⑤</span>&nbsp;기업 등
          </p>
        </div>
        <div className="p_box">
          <p>공급용역</p>
          <p>
            기장, 신고, 조정, 회계감사, 연구개발비 실사, 세무소자, 컨설팅 등
          </p>
        </div>
        <div className="p_box">
          <p>근무형태</p>
          <p>
            기간제 : 주간, 월 등 구인업체의 필요에 의함
            <br />근 무 : 출근 근무, 재택 근무, 출근·재택 병행{" "}
          </p>
        </div>
        <p className="add_text">구인, 구직에 관심 있으신 분이나 사무소에서는 회원가입후 로그인 하시고 My Page 에 등록해 주세요.</p>
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
        <p className="add_text">구인, 구직에 관심 있으신 분이나 사무소에서는 회원가입후 로그인 하시고 My Page 에 등록해 주세요.</p>
      </div>
    </div>
  );
};

export default MainS1;
