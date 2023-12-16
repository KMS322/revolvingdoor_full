import "../../css/signinBusinessStep2.css";
import "../../css/signinBusinessStep2_mobile.css";
import SignInBusinessStep2S1 from "./signInBusinessStep2S1";
import SignInBusinessStep2S2 from "./signInBusinessStep2S2";
import { useLocation } from "react-router-dom";

const SignInBusinessStep2Components = () => {
  const { state } = useLocation();
  return (
    <>
      <SignInBusinessStep2S1 />
      <SignInBusinessStep2S2 type={state && state.type} />
    </>
  );
};

export default SignInBusinessStep2Components;
