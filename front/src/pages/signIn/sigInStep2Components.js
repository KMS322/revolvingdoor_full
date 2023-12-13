import "../../css/signinStep2.css";
import "../../css/signinStep2_mobile.css";
import SignInStep2S1 from "./signInStep2S1";
import SignInStep2S2 from "./signInStep2S2";
import { useLocation } from "react-router-dom";

const SignInStep2Components = () => {
  const { state } = useLocation();
  return (
    <>
      <SignInStep2S1 />
      <SignInStep2S2 type={state && state.type} />
    </>
  );
};

export default SignInStep2Components;
