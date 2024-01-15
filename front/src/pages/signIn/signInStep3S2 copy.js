import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP_REQUEST, CHECK_ID_REQUEST } from "../../reducers/user";
import DaumPostcode from "react-daum-postcode";

const SignInStep3S2 = () => {
  const dispatch = useDispatch();
  const { signUpDone, signUpError, checkIdDone, checkIdError } = useSelector(
    (state) => state.user
  );
  // const [userType, setUserType] = useState(type);
  const navigate = useNavigate();
  const [checkIdComplete, setCheckIdComplete] = useState(false);
  const [userType, setUserType] = useState("individual");
  const [user_member_id, onChangeId] = useInput("");
  const [user_member_pw, onChangePassword] = useInput("");
  const [user_member_name, onChangeName] = useInput("");
  const [user_member_num, onChangeNum] = useInput("");
  const [user_member_jibunAddress, setJibunAddress] = useState("");
  const [user_member_roadAddress, setRoadAddress] = useState("");
  const [user_member_detailAddress, onChangeDetailAddress] = useInput("");
  const [user_member_tel, onChangeTel] = useInput("");
  const [user_member_email, onChangeEmail] = useInput("");
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
  useEffect(() => {
    if (checkIdError) {
      alert(checkIdError);
    }
  }, [checkIdError]);
  useEffect(() => {
    if (checkIdDone) {
      alert("사용 가능한 아이디 입니다.");
      setCheckIdComplete(user_member_id);
    }
  }, [checkIdDone]);
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
      userType,
      user_member_id,
      user_member_pw,
      user_member_name,
      user_member_num,
      user_member_address1,
      user_member_address2,
      user_member_tel,
      user_member_email,
    ]
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [addressObj, setAddressObj] = useState();

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    let localAddress = data.sido + " " + data.sigungu;
    console.log("주소 data : ", data);
    setJibunAddress(data.jubunAddress);
    setRoadAddress(data.roadAddress);
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }

      fullAddress = fullAddress.replace(localAddress, "");
      setAddressObj({
        areaAddress: localAddress,
        townAddress:
          fullAddress + (extraAddress !== "" ? `(${extraAddress})` : ""),
      });
    }
  };
  const handleClick = () => {
    setModalOpen(!modalOpen);
  };
  useEffect(() => {
    const address1 = addressObj.areaAddress + addressObj.townAddress;
    setAddress1(address1);
  }, [addressObj]);
  const checkId = useCallback(
    (e) => {
      e.preventDefault();

      dispatch({
        type: CHECK_ID_REQUEST,
        data: {
          user_member_id,
        },
      });
    },
    [user_member_id]
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
            className="btn"
            style={{
              backgroundColor: checkIdComplete ? "#CABD99" : "#b6b6b6",
            }}
            onClick={checkId}
          >
            중복확인
          </div>
        </label>
        <label className="input_box">
          <p>비밀번호</p>
          <input
            type="password"
            name="user_member_pw"
            value={user_member_pw}
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
            className="input_btn"
            readOnly
          />
          <div
            className="btn"
            style={{
              backgroundColor: user_member_address1 ? "#CABD99" : "#b6b6b6",
            }}
            onClick={() => {
              if (!user_member_address1) {
                handleClick();
              }
            }}
          >
            주소검색
          </div>
        </label>
        {modalOpen && (
          <DaumPostcode onComplete={handleComplete} autoClose animation />
        )}

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
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignInStep3S2;
