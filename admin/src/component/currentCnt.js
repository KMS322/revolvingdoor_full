import "../css/currentCnt.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_ALLAPPLICATIONS_REQUEST } from "../reducers/adminBusiness";
import { LOAD_BUSINESS_REQUEST } from "../reducers/adminUser";
const CurrentCnt = () => {
  const dispatch = useDispatch();
  const { allUsers, userBusinesses } = useSelector((state) => state.adminUser);
  const { allApplications } = useSelector((state) => state.adminBusiness);
  const individualCnt = allUsers.filter(
    (user) => user.userType === "individual"
  ).length;
  const businessCnt = allUsers.filter(
    (user) => user.userType === "business"
  ).length;
  const applicationCnt = allApplications && allApplications.length;
  const progressCnt =
    allApplications &&
    allApplications.filter((app) => app.progressStep !== "목록신청전").length;
  const yearCnt =
    userBusinesses &&
    userBusinesses.filter(
      (business) => business.business_member_pay === "250000원"
    ).length;
  const caseCnt =
    userBusinesses &&
    userBusinesses.filter(
      (business) => business.business_member_pay === "200000원"
    ).length;

  useEffect(() => {
    dispatch({
      type: LOAD_ALLAPPLICATIONS_REQUEST,
    });
    dispatch({
      type: LOAD_BUSINESS_REQUEST,
    });
  }, []);
  return (
    <div className="currentCnt">
      <p>등록 현황</p>
      <div className="data_box">
        <p>등록된 구직자 수</p>
        <p>{individualCnt} 명</p>
      </div>
      <div className="data_box">
        <p>등록된 구인기업 수</p>
        <p>{businessCnt} 명</p>
      </div>
      <div className="data_box">
        <p>등록된 구인신청 건수</p>
        <p>{applicationCnt} 건</p>
      </div>
      <div className="data_box">
        <p>진행중인 매칭 건수</p>
        <p>{progressCnt} 건</p>
      </div>
      <div className="data_box">
        <p>연간 회원 기업 수</p>
        <p>{yearCnt} 개</p>
      </div>
      <div className="data_box">
        <p>건당 회원 기업 수</p>
        <p>{caseCnt} 개</p>
      </div>
    </div>
  );
};

export default CurrentCnt;
