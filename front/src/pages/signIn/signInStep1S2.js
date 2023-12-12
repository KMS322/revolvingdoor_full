import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignInStep1S2 = () => {
  const navigate = useNavigate();
  const [check1, setCheck1] = useState(false);
  const [checkOff1, setCheckOff1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [checkOff2, setCheckOff2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [checkOff3, setCheckOff3] = useState(false);
  const bgColor = check1 && check2 && check3 ? "#CABD99" : "#b6b6b6";
  const cursor = check1 && check2 && check3 ? "pointer" : "";
  return (
    <div className="signin_step1_s2">
      <div className="article_container">
        <p>1. 개인정보 수집 · 이용에 동의하십니까?</p>
        <div className="check_box">
          <div className="check">
            <img
              src={
                check1
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              alt=""
              onClick={() => {
                setCheck1(!check1);
                setCheckOff1(false);
              }}
            />
            <p>동의</p>
          </div>
          <div className="check">
            <img
              src={
                checkOff1
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              alt=""
              onClick={() => {
                setCheckOff1(!checkOff1);
                setCheck1(false);
              }}
            />
            <p>동의하지 않음</p>
          </div>
        </div>
        <p>
          2. 적합한 구인 · 구직 알선을 위해 구인자에게 신청인의 구직정보를
          제공하는 것에 동의하십니까?
        </p>
        <div className="check_box">
          <div className="check">
            <img
              src={
                check2
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              alt=""
              onClick={() => {
                setCheck2(!check2);
                setCheckOff2(false);
              }}
            />
            <p>동의</p>
          </div>
          <div className="check">
            <img
              src={
                checkOff2
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              alt=""
              onClick={() => {
                setCheckOff2(!checkOff2);
                setCheck2(false);
              }}
            />
            <p>동의하지 않음</p>
          </div>
        </div>
        <p>
          3. 신청인의 구직정보를 본 플랫폼을 통해 공개하는 것에 대하여
          동의하십니까?
        </p>
        <div className="check_box">
          <div className="check">
            <img
              src={
                check3
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              alt=""
              onClick={() => {
                setCheck3(!check3);
                setCheckOff3(false);
              }}
            />
            <p>동의</p>
          </div>
          <div className="check">
            <img
              src={
                checkOff3
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              alt=""
              onClick={() => {
                setCheckOff3(!checkOff3);
                setCheck3(false);
              }}
            />
            <p>동의하지 않음</p>
          </div>
        </div>
      </div>
      <div
        className="btn"
        style={{ backgroundColor: bgColor, cursor: cursor }}
        onClick={() => {
          if (check1 && check2 && check3) {
            navigate("/signStep2");
          }
        }}
      >
        다음
      </div>
    </div>
  );
};

export default SignInStep1S2;
