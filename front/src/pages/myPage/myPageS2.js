import { useNavigate } from "react-router-dom";
import "../../css/myPage.css";
import "../../css/myPage_mobile.css";
const MyPageS2 = () => {
  const navigate = useNavigate();

  const goPage = (path) => {
    navigate(path);
  };
  return (
    <div className="myPage_s2">
      <div className="article_container">
        <div className="box_container">
          <p>이력서 관리</p>
          <div
            className="btn_box"
            onClick={() => {
              navigate("/resume");
            }}
          >
            신규 이력서 작성
          </div>
        </div>
        <div className="table_container">
          <div className="head_row row">
            <p className="pc">지역 / 근무지</p>
            <p>이력서 제목</p>
            <p>최종 수정일</p>
            <p>지원여부</p>
            <p>관리</p>
          </div>
          <div
            className="content_row row"
            onClick={() => {
              goPage("/infoDetail");
            }}
          >
            <p className="pc">경산시</p>
            <p>
              출근 가능한 임시직 인재
              <br />
              <span>회계전문자격자</span>
            </p>
            <p>2023-09-20</p>
            <p className="state1">비공개 상태</p>
            <div className="manage_box">
              <div className="manage">수정</div>
              <div className="manage">삭제</div>
            </div>
          </div>
          <div
            className="content_row row"
            onClick={() => {
              goPage("/infoDetail");
            }}
          >
            <p className="pc">경산시</p>
            <p>
              출근 가능한 임시직 인재
              <br />
              <span>회계전문자격자</span>
            </p>
            <p>2023-09-20</p>
            <p className="state2">제출완료</p>
            <div className="manage_box">
              <div className="manage">수정</div>
              <div className="manage">삭제</div>
            </div>
          </div>
          <div
            className="content_row row"
            onClick={() => {
              goPage("/infoDetail");
            }}
          >
            <p className="pc">경산시</p>
            <p>
              출근 가능한 임시직 인재
              <br />
              <span>회계전문자격자</span>
            </p>
            <p>2023-09-20</p>
            <p className="state3">공개모집중</p>
            <div className="manage_box">
              <div className="manage">수정</div>
              <div className="manage">삭제</div>
            </div>
          </div>
          <div
            className="content_row row"
            onClick={() => {
              goPage("/infoDetail");
            }}
          >
            <p className="pc">경산시</p>
            <p>
              출근 가능한 임시직 인재
              <br />
              <span>회계전문자격자</span>
            </p>
            <p>2023-09-20</p>
            <p className="state3">공개모집중</p>
            <div className="manage_box">
              <div className="manage">수정</div>
              <div className="manage">삭제</div>
            </div>
          </div>
          <div
            className="content_row row"
            onClick={() => {
              goPage("/infoDetail");
            }}
          >
            <p className="pc">경산시</p>
            <p>
              출근 가능한 임시직 인재
              <br />
              <span className="span">회계전문자격자</span>
            </p>
            <p>2023-09-20</p>
            <p className="state3">공개모집중</p>
            <div className="manage_box">
              <div className="manage">수정</div>
              <div className="manage">삭제</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageS2;
