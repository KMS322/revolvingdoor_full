import "../../css/signinBusinessStep1.css";
import "../../css/signinBusinessStep1_mobile.css";
import SignInBusinessStep1S1 from "./signInBusinessStep1S1";
import SignInBusinessStep1S2 from "./signInBusinessStep1S2";
import { useLocation } from "react-router-dom";

const SignInBusinessStep1Components = () => {
  const { state } = useLocation();
  return (
    <>
      <SignInBusinessStep1S1 />
      <SignInBusinessStep1S2 type={state && state.type} />
    </>
  );
};

export default SignInBusinessStep1Components;
