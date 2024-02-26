import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import "../../css/matchingInfo.css";
import "../../css/matchingInfo_mobile.css";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_ALL_APPLICATIONS_REQUEST } from "../../reducers/businessApplication";
const MatchingS3 = () => {
  const dispatch = useDispatch();
  const { allApplications } = useSelector((state) => state.businessApplication);

  const removeDuplicatesById = (allApplications) => {
    if (!allApplications || !Array.isArray(allApplications)) {
      return [];
    }
    const uniqueApplications = [];
    const existingIds = [];

    for (const application of allApplications) {
      if (
        application &&
        application.application.id &&
        !existingIds.includes(application.application.id)
      ) {
        uniqueApplications.push(application);
        existingIds.push(application.application.id);
      }
    }

    return uniqueApplications;
  };

  const uniqueApplications = removeDuplicatesById(allApplications);
  const groupedApplications = [];
  for (let i = 0; i < uniqueApplications.length; i += 5) {
    groupedApplications.push(uniqueApplications.slice(i, i + 5));
  }

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch({
      type: LOAD_ALL_APPLICATIONS_REQUEST,
    });
  }, []);
  return (
    <div className="matching_s3">
      <div className="section_container">
        <div className="box_container">
          <p>채용정보 한눈에 보기</p>
        </div>
        <div className="table_container">
          <div className="head_row row">
            <p>지역</p>
            <p>공고제목</p>
            <p>사업자형태</p>
            <p>근무시작시기</p>
            <p>근무형태</p>
            <p>등록일</p>
          </div>
          {groupedApplications &&
            groupedApplications.length > 0 &&
            groupedApplications[currentPage].map((data, index) => {
              let workType = "";
              if (
                data.application.business_application_workPlace ===
                "사업자 주소와 동일 (출근)"
              ) {
                workType = "출퇴근";
              } else if (
                data.application.business_application_workPlace ===
                "재택 근무 가능"
              ) {
                workType = "재택근무";
              } else if (
                data.application.business_application_workPlace ===
                "출근·재택 병행"
              ) {
                workType = "출퇴근 + 재택";
              }
              return (
                <div className="content_row row" key={index}>
                  <p>
                    {
                      data.userBusiness.business_member_jibunAddress.split(
                        " "
                      )[0]
                    }
                  </p>
                  <p>{data.application.business_application_name}</p>
                  <p>{data.userBusiness.business_member_companyState}</p>
                  <p>
                    {data.application.business_application_startYear}-
                    {data.application.business_application_startMonth}-
                    {data.application.business_application_startDay}
                  </p>
                  <p>{workType}</p>
                  <p>
                    {dayjs(data.application.updatedAt).format("YYYY-MM-DD")}
                  </p>
                </div>
              );
            })}
        </div>
        <div className="page_num">
          {groupedApplications.map((page, index) => {
            return (
              <p
                onClick={() => {
                  setCurrentPage(index);
                }}
                key={index}
                style={{ color: currentPage === index ? "#CABD99" : "" }}
              >
                {index + 1}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MatchingS3;
