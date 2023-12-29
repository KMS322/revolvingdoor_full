import "../../css/career.css";
import "../../css/career_mobile.css";
import Nav from "../nav";
import React, { useState, useCallback, useEffect } from "react";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_CAREER_REQUEST,
  CHANGE_CAREER_REQUEST,
} from "../../reducers/userCareer";
import { useLocation } from "react-router-dom";

const CareerComponent = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { addCareerDone, changeCareerDone } = useSelector(
    (state) => state.userCareer
  );
  const [user_career_company1, onChangeCompany1] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_company1 : ""
  );
  const [user_career_position1, onChangePosition1] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_position1 : ""
  );
  const [user_career_companyState1, onChangeCompanyState1] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_companyState1 : ""
  );
  const [user_career_program1, onChangeProgram1] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_program1 : ""
  );
  const [user_career_period11Year, onChangePeriod11Year] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_period11Year : ""
  );
  const [user_career_period11Month, onChangePeriod11Month] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_period11Month : ""
  );
  const [user_career_period12Year, onChangePeriod12Year] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_period12Year : ""
  );
  const [user_career_period12Month, onChangePeriod12Month] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_period12Month : ""
  );
  const [user_career_license1, onChangeLicense] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_license1 : ""
  );
  const [user_career_license1Year, onChangeLicense1Year] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_license1Year : ""
  );
  const [user_career_license1Month, onChangeLicense1Month] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_license1Month : ""
  );
  const [user_career_license1Day, onChangeLicense1Day] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_license1Day : ""
  );
  const [user_career_license1Organization, onChangeLicense1Organization] =
    useInput(
      state && state.careers[0]
        ? state.careers[0].user_career_license1Organization
        : ""
    );
  const [user_career_trainingName1, onChangeTrainingName1] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_trainingName1 : ""
  );
  const [user_career_trainingPeriod11Year, onChangeTrainingPeriod11Year] =
    useInput(
      state && state.careers[0]
        ? state.careers[0].user_career_trainingPeriod11Year
        : ""
    );
  const [user_career_trainingPeriod11Month, onChangeTrainingPeriod11Month] =
    useInput(
      state && state.careers[0]
        ? state.careers[0].user_career_trainingPeriod11Month
        : ""
    );
  const [user_career_trainingPeriod12Year, onChangeTrainingPeriod12Year] =
    useInput(
      state && state.careers[0]
        ? state.careers[0].user_career_trainingPeriod12Year
        : ""
    );
  const [user_career_trainingPeriod12Month, onChangeTrainingPeriod12Month] =
    useInput(
      state && state.careers[0]
        ? state.careers[0].user_career_trainingPeriod12Month
        : ""
    );
  const [user_career_trainingDetail1, onChangeTrainingDetail] = useInput(
    state && state.careers[0]
      ? state.careers[0].user_career_trainingDetail1
      : ""
  );
  const [user_career_trainingOrganization, onChangeTrainingOrganization] =
    useInput(
      state && state.careers[0]
        ? state.careers[0].user_career_trainingOrganization
        : ""
    );
  const [user_career_changeYear, onChangeChangeYear] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_changeYear : ""
  );
  const [user_career_changeMonth, onChangeChangeMonth] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_changeMonth : ""
  );
  const [user_career_changeReason, setChangeReason] = useState(
    state && state.careers[0] ? state.careers[0].user_career_changeReason : ""
  );
  const [user_career_knowCount, setKnowCount] = useState(
    state && state.careers[0] ? state.careers[0].user_career_knowCount : ""
  );
  const [user_career_knowTax, setKnowTax] = useState(
    state && state.careers[0] ? state.careers[0].user_career_knowTax : ""
  );
  const [user_career_abilityProcess1, setAbilityProcess1] = useState(
    state && state.careers[0]
      ? state.careers[0].user_career_abilityProcess1
      : ""
  );
  const [user_career_abilityProcess2, setAbilityProcess2] = useState(
    state && state.careers[0]
      ? state.careers[0].user_career_abilityProcess2
      : ""
  );
  const [user_career_abilityProcess3, setAbilityProcess3] = useState(
    state && state.careers[0]
      ? state.careers[0].user_career_abilityProcess3
      : ""
  );
  const [user_career_abilityProcess4, setAbilityProcess4] = useState(
    state && state.careers[0]
      ? state.careers[0].user_career_abilityProcess4
      : ""
  );
  const [user_career_abilityProcess5, setAbilityProcess5] = useState(
    state && state.careers[0]
      ? state.careers[0].user_career_abilityProcess5
      : ""
  );
  const [user_career_abilityProcess6, onChangeAbilityProcess6] = useInput(
    state && state.careers[0]
      ? state.careers[0].user_career_abilityProcess6
      : ""
  );
  const [user_career_abilityDrive1, setAbilityDrive1] = useState(
    state && state.careers[0] ? state.careers[0].user_career_abilityDrive1 : ""
  );
  const [user_career_abilityDrive2, setAbilityDrive2] = useState(
    state && state.careers[0] ? state.careers[0].user_career_abilityDrive2 : ""
  );

  const selectStyle1 = (data) => {
    return {
      borderColor: user_career_changeReason === data ? "#2196F3" : "#eeeeee",
      color: user_career_changeReason === data ? "#2196F3" : "#707070",
    };
  };
  const selectStyle2 = (data) => {
    return {
      borderColor: user_career_knowCount === data ? "#2196F3" : "#eeeeee",
      color: user_career_knowCount === data ? "#2196F3" : "#707070",
    };
  };
  const selectStyle3 = (data) => {
    return {
      borderColor: user_career_knowTax === data ? "#2196F3" : "#eeeeee",
      color: user_career_knowTax === data ? "#2196F3" : "#707070",
    };
  };
  useEffect(() => {
    if (addCareerDone) {
      window.location.href = "/";
    }
  }, [addCareerDone]);
  useEffect(() => {
    if (changeCareerDone) {
      window.location.href = "/";
    }
  }, [changeCareerDone]);
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type:
          state && state.careers[0]
            ? CHANGE_CAREER_REQUEST
            : ADD_CAREER_REQUEST,
        data: {
          careerId: state && state.careers[0] ? state.careers[0].id : "",
          user_career_company1,
          user_career_position1,
          user_career_companyState1,
          user_career_program1,
          user_career_period11Year,
          user_career_period11Month,
          user_career_period12Year,
          user_career_period12Month,
          user_career_license1,
          user_career_license1Year,
          user_career_license1Month,
          user_career_license1Day,
          user_career_license1Organization,
          user_career_trainingName1,
          user_career_trainingPeriod11Year,
          user_career_trainingPeriod11Month,
          user_career_trainingPeriod12Year,
          user_career_trainingPeriod12Month,
          user_career_trainingDetail1,
          user_career_trainingOrganization,
          user_career_changeYear,
          user_career_changeMonth,
          user_career_changeReason,
          user_career_knowCount,
          user_career_knowTax,
          user_career_abilityProcess1,
          user_career_abilityProcess2,
          user_career_abilityProcess3,
          user_career_abilityProcess4,
          user_career_abilityProcess5,
          user_career_abilityProcess6,
          user_career_abilityDrive1,
          user_career_abilityDrive2,
        },
      });
    },
    [
      user_career_company1,
      user_career_position1,
      user_career_companyState1,
      user_career_program1,
      user_career_period11Year,
      user_career_period11Month,
      user_career_period12Year,
      user_career_period12Month,
      user_career_license1,
      user_career_license1Year,
      user_career_license1Month,
      user_career_license1Day,
      user_career_license1Organization,
      user_career_trainingName1,
      user_career_trainingPeriod11Year,
      user_career_trainingPeriod11Month,
      user_career_trainingPeriod12Year,
      user_career_trainingPeriod12Month,
      user_career_trainingDetail1,
      user_career_trainingOrganization,
      user_career_changeYear,
      user_career_changeMonth,
      user_career_changeReason,
      user_career_knowCount,
      user_career_knowTax,
      user_career_abilityProcess1,
      user_career_abilityProcess2,
      user_career_abilityProcess3,
      user_career_abilityProcess4,
      user_career_abilityProcess5,
      user_career_abilityProcess6,
      user_career_abilityDrive1,
      user_career_abilityDrive2,
    ]
  );

  return (
    <>
      <Nav />
      <div className="career_s1">
        <div className="title_box">
          <img src="/images/career_img.png" alt="" />
          <p>내 경력관리</p>
        </div>
        <form>
          <p>경력사항</p>
          <label className="input_box input_nomargin">
            <p>근무처</p>
          </label>
          <label className="input_box">
            <p>1.</p>
            <input
              type="text"
              name="user_career_company1"
              value={user_career_company1}
              onChange={onChangeCompany1}
            />
          </label>
          {/* <label className="input_box">
            <p>2.</p>
            <input type="text" name="" />
          </label>
          <label className="input_box">
            <p>3.</p>
            <input type="text" name="" />
          </label> */}

          <label className="input_box">
            <p>직위</p>
          </label>
          <label className="input_box">
            <p>1.</p>
            <input
              type="text"
              name="user_career_position1"
              value={user_career_position1}
              onChange={onChangePosition1}
            />
          </label>
          {/* <label className="input_box">
            <p>2.</p>
            <input type="text" name="" />
          </label>
          <label className="input_box">
            <p>3.</p>
            <input type="text" name="" />
          </label> */}
          <label className="input_box">
            <p>
              담당 사업장
              <br />
              형태와 업태
            </p>
          </label>
          <label className="input_box">
            <p>1.</p>
            <input
              type="text"
              name="user_career_companyState1"
              value={user_career_companyState1}
              onChange={onChangeCompanyState1}
            />
          </label>
          {/* <label className="input_box">
            <p>2.</p>
            <input type="text" name="" />
          </label>
          <label className="input_box">
            <p>3.</p>
            <input type="text" name="" />
          </label> */}
          <label className="input_box">
            <p>사용 프로그램</p>
          </label>
          <label className="input_box">
            <p>1.</p>
            <input
              type="text"
              name="user_career_program1"
              value={user_career_program1}
              onChange={onChangeProgram1}
            />
          </label>
          {/* <label className="input_box">
            <p>2.</p>
            <input type="text" name="" />
          </label>
          <label className="input_box">
            <p>3.</p>
            <input type="text" name="" />
          </label> */}
          <label className="input_box">
            <p>근무기간</p>
          </label>
          <label className="input_box">
            <p>1.</p>
            <div className="sub_input sub_input1">
              <input
                type="text"
                name="user_career_period11Year"
                value={user_career_period11Year}
                onChange={onChangePeriod11Year}
              />
              <p>년</p>
              <input
                type="text"
                name="user_career_period11Month"
                value={user_career_period11Month}
                onChange={onChangePeriod11Month}
              />
              <p>월</p>
              <p>~</p>
              <input
                type="text"
                name="user_career_period12Year"
                value={user_career_period12Year}
                onChange={onChangePeriod12Year}
              />
              <p>년</p>
              <input
                type="text"
                name="user_career_period12Month"
                value={user_career_period12Month}
                onChange={onChangePeriod12Month}
              />
              <p>월</p>
            </div>
          </label>
          {/* <label className="input_box">
            <p>2.</p>
            <div className="sub_input sub_input1">
              <input type="text" name="" />
              <p>년</p>
              <input type="text" name="" />
              <p>월</p>
              <p>~</p>
              <input type="text" name="" />
              <p>년</p>
              <input type="text" name="" />
              <p>월</p>
            </div>
          </label>
          <label className="input_box">
            <p>3.</p>
            <div className="sub_input sub_input1">
              <input type="text" name="" />
              <p>년</p>
              <input type="text" name="" />
              <p>월</p>
              <p>~</p>
              <input type="text" name="" />
              <p>년</p>
              <input type="text" name="" />
              <p>월</p>
            </div>
          </label> */}
          <p>보유자격(면허)</p>
          <label className="input_box">
            <p>자격명 1.</p>
            <input
              type="text"
              name="user_career_license1"
              value={user_career_license1}
              onChange={onChangeLicense}
            />
          </label>
          <label className="input_box">
            <p>취득일</p>
            <div className="sub_input sub_input2">
              <input
                type="text"
                name="user_career_license1Year"
                value={user_career_license1Year}
                onChange={onChangeLicense1Year}
              />
              <p>년</p>
              <input
                type="text"
                name="user_career_license1Month"
                value={user_career_license1Month}
                onChange={onChangeLicense1Month}
              />
              <p>월</p>
              <input
                type="text"
                name="user_career_license1Day"
                value={user_career_license1Day}
                onChange={onChangeLicense1Day}
              />
              <p>일</p>
            </div>
          </label>
          <label className="input_box">
            <p>발급기관</p>
            <input
              type="text"
              name="user_career_license1Organization"
              value={user_career_license1Organization}
              onChange={onChangeLicense1Organization}
            />
          </label>
          {/* <label className="input_box">
            <p>자격명 2.</p>
            <input type="text" name="" />
          </label>
          <label className="input_box">
            <p>취득일</p>
            <div className="sub_input sub_input2">
              <input type="text" name="" />
              <p>년</p>
              <input type="text" name="" />
              <p>월</p>
              <input type="text" name="" />
              <p>일</p>
            </div>
          </label>
          <label className="input_box">
            <p>발급기관</p>
            <input type="text" name="" />
          </label>
          <label className="input_box">
            <p>자격명 3.</p>
            <input type="text" name="" />
          </label>
          <label className="input_box">
            <p>취득일</p>
            <div className="sub_input sub_input2">
              <input type="text" name="" />
              <p>년</p>
              <input type="text" name="" />
              <p>월</p>
              <input type="text" name="" />
              <p>일</p>
            </div>
          </label>
          <label className="input_box">
            <p>발급기관</p>
            <input type="text" name="" />
          </label> */}
          <p>교육훈련 이수현황</p>
          <label className="input_box">
            <p>훈련 과정명</p>
            <input
              type="text"
              name="user_career_trainingName1"
              value={user_career_trainingName1}
              onChange={onChangeTrainingName1}
            />
          </label>
          <label className="input_box">
            <p>훈련기간</p>
            <div className="sub_input sub_input1">
              <input
                type="text"
                name="user_career_trainingPeriod11Year"
                value={user_career_trainingPeriod11Year}
                onChange={onChangeTrainingPeriod11Year}
              />
              <p>년</p>
              <input
                type="text"
                name="user_career_trainingPeriod11Month"
                value={user_career_trainingPeriod11Month}
                onChange={onChangeTrainingPeriod11Month}
              />
              <p>월</p>
              <p>~</p>
              <input
                type="text"
                name="user_career_trainingPeriod12Year"
                value={user_career_trainingPeriod12Year}
                onChange={onChangeTrainingPeriod12Year}
              />
              <p>년</p>
              <input
                type="text"
                name="user_career_trainingPeriod12Month"
                value={user_career_trainingPeriod12Month}
                onChange={onChangeTrainingPeriod12Month}
              />
              <p>월</p>
            </div>
          </label>
          <label className="input_box">
            <p>세부훈련내용</p>
            <input
              type="text"
              name="user_career_trainingDetail1"
              value={user_career_trainingDetail1}
              onChange={onChangeTrainingDetail}
            />
          </label>
          <label className="input_box">
            <p>훈련기관명</p>
            <input
              type="text"
              name="user_career_trainingOrganization"
              value={user_career_trainingOrganization}
              onChange={onChangeTrainingOrganization}
            />
          </label>
          <p>이직경력</p>
          <label className="input_box">
            <p>최종이직시기</p>
            <div className="sub_input sub_input3">
              <input
                type="text"
                name="user_career_changeYear"
                value={user_career_changeYear}
                onChange={onChangeChangeYear}
              />
              <p>년</p>
              <input
                type="text"
                name="user_career_changeMonth"
                value={user_career_changeMonth}
                onChange={onChangeChangeMonth}
              />
              <p>월</p>
            </div>
          </label>
          <label className="select_box">
            <p>이직사유</p>
            <div className="sub_select">
              <div
                className="select"
                onClick={() => {
                  setChangeReason("결혼");
                }}
                style={selectStyle1("결혼")}
              >
                결혼
              </div>
              <div
                className="select"
                onClick={() => {
                  setChangeReason("출산·육아");
                }}
                style={selectStyle1("출산·육아")}
              >
                출산·육아
              </div>
              <div
                className="select"
                onClick={() => {
                  setChangeReason("창업");
                }}
                style={selectStyle1("창업")}
              >
                창업
              </div>
              <div
                className="select"
                onClick={() => {
                  setChangeReason("기타");
                }}
                style={selectStyle1("기타")}
              >
                기타
              </div>
            </div>
          </label>
          <p>회계 및 세무 지식</p>
          <label className="select_box">
            <p>회계지식</p>
            <div className="sub_select">
              <div
                className="select"
                onClick={() => {
                  setKnowCount("상");
                }}
                style={selectStyle2("상")}
              >
                상
              </div>
              <div
                className="select"
                onClick={() => {
                  setKnowCount("중");
                }}
                style={selectStyle2("중")}
              >
                중
              </div>
              <div
                className="select"
                onClick={() => {
                  setKnowCount("하");
                }}
                style={selectStyle2("하")}
              >
                하
              </div>
            </div>
          </label>
          <label className="select_box">
            <p>세무(법)지식</p>
            <div className="sub_select">
              <div
                className="select"
                onClick={() => {
                  setKnowTax("상");
                }}
                style={selectStyle3("상")}
              >
                상
              </div>
              <div
                className="select"
                onClick={() => {
                  setKnowTax("중");
                }}
                style={selectStyle3("중")}
              >
                중
              </div>
              <div
                className="select"
                onClick={() => {
                  setKnowTax("하");
                }}
                style={selectStyle3("하")}
              >
                하
              </div>
            </div>
          </label>
          <p>그 외 능력</p>
          <label className="select_box">
            <p>전산활용능력</p>
            <div className="sub_select sub_select1">
              <div
                className="select"
                onClick={() => {
                  setAbilityProcess1(!user_career_abilityProcess1);
                }}
                style={{
                  borderColor: user_career_abilityProcess1
                    ? "#2196F3"
                    : "#eeeeee",
                  color: user_career_abilityProcess1 ? "#2196F3" : "#707070",
                }}
              >
                문서작성
              </div>
              <div
                className="select"
                onClick={() => {
                  setAbilityProcess2(!user_career_abilityProcess2);
                }}
                style={{
                  borderColor: user_career_abilityProcess2
                    ? "#2196F3"
                    : "#eeeeee",
                  color: user_career_abilityProcess2 ? "#2196F3" : "#707070",
                }}
              >
                스프레드시트
              </div>
            </div>
          </label>
          <label className="select_box">
            <p></p>
            <div className="sub_select sub_select1">
              <div
                className="select"
                onClick={() => {
                  setAbilityProcess3(!user_career_abilityProcess3);
                }}
                style={{
                  borderColor: user_career_abilityProcess3
                    ? "#2196F3"
                    : "#eeeeee",
                  color: user_career_abilityProcess3 ? "#2196F3" : "#707070",
                }}
              >
                프레젠테이션
              </div>
              <div
                className="select"
                onClick={() => {
                  setAbilityProcess4(!user_career_abilityProcess4);
                }}
                style={{
                  borderColor: user_career_abilityProcess4
                    ? "#2196F3"
                    : "#eeeeee",
                  color: user_career_abilityProcess4 ? "#2196F3" : "#707070",
                }}
              >
                회계프로그램
              </div>
            </div>
          </label>
          <label className="select_box">
            <p></p>
            <div className="sub_select sub_select2">
              <div
                className="select"
                onClick={() => {
                  setAbilityProcess5(!user_career_abilityProcess5);
                }}
                style={{
                  borderColor: user_career_abilityProcess5
                    ? "#2196F3"
                    : "#eeeeee",
                  color: user_career_abilityProcess5 ? "#2196F3" : "#707070",
                }}
              >
                기타
              </div>
              <input
                type="text"
                name="user_career_abilityProcess6"
                value={user_career_abilityProcess6}
                onChange={onChangeAbilityProcess6}
              />
            </div>
          </label>
          <label className="select_box">
            <p>운전능력</p>
            <div className="sub_select sub_select1">
              <div
                className="select"
                onClick={() => {
                  setAbilityDrive1(!user_career_abilityDrive1);
                }}
                style={{
                  borderColor: user_career_abilityDrive1
                    ? "#2196F3"
                    : "#eeeeee",
                  color: user_career_abilityDrive1 ? "#2196F3" : "#707070",
                }}
              >
                운전면허증
              </div>
              <div
                className="select"
                onClick={() => {
                  setAbilityDrive2(!user_career_abilityDrive2);
                }}
                style={{
                  borderColor: user_career_abilityDrive2
                    ? "#2196F3"
                    : "#eeeeee",
                  color: user_career_abilityDrive2 ? "#2196F3" : "#707070",
                }}
              >
                차량 소지자
              </div>
            </div>
          </label>
          <button type="submit" onClick={onSubmitForm}>
            {state && state.careers[0] ? "저장" : "등록"}
          </button>
        </form>
      </div>
    </>
  );
};

export default CareerComponent;
