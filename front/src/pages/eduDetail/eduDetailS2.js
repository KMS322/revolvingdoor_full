import { useNavigate } from "react-router-dom";
import "../../css/eduDetail.css";
const EduDetailS2 = () => {
  const navigate = useNavigate();

  const goPage = (path) => {
    navigate(path);
  };
  return (
    <div className="eduDetail_s2">
      <div className="article_container">
        <div className="title_box">
          <p>다음 강의</p>
          <p
            onClick={() => {
              goPage("/eduProgram");
            }}
          >
            목록으로
          </p>
        </div>
        <div className="article_box">
          <div className="article">
            <img src="/images/eduDetail_s2_img1.jpg" alt="" />
            <p>개정세법요약정리1</p>
            <p>2023.09.09</p>
          </div>
          <div className="article">
            <img src="/images/eduDetail_s2_img2.jpg" alt="" />
            <p>개정세법요약정리2</p>
            <p>2023.09.09</p>
          </div>
          <div className="article">
            <img src="/images/eduDetail_s2_img3.jpg" alt="" />
            <p>개정세법요약정리3</p>
            <p>2023.09.09</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EduDetailS2;
