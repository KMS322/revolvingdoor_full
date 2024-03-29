import dayjs from "dayjs";
import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  LOAD_RESUME_REQUEST,
  REMOVE_RESUME_REQUEST,
} from "../../reducers/userResume";

const MyPageS2 = () => {
  const dispatch = useDispatch();
  const { resumes, removeResumeDone } = useSelector(
    (state) => state.userResume
  );
  const { individualInfo } = useSelector((state) => state.userInfo);
  // console.log("individualInfo : ", individualInfo);
  // const individualId = individualInfo.IndividualId;
  // onSetIndividualId(individualId);
  const removeDuplicatesById = (resumes) => {
    if (!resumes || !Array.isArray(resumes)) {
      return [];
    }
    const uniqueResumes = [];
    const existingIds = [];

    for (const resume of resumes) {
      if (resume && resume.id && !existingIds.includes(resume.id)) {
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

  const onDelete = useCallback(
    (e, id) => {
      const isConfirmed = window.confirm("삭제하시겠습니까?");
      if (isConfirmed) {
        e.preventDefault();
        dispatch({
          type: REMOVE_RESUME_REQUEST,
          data: {
            id,
          },
        });
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (removeResumeDone) {
      window.location.reload();
    }
  }, [removeResumeDone]);
  return (
    <div className="myPage_s2">
      <div className="article_container">
        <div className="box_container">
          <p>이력서 관리</p>
          {uniqueResumes.length >= 1 ? (
            ""
          ) : (
            <div
              className="btn_box"
              onClick={() => {
                navigate("/resume");
              }}
            >
              신규 이력서 작성
            </div>
          )}
        </div>
        <div className="table_container">
          <div className="head_row row">
            <p className="pc">지역 / 근무지</p>
            <p>이력서 제목</p>
            <p>최종 수정일</p>
            {/* <p>지원여부</p> */}
            <p></p>
            <p>관리</p>
          </div>
          {uniqueResumes &&
            uniqueResumes.slice(0, 5).map((resume, index) => {
              return (
                <div className="content_row row" key={index}>
                  <p className="pc">
                    {`${
                      individualInfo &&
                      individualInfo.user_member_jibunAddress?.split(" ")[0]
                    }
                    ${
                      individualInfo &&
                      individualInfo.user_member_jibunAddress?.split(" ")[1]
                    }`}
                  </p>
                  <p>{resume.user_resume_title}</p>
                  <p>{dayjs(resume.updatedAt).format("YYYY-MM-DD")}</p>
                  {/* <p className="state1">비공개 상태</p> */}
                  <p></p>
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
                    <div
                      className="manage"
                      onClick={(e) => {
                        onDelete(e, resume.id);
                      }}
                    >
                      삭제
                    </div>
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
