import React, { useState, useCallback } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";

const SignInStep3S2 = (props) => {
  const { type } = props;
  // const [userType, setUserType] = useState(type);
  const [userType, setUserType] = useState("individual");
  const navigate = useNavigate();

  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      console.log(
        "아이디 : ",
        id,
        " 비밀번호 : ",
        password,
        " 유저타입 : ",
        userType
      );
    },
    [id, password, userType]
  );

  return (
    <div className="signin_step3_s2">
      <form>
        <p>회원정보</p>
        <label className="input_box input_nomargin">
          <p>
            아이디<span>(이메일)</span>
          </p>
          <input
            // type="email"
            type="text"
            name="user_member_id"
            value={id}
            onChange={onChangeId}
          />
          <div
            className="email_check"
            style={{
              backgroundColor: id ? "#CABD99" : "#b6b6b6",
            }}
          >
            중복확인
          </div>
        </label>
        <label className="input_box">
          <p>비밀번호</p>
          <input
            type="text"
            name="user_member_pw"
            value={password}
            onChange={onChangePassword}
          />
        </label>
        <label className="input_box">
          <p>비밀번호 확인</p>
          <input
            type="text"
            name="user_member_pwcheck"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
          />
        </label>
        {passwordError && (
          <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
        )}
        <p>인적사항</p>
        <p>학력사항</p>
        <button type="submit" onClick={onSubmitForm}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignInStep3S2;
