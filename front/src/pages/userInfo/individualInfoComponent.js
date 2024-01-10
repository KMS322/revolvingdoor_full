import "../../css/individualInfo.css";
import React, { useState, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_INDIVIDUAL_INFO_REQUEST } from "../../reducers/userInfo";
import { CHANGE_PASSWORD_REQUEST } from "../../reducers/user";

const IndividualInfoComponent = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { changeIndividualInfoDone } = useSelector((state) => state.userInfo);
  const { changePasswordDone } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [change, setChange] = useState(false);
  const [changePassword, onChangePassword] = useInput("");
  const [userID, setUserID] = useState(
    state && state.data ? state.data.memberInfo.id : ""
  );
  const [userType, setUserType] = useState("individual");
  const [user_member_id, onChangeId] = useInput(
    state && state.data ? state.data.memberInfo.user_member_id : ""
  );
  const [user_currentPW, oncurrentPassword] = useInput("");
  const [user_member_name, onChangeName] = useInput(
    state && state.data ? state.data.userInfo.user_member_name : ""
  );
  const [user_member_num, onChangeNum] = useInput(
    state && state.data ? state.data.userInfo.user_member_num : ""
  );
  const [user_member_address1, onChangeAddress1] = useInput(
    state && state.data ? state.data.userInfo.user_member_address : ""
  );
  const [user_member_address2, onChangeAddress2] = useInput(
    state && state.data ? state.data.userInfo.user_member_address : ""
  );
  const [user_member_tel, onChangeTel] = useInput(
    state && state.data ? state.data.userInfo.user_member_tel : ""
  );
  const [user_member_email, onChangeEmail] = useInput(
    state && state.data ? state.data.userInfo.user_member_email : ""
  );
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== changePassword);
    },
    [passwordCheck]
  );
  useEffect(() => {
    if (changeIndividualInfoDone) {
      navigate(-1);
    }
  }, [changeIndividualInfoDone]);
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();

      dispatch({
        type: CHANGE_INDIVIDUAL_INFO_REQUEST,
        data: {
          userID,
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
      userID,
      user_member_name,
      user_member_num,
      user_member_address1,
      user_member_address2,
      user_member_tel,
      user_member_email,
    ]
  );
  useEffect(() => {
    if (changePasswordDone) {
      window.location.href = "/";
    }
  }, [changePasswordDone]);
  const changePW = useCallback(
    (e) => {
      e.preventDefault();

      dispatch({
        type: CHANGE_PASSWORD_REQUEST,
        data: {
          userID,
          user_currentPW,
          changePassword,
        },
      });
    },
    [userID, user_currentPW, changePassword]
  );
  return (
    <div className="individualInfo_s1">
      <form>
        <p>회원정보</p>
        <label className="input_box input_nomargin">
          <p>
            아이디<span>(이메일)</span>
          </p>
          <div className="text_id">{user_member_id}</div>
        </label>
        {change ? (
          <>
            <label className="input_box">
              <p></p>
              <div className="pw_btn1_box">
                <div className="pw_btn1" onClick={changePW}>
                  수정하기
                </div>
                <div
                  className="pw_btn1"
                  onClick={() => {
                    setChange(false);
                  }}
                >
                  취소
                </div>
              </div>
            </label>
          </>
        ) : (
          <>
            <label className="input_box">
              <p></p>
              <div
                className="pw_btn"
                onClick={() => {
                  if (!change) {
                    setChange(true);
                  }
                }}
              >
                비밀번호 수정하기
              </div>
            </label>
          </>
        )}

        {change ? (
          <>
            <label className="input_box">
              <p>현재 비밀번호</p>
              <input
                type="password"
                name="user_currentPW"
                value={user_currentPW}
                onChange={oncurrentPassword}
              />
            </label>
            <label className="input_box">
              <p>새 비밀번호</p>
              <input
                type="password"
                name="changePassword"
                value={changePassword}
                onChange={onChangePassword}
              />
            </label>
            <label className="input_box">
              <p>비밀번호 확인</p>
              <input
                type="password"
                name="user_member_pwcheck"
                value={passwordCheck}
                onChange={onChangePasswordCheck}
              />
            </label>
          </>
        ) : (
          ""
        )}
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
