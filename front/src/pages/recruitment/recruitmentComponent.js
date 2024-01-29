import "../../css/recruitment.css";
import "../../css/recruitment_mobile.css";
import Nav from "../nav";
import React, { useState, useCallback, useEffect } from "react";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_RECRUITMENT_REQUEST,
  CHANGE_RECRUITMENT_REQUEST,
} from "../../reducers/businessRecruitment";
import { useLocation } from "react-router-dom";
const RecruitmentComponent = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { addRecruitmentDone, changeRecruitmentDone } = useSelector(
    (state) => state.businessRecruitment
  );
  const [business_recruitment_name, onChangeName] = useInput(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_name
      : ""
  );
  const [business_recruitment_tel, onChangeTel] = useInput(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_tel
      : ""
  );
  const [business_recruitment_email, onChangeEmail] = useInput(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_email
      : ""
  );
  const [business_recruitment_phone, onChangePhone] = useInput(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_phone
      : ""
  );
  const [business_recruitment_insurance1, setInsurance1] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_insurance1
      : ""
  );
  const [business_recruitment_insurance2, setInsurance2] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_insurance2
      : ""
  );
  const [business_recruitment_insurance3, setInsurance3] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_insurance3
      : ""
  );
  const [business_recruitment_insurance4, setInsurance4] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_insurance4
      : ""
  );
  const [business_recruitment_insurance5, setInsurance5] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_insurance5
      : ""
  );
  const [business_recruitment_welfare1, setwelfare1] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_welfare1
      : ""
  );
  const [business_recruitment_welfare2, setwelfare2] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_welfare2
      : ""
  );
  const [business_recruitment_welfare3, setwelfare3] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_welfare3
      : ""
  );
  const [business_recruitment_welfare4, setwelfare4] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_welfare4
      : ""
  );
  const [business_recruitment_welfare5, setwelfare5] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_welfare5
      : ""
  );
  const [business_recruitment_welfare6, setwelfare6] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_welfare6
      : ""
  );
  const [business_recruitment_welfare7, setwelfare7] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_welfare7
      : ""
  );
  const [business_recruitment_welfare8, setwelfare8] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_welfare8
      : ""
  );
  const [business_recruitment_welfare9, setwelfare9] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_welfare9
      : ""
  );
  const [business_recruitment_welfare10, onChangeWelfare10] = useInput(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_welfare10
      : ""
  );
  const [business_recruitment_meal, setMeal] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_meal
      : ""
  );
  const [business_recruitment_handicapped1, setHandicapped1] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_handicapped1
      : ""
  );
  const [business_recruitment_handicapped2, setHandicapped2] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_handicapped2
      : ""
  );
  const [business_recruitment_handicapped3, setHandicapped3] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_handicapped3
      : ""
  );
  const [business_recruitment_handicapped4, setHandicapped4] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_handicapped4
      : ""
  );
  const [business_recruitment_handicapped5, setHandicapped5] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_handicapped5
      : ""
  );
  const [business_recruitment_handicapped6, onChangeHandicapped6] = useInput(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_handicapped6
      : ""
  );

  const [business_recruitment_program1, setProgram1] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_program1
      : ""
  );
  const [business_recruitment_program2, setProgram2] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_program2
      : ""
  );
  const [business_recruitment_program3, setProgram3] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_program3
      : ""
  );
  const [business_recruitment_program4, setProgram4] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_program4
      : ""
  );
  const [business_recruitment_program5, setProgram5] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_program5
      : ""
  );
  const [business_recruitment_program6, onChangeProgram6] = useInput(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_program6
      : ""
  );
  const [business_recruitment_accountingProgram, setAccountingProgram] =
    useState(
      state && state.recruitments[0]
        ? state.recruitments[0].business_recruitment_accountingProgram
        : ""
    );
  const [
    business_recruitment_accountingProgramLevel,
    setAccountingProgramLevel,
  ] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_accountingProgramLevel
      : ""
  );
  const [business_recruitment_abilityDrive1, setAbilityDrive1] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_abilityDrive1
      : ""
  );
  const [business_recruitment_abilityDrive2, setAbilityDrive2] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_abilityDrive2
      : ""
  );
  const [business_recruitment_major1, setMajor1] = useState(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_major1
      : ""
  );
  const [business_recruitment_major2, onChangeMajor2] = useInput(
    state && state.recruitments[0]
      ? state.recruitments[0].business_recruitment_major2
      : ""
  );

  const selectStyle1 = (data) => {
    return {
      borderColor: business_recruitment_meal === data ? "#2196F3" : "#eeeeee",
      color: business_recruitment_meal === data ? "#2196F3" : "#707070",
    };
  };
  const selectStyle2 = (data) => {
    return {
      borderColor:
        business_recruitment_accountingProgram === data ? "#2196F3" : "#eeeeee",
      color:
        business_recruitment_accountingProgram === data ? "#2196F3" : "#707070",
    };
  };
  const selectStyle3 = (data) => {
    return {
      borderColor:
        business_recruitment_accountingProgramLevel === data
          ? "#2196F3"
          : "#eeeeee",
      color:
        business_recruitment_accountingProgramLevel === data
          ? "#2196F3"
          : "#707070",
    };
  };

  useEffect(() => {
    if (addRecruitmentDone) {
      window.location.href = "/";
    }
  }, [addRecruitmentDone]);
  useEffect(() => {
    if (changeRecruitmentDone) {
      window.location.href = "/";
    }
  }, [changeRecruitmentDone]);
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type:
          state && state.recruitments[0]
            ? CHANGE_RECRUITMENT_REQUEST
            : ADD_RECRUITMENT_REQUEST,
        data: {
          recruitmentId:
            state && state.recruitments[0] ? state.recruitments[0].id : "",
          business_recruitment_name,
          business_recruitment_tel,
          business_recruitment_email,
          business_recruitment_phone,
          business_recruitment_insurance1,
          business_recruitment_insurance2,
          business_recruitment_insurance3,
          business_recruitment_insurance4,
          business_recruitment_insurance5,
          business_recruitment_welfare1,
          business_recruitment_welfare2,
          business_recruitment_welfare3,
          business_recruitment_welfare4,
          business_recruitment_welfare5,
          business_recruitment_welfare6,
          business_recruitment_welfare7,
          business_recruitment_welfare8,
          business_recruitment_welfare9,
          business_recruitment_welfare10,
          business_recruitment_meal,
          business_recruitment_handicapped1,
          business_recruitment_handicapped2,
          business_recruitment_handicapped3,
          business_recruitment_handicapped4,
          business_recruitment_handicapped5,
          business_recruitment_handicapped6,
          business_recruitment_program1,
          business_recruitment_program2,
          business_recruitment_program3,
          business_recruitment_program4,
          business_recruitment_program5,
          business_recruitment_program6,
          business_recruitment_accountingProgram,
          business_recruitment_accountingProgramLevel,
          business_recruitment_abilityDrive1,
          business_recruitment_abilityDrive2,
          business_recruitment_major1,
          business_recruitment_major2,
        },
      });
    },
    [
      business_recruitment_name,
      business_recruitment_tel,
      business_recruitment_email,
      business_recruitment_phone,
      business_recruitment_insurance1,
      business_recruitment_insurance2,
      business_recruitment_insurance3,
      business_recruitment_insurance4,
      business_recruitment_insurance5,
      business_recruitment_welfare1,
      business_recruitment_welfare2,
      business_recruitment_welfare3,
      business_recruitment_welfare4,
      business_recruitment_welfare5,
      business_recruitment_welfare6,
      business_recruitment_welfare7,
      business_recruitment_welfare8,
      business_recruitment_welfare9,
      business_recruitment_welfare10,
      business_recruitment_meal,
      business_recruitment_handicapped1,
      business_recruitment_handicapped2,
      business_recruitment_handicapped3,
      business_recruitment_handicapped4,
      business_recruitment_handicapped5,
      business_recruitment_handicapped6,
      business_recruitment_program1,
      business_recruitment_program2,
      business_recruitment_program3,
      business_recruitment_program4,
      business_recruitment_program5,
      business_recruitment_program6,
      business_recruitment_accountingProgram,
      business_recruitment_accountingProgramLevel,
      business_recruitment_abilityDrive1,
      business_recruitment_abilityDrive2,
      business_recruitment_major1,
      business_recruitment_major2,
    ]
  );

  return (
    <>
      <Nav />
      <div className="recruitment_s1">
        <div className="title_box">
          <img src="/images/career_img.png" alt="" />
          <p>채용 담당</p>
        </div>
        <form>
          <p>채용 담당자</p>
          <label className="input_box input_nomargin">
            <p>성명</p>
            <input
              type="text"
              name="business_recruitment_name"
              value={business_recruitment_name}
              onChange={onChangeName}
            />
          </label>
          <label className="input_box">
            <p>전화</p>
            <input
              type="text"
              name="business_recruitment_tel"
              value={business_recruitment_tel}
              onChange={onChangeTel}
              placeholder="010-0000-0000"
            />
          </label>
          <label className="input_box">
            <p>이메일</p>
            <input
              type="text"
              name="business_recruitment_email"
              value={business_recruitment_email}
              onChange={onChangeEmail}
            />
          </label>
          <label className="input_box">
            <p>휴대전화</p>
            <input
              type="text"
              name="business_recruitment_phone"
              value={business_recruitment_phone}
              onChange={onChangePhone}
            />
          </label>
          <p>근무 여건</p>
          <label className="select_box">
            <p>사회보험</p>
            <div className="sub_select">
              <div
                className="select"
                onClick={() => {
                  setInsurance1(!business_recruitment_insurance1);
                  setInsurance5(false);
                }}
                style={{
                  borderColor: business_recruitment_insurance1
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_insurance1
                    ? "#2196F3"
                    : "#707070",
                }}
              >
                고용보험
              </div>
              <div
                className="select"
                onClick={() => {
                  setInsurance2(!business_recruitment_insurance2);
                  setInsurance5(false);
                }}
                style={{
                  borderColor: business_recruitment_insurance2
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_insurance2
                    ? "#2196F3"
                    : "#707070",
                }}
              >
                산재보험
              </div>
              <div
                className="select"
                onClick={() => {
                  setInsurance3(!business_recruitment_insurance3);
                  setInsurance5(false);
                }}
                style={{
                  borderColor: business_recruitment_insurance3
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_insurance3
                    ? "#2196F3"
                    : "#707070",
                }}
              >
                건강보험
              </div>
              <div
                className="select"
                onClick={() => {
                  setInsurance4(!business_recruitment_insurance4);
                  setInsurance5(false);
                }}
                style={{
                  borderColor: business_recruitment_insurance4
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_insurance4
                    ? "#2196F3"
                    : "#707070",
                }}
              >
                국민연금
              </div>
            </div>
          </label>
          <label className="select_box">
            <p></p>
            <div className="sub_select sub_select1">
              <div
                className="select"
                onClick={() => {
                  setInsurance5(!business_recruitment_insurance5);
                  setInsurance1(false);
                  setInsurance2(false);
                  setInsurance3(false);
                  setInsurance4(false);
                }}
                style={{
                  borderColor: business_recruitment_insurance5
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_insurance5
                    ? "#2196F3"
                    : "#707070",
                }}
              >
                해당사항 없음
              </div>
            </div>
          </label>
          <label className="select_box">
            <p>복리후생</p>
            <div className="sub_select sub_select1">
              <div
                className="select"
                onClick={() => {
                  setwelfare1(!business_recruitment_welfare1);
                }}
                style={{
                  borderColor: business_recruitment_welfare1
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_welfare1 ? "#2196F3" : "#707070",
                }}
              >
                통근버스
              </div>
              <div
                className="select"
                onClick={() => {
                  setwelfare2(!business_recruitment_welfare2);
                }}
                style={{
                  borderColor: business_recruitment_welfare2
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_welfare2 ? "#2196F3" : "#707070",
                }}
              >
                차량유지비
              </div>
            </div>
          </label>
          <label className="select_box">
            <p></p>
            <div className="sub_select sub_select1">
              <div
                className="select"
                onClick={() => {
                  setwelfare3(!business_recruitment_welfare3);
                }}
                style={{
                  borderColor: business_recruitment_welfare3
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_welfare3 ? "#2196F3" : "#707070",
                }}
              >
                기숙사
              </div>
              <div
                className="select"
                onClick={() => {
                  setwelfare4(!business_recruitment_welfare4);
                }}
                style={{
                  borderColor: business_recruitment_welfare4
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_welfare4 ? "#2196F3" : "#707070",
                }}
              >
                교육비
              </div>
            </div>
          </label>
          <label className="select_box">
            <p></p>
            <div className="sub_select sub_select1">
              <div
                className="select"
                onClick={() => {
                  setwelfare5(!business_recruitment_welfare5);
                }}
                style={{
                  borderColor: business_recruitment_welfare5
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_welfare5 ? "#2196F3" : "#707070",
                }}
              >
                모성 보호 시설
              </div>
              <div
                className="select"
                onClick={() => {
                  setwelfare6(!business_recruitment_welfare6);
                }}
                style={{
                  borderColor: business_recruitment_welfare6
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_welfare6 ? "#2196F3" : "#707070",
                }}
              >
                자녀 학자금 지원
              </div>
            </div>
          </label>
          <label className="select_box">
            <p></p>
            <div className="sub_select sub_select1">
              <div
                className="select"
                onClick={() => {
                  setwelfare7(!business_recruitment_welfare7);
                }}
                style={{
                  borderColor: business_recruitment_welfare7
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_welfare7 ? "#2196F3" : "#707070",
                }}
              >
                주택자금
              </div>
              <div
                className="select"
                onClick={() => {
                  setwelfare8(!business_recruitment_welfare8);
                }}
                style={{
                  borderColor: business_recruitment_welfare8
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_welfare8 ? "#2196F3" : "#707070",
                }}
              >
                직원대출제도
              </div>
            </div>
          </label>
          <label className="select_box">
            <p></p>
            <div className="sub_select">
              <div
                className="select"
                onClick={() => {
                  setwelfare9(!business_recruitment_welfare9);
                }}
                style={{
                  borderColor: business_recruitment_welfare9
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_welfare9 ? "#2196F3" : "#707070",
                }}
              >
                기타
              </div>
              <input
                type="text"
                name="business_recruitment_welfare10"
                value={business_recruitment_welfare10}
                onChange={onChangeWelfare10}
              />
            </div>
          </label>
          <label className="select_box">
            <p>식사제공</p>
            <div className="sub_select">
              <div
                className="select"
                onClick={() => {
                  setMeal("1식");
                }}
                style={selectStyle1("1식")}
              >
                1식
              </div>
              <div
                className="select"
                onClick={() => {
                  setMeal("2식");
                }}
                style={selectStyle1("2식")}
              >
                2식
              </div>
              <div
                className="select"
                onClick={() => {
                  setMeal("3식");
                }}
                style={selectStyle1("3식")}
              >
                3식
              </div>
              <div
                className="select"
                onClick={() => {
                  setMeal("중식비 지급");
                }}
                style={selectStyle1("중식비 지급")}
              >
                중식비 지급
              </div>
            </div>
          </label>
          <label className="select_box">
            <p></p>
            <div className="sub_select sub_select1">
              <div
                className="select"
                onClick={() => {
                  setMeal("해당사항 없음");
                }}
                style={selectStyle1("해당사항 없음")}
              >
                해당사항 없음
              </div>
            </div>
          </label>
          <label className="select_box">
            <p>
              장애인용
              <br />
              복지시설
            </p>
            <div className="sub_select sub_select3">
              <div
                className="select"
                onClick={() => {
                  setHandicapped1(!business_recruitment_handicapped1);
                }}
                style={{
                  borderColor: business_recruitment_handicapped1
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_handicapped1
                    ? "#2196F3"
                    : "#707070",
                }}
              >
                주차장
              </div>
              <div
                className="select"
                onClick={() => {
                  setHandicapped2(!business_recruitment_handicapped2);
                }}
                style={{
                  borderColor: business_recruitment_handicapped2
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_handicapped2
                    ? "#2196F3"
                    : "#707070",
                }}
              >
                승강기
              </div>
              <div
                className="select"
                onClick={() => {
                  setHandicapped3(!business_recruitment_handicapped3);
                }}
                style={{
                  borderColor: business_recruitment_handicapped3
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_handicapped3
                    ? "#2196F3"
                    : "#707070",
                }}
              >
                건물 내부 경사로
              </div>
            </div>
          </label>
          <label className="select_box">
            <p></p>
            <div className="sub_select sub_select3">
              <div
                className="select"
                onClick={() => {
                  setHandicapped4(!business_recruitment_handicapped4);
                }}
                style={{
                  borderColor: business_recruitment_handicapped4
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_handicapped4
                    ? "#2196F3"
                    : "#707070",
                }}
              >
                화장실
              </div>
              <div
                className="select"
                onClick={() => {
                  setHandicapped5(!business_recruitment_handicapped5);
                }}
                style={{
                  borderColor: business_recruitment_handicapped5
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_handicapped5
                    ? "#2196F3"
                    : "#707070",
                }}
              >
                기타
              </div>
              <input
                type="text"
                name="business_recruitment_handicapped6"
                value={business_recruitment_handicapped6}
                onChange={onChangeHandicapped6}
              />
            </div>
          </label>
          <p>우대조건</p>
          <label className="select_box">
            <p>전산활용</p>
            <div className="sub_select sub_select1">
              <div
                className="select"
                onClick={() => {
                  setProgram1(!business_recruitment_program1);
                }}
                style={{
                  borderColor: business_recruitment_program1
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_program1 ? "#2196F3" : "#707070",
                }}
              >
                문서작성
              </div>
              <div
                className="select"
                onClick={() => {
                  setProgram2(!business_recruitment_program2);
                }}
                style={{
                  borderColor: business_recruitment_program2
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_program2 ? "#2196F3" : "#707070",
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
                  setProgram3(!business_recruitment_program3);
                }}
                style={{
                  borderColor: business_recruitment_program3
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_program3 ? "#2196F3" : "#707070",
                }}
              >
                프레젠테이션
              </div>
              <div
                className="select"
                onClick={() => {
                  setProgram4(!business_recruitment_program4);
                }}
                style={{
                  borderColor: business_recruitment_program4
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_program4 ? "#2196F3" : "#707070",
                }}
              >
                회계프로그램
              </div>
            </div>
          </label>
          <label className="select_box">
            <p></p>
            <div className="sub_select">
              <div
                className="select"
                onClick={() => {
                  setProgram5(!business_recruitment_program5);
                }}
                style={{
                  borderColor: business_recruitment_program5
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_program5 ? "#2196F3" : "#707070",
                }}
              >
                기타
              </div>
              <input
                type="text"
                name="business_recruitment_program6"
                value={business_recruitment_program6}
                onChange={onChangeProgram6}
              />
            </div>
          </label>
          <label className="select_box">
            <p>회계프로그램</p>
            <div className="sub_select sub_select1">
              <div
                className="select"
                onClick={() => {
                  setAccountingProgram("경험있음");
                }}
                style={selectStyle2("경험있음")}
              >
                경험있음
              </div>
              <div
                className="select"
                onClick={() => {
                  setAccountingProgram("경험없음");
                }}
                style={selectStyle2("경험없음")}
              >
                경험없음
              </div>
            </div>
          </label>
          <label className="select_box">
            <p>수준</p>
            <div className="sub_select sub_select1">
              <div
                className="select"
                onClick={() => {
                  setAccountingProgramLevel("상");
                }}
                style={selectStyle3("상")}
              >
                상
              </div>
              <div
                className="select"
                onClick={() => {
                  setAccountingProgramLevel("중");
                }}
                style={selectStyle3("중")}
              >
                중
              </div>
              <div
                className="select"
                onClick={() => {
                  setAccountingProgramLevel("하");
                }}
                style={selectStyle3("하")}
              >
                하
              </div>
            </div>
          </label>
          <label className="select_box">
            <p>운전능력</p>
            <div className="sub_select sub_select1">
              <div
                className="select"
                onClick={() => {
                  setAbilityDrive1(!business_recruitment_abilityDrive1);
                }}
                style={{
                  borderColor: business_recruitment_abilityDrive1
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_abilityDrive1
                    ? "#2196F3"
                    : "#707070",
                }}
              >
                운전면허증
              </div>
              <div
                className="select"
                onClick={() => {
                  setAbilityDrive2(!business_recruitment_abilityDrive2);
                }}
                style={{
                  borderColor: business_recruitment_abilityDrive2
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_abilityDrive2
                    ? "#2196F3"
                    : "#707070",
                }}
              >
                차량소지자
              </div>
            </div>
          </label>
          <label className="select_box">
            <p>전공</p>
            <div className="sub_select">
              <div
                className="select"
                onClick={() => {
                  setMajor1(!business_recruitment_major1);
                }}
                style={{
                  borderColor: business_recruitment_major1
                    ? "#2196F3"
                    : "#eeeeee",
                  color: business_recruitment_major1 ? "#2196F3" : "#707070",
                }}
              >
                특정 전공자
              </div>
              <input
                type="text"
                name="business_recruitment_major2"
                value={business_recruitment_major2}
                onChange={onChangeMajor2}
              />
            </div>
          </label>

          <button type="submit" onClick={onSubmitForm}>
            {state && state.recruitments[0] ? "저장" : "등록"}
          </button>
        </form>
      </div>
    </>
  );
};

export default RecruitmentComponent;
