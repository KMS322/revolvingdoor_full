import "../css/header.css";
import "../css/header_mobile.css";
import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../reducers/user";
const Header = () => {
  const { me, logOutDone } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [menuState, setMenuState] = useState(false);
  const navigate = useNavigate();
  const goPage = (path) => {
    navigate(path);
  };
  const handleMenu = () => {
    setMenuState(!menuState);
  };

  useEffect(() => {
    if (!me) {
      navigate("/");
    }
  }, [me, logOutDone]);
  const logOut = useCallback(() => {
    if (!me) {
      goPage("/logIn");
    } else {
      dispatch(logoutRequestAction());
    }
  }, [me]);
  // if (me && typeof me === "object" && me.userType) {
  //   console.log("me.userType : ", me.userType);
  // }
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
              console.log("mypage 클릭시 me : ", me);
              if (me && me.userType === "individual") {
                goPage("/myPage");
              } else if (me && me.userType === "business") {
                goPage("/myPageBusiness");
              } else {
                alert("로그인 해주세요");
              }
            }}
          >
            MY페이지
          </li>
          <li onClick={logOut}>{me ? "로그아웃" : "로그인"}</li>
          <li
            onClick={() => {
              // goPage("/signin");
              if (me && me.userType === "individual") {
                goPage("/career");
              } else if (me && me.userType === "business") {
                goPage("/recruitment");
              } else {
                goPage("/signin");
              }
            }}
          >
            {me
              ? me.userType === "individual"
                ? "경력관리"
                : "채용관리"
              : "회원가입"}
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
