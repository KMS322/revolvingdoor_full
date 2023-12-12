import React, { useState } from "react";
import "../../css/signInForm.css";
import "../../css/signInForm_mobile.css";
const SignInFormS2 = () => {
  const [inputValues, setInputValues] = useState([
    { name: "userName", value: "", label: "이름", type: "text" },
    {
      name: "userID",
      value: "",
      label: "아이디",
      span: "(이메일)",
      type: "password",
    },
    {
      name: "userPW",
      value: "",
      label: "비밀번호",
      span: "(8자리)",
      type: "password",
    },
    { name: "userPW2", value: "", label: "비밀번호 확인", type: "text" },
    {
      name: "userBirth",
      value: "",
      label: "생년월일",
      span: "(8자리)",
      type: "text",
    },
    { name: "userAge", value: "", label: "나이", type: "text" },
    { name: "userAdress", value: "", label: "주소", type: "text" },
    { name: "userAdressDetail", value: "", label: "상세주소", type: "text" },
    { name: "userSchool", value: "", label: "최종학교", type: "text" },
  ]);
  const [selectedOptions1, setSelectedOptions1] = useState([]);
  const options1 = ["공인회계사", "세무사", "회계·세무 경력자", "기타"];
  const [selectedOptions2, setSelectedOptions2] = useState([]);
  const options2 = ["기업", "회계사 사무", "세무사 사무"];
  const [selectedOptions3, setSelectedOptions3] = useState([]);
  const options3 = ["제조업", "도소매", "소매업"];
  const [selectedOptions4, setSelectedOptions4] = useState([]);
  const options4 = ["상", "중", "하"];
  const [selectedOptions5, setSelectedOptions5] = useState([]);
  const options5 = ["상", "중", "하"];
  const [selectedOptions6, setSelectedOptions6] = useState([]);
  const options6 = ["회계감사", "연구개발비 정산", "빅 시즌 취업"];
  // 근무 경력
  const [inputValues2, setInputValues2] = useState([
    { name: "careerYear", value: "", label: "년", type: "number" },
    { name: "careerMonth", value: "", label: "개월", type: "number" },
  ]);

  // 사용 프로그램
  const [inputValues3, setInputValues3] = useState([
    { name: "useProgram", value: "", type: "text" },
  ]);

  // 최종 이직년도
  const [inputValues4, setInputValues4] = useState([
    { name: "moveYear", value: "", type: "text" },
  ]);

  // 희망 보수
  const [inputValues5, setInputValues5] = useState([
    { name: "pay", value: "", type: "text" },
  ]);

  // 희망 근무기간
  const [inputValues6, setInputValues6] = useState([
    { name: "hopeMonth", value: "", label: "개월", type: "number" },
    { name: "hopeWeek", value: "", label: "주", type: "number" },
    { name: "hopeDay", value: "", label: "일", type: "number" },
  ]);

  const [checkState1, setCheckState1] = useState(true); // true : 개인, false : 법인
  const handleInputChange = (event, name) => {
    const newInputValues = [...inputValues];
    const index = newInputValues.findIndex((item) => item.name === name);
    newInputValues[index].value = event.target.value;
    setInputValues(newInputValues);
  };
  const handleInputChange2 = (event, name) => {
    const newInputValues2 = [...inputValues2];
    const index = newInputValues2.findIndex((item) => item.name === name);
    newInputValues2[index].value = event.target.value;
    setInputValues2(newInputValues2);
  };

  const changeState1 = () => {
    setCheckState1(!checkState1);
  };
  const handleInputChange3 = (event) => {
    const newValue3 = event.target.value;
    setInputValues3((prev) => [...prev, { value: newValue3 }]);
  };
  const handleInputChange4 = (event) => {
    const newValue4 = event.target.value;
    setInputValues4((prev) => [...prev, { value: newValue4 }]);
  };
  const handleInputChange5 = (event) => {
    const newValue5 = event.target.value;
    setInputValues5((prev) => [...prev, { value: newValue5 }]);
  };
  const handleInputChange6 = (event, name) => {
    const newInputValues6 = [...inputValues6];
    const index = newInputValues6.findIndex((item) => item.name === name);
    newInputValues6[index].value = event.target.value;
    setInputValues6(newInputValues6);
  };

  const toggleOption1 = (option) => {
    if (selectedOptions1.includes(option)) {
      setSelectedOptions1(
        selectedOptions1.filter((selectedOption) => selectedOption !== option)
      );
    } else {
      if (selectedOptions1.length < 4) {
        setSelectedOptions1([...selectedOptions1, option]);
      }
    }
  };

  const toggleOption2 = (option) => {
    if (selectedOptions2.includes(option)) {
      setSelectedOptions2(
        selectedOptions2.filter((selectedOption) => selectedOption !== option)
      );
    } else {
      if (selectedOptions2.length < 3) {
        setSelectedOptions2([...selectedOptions2, option]);
      }
    }
  };
  const toggleOption3 = (option) => {
    if (selectedOptions3.includes(option)) {
      setSelectedOptions3(
        selectedOptions3.filter((selectedOption) => selectedOption !== option)
      );
    } else {
      if (selectedOptions3.length < 3) {
        setSelectedOptions3([...selectedOptions3, option]);
      }
    }
  };
  const toggleOption4 = (option) => {
    if (option === selectedOptions4) {
      setSelectedOptions4(null);
    } else {
      setSelectedOptions4(option);
    }
  };
  const toggleOption5 = (option) => {
    if (option === selectedOptions5) {
      setSelectedOptions5(null);
    } else {
      setSelectedOptions5(option);
    }
  };
  const toggleOption6 = (option) => {
    if (option === selectedOptions6) {
      setSelectedOptions6(null);
    } else {
      setSelectedOptions6(option);
    }
  };
  return (
    <div className="signInForm_s2">
      <div className="form_container">
        {inputValues.map((value, index) => {
          return (
            <div className="input_box type1" key={index}>
              <p>
                {value.label}
                <span> {value.span ? `${value.span}` : ""}</span>
              </p>
              <input
                name={value.name}
                type={value.type}
                value={value.value}
                onChange={(event) => {
                  handleInputChange(event, value.name);
                }}
              />
            </div>
          );
        })}
        <div className="input_box type2 input_margin">
          <p>전문인자격</p>
          <div className="select_box">
            {options1.slice(0, 3).map((option, index) => {
              return (
                <div
                  className={
                    selectedOptions1.includes(option)
                      ? "select selected"
                      : "select"
                  }
                  key={index}
                  onClick={() => {
                    toggleOption1(option);
                  }}
                >
                  {option}
                </div>
              );
            })}
          </div>
        </div>
        <div className="input_box type2">
          <p></p>
          <div className="select_box">
            <div
              className={
                selectedOptions1.includes(options1[3])
                  ? "select selected"
                  : "select"
              }
              onClick={() => {
                toggleOption1(options1[3]);
              }}
            >
              {options1[3]}
            </div>
          </div>
        </div>
        <div className="input_box type3">
          <p>근무경력</p>
          <div className="box_container">
            {inputValues2.map((value, index) => {
              return (
                <div className="input_container" key={index}>
                  <input
                    name={value.name}
                    type={value.type}
                    value={value.value}
                    onChange={(event) => {
                      handleInputChange2(event, value.name);
                    }}
                  />
                  <p>{value.label}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="input_box type4">
          <p></p>
          <div className="select_container">
            {options2.map((option, index) => {
              return (
                <div
                  className={
                    selectedOptions2.includes(option)
                      ? "select selected"
                      : "select"
                  }
                  key={index}
                  onClick={() => {
                    toggleOption2(option);
                  }}
                >
                  {option}
                </div>
              );
            })}
          </div>
        </div>
        <div className="input_box type5">
          <p>사업장 형태</p>
          <div className="check_container">
            <div className="check_box">
              <img
                src={
                  checkState1 === true
                    ? "/images/signInForm_s1_img2.png"
                    : "/images/signInForm_s1_img1.png"
                }
                onClick={changeState1}
                alt=""
              />
              <p style={{ color: checkState1 === true ? "#2196F3" : "" }}>
                개인
              </p>
            </div>
            <div className="check_box">
              <img
                src={
                  checkState1 === false
                    ? "/images/signInForm_s1_img2.png"
                    : "/images/signInForm_s1_img1.png"
                }
                onClick={changeState1}
                alt=""
              />
              <p style={{ color: checkState1 === false ? "#2196F3" : "" }}>
                법인
              </p>
            </div>
          </div>
        </div>
        <div className="input_box type4">
          <p>업태</p>
          <div className="select_container">
            {options3.map((option, index) => {
              return (
                <div
                  className={
                    selectedOptions3.includes(option)
                      ? "select selected"
                      : "select"
                  }
                  key={index}
                  onClick={() => {
                    toggleOption3(option);
                  }}
                >
                  {option}
                </div>
              );
            })}
          </div>
        </div>
        <div className="input_box type1">
          <p>사용 프로그램</p>
          <input
            name={inputValues3.name}
            type={inputValues3.type}
            value={inputValues3.value}
            onChange={(event) => {
              handleInputChange3(event);
            }}
          />
        </div>
        <div className="input_box type1">
          <p>최종 이직년도</p>
          <input
            name={inputValues4.name}
            type={inputValues4.type}
            value={inputValues4.value}
            onChange={(event) => {
              handleInputChange4(event);
            }}
          />
        </div>
        <div className="input_box type4 input_margin">
          <p>회계지식 정도</p>
          <div className="select_container">
            {options4.map((option, index) => {
              return (
                <div
                  className={
                    selectedOptions4.includes(option)
                      ? "select selected"
                      : "select"
                  }
                  key={index}
                  onClick={() => {
                    toggleOption4(option);
                  }}
                >
                  {option}
                </div>
              );
            })}
          </div>
        </div>
        <div className="input_box type4">
          <p>세무지식 정도</p>
          <div className="select_container">
            {options5.map((option, index) => {
              return (
                <div
                  className={
                    selectedOptions5.includes(option)
                      ? "select selected"
                      : "select"
                  }
                  key={index}
                  onClick={() => {
                    toggleOption5(option);
                  }}
                >
                  {option}
                </div>
              );
            })}
          </div>
        </div>
        <div className="input_box type3 type3_1 input_margin">
          <p>희망 근무기간</p>
          <div className="box_container">
            {inputValues6.map((value, index) => {
              return (
                <div className="input_container" key={index}>
                  <input
                    name={value.name}
                    type={value.type}
                    value={value.value}
                    onChange={(event) => {
                      handleInputChange6(event, value.name);
                    }}
                  />
                  <p>{value.label}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="input_box type5">
          <p>희망 근무형태</p>
          <div className="check_container">
            <div className="check_box">
              <img
                src={
                  checkState1 === true
                    ? "/images/signInForm_s1_img2.png"
                    : "/images/signInForm_s1_img1.png"
                }
                alt=""
                onClick={changeState1}
              />
              <p style={{ color: checkState1 === true ? "#2196F3" : "" }}>
                재택
              </p>
            </div>
            <div className="check_box">
              <img
                src={
                  checkState1 === false
                    ? "/images/signInForm_s1_img2.png"
                    : "/images/signInForm_s1_img1.png"
                }
                onClick={changeState1}
                alt=""
              />
              <p style={{ color: checkState1 === false ? "#2196F3" : "" }}>
                출근
              </p>
            </div>
          </div>
        </div>
        <div className="input_box type1">
          <p>희망 보수</p>
          <input
            name={inputValues5.name}
            type={inputValues5.type}
            value={inputValues5.value}
            onChange={(event) => {
              handleInputChange5(event);
            }}
          />
        </div>
        <div className="input_box type4">
          <p>희망 참여업무</p>
          <div className="select_container">
            {options6.map((option, index) => {
              return (
                <div
                  className={
                    selectedOptions6.includes(option)
                      ? "select selected"
                      : "select"
                  }
                  key={index}
                  onClick={() => {
                    toggleOption6(option);
                  }}
                >
                  {option}
                </div>
              );
            })}
          </div>
        </div>
        <div className="submit_btn">가입완료</div>
      </div>
      <div className="text_box">© 2023 회전문</div>
    </div>
  );
};

export default SignInFormS2;
