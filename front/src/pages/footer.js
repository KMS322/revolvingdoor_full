import "../css/footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="article_container">
        <img src="/images/logo_footer.png" alt="" />
        <div className="text_box">
          <p>
            © 2023 회전문
            <br />
            대표 : 000 ㅣ 사업자등록번호 : 000-00-00000 ㅣ 주소 : 00시 00구
            000로 00빌딩 000
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
