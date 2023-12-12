import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dates, sortings, condition_details } from "./selectDatas2";
import "../../css/matchingInfo.css";
import "../../css/matchingInfo_mobile.css";
const MatchingS3 = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSorting, setSelectedSorting] = useState("");
  const [selectedConditionDetail, setSelectedConditionDetail] = useState("");
  const handleSelect = (event) => {
    if (event.target.name === "date") {
      setSelectedDate(event.target.name);
    } else if (event.target.name === "sorting") {
      setSelectedSorting(event.target.name);
    } else if (event.target.name === "condition_detail") {
      setSelectedConditionDetail(event.target.name);
    }
  };

  const goPage = (path) => {
    navigate(path);
  };
  return (
    <div className="matching_s3">
      <div className="section_container">
        <div className="box_container">
          <p>채용정보 한눈에 보기</p>
          <div className="select_box">
            <select name="date" value={selectedDate} onChange={handleSelect}>
              {dates.map((date) => (
                <option key={date.value} value={date.value} className="option">
                  {date.label}
                </option>
              ))}
            </select>
            <select
              name="sorting"
              value={selectedSorting}
              onChange={handleSelect}
            >
              {sortings.map((sorting) => (
                <option
                  key={sorting.value}
                  value={sorting.value}
                  className="option"
                >
                  {sorting.label}
                </option>
              ))}
            </select>
            <select
              name="condition_detail"
              value={selectedConditionDetail}
              onChange={handleSelect}
            >
              {condition_details.map((condition_detail) => (
                <option
                  key={condition_detail.value}
                  value={condition_detail.value}
                  className="option"
                >
                  {condition_detail.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="table_container">
          <div className="head_row row">
            <p>
              지역
              <span
                style={{ color: "#333333", fontWeight: "Bold" }}
                className="mobile"
              >
                / 근무지
              </span>
            </p>
            <p>기업명 / 공고제목</p>
            <p>근무시간</p>
            <p>급여</p>
            <p className="pc">등록일</p>
          </div>
          <div
            className="content_row row"
            onClick={() => {
              goPage("/infoDetail");
            }}
          >
            <p>
              경산시
              <br />
              <span className="mobile">1분전</span>
            </p>
            <p>
              재택 가능한 임시직 보조 구인
              <br />
              <span>회전문</span>
            </p>
            <p>
              09:00
              <span className="mobile">
                <br />
              </span>
              ~18:00
            </p>
            <p className="hour">
              <span>시급</span>
              <span className="mobile">
                <br />
              </span>{" "}
              12,000원
            </p>
            <p className="pc">1분전</p>
          </div>
          <div
            className="content_row row"
            onClick={() => {
              goPage("/infoDetail");
            }}
          >
            <p>
              경산시 <br />
              <span className="mobile">1분전</span>
            </p>
            <p>
              재택 가능한 임시직 보조 구인
              <br />
              <span>회전문</span>
            </p>
            <p>시간협의</p>
            <p className="day">
              <span>일급</span>
              <span className="mobile">
                <br />
              </span>{" "}
              83,000원
            </p>
            <p className="pc">1분전</p>
          </div>
          <div
            className="content_row row"
            onClick={() => {
              goPage("/infoDetail");
            }}
          >
            <p>
              경산시 <br />
              <span className="mobile">1분전</span>
            </p>
            <p>
              재택 가능한 임시직 보조 구인
              <br />
              <span>회전문</span>
            </p>
            <p>
              09:00{" "}
              <span className="mobile">
                <br />
              </span>
              ~18:00
            </p>
            <p className="month">
              <span>월급</span>{" "}
              <span className="mobile">
                <br />
              </span>
              2,020,000원
            </p>
            <p className="pc">5분전</p>
          </div>
          <div
            className="content_row row"
            onClick={() => {
              goPage("/infoDetail");
            }}
          >
            <p>
              경산시 <br />
              <span className="mobile">1분전</span>
            </p>
            <p>
              재택 가능한 임시직 보조 구인
              <br />
              <span>회전문</span>
            </p>
            <p>-</p>
            <p className="day">
              <span>일급</span>{" "}
              <span className="mobile">
                <br />
              </span>
              83,000원
            </p>
            <p className="pc">10분전</p>
          </div>
          <div
            className="content_row row"
            onClick={() => {
              goPage("/infoDetail");
            }}
          >
            <p>
              경산시 <br />
              <span className="mobile">1분전</span>
            </p>
            <p>
              재택 가능한 임시직 보조 구인
              <br />
              <span>회전문</span>
            </p>
            <p>시간협의</p>
            <p className="hour">
              <span>시급</span>
              <span className="mobile">
                <br />
              </span>{" "}
              12,000원
            </p>
            <p className="pc">12분전</p>
          </div>
        </div>
        <div className="page_num">
          <p>1</p>
        </div>
      </div>
    </div>
  );
};

export default MatchingS3;
