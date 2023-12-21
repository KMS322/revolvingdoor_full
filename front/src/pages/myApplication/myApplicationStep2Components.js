import "../../css/applicationStep2.css";
import "../../css/applicationStep2_mobile.css";
import MyApplicationStep2S1 from "./myApplicationStep2S1";
import MyApplicationStep2S2 from "./myApplicationStep2S2";
import Nav from "../nav";

const MyApplicationStep2Components = () => {
  return (
    <>
      <Nav />
      <MyApplicationStep2S1 />
      <MyApplicationStep2S2 />
    </>
  );
};
export default MyApplicationStep2Components;
