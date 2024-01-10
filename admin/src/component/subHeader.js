import "../css/subHeader.css";
const SubHeader = ({ data }) => {
  return (
    <div className="subHeader">
      <div className="box">
        <img src="/images/subHeader_img.png" alt="" />
        <p>페이지 관리자</p>
      </div>
      <p>{data}</p>
    </div>
  );
};

export default SubHeader;
