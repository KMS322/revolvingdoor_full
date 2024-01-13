import "../css/main.css";
import SubHeader from "./subHeader";
import Nav from "./nav";
import React, { useState } from "react";
import AllUser from "./allUser";
import IndividualUser from "./individualUser";
import BusinessUser from "./businessUser";
import IndividualDetail from "./individualDetail";
import ResumeDetail from "./resumeDetail";
import CareerDetail from "./careerDetail";
const MainComponent = () => {
  const [currentComponent, setCurrentComponent] = useState("");
  const [sendData, setSendData] = useState("");
  const handleMenuSelect = (selectedMenu) => {
    setCurrentComponent(selectedMenu);
  };
  const handleDetailSelect = (selectedDetail, userData) => {
    setCurrentComponent(selectedDetail);
    setSendData(userData);
  };
  let selectedComponent;
  switch (currentComponent) {
    case "모든 유저":
      selectedComponent = <AllUser />;
      break;
    case "구직자":
      selectedComponent = (
        <IndividualUser onSelectDetail={handleDetailSelect} />
      );
      break;
    case "구인기업":
      selectedComponent = <BusinessUser />;
      break;
    case "구직자 정보 상세":
      selectedComponent = (
        <IndividualDetail onSelectMenu={handleMenuSelect} userData={sendData} />
      );
      break;
    case "이력서":
      selectedComponent = (
        <ResumeDetail onSelectMenu={handleMenuSelect} data={sendData} />
      );
      break;
    case "경력사항":
      selectedComponent = (
        <CareerDetail onSelectMenu={handleMenuSelect} data={sendData} />
      );
      break;
    default:
      selectedComponent = null;
  }
  return (
    <>
      <SubHeader data={currentComponent} />
      <div className="container">
        <Nav onSelectMenu={handleMenuSelect} />
        {selectedComponent}
      </div>
    </>
  );
};

export default MainComponent;
