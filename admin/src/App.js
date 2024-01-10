import "./App.css";
import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
// import { LOAD_MY_INFO_REQUEST } from "./reducers/user";
import Header from "./component/header.js";
import ScrollToTop from "./scrollToTop.js";
import MainComponent from "./component/mainComponent";

function App() {
  // const dispatch = useDispatch();
  // const { logInDone } = useSelector((state) => state.user);
  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_MY_INFO_REQUEST,
  //   });
  // }, [logInDone]);
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainComponent />} />
      </Routes>
    </>
  );
}

export default App;
