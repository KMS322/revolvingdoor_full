import "../../css/myPage.css";
import "../../css/myPage_mobile.css";
import React, { useState } from "react";
import Nav from "../nav";
import Banner from "../banner";
import MyPageS1 from "./myPageS1";
import MyPageS2 from "./myPageS2";
import MyPageS3 from "./myPageS3";
const MyPageComponents = () => {
  const [individualId, setIndividualId] = useState();
  const handleIndividualId = (id) => {
    setIndividualId(id);
  };

  return (
    <>
      <Nav />
      <Banner />
      <MyPageS1 onSetIndividualId={handleIndividualId} />
      <MyPageS2 />
      {/* <MyPageS3 individualId={individualId} /> */}
    </>
  );
};

export default MyPageComponents;
