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
        <button type="submit" onClick={onSubmitForm}>
          이력서 저장
        </button>
      </form>
    </div>
  );
};

export default ResumeS1;
