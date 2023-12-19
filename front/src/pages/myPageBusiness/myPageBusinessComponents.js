import "../../css/myPageBusiness.css";
import "../../css/myPageBusiness_mobile.css";
import Nav from "../nav";
import Banner from "../banner";
import MyPageBusinessS1 from "./myPageBusinessS1";
import MyPageBusinessS2 from "./myPageBusinessS2";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LOAD_RESUME_REQUEST } from "../../reducers/userResume";
const MyPageBusinessComponents = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_RESUME_REQUEST,
    });
  }, []);
  return (
    <>
      <Nav />
      <Banner />
      <MyPageBusinessS1 />
      <MyPageBusinessS2 />
    </>
  );
};

export default MyPageBusinessComponents;
