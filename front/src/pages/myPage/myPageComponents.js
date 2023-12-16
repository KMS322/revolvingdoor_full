import Nav from "../nav";
import Banner from "../banner";
import MyPageS1 from "./myPageS1";
import MyPageS2 from "./myPageS2";
import MyPageS3 from "./myPageS3";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LOAD_RESUME_REQUEST } from "../../reducers/userResume";
const MyPageComponents = () => {
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
      <MyPageS1 />
      <MyPageS2 />
      <MyPageS3 />
    </>
  );
};

export default MyPageComponents;
