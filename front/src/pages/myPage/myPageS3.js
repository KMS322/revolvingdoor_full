import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CONNECTED_COMPANIES_REQUEST } from "../../reducers/matching";
import ShowCompany from "../showCompany";
const MyPageS3 = () => {
  const dispatch = useDispatch();
  const { connectedCompanies } = useSelector((state) => state.matching);
  const removeDuplicatesById = (connectedCompanies) => {
    if (!connectedCompanies || !Array.isArray(connectedCompanies)) {
      return [];
    }
    const uniqueCompanies = [];
    const existingIds = [];

    for (const company of connectedCompanies) {
      if (
        company &&
        company.businessInfo.id &&
        !existingIds.includes(company.businessInfo.id)
      ) {
        uniqueCompanies.push(company);
        existingIds.push(company.businessInfo.id);
      }
    }

    return uniqueCompanies;
  };

  const uniqueCompanies = removeDuplicatesById(connectedCompanies);
  console.log("uniqueCompanies : ", uniqueCompanies);
  useEffect(() => {
    dispatch({
      type: CONNECTED_COMPANIES_REQUEST,
    });
  }, []);

  const [showList, setShowList] = useState(false);
  const closePopup = () => {
    setShowList(false);
  };
  const [sendData, setSendData] = useState();
  return (
    <div className="myPage_s3">
      <div className="article_container">
        <p>제안 관리</p>
        <div className="table_container">
          <div className="head_row row">
            <p className="pc">지역 / 근무지</p>
            <p>공고제목</p>
            <p>근무시간</p>
            <p>급여</p>
            <p>수락여부</p>
          </div>
          {uniqueCompanies &&
            uniqueCompanies.map((company, index) => {
              return (
                <div className="content_row row" key={index}>
                  <p className="pc">
                    {company.businessInfo.business_member_jibunAddress}
                  </p>
                  <p>{company.applicationInfo.business_application_name}</p>
                  <p>{`${
                    company.applicationInfo
                      .business_application_workTime1Hour === null
                      ? "00"
                      : company.applicationInfo
                          .business_application_workTime1Hour
                  }:${
                    company.applicationInfo
                      .business_application_workTime1Minute === null
                      ? "00"
                      : company.applicationInfo
                          .business_application_workTime1Minute
                  } ~ ${
                    company.applicationInfo
                      .business_application_workTime2Hour === null
                      ? "00"
                      : company.applicationInfo
                          .business_application_workTime2Hour
                  }:${
                    company.applicationInfo
                      .business_application_workTime2Minute === null
                      ? "00"
                      : company.applicationInfo
                          .business_application_workTime2Minute
                  }`}</p>
                  <p className="hour">
                    <span>시급</span>
                    <span className="mobile">
                      <br />
                    </span>
                    &nbsp;12,000원
                  </p>
                  <div
                    className="btn"
                    onClick={() => {
                      if (company.connectedInfo.concurrence === "대기") {
                        setShowList(true);
                        setSendData(company);
                      }
                    }}
                    style={{
                      backgroundColor:
                        company.connectedInfo.concurrence &&
                        {
                          대기: "#cabd99",
                          동의: "#cabd99",
                          거절: "#b6b6b6",
                        }[company.connectedInfo.concurrence],
                      cursor:
                        company.connectedInfo.concurrence === "대기"
                          ? "pointer"
                          : "auto",
                    }}
                  >
                    {company.connectedInfo.concurrence &&
                      {
                        대기: "상세 확인",
                        동의: "동의",
                        거절: "거절",
                      }[company.connectedInfo.concurrence]}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {showList && <ShowCompany onClose={closePopup} data={sendData} />}
    </div>
  );
};

export default MyPageS3;
