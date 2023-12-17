import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP_REQUEST } from "../../reducers/user";

const SignInStep3S2 = (props) => {
  const dispatch = useDispatch();
  const { signUpDone, signUpError } = useSelector((state) => state.user);
  const { type } = props;
  // const [userType, setUserType] = useState(type);
  const [userType, setUserType] = useState("individual");
  const navigate = useNavigate();

  const [user_member_id, onChangeId] = useInput("");
  const [user_member_pw, onChangePassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== user_member_pw);
    },
    [passwordCheck]
  );

  useEffect(() => {
    if (signUpDone) {
      navigate("/");
    }
  }, [signUpDone]);

  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      console.log(
        "아이디 : ",
        user_member_id,
        " 비밀번호 : ",
        user_member_pw,
        " 유저타입 : ",
        userType
      );
      dispatch({
        type: SIGN_UP_REQUEST,
        data: { user_member_id, user_member_pw, userType },
      });
    },
    [user_member_id, user_member_pw, userType]
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
            value={user_member_id}
            onChange={onChangeId}
          />
          <div
            className="email_check"
            style={{
              backgroundColor: user_member_id ? "#CABD99" : "#b6b6b6",
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
            value={user_member_pw}
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
