import "../../css/applicationStep1.css";
import "../../css/applicationStep1_mobile.css";
import ApplicationStep1S1 from "./applicationStep1S1";
import ApplicationStep1S2 from "./applicationStep1S2";
import Nav from "../nav";

const ApplicationStep1Components = () => {
  return (
    <>
      <Nav />
      <ApplicationStep1S1 />
      <ApplicationStep1S2 />
    </>
  );
};
export default ApplicationStep1Components;
