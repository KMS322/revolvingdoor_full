import "../../css/businessInfo.css";
import React, { useState, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_BUSINESS_INFO_REQUEST } from "../../reducers/userInfo";
import { CHANGE_PASSWORD_REQUEST } from "../../reducers/user";

const BusinessInfoComponent = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { changeBusinessInfoDone } = useSelector((state) => state.userInfo);
  const { changePasswordDone } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [change, setChange] = useState(false);
  const [changePassword, onChangePassword] = useInput("");
  const [userID, setUserID] = useState(
    state && state.data ? state.data.memberInfo.id : ""
  );
  const [userType, setUserType] = useState("business");

  const [business_member_id, onChangeId] = useInput(
    state && state.data ? state.data.memberInfo.user_member_id : ""
  );

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [user_currentPW, oncurrentPassword] = useInput("");
  const [business_member_companyName, onChangeCompanyName] = useInput(
    state && state.data ? state.data.userInfo.business_member_companyName : ""
  );
  const [business_member_companyNumber, onChangeCompanyNumber] = useInput(
    state && state.data ? state.data.userInfo.business_member_companyNumber : ""
  );
  const [business_member_name, onChangeName] = useInput(
    state && state.data ? state.data.userInfo.business_member_name : ""
  );
  const [business_member_companyState, setCompanyState] = useState(
    state && state.data ? state.data.userInfo.business_member_companyState : ""
  );
  const [business_member_employeeNumber, onChangeEmployeeNumber] = useInput(
    state && state.data
      ? state.data.userInfo.business_member_employeeNumber
      : ""
  );
  const [business_member_officeState, setOfficeState] = useState(
    state && state.data ? state.data.userInfo.business_member_officeState : ""
  );
  const [business_member_address1, onChangeAddress1] = useInput(
    state && state.data ? state.data.userInfo.business_member_address : ""
  );
  const [business_member_address2, onChangeAddress2] = useInput(
    state && state.data ? state.data.userInfo.business_member_address : ""
  );
  const [business_member_tel, onChangeTel] = useInput(
    state && state.data ? state.data.userInfo.business_member_tel : ""
  );
  const [business_member_email, onChangeEmail] = useInput(
    state && state.data ? state.data.userInfo.business_member_email : ""
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== changePassword);
    },
    [passwordCheck]
  );

  useEffect(() => {
    if (changeBusinessInfoDone) {
      navigate("/");
    }
  }, [changeBusinessInfoDone]);

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: CHANGE_BUSINESS_INFO_REQUEST,
        data: {
          userID,
          business_member_companyName,
          business_member_companyNumber,
          business_member_name,
          business_member_companyState,
          business_member_employeeNumber,
          business_member_officeState,
          business_member_address1,
          business_member_address2,
          business_member_tel,
          business_member_email,
        },
      });
    },
    [
      userID,
      business_member_companyName,
      business_member_companyNumber,
      business_member_name,
      business_member_companyState,
      business_member_employeeNumber,
      business_member_officeState,
      business_member_address1,
      business_member_address2,
      business_member_tel,
      business_member_email,
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
  const selectStyle1 = (data) => {
    return {
      borderColor:
        business_member_companyState === data ? "#2196F3" : "#eeeeee",
      color: business_member_companyState === data ? "#2196F3" : "#707070",
    };
  };
  const selectStyle2 = (data) => {
    return {
      borderColor: business_member_officeState === data ? "#2196F3" : "#eeeeee",
      color: business_member_officeState === data ? "#2196F3" : "#707070",
    };
  };
  return (
    <div className="businessInfo_s1">
      <form>
        <p>회원정보</p>
        <label className="input_box input_nomargin">
          <p>
            아이디<span>(이메일)</span>
          </p>
          <div className="text_id">{business_member_id}</div>
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
                  } else {
                    changePW();
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
        <p>업체현황</p>
        <label className="input_box">
          <p>사업장명</p>
          <input
            type="text"
            name="business_member_companyName"
            value={business_member_companyName}
            onChange={onChangeCompanyName}
          />
        </label>
        <label className="input_box">
          <p>사업자등록번호</p>
          <input
            type="text"
            name="business_member_companyNumber"
            value={business_member_companyNumber}
            onChange={onChangeCompanyNumber}
          />
        </label>
        <label className="input_box">
          <p>대표자</p>
          <input
            type="text"
            name="business_member_name"
            value={business_member_name}
            onChange={onChangeName}
          />
        </label>
        <label className="select_box">
          <p>사업자</p>
          <div className="sub_select sub_select1">
            <div
              className="select"
              onClick={() => {
                setCompanyState("개인");
              }}
              style={selectStyle1("개인")}
            >
              개인
            </div>
            <div
              className="select"
              onClick={() => {
                setCompanyState("법인");
              }}
              style={selectStyle1("법인")}
            >
              법인
            </div>
          </div>
        </label>
        <label className="input_box">
          <p>근로자 수</p>
          <input
            type="text"
            name="business_member_employeeNumber"
            value={business_member_employeeNumber}
            onChange={onChangeEmployeeNumber}
          />
        </label>
        <label className="select_box">
          <p>사무실 형태</p>
          <div className="sub_select sub_select2">
            <div
              className="select"
              onClick={() => {
                setOfficeState("공인회계사");
              }}
              style={selectStyle2("공인회계사")}
            >
              공인회계사
            </div>
            <div
              className="select"
              onClick={() => {
                setOfficeState("세무사");
              }}
              style={selectStyle2("세무사")}
            >
              세무사
            </div>
            <div
              className="select"
              onClick={() => {
                setOfficeState("회계법인");
              }}
              style={selectStyle2("회계법인")}
            >
              회계법인
            </div>
          </div>
        </label>
        <label className="select_box">
          <p></p>
          <div className="sub_select sub_select2">
            <div
              className="select"
              onClick={() => {
                setOfficeState("세무법인");
              }}
              style={selectStyle2("세무법인")}
            >
              세무법인
            </div>
            <div
              className="select"
              onClick={() => {
                setOfficeState("기업");
              }}
              style={selectStyle2("기업")}
            >
              기업
            </div>
            <div
              className="select"
              onClick={() => {
                setOfficeState("기타");
              }}
              style={selectStyle2("기타")}
            >
              기타
            </div>
          </div>
        </label>
        <label className="input_box">
          <p>주소</p>
          <input
            type="text"
            name="business_member_address1"
            value={business_member_address1}
            onChange={onChangeAddress1}
          />
        </label>
        <label className="input_box">
          <p></p>
          <input
            type="text"
            name="business_member_address2"
            value={business_member_address2}
            onChange={onChangeAddress2}
          />
        </label>
        <label className="input_box">
          <p>대표 전화번호</p>
          <input
            type="text"
            name="business_member_tel"
            value={business_member_tel}
            onChange={onChangeTel}
          />
        </label>
        <label className="input_box">
          <p>이메일</p>
          <input
            type="text"
            name="business_member_email"
            value={business_member_email}
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

export default BusinessInfoComponent;
