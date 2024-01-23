import "../css/selectPay.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLICK_PAY_REQUEST, CHANGE_STEP_REQUEST } from "../reducers/matching";
const SelectPay = ({ onClose, data }) => {
  const dispatch = useDispatch();
  const { clickPayDone } = useSelector((state) => state.matching);
  console.log("data : ", typeof data);
  const businessId = data;
  const [btn, setBtn] = useState(true);
  const submitPay = () => {
    let pay = "";
    if (btn) {
      pay = "250000원";
    } else {
      pay = "200000원";
    }
    dispatch({
      type: CLICK_PAY_REQUEST,
      data: {
        pay,
        businessId,
      },
    });
  };
  useEffect(() => {
    if (clickPayDone) {
      window.location.href = "myPageBusiness";
      dispatch({
        type: CHANGE_STEP_REQUEST,
        data: { step: "결제완료" },
      });
    }
  }, [clickPayDone]);
  return (
    <div className="selectPay">
      <div className="article_container">
        <img src="/images/close_btn.png" alt="" onClick={onClose} />
        <p>결제하기</p>
        <div className="select_box">
          <div className="select">
            {btn ? (
              <img src="/images/check_on.png" alt="" />
            ) : (
              <img
                src="/images/check_off.png"
                alt=""
                onClick={() => {
                  setBtn(!btn);
                }}
              />
            )}
            <p>연간회원</p>
            <p>250,000원</p>
          </div>
          <div className="select">
            {btn ? (
              <img
                src="/images/check_off.png"
                alt=""
                onClick={() => {
                  setBtn(!btn);
                }}
              />
            ) : (
              <img src="/images/check_on.png" alt="" />
            )}
            <p>건당회원</p>
            <p>200,000원</p>
          </div>
        </div>
        <div className="btn" onClick={submitPay}>
          결제
        </div>
      </div>
    </div>
  );
};

export default SelectPay;
