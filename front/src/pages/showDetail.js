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
  const matchingData = data;
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
  console.log("matchingLists : ", matchingLists);

  useEffect(() => {
    if (matchingLists) {
      dispatch({
        type: LOAD_CONCURRENCE_REQUEST,
        data: {
          arr,
        },
      });
    }
  }, [matchingLists]);
  let acceptUsers = [];

  // concurrences &&
  //   concurrences.map((list) => {
  //     if (list.concurrence === "동의") {
  //       acceptUsers.push(list);
  //     }
  //   });
  concurrences &&
    concurrences.map((list) => {
      acceptUsers.push(list);
    });
  let filteredMatchingLists = [];
  matchingLists &&
    matchingLists.forEach((list) => {
      console.log(
        "list.UserIndividual.IndividualId : ",
        list.UserIndividual.IndividualId
      );
      const isAccepted = acceptUsers.some(
        (acceptUser) =>
          acceptUser.IndividualId === String(list.UserIndividual.IndividualId)
      );
      console.log("acceptUsers : ", acceptUsers);

      if (isAccepted) {
        filteredMatchingLists.push(list);
      }
    });
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
            filteredMatchingLists.map((list, index) => (
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
                  상세정보
                </p>
              </div>
            ))}
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
