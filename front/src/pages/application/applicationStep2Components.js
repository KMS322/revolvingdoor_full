import "../../css/applicationStep2.css";
import "../../css/applicationStep2_mobile.css";
import ApplicationStep2S1 from "./applicationStep2S1";
import ApplicationStep2S2 from "./applicationStep2S2";
import Nav from "../nav";

const ApplicationStep2Components = () => {
  return (
    <>
      <Nav />
      <ApplicationStep2S1 />
      <ApplicationStep2S2 />
    </>
  );
};
export default ApplicationStep2Components;
