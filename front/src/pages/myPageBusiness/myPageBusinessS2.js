import "../../css/myPageBusiness.css";
import "../../css/myPageBusiness_mobile.css";
import dayjs from "dayjs";
import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  LOAD_APPLICATION_REQUEST,
  REMOVE_APPLICATION_REQUEST,
} from "../../reducers/businessApplication";

const MyPageBusinessS2 = () => {
  const dispatch = useDispatch();
  const { applications, removeApplicationDone } = useSelector(
    (state) => state.businessApplication
  );
  const removeDuplicatesById = (applications) => {
    if (!applications || !Array.isArray(applications)) {
      return [];
    }
    const uniqueApplication = [];
    const existingIds = [];

    for (const application of applications) {
      if (
        application &&
        application.id &&
        !existingIds.includes(application.id)
      ) {
        uniqueApplication.push(application);
        existingIds.push(application.id);
      }
    }

    return uniqueApplication;
  };

  const uniqueApplications = removeDuplicatesById(applications);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: LOAD_APPLICATION_REQUEST,
    });
  }, [dispatch]);

  const onDelete = useCallback(
    (e, id) => {
      const isConfirmed = window.confirm("삭제하시겠습니까?");
      if (isConfirmed) {
        e.preventDefault();
        dispatch({
          type: REMOVE_APPLICATION_REQUEST,
          data: {
            id,
          },
        });
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (removeApplicationDone) {
      window.location.reload();
    }
  }, [removeApplicationDone]);
  return (
    <div className="myPageBusiness_s2">
      <div className="article_container">
        <div className="box_container">
          <p>구인 신청 내역 관리</p>
          <div
            className="btn_box"
            onClick={() => {
              navigate("/applicationStep1");
            }}
          >
            구인 신청서 작성
          </div>
        </div>
        <div className="table_container">
          <div className="head_row row">
            <p className="pc">지역 / 근무지</p>
            <p>채용 제목</p>
            <p>최종 수정일</p>
            <p>지원여부</p>
            <p>관리</p>
          </div>
          {uniqueApplications.map((application, index) => {
            return (
              <div className="content_row row" key={index}>
                <p className="pc"></p>
                <p>{application.business_application_name}</p>
                <p>{dayjs(application.updatedAt).format("YYYY-MM-DD")}</p>
                {/* <p className="state1">비공개 상태</p> */}
                <p className="state1">{application.id}</p>
                <div className="manage_box">
                  <div
                    className="manage"
                    onClick={() => {
                      navigate("/myApplicationStep1", {
                        state: { application },
                      });
                    }}
                  >
                    수정
                  </div>
                  <div
                    className="manage"
                    onClick={(e) => {
                      onDelete(e, application.id);
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

export default MyPageBusinessS2;
