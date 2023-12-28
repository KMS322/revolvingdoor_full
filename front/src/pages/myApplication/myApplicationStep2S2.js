import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_APPLICATION_REQUEST } from "../../reducers/businessApplication";
import { useNavigate, useLocation } from "react-router-dom";
import useInput from "../hooks/useInput";
const MyApplicationStep2S2 = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const newState = state.copiedState;
  const dispatch = useDispatch();
  const [business_application_payType, setPayType] = useState(
    newState.business_application_payType
  );
  const [business_application_payMin, onChangePayMin] = useInput(
    newState.business_application_payMin
  );
  const [business_application_payMax, onChangePayMax] = useInput(
    newState.business_application_payMax
  );
  const [business_application_workTime1Hour, onChangeWorkTime1Hour] = useInput(
    newState.business_application_workTime1Hour
  );
  const [business_application_workTime1Minute, onChangeWorkTime1Minute] =
    useInput(newState.business_application_workTime1Minute);
  const [business_application_workTime2Hour, onChangeWorkTime2Hour] = useInput(
    newState.business_application_workTime2Hour
  );
  const [business_application_workTime2Minute, onChangeWorkTime2Minute] =
    useInput(newState.business_application_workTime2Minute);
  const [business_application_workTimeDay, onChangeWorkTimeDay] = useInput(
    newState.business_application_workTimeDay
  );
  const [business_application_workTimeHour, onChangeWorkTimeHour] = useInput(
    newState.business_application_workTimeHour
  );
  const [business_application_breakTime1Hour, onChangebreakTime1Hour] =
    useInput(newState.business_application_breakTime1Hour);
  const [business_application_breakTime1Minute, onChangebreakTime1Minute] =
    useInput(newState.business_application_breakTime1Minute);
  const [business_application_breakTime2Hour, onChangebreakTime2Hour] =
    useInput(newState.business_application_breakTime2Hour);
  const [business_application_breakTime2Minute, onChangebreakTime2Minute] =
    useInput(newState.business_application_breakTime2Minute);
  const [business_application_workPlace, setWorkPlace] = useState(
    newState.business_application_workPlace
  );
  const [business_application_severancePay, setSeverancePay] = useState(
    newState.business_application_severancePay
  );
  const [business_application_employmentType, setEmploymentType] = useState(
    newState.business_application_employmentType
  );
  const [
    business_application_employmentTypeMonth,
    onChangeEmploymentTypeMonth,
  ] = useInput(newState.business_application_employmentTypeMonth);
  const [business_application_rank1, onChangeRank1] = useInput(
    newState.business_application_rank1
  );
  const [business_application_rank2, onChangeRank2] = useInput(
    newState.business_application_rank2
  );
  const [business_application_rank3, onChangeRank3] = useInput(
    newState.business_application_rank3
  );
  const [business_application_rank4, onChangeRank4] = useInput(
    newState.business_application_rank4
  );

  const { changeApplicationDone } = useSelector(
    (state) => state.businessApplication
  );
  useEffect(() => {
    if (changeApplicationDone) {
      navigate("/myPageBusiness");
    }
  }, [changeApplicationDone]);

  const selectStyle1 = (data) => {
    return {
      borderColor:
        business_application_payType === data ? "#2196F3" : "#eeeeee",
      color: business_application_payType === data ? "#2196F3" : "#707070",
    };
  };
  const selectStyle2 = (data) => {
    return {
      borderColor:
        business_application_workPlace === data ? "#2196F3" : "#eeeeee",
      color: business_application_workPlace === data ? "#2196F3" : "#707070",
    };
  };
  const selectStyle3 = (data) => {
    return {
      borderColor:
        business_application_severancePay === data ? "#2196F3" : "#eeeeee",
      color: business_application_severancePay === data ? "#2196F3" : "#707070",
    };
  };
  const selectStyle4 = (data) => {
    return {
      borderColor:
        business_application_employmentType === data ? "#2196F3" : "#eeeeee",
      color:
        business_application_employmentType === data ? "#2196F3" : "#707070",
    };
  };
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: CHANGE_APPLICATION_REQUEST,
        data: {
          applicationId: newState.id,
          step1_data: state.step1_data,
          business_application_payType,
          business_application_payMin,
          business_application_payMax,
          business_application_workTime1Hour,
          business_application_workTime1Minute,
          business_application_workTime2Hour,
          business_application_workTime2Minute,
          business_application_workTimeDay,
          business_application_workTimeHour,
          business_application_breakTime1Hour,
          business_application_breakTime1Minute,
          business_application_breakTime2Hour,
          business_application_breakTime2Minute,
          business_application_workPlace,
          business_application_severancePay,
          business_application_employmentType,
          business_application_employmentTypeMonth,
          business_application_rank1,
          business_application_rank2,
          business_application_rank3,
          business_application_rank4,
        },
      });
    },
    [
      state,
      business_application_payType,
      business_application_payMin,
      business_application_payMax,
      business_application_workTime1Hour,
      business_application_workTime1Minute,
      business_application_workTime2Hour,
      business_application_workTime2Minute,
      business_application_workTimeDay,
      business_application_workTimeHour,
      business_application_breakTime1Hour,
      business_application_breakTime1Minute,
      business_application_breakTime2Hour,
      business_application_breakTime2Minute,
      business_application_workPlace,
      business_application_severancePay,
      business_application_employmentType,
      business_application_employmentTypeMonth,
      business_application_rank1,
      business_application_rank2,
      business_application_rank3,
      business_application_rank4,
    ]
  );
  return (
    <div className="applicationStep2_s2">
      <form>
        <p>근로 조건</p>
        <label className="select_box">
          <p>임금</p>
          <div className="sub_select sub_select1">
            <div
              className="select"
              onClick={() => {
                setPayType("시급");
              }}
              style={selectStyle1("시급")}
            >
              시급
            </div>
            <div
              className="select"
              onClick={() => {
                setPayType("일급");
              }}
              style={selectStyle1("일급")}
            >
              일급
            </div>
            <div
              className="select"
              onClick={() => {
                setPayType("월급");
              }}
              style={selectStyle1("월급")}
            >
              월급
            </div>
            <div
              className="select"
              onClick={() => {
                setPayType("연봉");
              }}
              style={selectStyle1("연봉")}
            >
              연봉
            </div>
          </div>
        </label>
        <label className="input_box">
          <p></p>
          <div className="sub_input sub_input1">
            <input
              type="text"
              name="business_application_payMin"
              value={business_application_payMin}
              onChange={onChangePayMin}
            />
            <p>원</p>
            <p>~</p>
            <input
              type="text"
              name="business_application_payMax"
              value={business_application_payMax}
              onChange={onChangePayMax}
            />
            <p>원</p>
          </div>
        </label>
        <label className="input_box">
          <p>근무 시간</p>
          <div className="sub_input sub_input2">
            <input
              type="text"
              name="business_application_workTime1Hour"
              value={business_application_workTime1Hour}
              onChange={onChangeWorkTime1Hour}
            />
            <p>:</p>
            <input
              type="text"
              name="business_application_workTime1Minute"
              value={business_application_workTime1Minute}
              onChange={onChangeWorkTime1Minute}
            />
            <p>~</p>
            <input
              type="text"
              name="business_application_workTime2Hour"
              value={business_application_workTime2Hour}
              onChange={onChangeWorkTime2Hour}
            />
            <p>:</p>
            <input
              type="text"
              name="business_application_workTime2Minute"
              value={business_application_workTime2Minute}
              onChange={onChangeWorkTime2Minute}
            />
          </div>
        </label>
        <label className="input_box">
          <p></p>
          <div className="sub_input sub_input3">
            <input
              type="text"
              name="business_application_workTimeDay"
              value={business_application_workTimeDay}
              onChange={onChangeWorkTimeDay}
            />
            <p>일</p>
            <input
              type="text"
              name="business_application_workTimeHour"
              value={business_application_workTimeHour}
              onChange={onChangeWorkTimeHour}
            />
            <p>시간</p>
          </div>
        </label>
        <label className="input_box">
          <p>휴게 시간</p>
          <div className="sub_input sub_input2">
            <input
              type="text"
              name="business_application_breakTime1Hour"
              value={business_application_breakTime1Hour}
              onChange={onChangebreakTime1Hour}
            />
            <p>:</p>
            <input
              type="text"
              name="business_application_breakTime1Minute"
              value={business_application_breakTime1Minute}
              onChange={onChangebreakTime1Minute}
            />
            <p>~</p>
            <input
              type="text"
              name="business_application_breakTime2Hour"
              value={business_application_breakTime2Hour}
              onChange={onChangebreakTime2Hour}
            />
            <p>:</p>
            <input
              type="text"
              name="business_application_breakTime2Minute"
              value={business_application_breakTime2Minute}
              onChange={onChangebreakTime2Minute}
            />
          </div>
        </label>
        <label className="select_box">
          <p>근무장소</p>
          <div className="sub_select sub_select2">
            <div
              className="select"
              onClick={() => {
                setWorkPlace("사업자 주소와 동일 (출근)");
              }}
              style={selectStyle2("사업자 주소와 동일 (출근)")}
            >
              사업자 주소와 동일 (출근)
            </div>
          </div>
        </label>
        <label className="select_box">
          <p></p>
          <div className="sub_select sub_select2">
            <div
              className="select"
              onClick={() => {
                setWorkPlace("재택 근무 가능");
              }}
              style={selectStyle2("재택 근무 가능")}
            >
              재택 근무 가능
            </div>
          </div>
        </label>
        <label className="select_box">
          <p></p>
          <div className="sub_select sub_select2">
            <div
              className="select"
              onClick={() => {
                setWorkPlace("출근·재택 병행");
              }}
              style={selectStyle2("출근·재택 병행")}
            >
              출근·재택 병행
            </div>
          </div>
        </label>
        <label className="select_box">
          <p>퇴직 급여</p>
          <div className="sub_select sub_select2">
            <div
              className="select"
              onClick={() => {
                setSeverancePay("퇴직금");
              }}
              style={selectStyle3("퇴직금")}
            >
              퇴직금
            </div>
          </div>
        </label>
        <label className="select_box">
          <p></p>
          <div className="sub_select sub_select2">
            <div
              className="select"
              onClick={() => {
                setSeverancePay("퇴직 연금");
              }}
              style={selectStyle3("퇴직 연금")}
            >
              퇴직 연금
            </div>
          </div>
        </label>
        <label className="select_box">
          <p></p>
          <div className="sub_select sub_select2">
            <div
              className="select"
              onClick={() => {
                setSeverancePay("해당사항 없음");
              }}
              style={selectStyle3("해당사항 없음")}
            >
              해당사항 없음
            </div>
          </div>
        </label>
        <label className="select_box select_box1">
          <p>고용 형태</p>
          <div className="sub_select sub_select2">
            <div
              className="select"
              onClick={() => {
                setEmploymentType("시간(선택)제");
              }}
              style={selectStyle4("시간(선택)제")}
            >
              시간(선택)제
            </div>
          </div>
        </label>
        <label className="select_box select_box1">
          <p></p>
          <div className="sub_select sub_select2">
            <div
              className="select"
              onClick={() => {
                setEmploymentType("협의 결정");
              }}
              style={selectStyle4("협의 결정")}
            >
              협의 결정
            </div>
          </div>
        </label>
        <label className="select_box select_box1">
          <p></p>
          <div className="sub_select sub_select3">
            <div
              className="select"
              onClick={() => {
                setEmploymentType("기간의 정함이 있는 근로계약");
              }}
              style={selectStyle4("기간의 정함이 있는 근로계약")}
            >
              기간의 정함이 있는 근로계약
            </div>
            <input
              type="text"
              name="business_application_employmentTypeMonth"
              value={business_application_employmentTypeMonth}
              onChange={onChangeEmploymentTypeMonth}
            />
            <p>개월</p>
          </div>
        </label>
        <label className="select_box select_box1">
          <p>
            임시직
            <br />
            채용우선순위
          </p>
          <div className="sub_select sub_select3">
            <div className="select" style={{ cursor: "inherit" }}>
              근무시작 가능 시기
            </div>
            <input
              type="text"
              name="business_application_rank1"
              value={business_application_rank1}
              onChange={onChangeRank1}
            />
            <p>위</p>
          </div>
        </label>
        <label className="select_box select_box1">
          <p></p>
          <div className="sub_select sub_select3">
            <div className="select" style={{ cursor: "inherit" }}>
              경력
            </div>
            <input
              type="text"
              name="business_application_rank2"
              value={business_application_rank2}
              onChange={onChangeRank2}
            />
            <p>위</p>
          </div>
        </label>
        <label className="select_box select_box1">
          <p></p>
          <div className="sub_select sub_select3">
            <div className="select" style={{ cursor: "inherit" }}>
              근무형태
            </div>
            <input
              type="text"
              name="business_application_rank3"
              value={business_application_rank3}
              onChange={onChangeRank3}
            />
            <p>위</p>
          </div>
        </label>
        <label className="select_box select_box1">
          <p></p>
          <div className="sub_select sub_select3">
            <div className="select" style={{ cursor: "inherit" }}>
              거주지
            </div>
            <input
              type="text"
              name="business_application_rank4"
              value={business_application_rank4}
              onChange={onChangeRank4}
            />
            <p>위</p>
          </div>
        </label>

        <button type="submit" onClick={onSubmitForm}>
          수정하기
        </button>
      </form>
    </div>
  );
};

export default MyApplicationStep2S2;
