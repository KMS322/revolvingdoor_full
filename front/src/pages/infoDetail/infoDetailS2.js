import "../../css/infoDetail.css";
const InfoDetailS2 = () => {
  return (
    <div className="info_detail_s2">
      <div className="section_container">
        <p>상세정보</p>
        <div className="article_container">
          <div className="article">
            <div className="text_box">
              <p>대표</p>
              <p>홍길동</p>
            </div>
            <div className="text_box">
              <p>조건</p>
              <p>회계 전문</p>
            </div>
            <div className="text_box">
              <p>기간</p>
              <p>3개월</p>
            </div>
            <div className="text_box">
              <p>시간</p>
              <p>
                09:00~18:00{" "}
                <span className="mobile">
                  <br />
                </span>
                (재택가능)
              </p>
            </div>
          </div>
          <div className="article">
            <div className="text_box">
              <p>급여</p>
              <p>12,000원 (시급)</p>
            </div>
            <div className="text_box">
              <p>위치</p>
              <p>경상북도 경산시</p>
            </div>
            <div className="text_box">
              <p>모집기간</p>
              <p>
                2023.08.08 00:00{" "}
                <span className="mobile">
                  <br />
                </span>
                ~ 2023.09.09 23:59
              </p>
            </div>
            <div className="text_box">
              <p>문의</p>
              <p>010-0000-0000</p>
            </div>
          </div>
        </div>
        <div className="btn_box">
          <div className="btn">목록으로</div>
          <div className="btn">지원하기</div>
        </div>
      </div>
    </div>
  );
};

export default InfoDetailS2;
