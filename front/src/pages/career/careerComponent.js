import "../../css/career.css";
import "../../css/career_mobile.css";
import Nav from "../nav";
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
      navigate("/");
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
    <>
      <Nav />
      <div className="career_s1">
        <div className="title_box">
          <img src="/images/career_img.png" alt="" />
          <p>내 경력관리</p>
        </div>
        <form>
          <p>경력사항</p>
          <label className="input_box input_nomargin">
            <p>근무처</p>
          </label>
          <label className="input_box">
            <p>1.</p>
            <input
              // type="email"
              type="text"
              name="user_career_company"
              value={user_career_company}
              onChange={onChangeCompany}
            />
          </label>
          {/* <label className="input_box">
            <p>2.</p>
            <input type="text" name="" />
          </label>
          <label className="input_box">
            <p>3.</p>
            <input type="text" name="" />
          </label> */}

          <label className="input_box">
            <p>직위</p>
          </label>
          <label className="input_box">
            <p>1.</p>
            <input type="text" name="" />
          </label>
          {/* <label className="input_box">
            <p>2.</p>
            <input type="text" name="" />
          </label>
          <label className="input_box">
            <p>3.</p>
            <input type="text" name="" />
          </label> */}
          <label className="input_box">
            <p>
              담당 사업장
              <br />
              형태와 업태
            </p>
          </label>
          <label className="input_box">
            <p>1.</p>
            <input type="text" name="" />
          </label>
          {/* <label className="input_box">
            <p>2.</p>
            <input type="text" name="" />
          </label>
          <label className="input_box">
            <p>3.</p>
            <input type="text" name="" />
          </label> */}
          <label className="input_box">
            <p>사용 프로그램</p>
          </label>
          <label className="input_box">
            <p>1.</p>
            <input type="text" name="" />
          </label>
          {/* <label className="input_box">
            <p>2.</p>
            <input type="text" name="" />
          </label>
          <label className="input_box">
            <p>3.</p>
            <input type="text" name="" />
          </label> */}
          <label className="input_box">
            <p>근무기간</p>
          </label>
          <label className="input_box">
            <p>1.</p>
            <div className="sub_input sub_input1">
              <input type="text" name="" />
              <p>년</p>
              <input type="text" name="" />
              <p>월</p>
              <p>~</p>
              <input type="text" name="" />
              <p>년</p>
              <input type="text" name="" />
              <p>월</p>
            </div>
          </label>
          {/* <label className="input_box">
            <p>2.</p>
            <div className="sub_input sub_input1">
              <input type="text" name="" />
              <p>년</p>
              <input type="text" name="" />
              <p>월</p>
              <p>~</p>
              <input type="text" name="" />
              <p>년</p>
              <input type="text" name="" />
              <p>월</p>
            </div>
          </label>
          <label className="input_box">
            <p>3.</p>
            <div className="sub_input sub_input1">
              <input type="text" name="" />
              <p>년</p>
              <input type="text" name="" />
              <p>월</p>
              <p>~</p>
              <input type="text" name="" />
              <p>년</p>
              <input type="text" name="" />
              <p>월</p>
            </div>
          </label> */}
          <p>보유자격(면허)</p>
          <label className="input_box">
            <p>자격명 1.</p>
            <input type="text" name="" />
          </label>
          <label className="input_box">
            <p>취득일</p>
            <div className="sub_input sub_input2">
              <input type="text" name="" />
              <p>년</p>
              <input type="text" name="" />
              <p>월</p>
              <input type="text" name="" />
              <p>일</p>
            </div>
          </label>
          <label className="input_box">
            <p>발급기관</p>
            <input type="text" name="" />
          </label>
          {/* <label className="input_box">
            <p>자격명 2.</p>
            <input type="text" name="" />
          </label>
          <label className="input_box">
            <p>취득일</p>
            <div className="sub_input sub_input2">
              <input type="text" name="" />
              <p>년</p>
              <input type="text" name="" />
              <p>월</p>
              <input type="text" name="" />
              <p>일</p>
            </div>
          </label>
          <label className="input_box">
            <p>발급기관</p>
            <input type="text" name="" />
          </label>
          <label className="input_box">
            <p>자격명 3.</p>
            <input type="text" name="" />
          </label>
          <label className="input_box">
            <p>취득일</p>
            <div className="sub_input sub_input2">
              <input type="text" name="" />
              <p>년</p>
              <input type="text" name="" />
              <p>월</p>
              <input type="text" name="" />
              <p>일</p>
            </div>
          </label>
          <label className="input_box">
            <p>발급기관</p>
            <input type="text" name="" />
          </label> */}
          <p>교육훈련 이수현황</p>
          <label className="input_box">
            <p>훈련 과정명</p>
            <input type="text" name="" />
          </label>
          <label className="input_box">
            <p>훈련기간</p>
            <div className="sub_input sub_input1">
              <input type="text" name="" />
              <p>년</p>
              <input type="text" name="" />
              <p>월</p>
              <p>~</p>
              <input type="text" name="" />
              <p>년</p>
              <input type="text" name="" />
              <p>월</p>
            </div>
          </label>
          <label className="input_box">
            <p>세부훈련내용</p>
            <input type="text" name="" />
          </label>
          <label className="input_box">
            <p>훈련기관명</p>
            <input type="text" name="" />
          </label>
          <p>이직경력</p>
          <label className="input_box">
            <p>최종이직시기</p>
            <div className="sub_input sub_input3">
              <input type="text" name="" />
              <p>년</p>
              <input type="text" name="" />
              <p>월</p>
            </div>
          </label>
          <label className="select_box">
            <p>고용형태</p>
            <div className="sub_select">
              <div className="select">결혼</div>
              <div className="select">출산·육아</div>
              <div className="select">창업</div>
              <div className="select">기타</div>
            </div>
          </label>
          <p>회계 및 세무 지식</p>
          <label className="select_box">
            <p>회계지식</p>
            <div className="sub_select">
              <div className="select">상</div>
              <div className="select">중</div>
              <div className="select">하</div>
            </div>
          </label>
          <label className="select_box">
            <p>세무(법)지식</p>
            <div className="sub_select">
              <div className="select">상</div>
              <div className="select">중</div>
              <div className="select">하</div>
            </div>
          </label>
          <p>그 외 능력</p>
          <label className="select_box">
            <p>전산활용능력</p>
            <div className="sub_select sub_select1">
              <div className="select">문서작성</div>
              <div className="select">스프레드시트</div>
            </div>
          </label>
          <label className="select_box">
            <p></p>
            <div className="sub_select sub_select1">
              <div className="select">프레젠테이션</div>
              <div className="select">회계프로그램</div>
            </div>
          </label>
          <label className="select_box">
            <p></p>
            <div className="sub_select sub_select2">
              <div className="select">기타</div>
              <input type="text" name="" />
            </div>
          </label>
          <label className="select_box">
            <p>운전능력</p>
            <div className="sub_select sub_select1">
              <div className="select">운전면허증</div>
              <div className="select">차량 소지자</div>
            </div>
          </label>
          <button type="submit" onClick={onSubmitForm}>
            저장
          </button>
        </form>
      </div>
    </>
  );
};

export default CareerComponent;
