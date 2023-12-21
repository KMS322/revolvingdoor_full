import "../../css/myPageBusiness.css";
import "../../css/myPageBusiness_mobile.css";
import Nav from "../nav";
import Banner from "../banner";
import MyPageBusinessS1 from "./myPageBusinessS1";
import MyPageBusinessS2 from "./myPageBusinessS2";
const MyPageBusinessComponents = () => {
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
