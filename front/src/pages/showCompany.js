import "../css/showCompany.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_CONCURRENCE_REQUEST } from "../reducers/matching";
const ShowCompany = ({ data, onClose }) => {
  const dispatch = useDispatch();
  const applicationId = data.applicationInfo.id;
  const { setConcurrenceDone } = useSelector((state) => state.matching);
  const sendConcurrence = (agreement) => {
    dispatch({
      type: SET_CONCURRENCE_REQUEST,
      data: { agreement, applicationId },
    });
    window.location.href = "/myPage";
  };
  useEffect(() => {
    if (setConcurrenceDone) {
      window.location.href = "/";
    }
  }, [setConcurrenceDone]);
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
              <p>사업장 형태</p>
              <p>사업장 소재지</p>
              <p>채용시기</p>
              <p>예상근무기간</p>
              <p>근무형태</p>
              <p>고용형태</p>
            </div>
            <div className="row row_content">
              <p>{data.businessInfo.business_member_officeState}</p>
              <p>{`${
                data.businessInfo.business_member_jibunAddress.split(" ")[0]
              } ${
                data.businessInfo.business_member_jibunAddress.split(" ")[1]
              }`}</p>
              <p>{`${data.applicationInfo.business_application_startYear}년 ${data.applicationInfo.business_application_startMonth}월`}</p>
              <p>{data.applicationInfo.business_application_expectPeriod}</p>
              <p>
                {data.applicationInfo.business_application_workPlace &&
                  {
                    "사업자 주소와 동일 (출근)": "출퇴근",
                    "재택 근무 가능": "재택",
                    "출근·재택 병행": "모두가능",
                  }[data.applicationInfo.business_application_workPlace]}
              </p>
              <p>{data.applicationInfo.business_application_employmentType}</p>
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
            <div
              className="btn"
              onClick={() => {
                sendConcurrence("거절");
                onClose();
              }}
            >
              거절
            </div>
            <div
              className="btn"
              onClick={() => {
                sendConcurrence("동의");
                onClose();
              }}
            >
              동의
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCompany;
