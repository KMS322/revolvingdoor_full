import "../css/testSendSms.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SEND_SMS_REQUEST } from "../reducers/aligo";
const TestSendSms = () => {
  const dispatch = useDispatch();
  const sendSMS = () => {
    dispatch({
      type: SEND_SMS_REQUEST,
      data: {
        sender: "01030728495",
        receiver: "01068655021",
        msg: "테스트용 메시지 입니다.",
      },
    });
  };
  return (
    <div className="testSendSms">
      <p onClick={sendSMS}>문자보내기</p>
    </div>
  );
};

export default TestSendSms;
