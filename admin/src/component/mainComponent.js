import "../css/main.css";
import SubHeader from "./subHeader";
import Nav from "./nav";
import React, { useState } from "react";
import AllUser from "./allUser";
import IndividualUser from "./individualUser";
import BusinessUser from "./businessUser";
const MainComponent = () => {
  const [currentComponent, setCurrentComponent] = useState("");
  const handleMenuSelect = (selectedMenu) => {
    setCurrentComponent(selectedMenu);
  };
  let selectedComponent;
  switch (currentComponent) {
    case "모든 유저":
      selectedComponent = <AllUser />;
      break;
    case "구직자":
      selectedComponent = <IndividualUser />;
      break;
    case "구인기업":
      selectedComponent = <BusinessUser />;
      break;
    default:
      // 기본값 설정 (예: "회원목록"인 경우)
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
