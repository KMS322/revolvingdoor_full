import "../../css/signinStep1.css";
import "../../css/signinStep1_mobile.css";
import SignInStep1S1 from "./signInStep1S1";
import SignInStep1S2 from "./signInStep1S2";
import { useLocation } from "react-router-dom";

const SignInStep1Components = () => {
  const { state } = useLocation();
  return (
    <>
      <SignInStep1S1 />
      <SignInStep1S2 type={state && state.type} />
    </>
  );
};

export default SignInStep1Components;
