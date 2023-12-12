import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../banner";
import "../../css/eduProgram.css";
import "../../css/eduProgram_mobile.css";
import Nav from "../nav";

const EduProgramComponent = () => {
  const navigate = useNavigate();
  const [selectedSorting, setSelectedSorting] = useState("");
  const sortings = [
    { value: "date", label: "날짜순 ▼" },
    { value: "name", label: "이름순 ▼" },
  ];
  const handleSelect = (event) => {
    setSelectedSorting(event.target.name);
  };
  const goPage = (path) => {
    navigate(path);
  };
  return (
    <>
      <Nav />
      <Banner />
      <div className="eduProgram_s1">
        <div className="title_box">
          <div className="title">
            <img src="/images/edu_program_s1_img1.png" alt="" />
            <p className="pc">교육프로그램 > 개정세법요약정리</p>
            <p className="mobile">교육프로그램</p>
          </div>
        </div>
        <div className="article_container">
          <div className="select_box" id="pc">
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
          </div>
          <div className="article_box">
            <div className="article1">
              <p className="main">요약·정리</p>
              <p className="sub active">개정 세법 요약 정리</p>
              <p className="sub">개정 기업회계기준 요약정리</p>
              <p className="main">프로그램</p>
              <p className="sub">회계·세무 전문 프로그램</p>
            </div>
            <div className="article2">
              <div className="row">
                <div
                  className="content"
                  onClick={() => {
                    goPage("/eduDetail");
                  }}
                >
                  <img src="/images/edu_program_s1_img2.jpg" alt="" />
                  <p>개정세법요약정리 1편</p>
                  <p>2023.09.09</p>
                </div>
                <div
                  className="content"
                  onClick={() => {
                    goPage("/eduDetail");
                  }}
                >
                  <img src="/images/edu_program_s1_img3.jpg" alt="" />
                  <p>개정세법요약정리 2편</p>
                  <p>2023.09.09</p>
                </div>
                <div
                  className="content"
                  onClick={() => {
                    goPage("/eduDetail");
                  }}
                >
                  <img src="/images/edu_program_s1_img4.jpg" alt="" />
                  <p>개정세법요약정리 3편</p>
                  <p>2023.09.09</p>
                </div>
              </div>
              <div className="row">
                <div
                  className="content"
                  onClick={() => {
                    goPage("/eduDetail");
                  }}
                >
                  <img src="/images/edu_program_s1_img2.jpg" alt="" />
                  <p>개정세법요약정리 1편</p>
                  <p>2023.09.09</p>
                </div>
                <div
                  className="content"
                  onClick={() => {
                    goPage("/eduDetail");
                  }}
                >
                  <img src="/images/edu_program_s1_img3.jpg" alt="" />
                  <p>개정세법요약정리 2편</p>
                  <p>2023.09.09</p>
                </div>
                <div
                  className="content"
                  onClick={() => {
                    goPage("/eduDetail");
                  }}
                >
                  <img src="/images/edu_program_s1_img4.jpg" alt="" />
                  <p>개정세법요약정리 3편</p>
                  <p>2023.09.09</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EduProgramComponent;
