import "../../css/matchingInfo.css";
import "../../css/matchingInfo_mobile.css";
const MatchingS1 = () => {
  return (
    <div className="matchingInfo_s1">
      <div className="section_container">
        <p className="title">구인요청 등록 현황</p>
        <div className="article_container container1">
          <div className="article">
            <p>전체 채용정보</p>
            <p>
              <span>241,220</span> 건
            </p>
          </div>
          <div className="article">
            <p>온라인 채용정보</p>
            <p>
              <span>158,782</span> 건
            </p>
          </div>
        </div>

        <p className="title">회원 현황</p>
        <div className="article_container container2">
          <div className="article">
            <p>기간회원 현황</p>
            <p>
              <span>65,773</span> 곳
            </p>
          </div>
          <div className="article">
            <p>회계전문인력 현황</p>
            <p>
              <span>161,565</span> 명
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchingS1;
