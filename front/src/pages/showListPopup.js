import "../css/showListPopup.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SHOW_LIST_REQUEST,
  LOAD_CONCURRENCE_REQUEST,
} from "../reducers/matching";
import SelectPay from "./selectPay";
const ShowListPopup = ({ data, onClose }) => {
  const dispatch = useDispatch();
  const { matchingLists, concurrences } = useSelector(
    (state) => state.matching
  );
  const matchingData = data;
  const sendData = matchingData.businessId;
  let arr = "";
  matchingLists &&
    matchingLists.map((list) => {
      arr += list.UserIndividual.IndividualId + " ";
    });
  useEffect(() => {
    dispatch({
      type: SHOW_LIST_REQUEST,
      data: {
        matchingData,
      },
    });
  }, []);

  useEffect(() => {
    if (matchingLists) {
      dispatch({
        type: LOAD_CONCURRENCE_REQUEST,
        data: {
          arr,
        },
      });
    }
  }, [matchingLists]);

  const [payPopup, setPayPopup] = useState(false);
  const closePopup = () => {
    setPayPopup(false);
  };
  return (
    <div className="showListPopup">
      <div className="article_container">
        <img src="/images/close_btn.png" alt="" onClick={onClose} />
        <p>
          귀하께서 구인의뢰 신청서(임시직용)에서 요청하신 사항에 적합한 인력 o
          명을 추천하고자 합니다.
        </p>
        <p>대상자는 다음과 같습니다.</p>
        <div className="list_box">
          <div className="row">
            <p>No.</p>
            <p>학과</p>
            <p>주소</p>
            <p>근무 경력</p>
            <p>최종 근무처</p>
            <p>희망 근무형태</p>
            <p>근무 시작 가능 시기</p>
          </div>
          {matchingLists &&
            matchingLists.map((list, index) => {
              const concurrenceData =
                concurrences &&
                concurrences.find(
                  (concurrence) =>
                    concurrence.IndividualId ===
                    String(list.UserIndividual.IndividualId)
                );

              const backgroundColor =
                concurrenceData && concurrenceData.concurrence === "대기"
                  ? "#F5F2EB"
                  : concurrenceData && concurrenceData.concurrence === "동의"
                  ? "#CABD99"
                  : concurrenceData && concurrenceData.concurrence === "거절"
                  ? "#C8C8C8"
                  : "initial";
              return (
                <div className="row" key={index} style={{ backgroundColor }}>
                  <p>{index + 1}</p>
                  <p>{list.UserResumes[0].user_resume_schoolMajor}</p>
                  <p>{list.UserIndividual.user_member_jibunAddress}</p>
                  <p>{list.UserIndividual.user_member_career}년</p>
                  <p>
                    {list.UserCareer && list.UserCareer.user_career_company1}
                  </p>
                  <p>{list.UserIndividual.user_member_workType}</p>
                  <p>{`${list.UserResumes[0].user_resume_hopeStartYear}년 ${list.UserResumes[0].user_resume_hopeStartMonth}월`}</p>
                </div>
              );
            })}
        </div>
        <img className="color_box" src="/images/color_box.png" alt="" />
        <div className="text_box">
          <p>
            위 대상자에 대한 연락처 등 인적사항 정보를 받고 임시직 취업을
            진행하려고 하시면 건당 수수료 20만원을 결제하시거나
            <br /> 년간 회비 25만원을 결제해 주시기 바랍니다. 년간회원은 연중
            회수에 관계없이 추천받을 수 있습니다. 그리고 건당 수수료를
            <br /> 지급한 경우에도 다음 구인수요가 생겼을 때 년간 회원으로 전환
            될 수 있습니다. 단, 당해년도에 대해서만 적용 됩니다.
            <br /> 즉, 7월에 연간회원이 되더라도 12월까지만 회원이 됩니다. 만약
            취업이 성사되지 않은 경우 확인 절차에 따라 건당 수수료는
            <br /> 환불되지 않고 크레딧으로 적립되어 다음 구인수요 신청시 사용될
            수 있습니다.
          </p>
          <br />
          <br />
          <br />
          <p>위 계약 사항에 동의하시고 계속 진행하시겠습니까?</p>
        </div>
        <div
          className="btn"
          onClick={() => {
            setPayPopup(true);
          }}
        >
          동의
        </div>
      </div>
      {payPopup && <SelectPay onClose={closePopup} data={sendData} />}
    </div>
  );
};

export default ShowListPopup;
