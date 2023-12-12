import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
import { useNavigate } from "react-router-dom";

const SignInStep3S2 = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    user_member_id: "",
    user_member_pw: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(`${API_URL}/auth/join`, formData);
      console.log(result);
      navigate("/");
    } catch (err) {
      console.error(err);
      // navigate("/");
    }
  };

  const checkEmail = async () => {
    try {
      const result = await axios.post(`${API_URL}/auth/checkEmail`, {
        user_member_id: formData.user_member_id,
      });

      if (result.data.message === "exist") {
        alert("중복된 이메일이 이미 존재합니다.");
      } else {
        alert("사용 가능한 이메일입니다.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // 이메일 형식 체크 정규표현식
  // const isValidEmail = (email) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };
  return (
    <div className="signin_step3_s2">
      <form onSubmit={sendSubmit}>
        <p>회원정보</p>
        <label className="input_box input_nomargin">
          <p>
            아이디<span>(이메일)</span>
          </p>
          <input
            // type="email"
            type="text"
            name="user_member_id"
            value={formData.user_member_id}
            onChange={inputChange}
          />
          <div
            className="email_check"
            style={{
              // backgroundColor: isValidEmail(formData.user_member_id)
              backgroundColor: formData.user_member_id ? "#CABD99" : "#b6b6b6",
            }}
            onClick={checkEmail}
          >
            중복확인
          </div>
        </label>
        <label className="input_box">
          <p>비밀번호</p>
          <input
            type="text"
            name="user_member_pw"
            value={formData.user_member_pw}
            onChange={inputChange}
          />
        </label>
        <p>인적사항</p>
        <p>학력사항</p>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignInStep3S2;
