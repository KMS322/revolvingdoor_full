import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/signIn.css";
import "../../css/signIn_mobile.css";
const SignInComponent = () => {
  const navigate = useNavigate();
  const goPage = (path, type) => {
    navigate(path, { state: { type } });
  };
  return (
    <div className="signIn_s1">
      <div className="article_container">
        <div className="article">
          <div className="content_box">
            <p>어떤 일을 찾고 계신가요?</p>
            <div className="icon_box">
              <img src="/images/signIn_img1.png" alt="" />
              <img src="/images/signIn_img2.png" alt="" />
            </div>
          </div>
          <div
            className="btn_box"
            onClick={() => {
              goPage("/signStep1", "individual");
            }}
          >
            개인회원
          </div>
        </div>
        <div className="article">
          <div className="content_box">
            <p>어떤 인재가 필요하신가요?</p>
            <p>※ 개인사업자, 사업체직원 등</p>
          </div>
          <div
            className="btn_box"
            onClick={() => {
              goPage("/signBusinessStep1", "business");
            }}
          >
            기업회원
          </div>
        </div>
      </div>
      <p>© 2023 회전문</p>
    </div>
  );
};

export default SignInComponent;
