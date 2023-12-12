import "../../css/resume.css";
const ResumeS3 = () => {
  return (
    <div className="resume_s3">
      <div className="line_box"></div>
      <div className="article_container">
        <div className="article1">
          <div className="text_box">
            <p>
              <span>홍길동</span>님, 기업으로부터 제안을 받으시겠습니까?
            </p>
            <p>
              이력서가 공개되며, 기업으로부터 제의를 받을 수 있습니다.
              <br />
              제안을 받을 경우, 수락하기 전까지 채용담당자에게 연락처가 공개되지
              않습니다.
            </p>
          </div>
          <div className="btn_box">
            <div className="btn">아니요</div>
            <div className="btn">예</div>
          </div>
        </div>
        <div className="article2">
          <div className="input_box_container">
            <div className="input_box">
              <p>희망 근무기간</p>
              <div className="input_box_container_01">
                <div className="input_box_01">
                  <input />
                  <p>개월</p>
                </div>
                <div className="input_box_01">
                  <input />
                  <p>주</p>
                </div>
                <div className="input_box_01">
                  <input />
                  <p>일</p>
                </div>
              </div>
            </div>
            <div className="input_box">
              <p>희망 근무형태</p>
              <div className="input_box_container_01">
                <div className="input_box_01">
                  <img src="/images/signInForm_s1_img1.png" alt="" />
                  <p>개인</p>
                </div>
                <div className="input_box_01">
                  <img src="/images/signInForm_s1_img1.png" alt="" />
                  <p>출근</p>
                </div>
              </div>
            </div>
            <div className="input_box">
              <p>희망 보수</p>
              <div className="input_box_container_01">
                <div className="input_box_01">
                  <input />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn_box">
          <div className="btn">취소</div>
          <div className="btn">이력서 저장</div>
        </div>
      </div>
      <div className="text_box">© 2023 회전문</div>
    </div>
  );
};

export default ResumeS3;
