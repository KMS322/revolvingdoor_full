import "../../css/signinStep3.css";
import "../../css/signinStep3_mobile.css";
import SignInStep3S1 from "./signInStep3S1";
import SignInStep3S2 from "./signInStep3S2";
import { useLocation } from "react-router-dom";

const SignInStep3Components = () => {
  const { state } = useLocation();
  return (
    <>
      <SignInStep3S1 />
      <SignInStep3S2 type={state && state.type} />
    </>
  );
};

export default SignInStep3Components;
