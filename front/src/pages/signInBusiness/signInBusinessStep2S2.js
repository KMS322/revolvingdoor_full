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
  const [userType, setUserType] = useState("business");
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
      console.log("aa");
    },
    [user_member_id, user_member_pw, userType]
  );

  return (
    <div className="signin_business_step2_s2">
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
        <p>업체현황</p>
        <label className="input_box">
          <p>사업장명</p>
          <input />
        </label>
        <label className="input_box">
          <p>사업자등록번호</p>
          <input />
        </label>
        <label className="input_box">
          <p>대표자</p>
          <input />
        </label>
        <label className="select_box">
          <p>사업자</p>
          <div className="sub_select sub_select1">
            <div className="select">개인</div>
            <div className="select">법인</div>
          </div>
        </label>
        <label className="input_box">
          <p>근로자 수</p>
          <input />
        </label>
        <label className="select_box">
          <p>사무실 형태</p>
          <div className="sub_select sub_select2">
            <div className="select">공인회계사</div>
            <div className="select">세무사</div>
            <div className="select">회계법인</div>
          </div>
        </label>
        <label className="select_box">
          <p></p>
          <div className="sub_select sub_select2">
            <div className="select">세무법인</div>
            <div className="select">기업</div>
            <div className="select">기타</div>
          </div>
        </label>
        <label className="input_box">
          <p>주소</p>
          <input />
        </label>
        <label className="input_box">
          <p></p>
          <input />
        </label>
        <label className="input_box">
          <p>대표 전화번호</p>
          <input />
        </label>
        <label className="input_box">
          <p>이메일</p>
          <input />
        </label>
        <button type="submit" onClick={onSubmitForm}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignInStep3S2;
