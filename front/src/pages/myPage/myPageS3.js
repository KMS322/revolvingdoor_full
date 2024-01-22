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
                  <p>
                    재택 가능한 임시직 보조 구인
                    <br />
                    <span>회전문</span>
                  </p>
                  <p>09:00~18:00</p>
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
                      setShowList(true);
                    }}
                  >
                    상세 확인
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
