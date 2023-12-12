import Banner from "../banner";
import "../../css/process.css";
import "../../css/process_mobile.css";
import Nav from "../nav";
const ProcessComponent = () => {
  return (
    <>
      <Nav />
      <Banner />
      <div className="process_s1">
        <div className="title_box">
          <div className="title">
            <img src="/images/process_s1_img1.png" alt="" />
            <p>매칭프로세스</p>
          </div>
        </div>
        <div className="article_container">
          <img src="/images/process_s1_img2.jpg" alt="" />
          <div className="text_box">
            <p>
              매칭 프로세스{" "}
              <span className="mobile">
                <br />
              </span>
              <span>(구직자·구인자 매칭 알고리즘)</span>
            </p>
            <p className="pc">
              1. 인공지능 이용 매칭 : 채용공고와 이력서의 텍스트 데이터를
              전처리하여
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;분석에 적합한 형태로 변환하는 등 인공지능
              매칭 알고리즘 수행하여 매칭결과를 도출함.
              <br />
              2. 매칭 진행현황 알림기능
              <br />
              3. 전과정 자동화
              <br />
              4. 구인자·구직자와 플랫폼 운영자 메시지 송수신 기능
              <br />
              5. 채용공고 및 이력서 검색 : 플렛폼내·외
              <br />
              6. 관리자 통계 및 분석기능
            </p>
            <p className="mobile">
              1. 인공지능 이용 매칭 : 채용공고와 이력서의 텍스트 데이터를
              전처리하여 분석에 적합한 형태로 변환하는 등 인공지능 매칭 알고리즘
              수행하여 매칭결과를 도출함.
              <br />
              2. 매칭 진행현황 알림기능
              <br />
              3. 전과정 자동화
              <br />
              4. 구인자·구직자와 플랫폼 운영자 메시지 송수신 기능
              <br />
              5. 채용공고 및 이력서 검색 : 플렛폼내·외
              <br />
              6. 관리자 통계 및 분석기능
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessComponent;
