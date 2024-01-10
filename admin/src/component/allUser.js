import "../css/table.css";
import "../css/allUser.css";
const AllUser = () => {
  return (
    <div className="section alluser">
      <div className="table_container">
        <div className="row row_head">
          <p>No</p>
          <p>유저 타입</p>
          <p>유저 아이디</p>
          <p>가입일</p>
        </div>
        <div className="row row_content">
          <p>1</p>
          <p>구직자</p>
          <p>aaa</p>
          <p>ssss</p>
        </div>
        <div className="row row_content even">
          <p>1</p>
          <p>구직자</p>
          <p>aaa</p>
          <p>ssss</p>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
