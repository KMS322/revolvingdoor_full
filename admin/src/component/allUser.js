import "../css/table.css";
import "../css/allUser.css";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_ALLUSER_REQUEST } from "../reducers/adminUser";
const AllUser = () => {
  const dispatch = useDispatch();
  const { loadAllUserDone, allUsers } = useSelector((state) => state.adminUser);
  useEffect(() => {
    dispatch({
      type: LOAD_ALLUSER_REQUEST,
    });
  }, []);
  console.log("allUsers : ", allUsers);
  return (
    <div className="section alluser">
      <div className="table_container">
        <div className="row row_head">
          <p>No</p>
          <p>유저 타입</p>
          <p>유저 아이디</p>
          <p>가입일</p>
        </div>
        {allUsers &&
          allUsers.map((allUser, index) => {
            return (
              <div
                className={
                  index % 2 === 0 ? "content_row row" : "content_row row even"
                }
                key={index}
              >
                <p>{allUser.id}</p>
                <p>
                  {allUser.userType === "individual" ? "구직자" : "구인기업"}
                </p>
                <p>{allUser.user_member_id}</p>
                <p>{dayjs(allUser.createdAt).format("YYYY-MM-DD")}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AllUser;
