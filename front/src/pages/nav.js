import "../css/nav.css";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();

  const goPage = (path) => {
    navigate(path);
  };
  return (
    <div className="nav">
      <ul>
        <li
          onClick={() => {
            goPage("/matchingInfo");
          }}
        >
          회계전문인임시직매칭정보
        </li>
        <li
          onClick={() => {
            goPage("/process");
          }}
        >
          매칭프로세스
        </li>
        <li
          onClick={() => {
            goPage("/eduProgram");
          }}
        >
          교육프로그램
        </li>
        <li
          onClick={() => {
            goPage("/square");
          }}
        >
          일자리광장
        </li>
      </ul>
      {/* <ul>
        <li>이력서등록</li>
        <li>공고등록</li>
      </ul> */}
    </div>
  );
};

export default Nav;
