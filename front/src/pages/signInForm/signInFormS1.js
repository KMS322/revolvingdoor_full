import React, { useState } from "react";
import "../../css/signInForm.css";
import "../../css/signInForm_mobile.css";

const SignInFormS1 = () => {
  const [checkStateAll, setCheckStateAll] = useState(false);
  const [checkStateNec1, setCheckStateNec1] = useState(false);
  const [checkStateNec2, setCheckStateNec2] = useState(false);
  const [checkStateNec3, setCheckStateNec3] = useState(false);
  const [checkStateUnNec1, setCheckStateUnNec1] = useState(false);
  const [checkStateUnNec2, setCheckStateUnNec2] = useState(false);

  const changeState = () => {
    setCheckStateAll(!checkStateAll);
    setCheckStateNec1(!checkStateAll);
    setCheckStateNec2(!checkStateAll);
    setCheckStateNec3(!checkStateAll);
  };
  const changeState1 = () => {
    setCheckStateNec1(!checkStateNec1);
    setCheckStateAll(checkStateNec2 && checkStateNec3 && !checkStateNec1);
  };

  const changeState2 = () => {
    setCheckStateNec2(!checkStateNec2);
    setCheckStateAll(checkStateNec1 && checkStateNec3 && !checkStateNec2);
  };

  const changeState3 = () => {
    setCheckStateNec3(!checkStateNec3);
    setCheckStateAll(checkStateNec1 && checkStateNec2 && !checkStateNec3);
  };
  const changeState4 = () => {
    setCheckStateUnNec1(!checkStateUnNec1);
  };
  const changeState5 = () => {
    setCheckStateUnNec2(!checkStateUnNec2);
  };

  return (
    <div className="signInForm_s1">
      <div className="checkBox_container">
        <div className="check_box_all">
          <div className="check_box">
            <img
              src={
                checkStateAll === true
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              alt=""
              onClick={changeState}
            />
            <p>전체 이용약관에 동의</p>
          </div>
        </div>
        <div className="check_box_nec">
          <div className="check_box">
            <img
              src={
                checkStateNec1 === true
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              onClick={changeState1}
              alt=""
            />
            <p>[필수] 만 15세 이상입니다.</p>
          </div>
          <div className="check_box">
            <img
              src={
                checkStateNec2 === true
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              onClick={changeState2}
              alt=""
            />
            <p>[필수] 서비스 이용약관동의</p>
          </div>
          <div className="check_box">
            <img
              src={
                checkStateNec3 === true
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              onClick={changeState3}
              alt=""
            />
            <p>[필수] 개인정보 수집 및 이용 동의</p>
          </div>
        </div>
        <div className="check_box_unNec">
          <div className="check_box">
            <img
              src={
                checkStateUnNec1 === true
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              onClick={changeState4}
              alt=""
            />
            <p>[선택] 개인정보수집 및 이용 동의-마케팅</p>
          </div>
          <div className="check_box">
            <img
              src={
                checkStateUnNec2 === true
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              onClick={changeState5}
              alt=""
            />
            <p>[선택] 광고성 정보 이메일/SMS 수신 동의</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInFormS1;
