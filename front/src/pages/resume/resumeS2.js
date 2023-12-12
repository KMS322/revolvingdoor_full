import "../../css/resume.css";
const ResumeS2 = () => {
  return (
    <div className="resume_s2">
      <div className="article_container">
        <div className="article1">
          <p>이력서 제목</p>
          <div className="input_box">
            <input />
          </div>
        </div>
        <div className="article2">
          <p>학력사항</p>
          <div className="input_box">
            <p>최종학력</p>
            <input />
            <input />
          </div>
        </div>
        <div className="article3">
          <div className="title_box">
            <p>경력</p>
            <div className="title_btn">신입</div>
            <div className="title_btn">경력</div>
          </div>
          <div className="input_box_container">
            <div className="input_box">
              <p>업체명</p>
              <input />
            </div>
            <div className="input_box">
              <p>근무경력</p>
              <input />
              <p>년</p>
              <input />
              <p>개월</p>
              <div className="input_btn">기업</div>
              <div className="input_btn">회계사 사무</div>
              <div className="input_btn">세무사 사무</div>
            </div>
            <div className="input_box">
              <p>사업장 형태</p>
              <img src="/images/signInForm_s1_img2.png" alt="" />
              <p>개인</p>
              <img src="/images/signInForm_s1_img1.png" alt="" />
              <p>법인</p>
              <p>업태</p>
              <div className="input_btn">제조업</div>
              <div className="input_btn">도소매</div>
            </div>
          </div>
          <div className="text_box">
            <p>경력기술서</p>
            <input />
          </div>
        </div>
        <div className="article4">
          <p>자기소개서</p>
          <div className="title_box">
            <p>제목</p>
            <input />
          </div>
          <input />
        </div>
        <div className="article5">
          <div className="btn">취소</div>
          <div className="btn">저장</div>
        </div>
      </div>
    </div>
  );
};

export default ResumeS2;
