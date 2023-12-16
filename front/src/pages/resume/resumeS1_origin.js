import "../../css/resume.css";
import "../../css/resume_mobile.css";
import { useSelector } from "react-redux";
const ResumeS1 = () => {
  const { me } = useSelector((state) => state.user);
  return (
    <div className="resume_s1">
      <div className="article_container">
        <div className="img_box">
          <img src="/images/resume_s1_img.png" alt="" />
        </div>
        <div className="article">
          <div className="title_box">
            <p>{me.user_member_id}</p>
            <div className="career">공인회계사</div>
          </div>
          <p>남자 00세 / 0000년생</p>
          <div className="text_container">
            <div className="text_box">
              <p>주소</p>
              <p>000도 00시 00구 0000로 000 (000동 0000호)</p>
            </div>
            <div className="text_box">
              <p>이메일</p>
              <p>000*****@naver.com</p>
            </div>
            <div className="text_box">
              <p>연락처</p>
              <p>010-0000-0000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeS1;
