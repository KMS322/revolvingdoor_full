import Banner from "../banner";
import InfoDetailS1 from "./infoDetailS1";
import InfoDetailS2 from "./infoDetailS2";
import Nav from "../nav";
import { useLocation } from "react-router-dom";
const InfoDetailComponents = () => {
  const { state } = useLocation();
  console.log("state : ", state);
  return (
    <>
      <Nav />
      <Banner />
      <InfoDetailS1 data={state} />
      <InfoDetailS2 data={state} />
    </>
  );
};

export default InfoDetailComponents;
