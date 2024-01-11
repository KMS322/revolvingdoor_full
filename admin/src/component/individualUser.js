import "../css/table.css";
import "../css/individualUser.css";
import { useSelector } from "react-redux";

const IndividualUser = () => {
  const { allUsers } = useSelector((state) => state.adminUser);
  console.log("individualUser 안에서 allUsers : ", allUsers);
  return (
    <div className="section individualUser">
      <div className="table_container">
        <div className="row row_head">
          <p>No</p>
          <p>유저 타입</p>
          <p>유저 아이디</p>
          <p>가입일</p>
        </div>
        {allUsers &&
          allUsers.map((allUser, index) => {
            return (
              <div
                className={
                  index % 2 === 0 ? "content_row row" : "content_row row even"
                }
                key={index}
              >
                <p>{allUser.id}</p>
                <p>
                  {allUser.userType === "individual" ? "구직자" : "구인기업"}
                </p>
                <p>{allUser.user_member_id}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default IndividualUser;
