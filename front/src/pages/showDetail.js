import "../css/showDetail.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SHOW_LIST_REQUEST,
  LOAD_CONCURRENCE_REQUEST,
} from "../reducers/matching";
import ShowUserDetail from "./showUserDetail";
const ShowDetail = ({ data, onClose }) => {
  const [detailData, setDetailData] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const closePopup = () => {
    setShowDetail(false);
  };
  const dispatch = useDispatch();
  const { matchingLists, concurrences } = useSelector(
    (state) => state.matching
  );
  console.log("data1 : ", data);
  console.log("matchingLists1 : ", matchingLists);
  console.log("concurrences1 : ", concurrences);

  const matchingData = data;
  const applicationId = data.applicationId;
  const showCnt = data.showCnt;
  console.log("showCnt : ", showCnt);
  let arr = [];
  matchingLists &&
    matchingLists.map((list) => {
      arr.push(Number(list.UserIndividual.IndividualId));
    });

  useEffect(() => {
    dispatch({
      type: SHOW_LIST_REQUEST,
      data: {
        matchingData,
      },
    });
  }, [arr.length]);
  useEffect(() => {
    if (matchingLists) {
      console.log("arr : ", arr);
      dispatch({
        type: LOAD_CONCURRENCE_REQUEST,
        data: {
          arr,
          applicationId,
        },
      });
    }
  }, [matchingLists]);
  let acceptUsers = [];
  concurrences &&
    concurrences.map((list) => {
      if (list.concurrence === "동의") {
        acceptUsers.push(list);
      }
    });
  let filteredMatchingLists = [];
  if (showCnt <= 5) {
    matchingLists &&
      matchingLists.slice(0, 5).forEach((list) => {
        const isAccepted = acceptUsers.some(
          (acceptUser) =>
            acceptUser.IndividualId === String(list.UserIndividual.IndividualId)
        );
        if (isAccepted) {
          filteredMatchingLists.push(list);
        }
      });
  } else {
    matchingLists &&
      matchingLists.forEach((list) => {
        const isAccepted = acceptUsers.some(
          (acceptUser) =>
            acceptUser.IndividualId === String(list.UserIndividual.IndividualId)
        );
        if (isAccepted) {
          filteredMatchingLists.push(list);
        }
      });
  }

  console.log("filteredMatchingLists : ", filteredMatchingLists);
  return (
    <div className="showDetail">
      <div className="article_container">
        <img src="/images/close_btn.png" alt="" onClick={onClose} />
        <p>
          다음은 매칭된 구직자 중 개인정보 열람을 동의한 구직자의 정보입니다.
        </p>
        <p>대상자는 다음과 같습니다.</p>
        <div className="list_box">
          <div className="row row_head">
            <p>No</p>
            <p>이름</p>
            <p>주소</p>
            <p>연락처</p>
            <p>이메일</p>
            <p></p>
          </div>
          {filteredMatchingLists &&
            filteredMatchingLists.slice(0, showCnt).map((list, index) => {
              const selectedConcurrence = concurrences.find(
                (item) => Number(item.IndividualId) === list.id
              );
              console.log("selectedConcurrence : ", selectedConcurrence);
              if (selectedConcurrence.showOn === "on") {
                return (
                  <div className="row row_content" key={index}>
                    <p>{index + 1}</p>
                    <p>{list.UserIndividual.user_member_name}</p>
                    <p>{list.UserIndividual.user_member_jibunAddress}</p>
                    <p>{list.UserIndividual.user_member_tel}</p>
                    <p>{list.UserIndividual.user_member_email}</p>
                    <p
                      onClick={() => {
                        setShowDetail(true);
                        setDetailData(list);
                      }}
                    >
                      이력서
                    </p>
                  </div>
                );
              }
            })}
        </div>
        <div className="btn" onClick={onClose}>
          확인
        </div>
      </div>
      {showDetail && <ShowUserDetail onClose={closePopup} data={detailData} />}
    </div>
  );
};

export default ShowDetail;
