import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignInStep1S2 = (props) => {
  const { type } = props;
  const navigate = useNavigate();
  const [check1, setCheck1] = useState(false);
  const [checkOff1, setCheckOff1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [checkOff2, setCheckOff2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [checkOff3, setCheckOff3] = useState("");
  const bgColor = check1 && check2 && check3 ? "#CABD99" : "#b6b6b6";
  const cursor = check1 && check2 && check3 ? "pointer" : "";
  return (
    <div className="signin_business_step1_s2">
      <div className="article_container">
        <p>
          1. 적합한 구인/구직 알선을 위해 구직자에게 신청인의 구인정보를
          제공하는 것에 동의 하십니까?
        </p>
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
          2. 신청인의 구인정보(비실명)를 본 플랫폼을 통해 공개하는 것에 대하여
          동의하십니까?
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
        <p>3. 본 회전문 사이트에 어떤 형태의 가입을 원하십니까?</p>
        <div className="check_box check_box_column">
          <div className="check">
            <img
              src={
                checkOff3 === "연간"
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              alt=""
              onClick={() => {
                setCheck3(true);
                setCheckOff3("연간");
              }}
            />
            <p>년간 회원으로 가입하고, 무제한 추천 이용 (년간 : 25만원)</p>
          </div>
          <div className="check">
            <img
              src={
                checkOff3 === "건당"
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              alt=""
              onClick={() => {
                setCheckOff3("건당");
                setCheck3(true);
              }}
            />
            <p>
              필요할 때 수수료를 지급하고 이용 (회당 : 20만원, 실제 추천 받을 때
              결제)
            </p>
          </div>
        </div>
      </div>
      <div className="table_box">
            <div className="row">
              <p>회원의 형태</p>
              <p>회비</p>
              <p>자격</p>
              <p>비고</p>
            </div>
            <div className="row">
              <p>일반회원</p>
              <p>20만원</p>
              <p>1회 이용</p>
              <p>연간회원으로 전환가능(차액 결제, 단 연말까지 유효)</p>
            </div>
            <div className="row">
              <p>연간회원</p>
              <p>25만원</p>
              <p>연간 무제한</p>
              <p>회비 납입일로부터 1년간 연간회원자격</p>
            </div>
          </div>
      <div
        className="btn"
        style={{ backgroundColor: bgColor, cursor: cursor }}
        onClick={() => {
          if (check1 && check2 && check3) {
            navigate("/signBusinessStep2", { state: { type } });
          }
        }}
      >
        다음
      </div>
    </div>
  );
};

export default SignInStep1S2;
