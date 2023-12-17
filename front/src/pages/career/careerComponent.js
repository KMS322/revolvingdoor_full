import "../../css/career.css";
import "../../css/career_mobile.css";
import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { ADD_CAREER_REQUEST } from "../../reducers/userCareer";

const CareerComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addCareerDone } = useSelector((state) => state.userCareer);
  const [user_career_company, onChangeCompany] = useInput("");

  useEffect(() => {
    if (addCareerDone) {
      navigate(-1);
    }
  }, [addCareerDone]);
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      console.log("user_career_company", user_career_company);
      dispatch({
        type: ADD_CAREER_REQUEST,
        data: { user_career_company },
      });
    },
    [user_career_company]
  );

  return (
    <div className="career_s1">
      <div className="title_box">
        <img src="/images/career_img.png" alt="" />
        <p>내 경력관리</p>
      </div>
      <form>
        <p>경력사항</p>
        <label className="input_box input_nomargin">
          <p>근무처</p>
          <input
            // type="email"
            type="text"
            name="user_career_company"
            value={user_career_company}
            onChange={onChangeCompany}
          />
        </label>
        <button type="submit" onClick={onSubmitForm}>
          저장
        </button>
      </form>
    </div>
  );
};

export default CareerComponent;
