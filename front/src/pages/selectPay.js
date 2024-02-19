import "../css/selectPay.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CLICK_PAY_REQUEST,
  CHANGE_STEP_REQUEST,
  CHECK_PAY_REQUEST,
} from "../reducers/matching";
const SelectPay = ({ onClose, data }) => {
  const dispatch = useDispatch();
  const { clickPayDone, businessPay } = useSelector((state) => state.matching);
  const businessId = data.businessId;
  const matchingData = data;
  const [btn, setBtn] = useState(true);
  const submitPay = () => {
    let pay = "";

    if (businessPay === 0) {
      if (btn) {
        pay = "250000원";
      } else {
        pay = "200000원";
      }
    } else if (businessPay === "200000원") {
      pay = "50000원";
    } else {
      pay = "0원";
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
    dispatch({
      type: CHECK_PAY_REQUEST,
      data: {
        businessId,
      },
    });
  }, []);
  useEffect(() => {
    if (clickPayDone) {
      window.location.href = "myPageBusiness";
      dispatch({
        type: CHANGE_STEP_REQUEST,
        data: { step: "결제완료", matchingData },
      });
    }
  }, [clickPayDone]);
  return (
    <div className="selectPay">
      <div className="article_container">
        <img src="/images/close_btn.png" alt="" onClick={onClose} />
        <p>결제하기</p>
        {businessPay === 0 ? (
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
        ) : businessPay === "250000원" ? (
          <p style={{ textAlign: "center" }}>
            귀하는 연간 회원으로 결제하지 않아도
            <br />
            정보를 열람할 수 있습니다.
          </p>
        ) : businessPay === "200000원" ? (
          <p style={{ textAlign: "center" }}>
            귀하는 1회성 회원으로 5만원을 더 결제하면
            <br />
            연간 회원으로 전환될 수 있습니다.
          </p>
        ) : (
          ""
        )}

        <div className="btn" onClick={submitPay}>
          {businessPay === "250000원" ? "확인" : "결제"}
        </div>
      </div>
    </div>
  );
};

export default SelectPay;
