import "./App.css";
import "./css/fonts.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { LOAD_MY_INFO_REQUEST } from "./reducers/user";
import { LOAD_CAREER_REQUEST } from "./reducers/userCareer";
import Header from "./pages/header.js";
import Footer from "./pages/footer.js";
import ScrollToTop from "./scrollToTop.js";
import MainComponents from "./pages/main/mainComponents";
import MatchingComponents from "./pages/matchingInfo/matchingInfoComponents";
import InfoDetailComponents from "./pages/infoDetail/infoDetailComponents";
import ProcessComponent from "./pages/process/processComponent";
import EduProgramComponent from "./pages/eduProgram/eduProgramComponent";
import EduDetailComonents from "./pages/eduDetail/eduDetailComponents";
import SquareComponents from "./pages/square/squareComponent.js";
import LogInComponent from "./pages/logIn/logInComponent.js";
import SignInComponent from "./pages/signIn/signInComponent.js";
import MyPageComponents from "./pages/myPage/myPageComponents.js";
import MyPageBusinessComponents from "./pages/myPageBusiness/myPageBusinessComponents.js";
import SignInStep1Components from "./pages/signIn/sigInStep1Components.js";
import SignInStep2Components from "./pages/signIn/sigInStep2Components.js";
import SignInStep3Components from "./pages/signIn/sigInStep3Components.js";
import SignInBusinessStep1Components from "./pages/signInBusiness/sigInBusinessStep1Components.js";
import SignInBusinessStep2Components from "./pages/signInBusiness/sigInBusinessStep2Components.js";
import ResumeComponent from "./pages/resume/resumeComponent.js";
import CareerComponent from "./pages/career/careerComponent.js";
import RecruitmentComponent from "./pages/recruitment/recruitmentComponent.js";
import ApplicationStep1Components from "./pages/application/applicationStep1Components.js";
import ApplicationStep2Components from "./pages/application/applicationStep2Components.js";
import MyResumeComponents from "./pages/myResume/myResumeComponent.js";
import MyApplicationStep1Components from "./pages/myApplication/myApplicationStep1Components.js";
import MyApplicationStep2Components from "./pages/myApplication/myApplicationStep2Components.js";
import IndividualInfoComponent from "./pages/userInfo/individualInfoComponent.js";
import BusinessInfoComponent from "./pages/userInfo/businessInfoComponent.js";
function App() {
  const dispatch = useDispatch();
  const { logInDone } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
  }, [logInDone]);
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainComponents />} />
        <Route path="/matchingInfo" element={<MatchingComponents />} />
        <Route
          path="/infoDetail/:resumeId"
          element={<InfoDetailComponents />}
        />
        <Route path="/process" element={<ProcessComponent />} />
        <Route path="/eduProgram" element={<EduProgramComponent />} />
        <Route path="/eduDetail" element={<EduDetailComonents />} />
        <Route path="/square" element={<SquareComponents />} />
        <Route path="/logIn" element={<LogInComponent />} />
        <Route path="/signIn" element={<SignInComponent />} />
        <Route path="/myPage" element={<MyPageComponents />} />
        <Route path="/myPageBusiness" element={<MyPageBusinessComponents />} />
        <Route path="/signStep1" element={<SignInStep1Components />} />
        <Route path="/signStep2" element={<SignInStep2Components />} />
        <Route path="/signStep3" element={<SignInStep3Components />} />
        <Route
          path="/signBusinessStep1"
          element={<SignInBusinessStep1Components />}
        />
        <Route
          path="/signBusinessStep2"
          element={<SignInBusinessStep2Components />}
        />

        <Route path="/resume" element={<ResumeComponent />} />
        <Route path="/career" element={<CareerComponent />} />

        <Route path="/recruitment" element={<RecruitmentComponent />} />
        <Route
          path="/applicationStep1"
          element={<ApplicationStep1Components />}
        />
        <Route
          path="/applicationStep2"
          element={<ApplicationStep2Components />}
        />
        <Route path="/myResume" element={<MyResumeComponents />} />
        <Route
          path="/myApplicationStep1"
          element={<MyApplicationStep1Components />}
        />
        <Route
          path="/myApplicationStep2"
          element={<MyApplicationStep2Components />}
        />

        <Route path="/individualInfo" element={<IndividualInfoComponent />} />
        <Route path="/businessInfo" element={<BusinessInfoComponent />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
