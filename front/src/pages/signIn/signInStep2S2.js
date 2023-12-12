import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignInStep2S2 = () => {
  const navigate = useNavigate();
  const [checked1_1, setChecked1_1] = useState(false);
  const [checked1_2, setChecked1_2] = useState(false);
  const [checked2_1, setChecked2_1] = useState(false);
  const [checked2_2, setChecked2_2] = useState(false);
  const [checked2_3, setChecked2_3] = useState(false);
  const [checked2_4, setChecked2_4] = useState(false);
  const [checked3_1, setChecked3_1] = useState(false);
  const [checked3_2, setChecked3_2] = useState(false);
  const [checked3_3, setChecked3_3] = useState(false);
  const [checked3_4, setChecked3_4] = useState(false);
  const [checked3_5, setChecked3_5] = useState(false);
  const [checked4_1, setChecked4_1] = useState(false);
  const [checked4_2, setChecked4_2] = useState(false);
  return (
    <div className="signin_step2_s2">
      <div className="article_container">
        <p>1. 임시직 취업 이후 상용직 근로를 희망하는지 여부</p>
        <div className="check_box">
          <div className="check">
            <img
              src={
                checked1_1 === true
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              alt=""
              onClick={() => {
                setChecked1_1(!checked1_1);
                setChecked1_2(false);
              }}
            />
            <p>희망</p>
          </div>
          <div className="check">
            <img
              src={
                checked1_2 === true
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              alt=""
              onClick={() => {
                setChecked1_2(!checked1_2);
                setChecked1_1(false);
              }}
            />
            <p>희망하지 않음</p>
          </div>
        </div>
        <p>2. 임시직 구직신청의 목적 (이유)</p>
        <div className="check_box">
          <div className="check">
            <img
              src={
                checked2_1
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              alt=""
              onClick={() => {
                setChecked2_1(!checked2_1);
              }}
            />
            <p>경제적 이유</p>
          </div>
          <div className="check">
            <img
              src={
                checked2_2
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              alt=""
              onClick={() => {
                setChecked2_2(!checked2_2);
              }}
            />
            <p>취업일선복귀 전단계</p>
          </div>
          <div className="check">
            <img
              src={
                checked2_3
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              alt=""
              onClick={() => {
                setChecked2_3(!checked2_3);
              }}
            />
            <p>여가시간 활용</p>
          </div>
          <div className="check">
            <img
              src={
                checked2_4
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              alt=""
              onClick={() => {
                setChecked2_4(!checked2_4);
              }}
            />
            <p>기타</p>
          </div>
        </div>
        <p>3. 본 사이트를 알게된 경로</p>
        <div className="check_box">
          <div className="check">
            <img
              src={
                checked3_1
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              alt=""
              onClick={() => {
                setChecked3_1(!checked3_1);
              }}
            />
            <p>광고</p>
          </div>
          <div className="check">
            <img
              src={
                checked3_2
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              alt=""
              onClick={() => {
                setChecked3_2(!checked3_2);
              }}
            />
            <p>SNS</p>
          </div>
          <div className="check">
            <img
              src={
                checked3_3
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              alt=""
              onClick={() => {
                setChecked3_3(!checked3_3);
              }}
            />
            <p>인터넷 검색</p>
          </div>
          <div className="check">
            <img
              src={
                checked3_4
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              alt=""
              onClick={() => {
                setChecked3_4(!checked3_4);
              }}
            />
            <p>지인의 추천</p>
          </div>
          <div className="check">
            <img
              src={
                checked3_5
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              alt=""
              onClick={() => {
                setChecked3_5(!checked3_5);
              }}
            />
            <p>기타</p>
          </div>
        </div>
        <p>
          4. 회계기준이나 세법의 변경에 관한 요약 인터넷 강의를 듣기를
          희망합니까?
        </p>
        <div className="check_box">
          <div className="check">
            <img
              src={
                checked4_1
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              alt=""
              onClick={() => {
                setChecked4_1(!checked4_1);
                setChecked4_2(false);
              }}
            />
            <p>예</p>
          </div>
          <div className="check">
            <img
              src={
                checked4_2
                  ? "/images/signInForm_s1_img2.png"
                  : "/images/signInForm_s1_img1.png"
              }
              alt=""
              onClick={() => {
                setChecked4_2(!checked4_2);
                setChecked4_1(false);
              }}
            />
            <p>아니오</p>
          </div>
        </div>
      </div>
      <div
        className="btn"
        onClick={() => {
          navigate("/signStep3");
        }}
      >
        다음
      </div>
    </div>
  );
};

export default SignInStep2S2;
