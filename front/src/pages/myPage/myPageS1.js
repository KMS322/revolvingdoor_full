import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_INDIVIDUAL_INFO_REQUEST } from "../../reducers/userInfo";
const MyPageS1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { individualInfo } = useSelector((state) => state.userInfo);
  useEffect(() => {
    dispatch({
      type: LOAD_INDIVIDUAL_INFO_REQUEST,
    });
  }, []);
  const sumInfo = {
    memberInfo: me,
    userInfo: individualInfo,
  };
  return (
    <div className="myPage_s1">
      <div className="title_box">
        <div className="title">
          <img src="/images/myPage_s1_img1.png" alt="" />
          <p>MY페이지</p>
        </div>
      </div>
      <div className="article_container">
        <div className="article">
          <img src="/images/myPage_s1_img2.png" alt="" />
          <p>
            <span>
              {me && me.user_member_id ? `${me.user_member_id}님, ` : ""}
            </span>{" "}
            어서오세요.
          </p>
          <p>경북 00시 000***@n****.com</p>
          <p
            onClick={() => {
              if (me.userType === "individual") {
                navigate("/individualInfo", {
                  state: { data: sumInfo },
                });
              }
            }}
            style={{ cursor: "pointer" }}
          >
            회원정보 수정
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyPageS1;
