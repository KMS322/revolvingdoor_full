import dayjs from "dayjs";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_RESUME_REQUEST } from "../../reducers/userResume";

const MyPageS2 = () => {
  const dispatch = useDispatch();
  const { resumes } = useSelector((state) => state.userResume);
  const removeDuplicatesById = (resumes) => {
    const uniqueResumes = [];
    const existingIds = [];

    for (const resume of resumes) {
      if (!existingIds.includes(resume.id)) {
        uniqueResumes.push(resume);
        existingIds.push(resume.id);
      }
    }

    return uniqueResumes;
  };

  const uniqueResumes = removeDuplicatesById(resumes);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: LOAD_RESUME_REQUEST,
    });
  }, [dispatch]);

  return (
    <div className="myPage_s2">
      <div className="article_container">
        <div className="box_container">
          <p>이력서 관리</p>
          <div
            className="btn_box"
            onClick={() => {
              navigate("/resume");
            }}
          >
            신규 이력서 작성
          </div>
        </div>
        <div className="table_container">
          <div className="head_row row">
            <p className="pc">지역 / 근무지</p>
            <p>이력서 제목</p>
            <p>최종 수정일</p>
            <p>지원여부</p>
            <p>관리</p>
          </div>
          {uniqueResumes.map((resume, index) => {
            return (
              <div className="content_row row" key={index}>
                <p className="pc">경산시</p>
                <p>{resume.user_resume_title}</p>
                <p>{dayjs(resume.updatedAt).format("YYYY-MM-DD")}</p>
                <p className="state1">비공개 상태</p>
                <div className="manage_box">
                  <div
                    className="manage"
                    onClick={() => {
                      navigate("/myResume", {
                        state: { resume },
                      });
                    }}
                  >
                    수정
                  </div>
                  <div className="manage">삭제</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyPageS2;
