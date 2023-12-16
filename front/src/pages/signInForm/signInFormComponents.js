import SignInFormS1 from "./signInFormS1";
import SignInFormS2 from "./signInFormS2";
import { useLocation } from "react-router-dom";
const SignInFormComponents = () => {
  const { state } = useLocation();
  return (
    <>
      <SignInFormS1 />
      <SignInFormS2 />
    </>
  );
};

export default SignInFormComponents;
