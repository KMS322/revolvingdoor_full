import "../css/header.css";
import "../css/header_mobile.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constants";
const Header = () => {
  const [user, setUser] = useState(null);
  const [menuState, setMenuState] = useState(false);
  const navigate = useNavigate();
  const goPage = (path) => {
    navigate(path);
  };
  const handleMenu = () => {
    setMenuState(!menuState);
  };
  useEffect(() => {
    console.log("AA");
    axios
      .get(`${API_URL}/`)
      .then((result) => {
        console.log("result : ", result);
        setUser(result);
      })
      .catch((err) => {
        console.error(err);
      });

    // const fetchUserData = async () => {
    //   try {
    //     // API 호출을 통해 사용자 정보 가져오기
    //     const response = await axios.post(`${API_URL}`); // 적절한 API 엔드포인트 사용
    //     setUser(response.data);
    //     console.log("response : ", response);
    //     console.log("user : ", user);
    //   } catch (error) {
    //     console.error("Error fetching user data:", error);
    //   }
    // };

    // 컴포넌트가 마운트될 때 사용자 정보를 가져오도록 호출
    // fetchUserData();
  }, []);
  console.log("AA");
  return (
    <>
      <div className="header">
        <img
          src="/images/logo.png"
          alt=""
          onClick={() => {
            goPage("/");
          }}
        />
        <div className="search_box pc">
          <input />
          <img src="/images/header_img.png" alt="" />
        </div>
        <ul>
          <li
            onClick={() => {
              goPage("/myPage");
            }}
          >
            MY페이지
          </li>
          <li
            onClick={() => {
              goPage("/logIn");
            }}
          >
            {/* {user !== undefined ? `${user.user}` : "로그인"} */}
            {user === null ? "로그로그" : "로그인"}
            {/* 로그인 */}
          </li>
          <li
            onClick={() => {
              // goPage("/signin");
              goPage("/signStep3");
            }}
          >
            회원가입
          </li>
        </ul>
        <div className="img_box mobile" onClick={handleMenu}>
          <img src="/images/m_header_icon.png" alt="" />
        </div>
      </div>
      <div className="search_box mobile">
        <input />
        <img src="/images/header_img.png" alt="" />
      </div>
      <div
        className="mobile_nav"
        style={{ display: menuState ? "block" : "none" }}
      >
        <div className="article_container">
          <div className="profile_container">
            <img src="/images/mobile_nav_img1.png" alt="" />
            <p>게스트</p>
            <p>(guest@login)</p>
          </div>
          <div className="article">
            <div className="btn_box">
              <img src="/images/mobile_nav_img2.png" alt="" />
              <p
                onClick={() => {
                  goPage("/myPage");
                  handleMenu();
                }}
              >
                MY페이지
              </p>
            </div>
            <div className="btn_box">
              <img src="/images/mobile_nav_img3.png" alt="" />
              <p
                onClick={() => {
                  goPage("/matchingInfo");
                  handleMenu();
                }}
              >
                회계전문인
                <br />
                임시직매칭정보
              </p>
            </div>
            <div className="btn_box">
              <img src="/images/mobile_nav_img4.png" alt="" />
              <p
                onClick={() => {
                  goPage("/process");
                  handleMenu();
                }}
              >
                매칭프로세스
              </p>
            </div>
            <div className="btn_box">
              <img src="/images/mobile_nav_img5.png" alt="" />
              <p
                onClick={() => {
                  goPage("/eduProgram");
                  handleMenu();
                }}
              >
                교육프로그램
              </p>
            </div>
            <div className="btn_box">
              <img src="/images/mobile_nav_img6.png" alt="" />
              <p
                onClick={() => {
                  goPage("/square");
                  handleMenu();
                }}
              >
                일자리광장
              </p>
            </div>
          </div>
        </div>
        <p
          onClick={() => {
            goPage("/login");
            handleMenu();
          }}
        >
          로그인
        </p>
      </div>
      <div
        className="bg_black"
        onClick={handleMenu}
        style={{ display: menuState ? "block" : "none" }}
      ></div>
    </>
  );
};

export default Header;
