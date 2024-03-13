import "../css/pay.css";
import React, { useEffect, useState } from "react";
const Pay = ({ onClose, data }) => {
  const [initialized, setInitialized] = useState(false);
  const amount = data.amount;
  const businessId = data.businessId;
  console.log("amount : ", amount);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.iamport.kr/v1/iamport.js";
    script.async = true;

    script.onload = () => {
      window.IMP.init("imp63564407");
      setInitialized(true);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const IMP = window.IMP;
  var today = new Date();
  var hours = today.getHours(); // 시
  var minutes = today.getMinutes(); // 분
  var seconds = today.getSeconds(); // 초
  var milliseconds = today.getMilliseconds();
  var makeMerchantUid = hours + minutes + seconds + milliseconds;

  const requestPayment = (paymentMethod) => {
    if (!initialized) {
      console.error("IMP is not initialized");
      return;
    }
    let productName = "";
    if (amount === 25 || amount === 5) {
      productName = "연간회원";
    } else if (amount === 20) {
      productName = "건당회원";
    }
    const requestData = {
      name: productName,
      amount: amount,
      buyer_email: "Iamport@chai.finance",
      buyer_name: "아임포트 기술지원팀",
      buyer_tel: "010-1234-5678",
      buyer_addr: "서울특별시 강남구 삼성동",
      buyer_postcode: "123-456",
      m_redirect_url: "http://localhost/myPageBusiness",
    };

    switch (paymentMethod) {
      case "kgPay":
        requestData.pg = "html5_inicis";
        requestData.pay_method = "card";
        break;
      case "kakaoPay":
        requestData.pg = "kakaopay.TC0ONETIME";
        requestData.pay_method = "card";
        break;
      case "tossPay":
        requestData.pg = "tosspay.tosstest";
        requestData.pay_method = "card";
        requestData.merchant_uid = makeMerchantUid;
        break;
      default:
        console.error("Invalid payment method");
        return;
    }

    IMP.request_pay(requestData, function (rsp) {
      // callback
      if (rsp.success) {
        console.log(rsp);
      } else {
        console.log(rsp);
      }
    });
  };

  return (
    <div className="pay">
      <div className="article_container">
        <img src="/images/close_btn.png" alt="" onClick={onClose} />
        <p>결제 방법을 선택해주세요.</p>
        <div className="btn" onClick={() => requestPayment("kgPay")}>
          카드결제
        </div>
        <div className="btn" onClick={() => requestPayment("kakaoPay")}>
          카카오페이
        </div>
        <div className="btn" onClick={() => requestPayment("tossPay")}>
          토스페이
        </div>
      </div>
    </div>
  );
};

export default Pay;
