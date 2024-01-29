import "../css/footer.css";
import React from "react";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="article_container">
        <img
          src="/images/logo_footer.png"
          alt=""
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="text_box">
          <p>
            © 2023 회전문
            <br />
            대표 : 서보욱 ㅣ 사업자등록번호 : 808-27-01583 ㅣ 주소 : 경상북도
            경산시 하양읍 하양로 13-13, 2층 210호
            <br />
            통신판매업 신고번호 : 0000-0000-0000호 ㅣ 직업정보제공사업 신고번호
            : 00청 제0000호-00호 ㅣ 유료직업소개업 등록번호 :
            제0000-0000000-00-0-00000호ㅣ사업자정보확인
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
