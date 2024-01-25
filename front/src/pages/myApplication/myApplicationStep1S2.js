import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useInput from "../hooks/useInput";
const MyApplicationStep1S2 = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const copiedState = state ? { ...state.application } : null;
  const [business_application_name, onChangeName] = useInput(
    state.application.business_application_name
  );
  const [business_application_type, onChangeType] = useInput(
    state.application.business_application_type
  );
  const [business_application_number, onChangeNumber] = useInput(
    state.application.business_application_number
  );
  const [business_application_startNow, setStartNow] = useState(
    state.application.business_application_startNow
  );
  const [business_application_startYear, onChangeStartYear] = useInput(
    state.application.business_application_startYear
  );
  const [business_application_startMonth, onChangeStartMonth] = useInput(
    state.application.business_application_startMonth
  );
  const [business_application_startDay, onChangeStartDay] = useInput(
    state.application.business_application_startDay
  );
  const [business_application_expectPeriod, setExpectPeriod] = useState(
    state.application.business_application_expectPeriod
  );
  const [business_application_workContent1, setWorkContent1] = useState(
    state.application.business_application_workContent1
  );
  const [business_application_workContent2, setWorkContent2] = useState(
    state.application.business_application_workContent2
  );
  const [business_application_workContent3, setWorkContent3] = useState(
    state.application.business_application_workContent3
  );
  const [business_application_workContent4, setWorkContent4] = useState(
    state.application.business_application_workContent4
  );
  const [business_application_workContent5, setWorkContent5] = useState(
    state.application.business_application_workContent5
  );
  const [business_application_workContent6, setWorkContent6] = useState(
    state.application.business_application_workContent6
  );
  const [business_application_workContent7, setWorkContent7] = useState(
    state.application.business_application_workContent7
  );
  const [business_application_program, setProgram] = useState(
    state.application.business_application_program
  );
  const [business_application_program1, onChangeProgram1] = useInput(
    state.application.business_application_program1
  );
  const [business_application_career, setCareer] = useState(
    state.application.business_application_career
  );
  const [business_application_careerMin, onChangeCareerMin] = useInput(
    state.application.business_application_careerMin
  );
  const [business_application_careerMax, onChangeCareerMax] = useInput(
    state.application.business_application_careerMax
  );
  const [business_application_schoolFinal, setSchoolFinal] = useState(
    state.application.business_application_schoolFinal
  );
  const [business_application_schoolLisence, onChangeSchoolLisence] = useInput(
    state.application.business_application_schoolLisence
  );
  const [business_application_schoolLisence1, setSchoolLisence1] = useState(
    state.application.business_application_schoolLisence1
  );

  const [selectStart, setSelectStart] = useState(true);
  const [selectCareer, setSelectCareer] = useState(false);

  const selectStyle1 = (data) => {
    return {
      borderColor:
        business_application_expectPeriod === data ? "#2196F3" : "#eeeeee",
      color: business_application_expectPeriod === data ? "#2196F3" : "#707070",
    };
  };
  const selectStyle2 = (data) => {
    return {
      borderColor: business_application_career === data ? "#2196F3" : "#eeeeee",
      color: business_application_career === data ? "#2196F3" : "#707070",
    };
  };
  const selectStyle3 = (data) => {
    return {
      borderColor:
        business_application_schoolFinal === data ? "#2196F3" : "#eeeeee",
      color: business_application_schoolFinal === data ? "#2196F3" : "#707070",
    };
  };
  const selectStyle4 = (data) => {
    return {
      borderColor:
        business_application_schoolLisence1 === data ? "#2196F3" : "#eeeeee",
      color:
        business_application_schoolLisence1 === data ? "#2196F3" : "#707070",
    };
  };
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      const step1_data = {
        business_application_name,
        business_application_type,
        business_application_number,
        business_application_startNow,
        business_application_startYear,
        business_application_startMonth,
        business_application_startDay,
        business_application_expectPeriod,
        business_application_workContent1,
        business_application_workContent2,
        business_application_workContent3,
        business_application_workContent4,
        business_application_workContent5,
        business_application_workContent6,
        business_application_workContent7,
        business_application_program,
        business_application_program1,
        business_application_career,
        business_application_careerMin,
        business_application_careerMax,
        business_application_schoolFinal,
        business_application_schoolLisence,
        business_application_schoolLisence1,
      };
      navigate("/myApplicationStep2", { state: { copiedState, step1_data } });
    },
    [
      business_application_name,
      business_application_type,
      business_application_number,
      business_application_startNow,
      business_application_startYear,
      business_application_startMonth,
      business_application_startDay,
      business_application_expectPeriod,
      business_application_workContent1,
      business_application_workContent2,
      business_application_workContent3,
      business_application_workContent4,
      business_application_workContent5,
      business_application_workContent6,
      business_application_workContent7,
      business_application_program,
      business_application_program1,
      business_application_career,
      business_application_careerMin,
      business_application_careerMax,
      business_application_schoolFinal,
      business_application_schoolLisence,
      business_application_schoolLisence1,
    ]
  );
  return (
    <div className="applicationStep1_s2">
      <form>
        <p className="title">구인 신청서 작성</p>
        <p>구인사항</p>
        <label className="input_box">
          <p>채용 제목</p>
          <input
            type="text"
            name="business_application_name"
            value={business_application_name}
            onChange={onChangeName}
          />
        </label>
        <label className="input_box">
          <p>모집 직종</p>
          <input
            type="text"
            name="business_application_type"
            value={business_application_type}
            onChange={onChangeType}
          />
        </label>
        <label className="input_box">
          <p>모집 인원</p>
          <div className="sub_input sub_input1">
            <input
              type="text"
              name="business_application_number"
              value={business_application_number}
              onChange={onChangeNumber}
            />
            <p>명</p>
          </div>
        </label>
        <label className="select_box">
          <p>근무 시기</p>
          <div className="sub_select sub_select1">
            <div
              className="select"
              onClick={() => {
                setStartNow(!business_application_startNow);
                if (business_application_startNow) {
                  setSelectStart(false);
                } else {
                  setSelectStart(true);
                }
              }}
              style={{
                borderColor: business_application_startNow
                  ? "#2196F3"
                  : "#eeeeee",
                color: business_application_startNow ? "#2196F3" : "#707070",
              }}
            >
              공고일 이후 채용 즉시
            </div>
          </div>
        </label>
        <label className="input_box">
          <p></p>
          <div className="sub_input sub_input2">
            <input
              type="text"
              name="business_application_startYear"
              value={business_application_startYear}
              onChange={onChangeStartYear}
              disabled={selectStart}
            />
            <p>년</p>
            <input
              type="text"
              name="business_application_startMonth"
              value={business_application_startMonth}
              onChange={onChangeStartMonth}
              disabled={selectStart}
            />
            <p>월</p>
            <input
              type="text"
              name="business_application_startDay"
              value={business_application_startDay}
              onChange={onChangeStartDay}
              disabled={selectStart}
            />
            <p>일</p>
          </div>
        </label>
        <label className="select_box">
          <p>예상 근무기간</p>
          <div className="sub_select sub_select2">
            <div
              className="select"
              onClick={() => {
                setExpectPeriod("30일 이내");
              }}
              style={selectStyle1("30일 이내")}
            >
              30일 이내
            </div>
            <div
              className="select"
              onClick={() => {
                setExpectPeriod("1~3개월");
              }}
              style={selectStyle1("1~3개월")}
            >
              1~3개월
            </div>
            <div
              className="select"
              onClick={() => {
                setExpectPeriod("6개월");
              }}
              style={selectStyle1("6개월")}
            >
              6개월
            </div>
            <div
              className="select"
              onClick={() => {
                setExpectPeriod("정규직채용전");
              }}
              style={selectStyle1("정규직채용전")}
            >
              정규직채용전
            </div>
          </div>
        </label>
        <label className="select_box">
          <p>직무 내용</p>
          <div className="sub_select sub_select2">
            <div
              className="select"
              onClick={() => {
                setWorkContent1(!business_application_workContent1);
              }}
              style={{
                borderColor: business_application_workContent1
                  ? "#2196F3"
                  : "#eeeeee",
                color: business_application_workContent1
                  ? "#2196F3"
                  : "#707070",
              }}
            >
              기장·신고
            </div>
            <div
              className="select"
              onClick={() => {
                setWorkContent2(!business_application_workContent2);
              }}
              style={{
                borderColor: business_application_workContent2
                  ? "#2196F3"
                  : "#eeeeee",
                color: business_application_workContent2
                  ? "#2196F3"
                  : "#707070",
              }}
            >
              결산
            </div>
            <div
              className="select"
              onClick={() => {
                setWorkContent3(!business_application_workContent3);
              }}
              style={{
                borderColor: business_application_workContent3
                  ? "#2196F3"
                  : "#eeeeee",
                color: business_application_workContent3
                  ? "#2196F3"
                  : "#707070",
              }}
            >
              조정
            </div>
            <div
              className="select"
              onClick={() => {
                setWorkContent4(!business_application_workContent4);
              }}
              style={{
                borderColor: business_application_workContent4
                  ? "#2196F3"
                  : "#eeeeee",
                color: business_application_workContent4
                  ? "#2196F3"
                  : "#707070",
              }}
            >
              회계감사
            </div>
          </div>
        </label>
        <label className="select_box">
          <p></p>
          <div className="sub_select sub_select3">
            <div
              className="select"
              onClick={() => {
                setWorkContent5(!business_application_workContent5);
              }}
              style={{
                borderColor: business_application_workContent5
                  ? "#2196F3"
                  : "#eeeeee",
                color: business_application_workContent5
                  ? "#2196F3"
                  : "#707070",
              }}
            >
              세무조사
            </div>
            <div
              className="select"
              onClick={() => {
                setWorkContent6(!business_application_workContent6);
              }}
              style={{
                borderColor: business_application_workContent6
                  ? "#2196F3"
                  : "#eeeeee",
                color: business_application_workContent6
                  ? "#2196F3"
                  : "#707070",
              }}
            >
              컨설팅
            </div>
            <div
              className="select"
              onClick={() => {
                setWorkContent7(!business_application_workContent7);
              }}
              style={{
                borderColor: business_application_workContent7
                  ? "#2196F3"
                  : "#eeeeee",
                color: business_application_workContent7
                  ? "#2196F3"
                  : "#707070",
              }}
            >
              연구개발비정산
            </div>
          </div>
        </label>
        <label className="select_box">
          <p>사용 프로그램</p>
          <div className="sub_select sub_select1">
            <div
              className="select"
              onClick={() => {
                setProgram(!business_application_program);
              }}
              style={{
                borderColor: business_application_program
                  ? "#2196F3"
                  : "#eeeeee",
                color: business_application_program ? "#2196F3" : "#707070",
              }}
            >
              더죤
            </div>
          </div>
        </label>
        <label className="select_box">
          <p></p>
          <div className="sub_select sub_select3">
            <div className="select" style={{ cursor: "inherit" }}>
              기타
            </div>
            <input
              type="text"
              name="business_application_program1"
              value={business_application_program1}
              onChange={onChangeProgram1}
            />
          </div>
        </label>
        <label className="select_box">
          <p>경력</p>
          <div className="sub_select sub_select4">
            <div
              className="select"
              onClick={() => {
                setCareer("관계없음");
                setSelectCareer(true);
              }}
              style={selectStyle2("관계없음")}
            >
              관계없음
            </div>
            <div
              className="select"
              onClick={() => {
                setCareer("신입");
                setSelectCareer(true);
              }}
              style={selectStyle2("신입")}
            >
              신입
            </div>
          </div>
        </label>
        <label className="select_box">
          <p></p>
          <div className="sub_select sub_select5">
            <div
              className="select"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSelectCareer(false);
                setCareer(false);
              }}
            >
              경력
            </div>
            <input
              type="text"
              name="business_application_careerMin"
              value={business_application_careerMin}
              onChange={onChangeCareerMin}
              disabled={selectCareer}
            />
            <p>년 ~ </p>
            <input
              type="text"
              name="business_application_careerMax"
              value={business_application_careerMax}
              onChange={onChangeCareerMax}
              disabled={selectCareer}
            />
            <p>년</p>
          </div>
        </label>
        <label className="select_box">
          <p>학력</p>
          <div className="sub_select sub_select2">
            <div
              className="select"
              onClick={() => {
                setSchoolFinal("고졸이상");
              }}
              style={selectStyle3("고졸이상")}
            >
              고졸이상
            </div>
            <div
              className="select"
              onClick={() => {
                setSchoolFinal("전문대졸이상");
              }}
              style={selectStyle3("전문대졸이상")}
            >
              전문대졸이상
            </div>
            <div
              className="select"
              onClick={() => {
                setSchoolFinal("대졸이상");
              }}
              style={selectStyle3("대졸이상")}
            >
              대졸이상
            </div>
            <div
              className="select"
              onClick={() => {
                setSchoolFinal("관계없음");
              }}
              style={selectStyle3("관계없음")}
            >
              관계없음
            </div>
          </div>
        </label>
        <label className="input_box">
          <p>자격·면허</p>
          <input
            type="text"
            name="business_application_schoolLisence"
            value={business_application_schoolLisence}
            onChange={onChangeSchoolLisence}
          />
        </label>
        <label className="select_box">
          <p></p>
          <div className="sub_select sub_select2">
            <div
              className="select"
              onClick={() => {
                setSchoolLisence1("관계없음");
              }}
              style={selectStyle4("관계없음")}
            >
              관계없음
            </div>
            <div
              className="select"
              onClick={() => {
                setSchoolLisence1("필수");
              }}
              style={selectStyle4("필수")}
            >
              필수
            </div>
            <div
              className="select"
              onClick={() => {
                setSchoolLisence1("우대");
              }}
              style={selectStyle4("우대")}
            >
              우대
            </div>
          </div>
        </label>

        <button type="submit" onClick={onSubmitForm}>
          다음
        </button>
      </form>
    </div>
  );
};

export default MyApplicationStep1S2;
