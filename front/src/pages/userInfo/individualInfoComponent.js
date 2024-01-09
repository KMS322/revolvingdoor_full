import "../../css/individualInfo.css";
import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP_REQUEST } from "../../reducers/user";
import { useLocation } from "react-router-dom";

const IndividualInfoComponent = (props) => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  console.log("state: ", state.data.memberInfo);
  const { signUpDone, signUpError } = useSelector((state) => state.user);
  const { type } = props;
  // const [userType, setUserType] = useState(type);
  const navigate = useNavigate();

  const [userType, setUserType] = useState("individual");
  const [user_member_id, onChangeId] = useInput(
    state ? state.data.memberInfo.user_member_id : ""
  );
  const [user_member_pw, onChangePassword] = useInput("");
  const [user_member_name, onChangeName] = useInput(
    state ? state.data.userInfo.user_member_name : ""
  );
  const [user_member_num, onChangeNum] = useInput(
    state ? state.data.userInfo.user_member_num : ""
  );
  const [user_member_address1, onChangeAddress1] = useInput(
    state ? state.data.userInfo.user_member_address : ""
  );
  const [user_member_address2, onChangeAddress2] = useInput(
    state ? state.data.userInfo.user_member_address : ""
  );
  const [user_member_tel, onChangeTel] = useInput(
    state ? state.data.userInfo.user_member_tel : ""
  );
  const [user_member_email, onChangeEmail] = useInput(
    state ? state.data.userInfo.user_member_email : ""
  );
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

      dispatch({
        type: SIGN_UP_REQUEST,
        data: {
          userType,
          user_member_id,
          user_member_pw,
          user_member_name,
          user_member_num,
          user_member_address1,
          user_member_address2,
          user_member_tel,
          user_member_email,
        },
      });
    },
    [
      user_member_address1,
      user_member_address2,
      user_member_tel,
      user_member_email,
    ]
  );

  return (
    <div className="individualInfo_s1">
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
        {/* <label className="input_box">
          <p>비밀번호 확인</p>
          <input
            type="password"
            name="user_member_pwcheck"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
          />
        </label> */}
        {passwordError && (
          <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
        )}
        <p>인적사항</p>
        <label className="input_box">
          <p>성명</p>
          <input
            type="text"
            name="user_member_name"
            value={user_member_name}
            onChange={onChangeName}
          />
        </label>
        <label className="input_box">
          <p>주민등록번호</p>
          <input
            type="text"
            name="user_member_num"
            value={user_member_num}
            onChange={onChangeNum}
          />
        </label>
        <label className="input_box">
          <p>주소</p>
          <input
            type="text"
            name="user_member_address1"
            value={user_member_address1}
            onChange={onChangeAddress1}
          />
        </label>
        <label className="input_box">
          <p></p>
          <input
            type="text"
            name="user_member_address2"
            value={user_member_address2}
            onChange={onChangeAddress2}
          />
        </label>
        <label className="input_box">
          <p>휴대전화</p>
          <input
            type="text"
            name="user_member_tel"
            value={user_member_tel}
            onChange={onChangeTel}
          />
        </label>
        <label className="input_box">
          <p>이메일</p>
          <input
            type="text"
            name="user_member_email"
            value={user_member_email}
            onChange={onChangeEmail}
          />
        </label>
        <button type="submit" onClick={onSubmitForm}>
          수정
        </button>
      </form>
    </div>
  );
};

export default IndividualInfoComponent;
