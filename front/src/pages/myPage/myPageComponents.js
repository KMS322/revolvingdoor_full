import "../../css/myPage.css";
import "../../css/myPage_mobile.css";
import Nav from "../nav";
import Banner from "../banner";
import MyPageS1 from "./myPageS1";
import MyPageS2 from "./myPageS2";
import MyPageS3 from "./myPageS3";
const MyPageComponents = () => {
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
