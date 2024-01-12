import "../css/table.css";
import "../css/individualUser.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_INDIVIDUAL_REQUEST } from "../reducers/adminUser";

const IndividualUser = () => {
  const dispatch = useDispatch();
  const { allUsers, userIndividuals } = useSelector((state) => state.adminUser);
  console.log("individuals : ", userIndividuals);
  useEffect(() => {
    dispatch({
      type: LOAD_INDIVIDUAL_REQUEST,
    });
  }, []);

  const age = (num) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentAge = currentYear - parseInt(num.substring(0, 4), 10) + 1;

    return currentAge;
  };
  return (
    <div className="section individualUser">
      <div className="table_container">
        <div className="row row_head">
          <p>No</p>
          <p>이름</p>
          <p>주소</p>
          <p>경력/연차</p>
          <p>근무형태</p>
          <p>나이</p>
        </div>
        {userIndividuals &&
          userIndividuals.map((userIndividual, index) => {
            const array = userIndividual.user_member_address.split(" ");
            console.log("array : ", array);
            return (
              <div
                className={
                  index % 2 === 0 ? "content_row row" : "content_row row even"
                }
                key={index}
              >
                <p>{userIndividual.id}</p>
                <p>{userIndividual.user_member_name}</p>
                <p>{`${array[0]} ${array[1]} ${array[2]}`}</p>
                <p></p>
                <p></p>
                <p>{age(userIndividual.user_member_num)}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default IndividualUser;
