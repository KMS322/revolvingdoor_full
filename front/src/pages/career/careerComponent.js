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

  const [user_career_company2, onChangeCompany2] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_company2 : ""
  );
  const [user_career_position2, onChangePosition2] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_position2 : ""
  );
  const [user_career_companyState2, onChangeCompanyState2] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_companyState2 : ""
  );
  const [user_career_program2, onChangeProgram2] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_program2 : ""
  );
  const [user_career_period21Year, onChangePeriod21Year] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_period21Year : ""
  );
  const [user_career_period21Month, onChangePeriod21Month] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_period21Month : ""
  );
  const [user_career_period22Year, onChangePeriod22Year] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_period22Year : ""
  );
  const [user_career_period22Month, onChangePeriod22Month] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_period22Month : ""
  );

  const [user_career_company3, onChangeCompany3] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_company3 : ""
  );
  const [user_career_position3, onChangePosition3] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_position3 : ""
  );
  const [user_career_companyState3, onChangeCompanyState3] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_companyState3 : ""
  );
  const [user_career_program3, onChangeProgram3] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_program3 : ""
  );
  const [user_career_period31Year, onChangePeriod31Year] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_period31Year : ""
  );
  const [user_career_period31Month, onChangePeriod31Month] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_period31Month : ""
  );
  const [user_career_period32Year, onChangePeriod32Year] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_period32Year : ""
  );
  const [user_career_period32Month, onChangePeriod32Month] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_period32Month : ""
  );

  const [user_career_license1, onChangeLicense1] = useInput(
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

  const [user_career_license2, onChangeLicense2] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_license2 : ""
  );
  const [user_career_license2Year, onChangeLicense2Year] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_license2Year : ""
  );
  const [user_career_license2Month, onChangeLicense2Month] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_license2Month : ""
  );
  const [user_career_license2Day, onChangeLicense2Day] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_license2Day : ""
  );
  const [user_career_license2Organization, onChangeLicense2Organization] =
    useInput(
      state && state.careers[0]
        ? state.careers[0].user_career_license2Organization
        : ""
    );

  const [user_career_license3, onChangeLicense3] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_license3 : ""
  );
  const [user_career_license3Year, onChangeLicense3Year] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_license3Year : ""
  );
  const [user_career_license3Month, onChangeLicense3Month] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_license3Month : ""
  );
  const [user_career_license3Day, onChangeLicense3Day] = useInput(
    state && state.careers[0] ? state.careers[0].user_career_license3Day : ""
  );
  const [user_career_license3Organization, onChangeLicense3Organization] =
    useInput(
      state && state.careers[0]
        ? state.careers[0].user_career_license3Organization
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
          user_career_company2,
          user_career_position2,
          user_career_companyState2,
          user_career_program2,
          user_career_period21Year,
          user_career_period21Month,
          user_career_period22Year,
          user_career_period22Month,
          user_career_company3,
          user_career_position3,
          user_career_companyState3,
          user_career_program3,
          user_career_period31Year,
          user_career_period31Month,
          user_career_period32Year,
          user_career_period32Month,
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

  const [careerCnt, setCareerCnt] = useState(1);
  const [licenseCnt, setLicenseCnt] = useState(1);
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
            <p>경력 사항 1.</p>
          </label>
          <label className="input_box">
            <p>근무처</p>
            <input
              type="text"
              name="user_career_company1"
              value={user_career_company1}
              onChange={onChangeCompany1}
            />
          </label>
          <label className="input_box">
            <p>직위</p>
            <input
              type="text"
              name="user_career_position1"
              value={user_career_position1}
              onChange={onChangePosition1}
            />
          </label>
          <label className="input_box">
            <p>
              담당 사업장
              <br />
              형태와 업태
            </p>
            <input
              type="text"
              name="user_career_companyState1"
              value={user_career_companyState1}
              onChange={onChangeCompanyState1}
            />
          </label>
          <label className="input_box">
            <p>사용 프로그램</p>
            <input
              type="text"
              name="user_career_program1"
              value={user_career_program1}
              onChange={onChangeProgram1}
            />
          </label>
          <label className="input_box">
            <p>근무기간</p>
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
          {careerCnt >= 2 ? (
            <>
              <label
                className="input_box input_nomargin"
                style={{ marginTop: "2vw" }}
              >
                <p>경력 사항 2.</p>
              </label>
              <label className="input_box">
                <p>근무처</p>
                <input
                  type="text"
                  name="user_career_company2"
                  value={user_career_company2}
                  onChange={onChangeCompany2}
                />
              </label>
              <label className="input_box">
                <p>직위</p>
                <input
                  type="text"
                  name="user_career_position2"
                  value={user_career_position2}
                  onChange={onChangePosition2}
                />
              </label>
              <label className="input_box">
                <p>
                  담당 사업장
                  <br />
                  형태와 업태
                </p>
                <input
                  type="text"
                  name="user_career_companyState2"
                  value={user_career_companyState2}
                  onChange={onChangeCompanyState2}
                />
              </label>
              <label className="input_box">
                <p>사용 프로그램</p>
                <input
                  type="text"
                  name="user_career_program2"
                  value={user_career_program2}
                  onChange={onChangeProgram2}
                />
              </label>
              <label className="input_box">
                <p>근무기간</p>
                <div className="sub_input sub_input1">
                  <input
                    type="text"
                    name="user_career_period21Year"
                    value={user_career_period21Year}
                    onChange={onChangePeriod21Year}
                  />
                  <p>년</p>
                  <input
                    type="text"
                    name="user_career_period21Month"
                    value={user_career_period21Month}
                    onChange={onChangePeriod21Month}
                  />
                  <p>월</p>
                  <p>~</p>
                  <input
                    type="text"
                    name="user_career_period22Year"
                    value={user_career_period22Year}
                    onChange={onChangePeriod22Year}
                  />
                  <p>년</p>
                  <input
                    type="text"
                    name="user_career_period22Month"
                    value={user_career_period22Month}
                    onChange={onChangePeriod22Month}
                  />
                  <p>월</p>
                </div>
              </label>
            </>
          ) : (
            ""
          )}
          {careerCnt === 2 ? (
            <label className="input_box">
              <p></p>
              <div
                className="plus_btn"
                onClick={() => {
                  setCareerCnt(careerCnt - 1);
                }}
              >
                경력사항 2. 취소하기
              </div>
            </label>
          ) : (
            ""
          )}
          {careerCnt === 3 ? (
            <>
              <label
                className="input_box input_nomargin"
                style={{ marginTop: "2vw" }}
              >
                <p>경력 사항 3.</p>
              </label>
              <label className="input_box">
                <p>근무처</p>
                <input
                  type="text"
                  name="user_career_company3"
                  value={user_career_company3}
                  onChange={onChangeCompany3}
                />
              </label>
              <label className="input_box">
                <p>직위</p>
                <input
                  type="text"
                  name="user_career_position3"
                  value={user_career_position3}
                  onChange={onChangePosition3}
                />
              </label>
              <label className="input_box">
                <p>
                  담당 사업장
                  <br />
                  형태와 업태
                </p>
                <input
                  type="text"
                  name="user_career_companyState3"
                  value={user_career_companyState3}
                  onChange={onChangeCompanyState3}
                />
              </label>
              <label className="input_box">
                <p>사용 프로그램</p>
                <input
                  type="text"
                  name="user_career_program3"
                  value={user_career_program3}
                  onChange={onChangeProgram3}
                />
              </label>
              <label className="input_box">
                <p>근무기간</p>
                <div className="sub_input sub_input1">
                  <input
                    type="text"
                    name="user_career_period31Year"
                    value={user_career_period31Year}
                    onChange={onChangePeriod31Year}
                  />
                  <p>년</p>
                  <input
                    type="text"
                    name="user_career_period31Month"
                    value={user_career_period31Month}
                    onChange={onChangePeriod31Month}
                  />
                  <p>월</p>
                  <p>~</p>
                  <input
                    type="text"
                    name="user_career_period32Year"
                    value={user_career_period32Year}
                    onChange={onChangePeriod32Year}
                  />
                  <p>년</p>
                  <input
                    type="text"
                    name="user_career_period32Month"
                    value={user_career_period32Month}
                    onChange={onChangePeriod32Month}
                  />
                  <p>월</p>
                </div>
              </label>
              <label className="input_box">
                <p></p>
                <div
                  className="plus_btn"
                  onClick={() => {
                    setCareerCnt(careerCnt - 1);
                  }}
                >
                  경력사항 3. 취소하기
                </div>
              </label>
            </>
          ) : (
            ""
          )}
          {careerCnt === 3 ? (
            ""
          ) : (
            <label className="input_box">
              <p></p>
              <div
                className="plus_btn"
                onClick={() => {
                  setCareerCnt(careerCnt + 1);
                }}
              >
                경력사항 추가하기
              </div>
            </label>
          )}

          <p>보유자격(면허)</p>
          <label className="input_box">
            <p>보유자격 1.</p>
          </label>
          <label className="input_box">
            <p>자격명</p>
            <input
              type="text"
              name="user_career_license1"
              value={user_career_license1}
              onChange={onChangeLicense1}
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
          {licenseCnt >= 2 ? (
            <>
              <label className="input_box">
                <p>보유자격 2.</p>
              </label>
              <label className="input_box">
                <p>자격명</p>
                <input
                  type="text"
                  name="user_career_license2"
                  value={user_career_license2}
                  onChange={onChangeLicense2}
                />
              </label>
              <label className="input_box">
                <p>취득일</p>
                <div className="sub_input sub_input2">
                  <input
                    type="text"
                    name="user_career_license2Year"
                    value={user_career_license2Year}
                    onChange={onChangeLicense2Year}
                  />
                  <p>년</p>
                  <input
                    type="text"
                    name="user_career_license2Month"
                    value={user_career_license2Month}
                    onChange={onChangeLicense2Month}
                  />
                  <p>월</p>
                  <input
                    type="text"
                    name="user_career_license2Day"
                    value={user_career_license2Day}
                    onChange={onChangeLicense2Day}
                  />
                  <p>일</p>
                </div>
              </label>
              <label className="input_box">
                <p>발급기관</p>
                <input
                  type="text"
                  name="user_career_license2Organization"
                  value={user_career_license2Organization}
                  onChange={onChangeLicense2Organization}
                />
              </label>
            </>
          ) : (
            ""
          )}
          {licenseCnt === 2 ? (
            <label className="input_box">
              <p></p>
              <div
                className="plus_btn"
                onClick={() => {
                  setLicenseCnt(licenseCnt - 1);
                }}
              >
                보유자격 2. 취소하기
              </div>
            </label>
          ) : (
            ""
          )}
          {licenseCnt === 3 ? (
            <>
              <label className="input_box">
                <p>보유자격 3.</p>
              </label>
              <label className="input_box">
                <p>자격명</p>
                <input
                  type="text"
                  name="user_career_license3"
                  value={user_career_license3}
                  onChange={onChangeLicense3}
                />
              </label>
              <label className="input_box">
                <p>취득일</p>
                <div className="sub_input sub_input2">
                  <input
                    type="text"
                    name="user_career_license3Year"
                    value={user_career_license3Year}
                    onChange={onChangeLicense3Year}
                  />
                  <p>년</p>
                  <input
                    type="text"
                    name="user_career_license3Month"
                    value={user_career_license3Month}
                    onChange={onChangeLicense3Month}
                  />
                  <p>월</p>
                  <input
                    type="text"
                    name="user_career_license3Day"
                    value={user_career_license3Day}
                    onChange={onChangeLicense3Day}
                  />
                  <p>일</p>
                </div>
              </label>
              <label className="input_box">
                <p>발급기관</p>
                <input
                  type="text"
                  name="user_career_license3Organization"
                  value={user_career_license3Organization}
                  onChange={onChangeLicense3Organization}
                />
              </label>
            </>
          ) : (
            ""
          )}
          {licenseCnt === 3 ? (
            <label className="input_box">
              <p></p>
              <div
                className="plus_btn"
                onClick={() => {
                  setLicenseCnt(licenseCnt - 1);
                }}
              >
                보유자격 3. 취소하기
              </div>
            </label>
          ) : (
            ""
          )}
          <label className="input_box">
            <p></p>
            <div
              className="plus_btn"
              onClick={() => {
                setLicenseCnt(licenseCnt + 1);
              }}
            >
              보유자격 추가하기
            </div>
          </label>
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
