import "../css/showCompany.css";
import React from "react";

const ShowCompany = ({ data, onClose }) => {
  return (
    <div className="showCompany">
      <div className="article_container">
        <img src="/images/close_btn.png" alt="" onClick={onClose} />
        <div className="article">
          <p>귀하는 긴급하게 필요로 하는 인력 대상자로 선정되었습니다.</p>
          <p>사업장 현황은 다음과 같습니다.</p>
          <p>임시직 채용 안내</p>
          <div className="list_box">
            <div className="row row_head">
              <p>사업장명</p>
              <p>사업장 소재지</p>
              <p>채용시기</p>
              <p>예상근무기간</p>
              <p>근무형태</p>
              <p>대우</p>
            </div>
            <div className="row row_content">
              <p>회계사무소</p>
              <p>대구 동구</p>
              <p>2023.12.01</p>
              <p>30일이내</p>
              <p>모두가능</p>
              <p>협의 결정</p>
            </div>
          </div>
          <p>
            위 기업에서 일하기를 희망하는 경우 귀하의 인적사항을 상기 업체에
            제공하고
            <br />
          </p>
          상기업체에서 귀하에게 연락을 하여 직접 면접을 하도록 하겠습니다.
          <p>동의하십니까?</p>
          <div className="btn_box">
            <div className="btn">거절</div>
            <div className="btn">승인</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCompany;
