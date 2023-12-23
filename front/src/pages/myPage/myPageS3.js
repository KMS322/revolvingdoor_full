import { useNavigate } from "react-router-dom";
const MyPageS3 = () => {
  const navigate = useNavigate();

  const goPage = (path) => {
    navigate(path);
  };
  return (
    <div className="myPage_s3">
      <div className="article_container">
        <p>제안 관리</p>
        <div className="table_container">
          <div className="head_row row">
            <p className="pc">지역 / 근무지</p>
            <p>기업명 / 공고제목</p>
            <p>근무시간</p>
            <p>급여</p>
            <p>수락여부</p>
          </div>
          {/* <div
            className="content_row row end"
            onClick={() => {
              goPage("/infoDetail");
            }}
          >
            <p className="pc">경산시</p>
            <p>
              재택 가능한 임시직 보조 구인
              <br />
              <span>회전문</span>
            </p>
            <p>09:00~18:00</p>
            <p className="hour">
              <span>시급</span>
              <span className="mobile">
                <br />
              </span>
              &nbsp;12,000원
            </p>
            <div className="btn_reject">거절 완료</div>
          </div>
          <div
            className="content_row row end"
            onClick={() => {
              goPage("/infoDetail");
            }}
          >
            <p className="pc">경산시</p>
            <p>
              재택 가능한 임시직 보조 구인
              <br />
              <span>회전문</span>
            </p>
            <p>시간협의</p>
            <p className="day">
              <span>일급</span>
              <span className="mobile">
                <br />
              </span>
              &nbsp;83,000원
            </p>
            <div className="btn_accept">수락 완료</div>
          </div>
          <div
            className="content_row row"
            onClick={() => {
              goPage("/infoDetail");
            }}
          >
            <p className="pc">경산시</p>
            <p>
              재택 가능한 임시직 보조 구인
              <br />
              <span>회전문</span>
            </p>
            <p>09:00~18:00</p>
            <p className="month">
              <span>월급</span>
              <span className="mobile">
                <br />
              </span>
              &nbsp;2,020,000원
            </p>
            <div className="btn_box">
              <div className="btn">수락</div>
              <div className="btn">거절</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MyPageS3;
