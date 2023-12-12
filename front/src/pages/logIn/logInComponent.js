import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
import { useNavigate } from "react-router-dom";
import "../../css/logIn.css";
import "../../css/logIn_mobile.css";
const LogInComponent = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    user_member_id: "",
    user_member_pw: "",
  });
  const [checkID, setCheckID] = useState(true);
  const [checkLogin, setCheckLogin] = useState(false);
  const [userType, setUserType] = useState(true); // true : private

  const inputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const sendSubmit = async (e) => {
    // e.preventDefault();

    try {
      const result = await axios.post(`${API_URL}/auth/login`, loginData);
      console.log("result 메시지", result.data.message);
      if (result.data.message === "loginFail") {
        alert("로그인에 실패했습니다.");
        return navigate("/login");
      }
      if (!result.data.message || result.data.message === "") {
        navigate("/");
      }
      if (result.data.message === "loginSuccess") {
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      // navigate("/");
    }
  };

  const handleCheck1 = () => {
    setCheckID(!checkID);
  };
  const handleCheck2 = () => {
    setCheckLogin(!checkLogin);
  };
  const handleUserType = (value) => {
    setUserType(value);
  };
  const goPage = (path) => {
    navigate(path);
  };
  return (
    <div className="logIn_s1">
      <div className="section_container">
        <div className="login_container">
          <div className="text_tab">
            <p
              className={userType === true ? "active" : ""}
              onClick={() => {
                handleUserType(true);
              }}
            >
              개인회원
            </p>
            <p
              className={userType === false ? "active" : ""}
              onClick={() => {
                handleUserType(false);
              }}
            >
              기업회원
            </p>
          </div>
          <div className="input_container">
            <form className="input_text_box">
              <label className="input_text">
                <p>아이디</p>
                <input
                  type="text"
                  name="user_member_id"
                  value={loginData.user_member_id}
                  onChange={inputChange}
                />
              </label>
              <label className="input_text">
                <p>비밀번호</p>
                <input
                  type="text"
                  name="user_member_pw"
                  value={loginData.user_member_pw}
                  onChange={inputChange}
                />
              </label>
            </form>
            <button
              type="submit"
              className="input_submit_btn"
              onClick={sendSubmit}
            >
              로그인
            </button>
          </div>
          <div className="check_box_container">
            <div className="article">
              <div
                className="check"
                onClick={handleCheck1}
                style={{ backgroundColor: checkID ? "#979797" : "white" }}
              ></div>
              <p>아이디 저장</p>
            </div>
            <div className="article">
              <div
                className="check"
                onClick={handleCheck2}
                style={{ backgroundColor: checkLogin ? "#979797" : "white" }}
              ></div>
              <p>로그인 유지</p>
            </div>
          </div>
          <div className="text_btn_container">
            <p>아이디 / 비밀번호 찾기</p>
            <p
              onClick={() => {
                goPage("/signIn");
              }}
            >
              회원가입
            </p>
          </div>
        </div>
        <div className="ad_box">
          <img src="/images/logIn_s1_img.jpg" alt="" />
        </div>
      </div>
      <p>© 2023 회전문</p>
    </div>
  );
};

export default LogInComponent;
