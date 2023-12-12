import "../../css/eduDetail.css";
import "../../css/eduDetail_mobile.css";
const EduDetailS1 = () => {
  return (
    <div className="eduDetail_s1">
      <div className="title_box">
        <div className="title">
          <img src="/images/edu_program_s1_img1.png" alt="" />
          <p>교육프로그램 > 개정세법요약정리</p>
        </div>
      </div>
      <div className="article_container">
        <div className="article">
          <img src="/images/eduDetail_s1_img1.jpg" alt="" />
          <p>개정세법요약정리1</p>
          <p>2023.09.09</p>
          <p>강의 정보</p>
          <div className="author">
            <div className="box">
              <img src="/images/eduDetail_s1_img2.png" alt="" />
              <p>강사 홍길동</p>
            </div>
            <div className="box">
              <img src="/images/eduDetail_s1_img3.png" alt="" />
              <p>강의시간 46분</p>
            </div>
          </div>
          <p>
            법인세율도 구간별로 각각 1%씩 세율이 인하가 되었습니다.
            <br />
            2023년 소득분부터 적용이 되고 2024년부터 법인세 인하가 적용이
            됩니다. <br />
            삼성전자가 이로 인해 몇천억 원의 세금이 줄어든다는 보도도
            있었습니다. 최근 반도체 시장이 매우 어려운데 경쟁력의 계기로
            <br />
            삼길 바랍니다.
            <br />
            종합부동산세 기본공제금은 1주택자는 11억 원에서 12억 원, 다주택자는
            6억 원에서 9억 원으로 기본공제금이 상향되었습니다.
            <br />
            부부공동명의로 1 주택을 보유하는 경우, 특례규정 적용해서 12억 원에서
            18억 원으로 올랐습니다.
            <br />
            주택임대소득 과세의 고가주택 기준을 올해부터 9억 원에서 12억으로
            상향이 되었습니다.
            <br />
            공시 가격으로 12억은 현재 시세로 17억 원 정도 되는 수준인데 이
            아파트를 월세로 줄 경우, 월세소득은 비과세 대상입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EduDetailS1;
