import "../../css/resume.css";
import "../../css/resume_mobile.css";
import Nav from "../nav";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_RESUME_REQUEST } from "../../reducers/userResume";
import useInput from "../hooks/useInput";
const ResumeComponent = () => {
  const dispatch = useDispatch();
  const [user_resume_title, onChangeTitle] = useInput("");
  const [user_resume_school, onChangeSchool] = useInput("");
  const [user_resume_schoolMajor, onChangeSchoolMajor] = useInput("");
  const [user_resume_schoolPeriod1Year, onChangeSchoolPeriod1Year] =
    useInput("");
  const [user_resume_schoolPeriod1Month, onChangeSchoolPeriod1Month] =
    useInput("");
  const [user_resume_schoolPeriod2Year, onChangeSchoolPeriod2Year] =
    useInput("");
  const [user_resume_schoolPeriod2Month, onChangeSchoolPeriod2Month] =
    useInput("");
  const [user_resume_schoolFinal, setSchoolFinal] = useState();
  const [user_resume_hopeCompany, setHopeCompany] = useState();
  const [user_resume_hopeRegion1, onChangeHopeRegion1] = useInput("");
  const [user_resume_hopeRegion2, onChangeHopeRegion2] = useInput("");
  const [user_resume_hopeRegion, setHopeRegion] = useState(false);

  const [user_resume_hopePayType1, setHopePayType1] = useState();
  const [user_resume_hopePayType2, setHopePayType2] = useState();
  const [user_resume_hopePay, onChangeHopePay] = useInput("");
  const [user_resume_hopeWork1, setHopeWork1] = useState();
  const [user_resume_hopeWork2, setHopeWork2] = useState();
  const [user_resume_hopeWork3, setHopeWork3] = useState();
  const [user_resume_hopeWork4, setHopeWork4] = useState();
  const [user_resume_hopeStartYear, onChangeHopeStartYear] = useInput("");
  const [user_resume_hopeStartMonth, onChangeHopeStartMonth] = useInput("");
  const [user_resume_hopeStartDay, onChangeHopeStartDay] = useInput("");
  const [user_resume_hopeWorkTime1Hour, setHopeWorkTime1Hour] = useInput("");
  const [user_resume_hopeWorkTime1Minute, setHopeWorkTime1Minute] =
    useInput("");
  const [user_resume_hopeWorkTime2Hour, setHopeWorkTime2Hour] = useInput("");
  const [user_resume_hopeWorkTime2Minute, setHopeWorkTime2Minute] =
    useInput("");
  // const [workType, setWorkType] = useState("");

  const { addResumeDone } = useSelector((state) => state.userResume);
  useEffect(() => {
    if (addResumeDone) {
      // navigate(-1);
      window.location.href = "/myPage";
    }
  }, [addResumeDone]);

  const selectStyle1 = (data) => {
    return {
      borderColor: user_resume_schoolFinal === data ? "#2196F3" : "#eeeeee",
      color: user_resume_schoolFinal === data ? "#2196F3" : "#707070",
    };
  };
  const selectStyle2 = (data) => {
    return {
      borderColor: user_resume_hopeCompany === data ? "#2196F3" : "#eeeeee",
      color: user_resume_hopeCompany === data ? "#2196F3" : "#707070",
    };
  };
  const selectStyle3 = (data) => {
    return {
      borderColor: user_resume_hopePayType1 === data ? "#2196F3" : "#eeeeee",
      color: user_resume_hopePayType1 === data ? "#2196F3" : "#707070",
    };
  };

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      let workType;
      if (user_resume_hopeWork1 === "1") {
        workType = "출퇴근";
      } else if (user_resume_hopeWork2 === "1") {
        workType = "출퇴근";
      } else if (user_resume_hopeWork3 === "1") {
        workType = "재택";
      } else if (user_resume_hopeWork4 === "1") {
        workType = "모두가능";
      }
      dispatch({
        type: ADD_RESUME_REQUEST,
        data: {
          user_resume_title,
          user_resume_school,
          user_resume_schoolMajor,
          user_resume_schoolPeriod1Year,
          user_resume_schoolPeriod1Month,
          user_resume_schoolPeriod2Year,
          user_resume_schoolPeriod2Month,
          user_resume_schoolFinal,
          user_resume_hopeCompany,
          user_resume_hopeRegion1,
          user_resume_hopeRegion2,
          user_resume_hopeRegion,
          user_resume_hopePayType1,
          user_resume_hopePayType2,
          user_resume_hopePay,
          user_resume_hopeWork1,
          user_resume_hopeWork2,
          user_resume_hopeWork3,
          user_resume_hopeWork4,
          user_resume_hopeStartYear,
          user_resume_hopeStartMonth,
          user_resume_hopeStartDay,
          user_resume_hopeWorkTime1Hour,
          user_resume_hopeWorkTime1Minute,
          user_resume_hopeWorkTime2Hour,
          user_resume_hopeWorkTime2Minute,
          workType,
        },
      });
    },
    [
      user_resume_title,
      user_resume_school,
      user_resume_schoolMajor,
      user_resume_schoolPeriod1Year,
      user_resume_schoolPeriod1Month,
      user_resume_schoolPeriod2Year,
      user_resume_schoolPeriod2Month,
      user_resume_schoolFinal,
      user_resume_hopeCompany,
      user_resume_hopeRegion1,
      user_resume_hopeRegion2,
      user_resume_hopeRegion,
      user_resume_hopePayType1,
      user_resume_hopePayType2,
      user_resume_hopePay,
      user_resume_hopeWork1,
      user_resume_hopeWork2,
      user_resume_hopeWork3,
      user_resume_hopeWork4,
      user_resume_hopeStartYear,
      user_resume_hopeStartMonth,
      user_resume_hopeStartDay,
      user_resume_hopeWorkTime1Hour,
      user_resume_hopeWorkTime1Minute,
      user_resume_hopeWorkTime2Hour,
      user_resume_hopeWorkTime2Minute,
    ]
  );
  return (
    <>
      <Nav />

      <div className="resume_s1">
        <p>
          MY페이지 {">"} 이력서관리 {">"} 신규이력서작성
        </p>
        <form>
          <p className="title">이력서 제목</p>
          <input
            className="title_input"
            type="text"
            name="user_resume_title"
            value={user_resume_title}
            onChange={onChangeTitle}
          />
          <p>학력사항</p>
          <label className="input_box">
            <p>최종학교명</p>
            <input
              type="text"
              name="user_resume_school"
              value={user_resume_school}
              onChange={onChangeSchool}
            />
          </label>
          <label className="input_box">
            <p>전공(부전공)</p>
            <input
              type="text"
              name="user_resume_schoolMajor"
              value={user_resume_schoolMajor}
              onChange={onChangeSchoolMajor}
            />
          </label>
          <label className="input_box">
            <p>재학기간</p>
            <div className="sub_input sub_input4">
              <input
                type="text"
                name="user_resume_schoolPeriod1Year"
                value={user_resume_schoolPeriod1Year}
                onChange={onChangeSchoolPeriod1Year}
              />
              <p>년</p>
              <input
                type="text"
                name="user_resume_schoolPeriod1Month"
                value={user_resume_schoolPeriod1Month}
                onChange={onChangeSchoolPeriod1Month}
              />
              <p>월</p>
              <p>~</p>
              <input
                type="text"
                name="user_resume_schoolPeriod2Year"
                value={user_resume_schoolPeriod2Year}
                onChange={onChangeSchoolPeriod2Year}
              />
              <p>년</p>
              <input
                type="text"
                name="user_resume_schoolPeriod2Month"
                value={user_resume_schoolPeriod2Month}
                onChange={onChangeSchoolPeriod2Month}
              />
              <p>월</p>
            </div>
          </label>
          <label className="select_box">
            <p>최종학력</p>
            <div className="sub_select sub_select1">
              <div
                className="select"
                onClick={() => {
                  setSchoolFinal("졸업(예정)");
                }}
                style={selectStyle1("졸업(예정)")}
              >
                졸업(예정)
              </div>
              <div
                className="select"
                onClick={() => {
                  setSchoolFinal("수료");
                }}
                style={selectStyle1("수료")}
              >
                수료
              </div>
              <div
                className="select"
                onClick={() => {
                  setSchoolFinal("재학");
                }}
                style={selectStyle1("재학")}
              >
                재학
              </div>
              <div
                className="select"
                onClick={() => {
                  setSchoolFinal("휴학");
                }}
                style={selectStyle1("휴학")}
              >
                휴학
              </div>
            </div>
          </label>
          <label className="select_box">
            <p></p>
            <div className="sub_select sub_select2">
              <div
                className="select"
                onClick={() => {
                  setSchoolFinal("중퇴");
                }}
                style={selectStyle1("중퇴")}
              >
                중퇴
              </div>
              <div
                className="select"
                onClick={() => {
                  setSchoolFinal("검정고시");
                }}
                style={selectStyle1("검정고시")}
              >
                검정고시
              </div>
              <div
                className="select"
                onClick={() => {
                  setSchoolFinal("무학");
                }}
                style={selectStyle1("무학")}
              >
                무학
              </div>
            </div>
          </label>
          <p>희망취업조건</p>
          <label className="select_box">
            <p>희망근무처</p>
            <div className="sub_select sub_select3">
              <div
                className="select"
                onClick={() => {
                  setHopeCompany("회계법인");
                }}
                style={selectStyle2("회계법인")}
              >
                회계법인
              </div>
              <div
                className="select"
                onClick={() => {
                  setHopeCompany("세무법인");
                }}
                style={selectStyle2("세무법인")}
              >
                세무법인
              </div>
              <div
                className="select"
                onClick={() => {
                  setHopeCompany("공인회계사 사무소");
                }}
                style={selectStyle2("공인회계사 사무소")}
              >
                공인회계사 사무소
              </div>
            </div>
          </label>
          <label className="select_box">
            <p></p>
            <div className="sub_select sub_select4">
              <div
                className="select"
                onClick={() => {
                  setHopeCompany("세무사 사무소");
                }}
                style={selectStyle2("세무사 사무소")}
              >
                세무사 사무소
              </div>
              <div
                className="select"
                onClick={() => {
                  setHopeCompany("기업");
                }}
                style={selectStyle2("기업")}
              >
                기업
              </div>
            </div>
          </label>
          <label className="input_box">
            <p>근무지역</p>
            <div className="sub_input sub_input1">
              <p>1순위</p>
              <p>2순위</p>
            </div>
          </label>
          <label className="input_box">
            <p></p>
            <div className="sub_input sub_input1">
              <input
                type="text"
                name="user_resume_hopeRegion1"
                value={user_resume_hopeRegion1}
                onChange={onChangeHopeRegion1}
                placeholder="대구"
              />
              <input
                type="text"
                name="user_resume_hopeRegion2"
                value={user_resume_hopeRegion2}
                onChange={onChangeHopeRegion2}
                placeholder="경산"
              />
            </div>
          </label>
          <label className="select_box">
            <p></p>
            <div className="sub_select sub_select1">
              <div
                className="select"
                onClick={() => {
                  setHopeRegion(!user_resume_hopeRegion);
                }}
                style={{
                  borderColor: user_resume_hopeRegion ? "#2196F3" : "#eeeeee",
                  color: user_resume_hopeRegion ? "#2196F3" : "#707070",
                }}
              >
                지역무관
              </div>
            </div>
          </label>
          <label className="select_box">
            <p>희망임금</p>
            <div className="sub_select sub_select2">
              <div
                className="select"
                onClick={() => {
                  setHopePayType1("월급");
                  if (user_resume_hopePayType2) {
                    setHopePayType2(false);
                  }
                }}
                style={selectStyle3("월급")}
              >
                월급
              </div>
              <div
                className="select"
                onClick={() => {
                  setHopePayType1("일급");
                  if (user_resume_hopePayType2) {
                    setHopePayType2(false);
                  }
                }}
                style={selectStyle3("일급")}
              >
                일급
              </div>
              <div
                className="select"
                onClick={() => {
                  setHopePayType1("시급");
                  if (user_resume_hopePayType2) {
                    setHopePayType2(false);
                  }
                }}
                style={selectStyle3("시급")}
              >
                시급
              </div>
            </div>
          </label>
          <label className="input_box">
            <p></p>
            <div className="sub_input sub_input2">
              <input
                type="text"
                name="user_resume_hopePay"
                value={user_resume_hopePay}
                onChange={onChangeHopePay}
              />
              <p>원 이상</p>
            </div>
          </label>
          <label className="select_box">
            <p></p>
            <div className="sub_select sub_select5">
              <div
                className="select"
                onClick={() => {
                  setHopePayType2(!user_resume_hopePayType2);
                  if (!user_resume_hopePayType2) {
                    setHopePayType1(false);
                  }
                }}
                style={{
                  borderColor: user_resume_hopePayType2 ? "#2196F3" : "#eeeeee",
                  color: user_resume_hopePayType2 ? "#2196F3" : "#707070",
                }}
              >
                면접 후 결정 가능
              </div>
            </div>
          </label>
          <label className="select_box select_box1">
            <p>
              고용형태
              <br />
              {/* <span>(복수선택가능)</span> */}
            </p>
            <div className="sub_select sub_select2">
              <div
                className="select"
                onClick={() => {
                  setHopeWork1("1");
                  setHopeWork2(false);
                  setHopeWork3(false);
                  setHopeWork4(false);
                }}
                style={{
                  borderColor:
                    user_resume_hopeWork1 === "1" ? "#2196F3" : "#eeeeee",
                  color: user_resume_hopeWork1 === "1" ? "#2196F3" : "#707070",
                }}
              >
                출근근무
              </div>
              {/* <div
                className="select"
                onClick={() => {
                  setHopeWork2("1");
                  setHopeWork1(false);
                  setHopeWork3(false);
                  setHopeWork4(false);
                }}
                style={{
                  borderColor:
                    user_resume_hopeWork2 === "1" ? "#2196F3" : "#eeeeee",
                  color: user_resume_hopeWork2 === "1" ? "#2196F3" : "#707070",
                }}
              >
                탄력근무
              </div> */}
              <div
                className="select"
                onClick={() => {
                  setHopeWork3("1");
                  setHopeWork1(false);
                  setHopeWork2(false);
                  setHopeWork4(false);
                }}
                style={{
                  borderColor:
                    user_resume_hopeWork3 === "1" ? "#2196F3" : "#eeeeee",
                  color: user_resume_hopeWork3 === "1" ? "#2196F3" : "#707070",
                }}
              >
                재택근무
              </div>
              <div
                className="select"
                onClick={() => {
                  setHopeWork4("1");
                  setHopeWork1(false);
                  setHopeWork2(false);
                  setHopeWork3(false);
                }}
                style={{
                  borderColor:
                    user_resume_hopeWork4 === "1" ? "#2196F3" : "#eeeeee",
                  color: user_resume_hopeWork4 === "1" ? "#2196F3" : "#707070",
                }}
              >
                모두가능
              </div>
            </div>
          </label>
          <label className="input_box">
            <p>취업희망시기</p>
            <div className="sub_input sub_input3">
              <input
                type="text"
                name="user_resume_hopeStartYear"
                value={user_resume_hopeStartYear}
                onChange={onChangeHopeStartYear}
              />
              <p>년</p>
              <input
                type="text"
                name="user_resume_hopeStartMonth"
                value={user_resume_hopeStartMonth}
                onChange={onChangeHopeStartMonth}
              />
              <p>월</p>
              <input
                type="text"
                name="user_resume_hopeStartDay"
                value={user_resume_hopeStartDay}
                onChange={onChangeHopeStartDay}
              />
              <p>일</p>
            </div>
          </label>
          <label className="input_box">
            <p></p>
            <p>부터 가능</p>
          </label>
          <label className="input_box">
            <p>근무희망시간</p>
            <div className="sub_input sub_input4">
              <input
                type="text"
                name="user_resume_hopeWorkTime1Hour"
                value={user_resume_hopeWorkTime1Hour}
                onChange={setHopeWorkTime1Hour}
              />
              <p>:</p>
              <input
                type="text"
                name="user_resume_hopeWorkTime1Minute"
                value={user_resume_hopeWorkTime1Minute}
                onChange={setHopeWorkTime1Minute}
              />
              <p>~</p>
              <input
                type="text"
                name="user_resume_hopeWorkTime2Hour"
                value={user_resume_hopeWorkTime2Hour}
                onChange={setHopeWorkTime2Hour}
              />
              <p>:</p>
              <input
                type="text"
                name="user_resume_hopeWorkTime2Minute"
                value={user_resume_hopeWorkTime2Minute}
                onChange={setHopeWorkTime2Minute}
              />
            </div>
          </label>
          <div className="article">
            <p>기업으로부터 제안을 받으시겠습니까?</p>
            <p>
              이력서가 공개되며, 기업으로부터 제의를 받을 수 있습니다.
              <br />
              제안을 받을 경우, 수락하기 전까지 채용담당자에게 연락처가 공개되지
              않습니다.
            </p>
          </div>
          <button type="submit" onClick={onSubmitForm}>
            이력서 저장
          </button>
        </form>
      </div>
    </>
  );
};

export default ResumeComponent;
