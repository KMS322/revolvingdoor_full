import "../../css/main.css";
import "../../css/main_mobile.css";
import Banner from "../banner";
import Nav from "../nav";
import MainS1 from "./mainS1";
import MainS2 from "./mainS2";
import MainS3 from "./mainS3";
const MainComponents = () => {
  return (
    <>
      <Nav />
      <Banner />
      <MainS1 />
      <MainS2 />
      <MainS3 />
    </>
  );
};

export default MainComponents;
