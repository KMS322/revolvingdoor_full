import "../css/acceptPopup.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_STEP_REQUEST, SHOW_LIST_REQUEST } from "../reducers/matching";
import { SEND_SMS_REQUEST } from "../reducers/aligo";
const AcceptPopup = ({ data, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showListDone } = useSelector((state) => state.matching);
  const matchingData = data;
  const applicationId = matchingData.applicationId;
  const changeStep = () => {
    dispatch({
      type: CHANGE_STEP_REQUEST,
      data: { step: "동의여부조사중", matchingData },
    });
    dispatch({
      type: SHOW_LIST_REQUEST,
      data: {
        matchingData,
      },
    });
    // window.location.href = "/myPageBusiness";
    navigate("/myPageBusiness");
  };
  useEffect(() => {
    if (showListDone) {
      dispatch({
        type: SEND_SMS_REQUEST,
        data: { applicationId },
      });
    }
  }, [showListDone]);
  return (
    <div className="acceptPopup">
      <div className="article_container">
        <p>구직자 목록을 받아보겠습니까?</p>
        <p>구직자의 동의를 얻기 위해 신청 후 2~3일 정도의 시간이 소요됩니다.</p>
        <div className="btn_box">
          <div className="btn" onClick={onClose}>
            취소
          </div>
          <div className="btn" onClick={changeStep}>
            받아보기
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptPopup;
