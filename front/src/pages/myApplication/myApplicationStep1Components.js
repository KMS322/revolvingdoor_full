import "../../css/applicationStep1.css";
import "../../css/applicationStep1_mobile.css";
import MyApplicationStep1S1 from "./myApplicationStep1S1";
import MyApplicationStep1S2 from "./myApplicationStep1S2";
import Nav from "../nav";

const MyApplicationStep1Components = () => {
  return (
    <>
      <Nav />
      <MyApplicationStep1S1 />
      <MyApplicationStep1S2 />
    </>
  );
};
export default MyApplicationStep1Components;
