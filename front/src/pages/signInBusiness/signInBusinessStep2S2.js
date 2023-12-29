import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP_REQUEST } from "../../reducers/business";
import { signupRequestActionBusiness } from "../../reducers/business";

const SignInStep3S2 = (props) => {
  const dispatch = useDispatch();
  const { signUpDone, signUpError } = useSelector((state) => state.business);
  const { type } = props;
  // const [userType, setUserType] = useState(type);
  const [userType, setUserType] = useState("business");
  const navigate = useNavigate();

  const [business_member_id, onChangeId] = useInput("");
  const [business_member_pw, onChangePassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [business_member_companyName, onChangeCompanyName] = useInput("");
  const [business_member_companyNumber, onChangeCompanyNumber] = useInput("");
  const [business_member_name, onChangeName] = useInput("");
  const [business_member_companyState, setCompanyState] = useState();
  const [business_member_employeeNumber, onChangeEmployeeNumber] = useInput("");
  const [business_member_officeState, setOfficeState] = useState();
  const [business_member_address1, onChangeAddress1] = useInput("");
  const [business_member_address2, onChangeAddress2] = useInput("");
  const [business_member_tel, onChangeTel] = useInput("");
  const [business_member_email, onChangeEmail] = useInput("");

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== business_member_pw);
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
      dispatch(
        signupRequestActionBusiness({
          business_member_id,
          business_member_pw,
          userType,
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
        })
      );
    },
    [
      business_member_id,
      business_member_pw,
      userType,
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
            name="business_member_id"
            value={business_member_id}
            onChange={onChangeId}
          />
          <div
            className="email_check"
            style={{
              backgroundColor: business_member_id ? "#CABD99" : "#b6b6b6",
            }}
          >
            중복확인
          </div>
        </label>
        <label className="input_box">
          <p>비밀번호</p>
          <input
            type="password"
            name="business_member_pw"
            value={business_member_pw}
            onChange={onChangePassword}
          />
        </label>
        <label className="input_box">
          <p>비밀번호 확인</p>
          <input
            type="password"
            name="passwordCheck"
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
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignInStep3S2;
