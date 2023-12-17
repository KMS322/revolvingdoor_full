import "../../css/resume.css";
import "../../css/resume_mobile.css";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_RESUME_REQUEST } from "../../reducers/userResume";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
const ResumeS1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user_resume_title, onChangeTitle] = useInput("");
  const { addResumeDone } = useSelector((state) => state.userResume);
  useEffect(() => {
    if (addResumeDone) {
      navigate(-1);
    }
  }, [addResumeDone]);
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      console.log("타이틀 : ", user_resume_title);
      dispatch({
        type: ADD_RESUME_REQUEST,
        data: { user_resume_title },
      });
    },
    [user_resume_title]
  );
  return (
    <div className="resume_s1">
      <p>MY페이지 > 이력서관리 > 신규이력서작성</p>
      <form>
        <p className="title">이력서 제목</p>
        <input
          className="title_input"
          type="text"
          name="user_resume_title"
          value={user_resume_title}
          onChange={onChangeTitle}
        />
        <p>학력사항</p>
        <label className="input_box">
          <p>전공(부전공)</p>
          <input type="text" name="" />
        </label>
        <label className="input_box">
          <p>재학기간</p>
          <div className="sub_input">
            <input type="text" name="" />
            <p>~</p>
            <input type="text" name="" />
          </div>
        </label>
        <label className="select_box">
          <p>최종학력</p>
          <div className="sub_select sub_select1">
            <input type="text" name="" value="졸업(예정)" />
            <input type="text" name="" value="수료" />
            <input type="text" name="" value="재학" />
            <input type="text" name="" value="휴학" />
          </div>
        </label>
        <label className="select_box">
          <p></p>
          <div className="sub_select sub_select2">
            <input type="text" name="" value="중퇴" />
            <input type="text" name="" value="검정고시" />
            <input type="text" name="" value="무학" />
          </div>
        </label>
        <p>희망취업조건</p>
        <label className="select_box">
          <p>희망근무처</p>
          <div className="sub_select sub_select3">
            <input type="text" name="" value="회계법인" />
            <input type="text" name="" value="세무법인" />
            <input type="text" name="" value="공인회계사 사무소" />
          </div>
        </label>
        <label className="select_box">
          <p></p>
          <div className="sub_select sub_select4">
            <input type="text" name="" value="세무사 사무소" />
            <input type="text" name="" value="기업" />
          </div>
        </label>
        <button type="submit" onClick={onSubmitForm}>
          이력서 저장
        </button>
      </form>
    </div>
  );
};

export default ResumeS1;
