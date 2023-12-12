import React, { useState } from "react";
import {
  regions,
  region_details,
  period_years,
  period_months,
  period_weeks,
  period_days,
  conditions,
  condition_details,
} from "./selectDatas";
import "../../css/matchingInfo.css";
import "../../css/matchingInfo_mobile.css";
const MatchingS2 = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedRegionDetail, setSelectedRegionDetail] = useState(
    region_details.init
  );
  const [selectedCity, setSelectedCity] = useState("init");
  const [selectedPeriodYear, setSelectedPeriodYear] = useState("");
  const [selectedPeriodMonth, setSelectedPeriodMonth] = useState("");
  const [selectedPeriodWeek, setSelectedPeriodWeek] = useState("");
  const [selectedPeriodDay, setSelectedPeriodDay] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");
  const [selectedConditionDetail, setSelectedConditionDetail] = useState("");

  const handleSelectRegion = (event) => {
    setSelectedCity(event.target.value);
    setSelectedRegion(event.target.value);
    const detail = region_details[event.target.value];
    setSelectedRegionDetail(detail || null);
  };
  const handleSelect = (event) => {
    if (event.target.name === "region_detail") {
      setSelectedRegionDetail(event.target.value);
    } else if (event.target.name === "period_year") {
      setSelectedPeriodYear(event.target.value);
    } else if (event.target.name === "period_month") {
      setSelectedPeriodMonth(event.target.value);
    } else if (event.target.name === "period_week") {
      setSelectedPeriodWeek(event.target.value);
    } else if (event.target.name === "period_day") {
      setSelectedPeriodDay(event.target.value);
    } else if (event.target.name === "condition") {
      setSelectedCondition(event.target.value);
    } else if (event.target.name === "condition_detail") {
      setSelectedConditionDetail(event.target.value);
    }
  };

  return (
    <div className="matching_s2">
      <div className="section_container">
        <div className="article_container">
          <div className="article">
            <p>지역</p>
            <div className="select_container select_region">
              {/* 지역 선택  */}
              <select
                name="region"
                value={selectedRegion}
                onChange={handleSelectRegion}
              >
                {regions.map((region) => (
                  <option
                    key={region.value}
                    value={region.value}
                    className="option"
                  >
                    {region.label}
                  </option>
                ))}
              </select>
              {/* 세부 지역 선택  */}
              <select
                name="region_detail"
                value={selectedRegionDetail}
                onChange={handleSelect}
              >
                {region_details[selectedCity].map((region) => (
                  <option
                    key={region.value}
                    value={region.value}
                    className="option"
                  >
                    {region.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="article">
            <p>기간</p>
            <div className="select_container select_period">
              {/* 기간 년 선택  */}
              <select
                name="period_year"
                value={selectedPeriodYear}
                onChange={handleSelect}
              >
                {period_years.map((period_year) => (
                  <option
                    key={period_year.value}
                    value={period_year.value}
                    className="option"
                  >
                    {period_year.label}
                  </option>
                ))}
              </select>
              {/* 기간 개월 선택  */}
              <select
                name="period_month"
                value={selectedPeriodMonth}
                onChange={handleSelect}
              >
                {period_months.map((period_month) => (
                  <option
                    key={period_month.value}
                    value={period_month.value}
                    className="option"
                  >
                    {period_month.label}
                  </option>
                ))}
              </select>
              {/* 기간 주 선택  */}
              <select
                name="period_week"
                value={selectedPeriodWeek}
                onChange={handleSelect}
              >
                {period_weeks.map((period_week) => (
                  <option
                    key={period_week.value}
                    value={period_week.value}
                    className="option"
                  >
                    {period_week.label}
                  </option>
                ))}
              </select>
              {/* 기간 일 선택  */}
              <select
                name="period_day"
                value={selectedPeriodDay}
                onChange={handleSelect}
              >
                {period_days.map((period_day) => (
                  <option
                    key={period_day.value}
                    value={period_day.value}
                    className="option"
                  >
                    {period_day.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="article">
            <p>조건</p>
            <div className="select_container select_condition">
              {/* 조건 선택  */}
              <select
                name="condition"
                value={selectedCondition}
                onChange={handleSelect}
              >
                {conditions.map((condition) => (
                  <option
                    key={condition.value}
                    value={condition.value}
                    className="option"
                  >
                    {condition.label}
                  </option>
                ))}
              </select>
              {/* 세부 조건 선택  */}
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
        </div>
      </div>
    </div>
  );
};

export default MatchingS2;
