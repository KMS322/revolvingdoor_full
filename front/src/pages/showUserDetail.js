import "../css/showUserDetail.css";

const ShowUserDetail = ({ data, onClose }) => {
  console.log("data : ", data);
  return (
    <div className="showUserDetail">
      <img src="/images/close_btn.png" alt="" onClick={onClose} />
      <div className="article_container">
        <p>{data.UserIndividual.user_member_name}님의 상세정보 입니다.</p>
        <p className="title">회원 정보</p>
        <div className="text_box">
          <p>생년월일</p>
          <p>{data.UserIndividual.user_member_num}</p>
        </div>
        <div className="text_box">
          <p>주소</p>
          <p>{`${data.UserIndividual.user_member_jibunAddress} ${
            data.UserIndividual.user_member_detailAddress
              ? data.UserIndividual.user_member_detailAddress
              : ""
          }`}</p>
        </div>
        <div className="text_box">
          <p>휴대전화</p>
          <p>{data.UserIndividual.user_member_tel}</p>
        </div>
        <div className="text_box">
          <p>이메일</p>
          <p>{data.UserIndividual.user_member_email}</p>
        </div>
        <p className="title">이력서 정보</p>
        <div className="text_box">
          <p>전공</p>
          <p>{data.UserResumes[0].user_resume_schoolMajor}</p>
        </div>
        <div className="text_box">
          <p>고용형태</p>
          <p>{data.UserResumes[0].user_resume_hopeCompany}</p>
        </div>
        <div className="text_box">
          <p>취업희망시기</p>
          <p>{`${data.UserResumes[0].user_resume_hopeStartYear}년 ${data.UserResumes[0].user_resume_hopeStartMonth}월`}</p>
        </div>
        <p className="title">경력 정보</p>
        <div className="text_box">
          <p>경력</p>
          <p>{data.UserIndividual.user_member_career}년</p>
        </div>
        <div className="text_box">
          <p>최근 근무처</p>
          <p>{data.UserCareer.user_career_company1}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowUserDetail;
